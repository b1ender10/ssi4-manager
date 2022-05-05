# DEX frontend

## Available Scripts

In the project directory, you can run:

### `npm install`

Runs this command to install all project dependencies

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3005](http://localhost:3005) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Video help

This video shows the entire user interface [video](https://youtu.be/3NXLzTWBEqU)


## Change of network

To change the network from dev to main and backwards, you need to go to the config.js file

### dev network

```
{
  "dexroot": "0:b199c648ae3f6d2b1a774d51f35b5af98a346672c91f1da9c1f1ba3a0a3d69d0",
  "storageroot": "0:fc591b0d9200925aa7b4db8e6a8ab5515ef10818949b836c0e5b2ca26d558a35",
  "DappServer": "net.ton.dev"
}
```

### main network

```
{
    "dexroot": "0:e6bfca78593f25de9301de4f19ed798dce2210150c9c62437f192d00fb30ad31",
    "storageroot": "0:f8d58bde0f6b1fbc647f534a5a81e8b5fa8d3553ebe1ee96fd87285a20bf5ea6",
    "DappServer": "main.ton.dev"
}
```

## API methods

### createDID3() dex

Function for creating a DID, displays its identifier to the user

```
async function createDID3() {
		let bal = getClientBalance(localStorage.address);

		bal.then(
			async (data) => {
				if(data < 0.5){
					alert("Insufficient balance");
					return;
				} else {

					setLoader(true);

					const acc = new Account(DEXClientContract, {
						address: localStorage.address,
						signer: signerKeys(await getClientKeys(sessionStorage.seed)),
						client,
					});

					let pubkey = (await getClientKeys(seed)).public;

					try {
						const newDIDDoc = {
							id: "did:everscale:" +pubkey.toString(),
							//createdAt: new Date().getTime().toString(),
							"@context": [
								"https://www.w3.org/ns/did/v1",
								"https://w3id.org/security/suites/ed25519-2020/v1",
							],
							publicKey: pubkey.toString(),
							verificationMethod: {
								id: "did:everscale:" +pubkey.toString(),
								type: "Ed25519VerificationKey2020",
								controller: "did:everscale:" +pubkey.toString(),
								publicKeyMultibase: pubkey,
							},
						};

						const {body} = await client.abi.encode_message_body({
							abi: {type: "Contract", value: DidStorageContract.abi},
							signer: {type: "None"},
							is_internal: true,
							call_set: {
								function_name: "addDid",
								input: {
									pubKey: "0x" + pubkey,
									didDocument: JSON.stringify(newDIDDoc),
									addr: localStorage.address,
								},
							},
						});

						const res = await acc.run("sendTransaction", {
							dest: dexrootAddr,
							value: 500000000,
							bounce: true,
							flags: 3,
							payload: body,
						});

						console.log(res);
					} catch (e) {
						console.log(e);
						setLoader(false);
					}

					setTimeout(async function(){
						const acc2 = new Account(DidStorageContract, {
							address: dexrootAddr,
							signer: signerNone(),
							client,
						});
						const res2 = await acc2.runLocal("resolveDidDocument", {
							id: "0x" + pubkey,
						});
				
						console.log(res2);
				
						let addrDidDoc = res2.decoded.out_messages[0].value.addrDidDocument;

						try{

							const accDid = new Account(DidDocumentContract, {
								address: addrDidDoc,
								signer: signerNone(),
								client,
							})

							const resInit = await accDid.run("init", {
								issuerAddr: localStorage.address
							}, {
								signer: signerKeys(await getClientKeys(sessionStorage.seed))
							})

							console.log(resInit);

						} catch(e) {
							console.log(e);
							setLoader(false);
							alert("Error!")
							return;
						}
				
						const didAcc = new Account(DidDocumentContract, {
							address: addrDidDoc,
							signer: signerNone(),
							client,
						});
				
						const resDid = await didAcc.runLocal("getDid", {});
				
						console.log(resDid.decoded.out_messages[0].value.value0);

						let tempDoc = JSON.parse(resDid.decoded.out_messages[0].value.value0.didDocument);

						let tempDid = tempDoc.id;

						console.log(tempDoc);

						console.log(tempDid);

						setLoader(false);
						setAlertW({
							hidden: false,
							text: "Your DID has been created: " + tempDid,
							title: "Congratulations"
						})
					},20000);
				}
			}
		);
	}
```

### resolveDID() dex

A function that retrieves a DID document and displays it to the user

```
async function resolveDID() {
		let tempDid = DID.split(':')[2];
		console.log(DID);
		

		setLoader(true);

		const acc = new Account(DEXClientContract, {
			address: localStorage.address,
			signer: signerKeys(await getClientKeys(sessionStorage.seed)),
			client,
		});

		const acc2 = new Account(DidStorageContract, {
			address: dexrootAddr,
			signer: signerNone(),
			client,
		});

		let res2;

		try{
			res2 = await acc2.runLocal("resolveDidDocument", {
				id: "0x" + tempDid,
			});
		} catch {
			setLoader(false);
			alert("Incorrect format DID");
			return;
		}

		console.log(res2);

		let addrDidDoc = res2.decoded.out_messages[0].value.addrDidDocument;

		try{
			const didAcc = new Account(DidDocumentContract, {
				address: addrDidDoc,
				signer: signerNone(),
				client,
			});
	
			const resDid = await didAcc.runLocal("getDid", {});

			setLoader(false);
			setDidDoc(resDid.decoded.out_messages[0].value.value0);
			console.log(resDid.decoded.out_messages[0].value.value0);
		} catch(e) {
			console.log(e);
			setLoader(false);
			alert("Error! \n Possible reasons: \n - Wrong DID \n - This DID has been deleted");
		}

		
	}
```

### updateDIDDocument() dex

Function for updating the parameters of the DID document

```
async function updateDIDDocument() {
		let tempDid = DID.split(':')[2];
		console.log(DID);

		setLoader(true);

		const acc = new Account(DEXClientContract, {
			address: localStorage.address,
			signer: signerKeys(await getClientKeys(sessionStorage.seed)),
			client,
		});

		let pubkey = (await getClientKeys(seed)).public;

		const acc2 = new Account(DidStorageContract, {
			address: dexrootAddr,
			signer: signerNone(),
			client,
		});

		const res2 = await acc2.runLocal("resolveDidDocument", {
			id: "0x" + tempDid,
		});

		console.log(res2);

		let addrDidDoc = res2.decoded.out_messages[0].value.addrDidDocument;

		const didAcc = new Account(DidDocumentContract, {
			address: addrDidDoc,
			signer: signerNone(),
			client,
		});

		console.log(JSON.stringify(didDoc.didDocument));

		try {
			const {body} = await client.abi.encode_message_body({
				abi: {type: "Contract", value: DidDocumentContract.abi},
				signer: {type: "None"},
				is_internal: true,
				call_set: {
					function_name: "newDidDocument",
					input: {
						didDocument: didDoc.didDocument,
					},
				},
			});

			const res = await acc.run("sendTransaction", {
				dest: addrDidDoc,
				value: 300000000,
				bounce: true,
				flags: 3,
				payload: body,
			});

			console.log(res);
		} catch (e) {
			console.log(e);
		}

		setTimeout(async function(){
			try{
				const resDid = await didAcc.runLocal("getDid", {});

				setDidDoc(resDid.decoded.out_messages[0].value.value0);
				console.log(resDid.decoded.out_messages[0].value.value0);
				setLoader(false);
			} catch(e) {
				console.log(e);
				alert("Error!");
				setLoader(false);
				
			}
		},20000)
	}
```

### updateDidStatus() dex

Function to update the status of a DID document

```
async function updateDidStatus() {

		if(curentStatus == undefined) {
			alert("Set status");
			return;
		}

		let tempDid = DID.split(':')[2];
		console.log(DID);

		let bal = getClientBalance(localStorage.address);

		bal.then(
			async (data) => {
				if(data < 1){
					alert("Insufficient balance");
					return;
				} else {

					setLoader(true);

					const acc = new Account(DEXClientContract, {
						address: localStorage.address,
						signer: signerKeys(await getClientKeys(sessionStorage.seed)),
						client,
					});

					let pubkey = (await getClientKeys(seed)).public;

					const acc2 = new Account(DidStorageContract, {
						address: dexrootAddr,
						signer: signerNone(),
						client,
					});

					const res2 = await acc2.runLocal("resolveDidDocument", {
						id: "0x" + tempDid,
					});

					console.log(res2);

					let addrDidDoc = res2.decoded.out_messages[0].value.addrDidDocument;

					const didAcc = new Account(DidDocumentContract, {
						address: addrDidDoc,
						signer: signerNone(),
						client,
					});

					try {

						const {body} = await client.abi.encode_message_body({
							abi: {type: "Contract", value: DidDocumentContract.abi},
							signer: {type: "None"},
							is_internal: true,
							call_set: {
								function_name: "newDidStatus",
								input: {
									status: Number(curentStatus),
								},
							},
						});

						const res = await acc.run("sendTransaction", {
							dest: addrDidDoc,
							value: 300000000,
							bounce: true,
							flags: 3,
							payload: body,
						});

						console.log(res);
					} catch (e) {
						console.log(e);
					}

					setTimeout(async function(){
						const resDid = await didAcc.runLocal("getDid", {});

						setDidDoc(resDid.decoded.out_messages[0].value.value0);
						console.log(resDid.decoded.out_messages[0].value.value0);
						setLoader(false);
					}, 20000);

				}
			}
		);
	}
```

### updateDidPub() dex

Function to update the controller DID document

```
async function updateDidPub() {

		if(curentAddr == undefined) {
			alert("Set Address");
			return;
		}

		let tempDid = DID.split(':')[2];
		console.log(DID);

		console.log(curentPub, curentAddr);

		let bal = getClientBalance(localStorage.address);

		bal.then(
			async (data) => {
				if(data < 1){
					alert("Insufficient balance");
					return;
				} else {

					setLoader(true);

					const acc = new Account(DEXClientContract, {
						address: localStorage.address,
						signer: signerKeys(await getClientKeys(sessionStorage.seed)),
						client,
					});

					let pubkey = (await getClientKeys(seed)).public;

					const acc2 = new Account(DidStorageContract, {
						address: dexrootAddr,
						signer: signerNone(),
						client,
					});

					const res2 = await acc2.runLocal("resolveDidDocument", {
						id: "0x" + tempDid,
					});

					console.log(res2);

					let addrDidDoc = res2.decoded.out_messages[0].value.addrDidDocument;

					const didAcc = new Account(DidDocumentContract, {
						address: addrDidDoc,
						signer: signerNone(),
						client,
					});

					try {

						const {body} = await client.abi.encode_message_body({
							abi: {type: "Contract", value: DidDocumentContract.abi},
							signer: {type: "None"},
							is_internal: true,
							call_set: {
								function_name: "newDidIssuerAddr",
								input: {
									issuerAddr: curentAddr
								},
							},
						});

						const res = await acc.run("sendTransaction", {
							dest: addrDidDoc,
							value: 300000000,
							bounce: true,
							flags: 3,
							payload: body,
						});

						console.log(res);
					} catch (e) {
						console.log(e);
						setLoader(false);
						return;
					}

					setTimeout(async function(){
						try{
							const resDid = await didAcc.runLocal("getDid", {});

							setDidDoc(resDid.decoded.out_messages[0].value.value0);
							console.log(resDid.decoded.out_messages[0].value.value0);
							setLoader(false);
						} catch(e) {
							console.log(e);
							alert("Error!");
							setLoader(false);
						}
					}, 20000);

				}
			}
		);
	}
```

### deleteDid() dex

Function to delete DID documewnt

```
async function deleteDid() {

		let tempDid = DID.split(':')[2];
		console.log(DID);

		let bal = getClientBalance(localStorage.address);

		bal.then(
			async (data) => {
				if(data < 1){
					alert("Insufficient balance");
					return;
				} else {

					setLoader(true);

					const acc = new Account(DEXClientContract, {
						address: localStorage.address,
						signer: signerKeys(await getClientKeys(sessionStorage.seed)),
						client,
					});

					let pubkey = (await getClientKeys(seed)).public;

					const acc2 = new Account(DidStorageContract, {
						address: dexrootAddr,
						signer: signerNone(),
						client,
					});

					const res2 = await acc2.runLocal("resolveDidDocument", {
						id: "0x" + tempDid,
					});

					console.log(res2);

					let addrDidDoc = res2.decoded.out_messages[0].value.addrDidDocument;

					const didAcc = new Account(DidDocumentContract, {
						address: addrDidDoc,
						signer: signerNone(),
						client,
					});

					//console.log(JSON.stringify(didDoc.didDocument));

					try {

						const {body} = await client.abi.encode_message_body({
							abi: {type: "Contract", value: DidDocumentContract.abi},
							signer: {type: "None"},
							is_internal: true,
							call_set: {
								function_name: "deleteDidDocument",
								input: {},
							},
						});

						const res = await acc.run("sendTransaction", {
							dest: addrDidDoc,
							value: 300000000,
							bounce: true,
							flags: 3,
							payload: body,
						});

						console.log(res);
					} catch (e) {
						console.log(e);
						setLoader(false);
						return;
					}

					setTimeout(async function(){
						console.log(1);
						// const resDid = await didAcc.runLocal("getDid", {});

						// setDidDoc(resDid.decoded.out_messages[0].value.value0);
						// console.log(resDid.decoded.out_messages[0].value.value0);

						const res3 = await acc2.runLocal("resolveDidDocument", {
							id: "0x" + tempDid,
						});
				
						console.log(res3);

						try {
							const resDid = await didAcc.runLocal("getDid", {});

							setDidDoc(resDid.decoded.out_messages[0].value.value0);
							console.log(resDid.decoded.out_messages[0].value.value0);
						} catch(e) {
							backToLogin();
							setLoader(false);
							alert("Did doc delete");
						}

						setLoader(false);
					}, 20000);

				}
			}
		);
	}
}
```

### Function for ever wallet

You can find the same functions for the ever wallet in the file WelcomeDidPageEver.js