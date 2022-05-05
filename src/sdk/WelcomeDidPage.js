import React, {useState, useEffect} from "react";
import {HashRouter as Router, Link, useHistory} from "react-router-dom";
import {ProviderRpcClient, RawProviderApiResponse} from "ton-inpage-provider";

import {Account} from "@eversdk/appkit";
import {libWeb} from "@eversdk/lib-web";
import {signerKeys, TonClient, signerNone} from "@eversdk/core";

import {DEXClientContract} from "../extensions/contracts/testNet/DEXClientMainNet.js";



import {DidStorageContract} from "./contracts/new/DidStorageContractDev.js";
import {DidDocumentContract} from "./contracts/new/DidDocumentContractDev.js";

import { ResolveContract } from "./contracts/vc/ResolveContract.js";


import {useQuery} from "react-query";

import * as ed from 'noble-ed25519';

import sha256 from 'crypto-js/sha256';

const config = require('./config.json');

import { IndexVCContract } from "./contracts/vc/IndexVCContract.js";

import { VCContract } from "./contracts/vc/VCContract.js";

import {resolveCodeHashIndexVC} from "./sdkVC/Everscale/ResolveAPI.js";

import {destruct} from "./sdkVC/Everscale/VCAPI.js";

import {encryptVerifiableCredential, decryptVerifiableCredential} from "./sdkVC/moduleVC.js";

import {newAddressVC, deployVC, resolveStatus} from "./sdkVC/moduleEver.js";
import { deactivate } from "./sdkVC/Everscale/statusVCAPI.js";


//const {TonClient} = require("@eversdk/core");
TonClient.useBinaryLibrary(libWeb);
// const client = new TonClient({network: {endpoints: ["net.ton.dev"]}});
const client = new TonClient({network: {endpoints: [config.DappServer]}});

const pidCrypt = require("pidcrypt");
require("pidcrypt/aes_cbc");

let dexrootAddr = config.storageroot;


// const request = () =>
// 	fetch("http://ssi.defispace.com:4001/graphql", {
// 		method: "POST",
// 		headers: {"Content-Type": "application/json; charset=utf-8"},
// 		body: JSON.stringify({
// 			query:
// 				'mutation loginGenerate{loginGenerate(did:"978cae5ccb0048de4bf6c76ffba5c2686987fd72494137de8373a84e5f720063")}',
// 		}),
// 	}).then((response) => response.json());

// const request2 = (hex) =>
// 	fetch("http://ssi.defispace.com:4001/graphql", {
// 		method: "POST",
// 		headers: {"Content-Type": "application/json; charset=utf-8"},
// 		body: JSON.stringify({
// 			query:
// 				'mutation LoginVerify{loginVerify(did:"978cae5ccb0048de4bf6c76ffba5c2686987fd72494137de8373a84e5f7200rt",signatureHex:"' +
// 				hex +
// 				'")}',
// 		}),
// 	}).then((response) => response.json());



function WelcomeDidPage() {
	let history = useHistory();

	const [didDoc, setDidDoc] = useState();

	const [pubK, setPubK] = useState();

	const [loader, setLoader] = useState(false);

	const [DID, setDID] = useState();

	const [menuCurent, setMenuCurent] = useState(0);

	const attributes = ["id","@context","controller","alsoKnownAs","verificationMethod","authentication","assertionMethod","keyAgreement","capabilityInvocation","capabilityDelegation","service"];

	const [curentAttr, setCurentAttr] = useState();

	const [curentStatus, setCurentStatus] = useState();

	const [curentPub , setCurentPub] = useState();

	const [arrVc, setArrVc] = useState([""]);

	const [curentAddr, setCurentAddr] = useState();

	const [vcList, setVcList] = useState([]);

	const [showDoc, setShowDoc] = useState(false);

	const [alertW, setAlertW] = useState({
		hidden: true,
		text: "",
		title: ""
	});

	async function updateVcList() {
		const acc = new Account(ResolveContract, {
			address: config.resolveAddr,
			signer: signerNone(),
			client,
		});

		const result = resolveCodeHashIndexVC(acc, sessionStorage.getItem("address"));

		// console.log(result);

		result.then(async (data)=>{
			// console.log(data);

			
			const Datas = await client.net.query_collection({
				collection: "accounts",
				filter: {
				code_hash: { eq: data.slice(2) },
				},
				result: "id",
			});

			// console.log(Datas);

			let tempVCList = [];

			// let tempArrVc = [];

			for (let i = 0; i < vcList.length; i++) {

				tempVCList.push(vcList[i]);
				// tempArrVc.push(arrVc[i]);

			}

			let pass = prompt("Enter your PIN");

			let seed = decryptSeed(pass);

			if(!seed){
				return;
			}


			setTimeout(async ()=>{
				for (let i = 0; i < Datas.result.length; i++) {

					let uniq = true;
	
					for (let k = 0; k < tempVCList.length; k++) {
						if(tempVCList[k].addrIndVC == Datas.result[i].id) {
	
							uniq = false;
						}
					}
	
					if(uniq) {
	
						const tempAcc = new Account(IndexVCContract, {
							address: Datas.result[i].id,
							signer: signerNone(),
							client,
						});
						const res = await tempAcc.runLocal("getInfo", {});

						
		
						// console.log(res);
		
						const tempAccVC = new Account(VCContract, {
							address: res.decoded.output.addrVC,
							signer: signerNone(),
							client,
						});
		
						const res2 = await tempAccVC.runLocal("getInfo", {});

						// const resStatus = await resolveStatus(Datas.result[i].id, client);

						// console.log(resStatus);
		
						console.log(res2);
		
						const keys = await getClientKeys(seed);
		
		
						const value = await decryptVerifiableCredential(res2.decoded.output.value, keys.secret);
		
						console.log(JSON.parse(value.vc).credentialStatus.id);

						const resStatus = await resolveStatus(JSON.parse(value.vc).credentialStatus.id, client);

						console.log(resStatus);
						
						// tempArrVc.push("");
						tempVCList.push({
							"blockchain": true,
							"addrVC": res.decoded.output.addrVC,
							"addrIndVC": Datas.result[i].id,
							"vc": value.vc,
							"status": resStatus,
							"statusAddress": JSON.parse(value.vc).credentialStatus.id,
							"onVcArr": false,
						});
	
					}			
	
					
	
	
				}
	
				console.log(tempVCList);
				setVcList(tempVCList);
				// setArrVc(tempArrVc);
			},1000);
		})
	}

	useEffect(async ()=>{

		await updateVcList();

	},[]);

	async function downloadVC(vc) {

		let fileName = "VC.json";
		let fileType = "text/json";

		// Create a blob with the data we want to download as a file
		const blob = new Blob([vc], {type: fileType});
		// Create an anchor element and dispatch a click event on it
		// to trigger a download
		const a = document.createElement("a");
		a.download = fileName;
		a.href = window.URL.createObjectURL(blob);
		const clickEvt = new MouseEvent("click", {
			view: window,
			bubbles: true,
			cancelable: true,
		});
		a.dispatchEvent(clickEvt);
		a.remove();

	}

	async function toggleVP(ev,vc, index) {
		console.log(ev.target.checked,vc);

		let tempList = [];
		// let tempArrVc = [];

		for(let i = 0; i < vcList.length; i++) {

			let tempElem = vcList[i];
			tempList.push(tempElem);
			// tempArrVc.push(arrVc[i]);

		}

		// let tempArrVc = arrVc;

		if(ev.target.checked) {
			// tempArrVc[index] = vc;
			// setArrVc(tempArrVc);
			for(let i = 0; i < tempList.length; i++) {
				if(index == i) {
					tempList[i].onVcArr = true;
				}
			}
		} else {
			// tempArrVc.splice(index, 1);
			for(let i = 0; i < tempList.length; i++) {
				if(index == i) {
					tempList[i].onVcArr = false;
				}
			}
		}

		console.log(tempList);

		setVcList(tempList);


		// setArrVc(tempArrVc);
	}

	async function deactivateVC(addr) {

		console.log(addr);

		let pass = prompt("Enter your PIN");

		let seed = decryptSeed(pass);

		if(!seed){
			return;
		}

		const acc = new Account(DEXClientContract, {
			address: sessionStorage.address,
			signer: signerKeys(await getClientKeys(seed)),
			client,
		});

		const res = await deactivate("0:e350931ed3279ea3c864b60730312eb53a8d15f1c5c2ef5634977c36fa5fda87", acc);

		console.log(res);

		setAlertW({
			hidden: false,
			text: "VC was successfully deactivated",
			title: "Congratulations"
		});

	}

	async function deleteVC(vc) {

		let pass = prompt("Enter your PIN");

		let seed = decryptSeed(pass);

		if(!seed){
			return;
		}

		const acc = new Account(DEXClientContract, {
			address: sessionStorage.address,
			signer: signerKeys(await getClientKeys(seed)),
			client,
		});


		const res = await destruct(vc, acc);


		await updateVcList();

		setAlertW({
			hidden: false,
			text: "VC was successfully deleted to the blockchain ",
			title: "Congratulations"
		});

		
	}

	async function uploadVC(vc) {


		const result = newAddressVC(client);

		result.then(async (data)=>{

			let pass = prompt("Enter your PIN");

			let seed = decryptSeed(pass);

			if(!seed){
				return;
			}

			const acc = new Account(DEXClientContract, {
				address: sessionStorage.address,
				signer: signerKeys(await getClientKeys(seed)),
				client,
			});

			try {
				
				

				const res = await acc.run("sendTransaction", {
					dest: data.address,
					value: 210000000,
					bounce: false,
					flags: 3,
					payload: "",
				});

				// const sendTokensres = await acc.run("sendTokens", {
				// 	tokenRoot: sessionStorage.address,
				// 	to: data.address,
				// 	tokens: 200000000,
				// 	grams: 1200000000,
				// });

			} catch (e) {
				setLoader(false);
			}

			// return;

			setTimeout(async ()=>{
				const keys = await getClientKeys(seed);


				const valueCrypt = encryptVerifiableCredential(vc, keys.secret);

				valueCrypt.then((dataValue)=>{
					const transRes = deployVC(data.address, data.keys, client, sessionStorage.getItem("address"), "json", dataValue);

					transRes.then((data)=>{
						console.log(data);
						setAlertW({
							hidden: false,
							text: "VC was successfully uploaded to the blockchain ",
							title: "Congratulations"
						})
					})
				});
			},5000);

		})

	}

	const aes = new pidCrypt.AES.CBC();

	async function download(event) {

		let tempList = [];
		// let tempArrVc = [];

		for(let i = 0; i < vcList.length; i++) {

			let tempElem = vcList[i];
			tempList.push(tempElem);
			// tempArrVc.push(arrVc[i]);

		}

		for (let i = 0; i < event.target.files.length; i++) {
			let file = event.target.files[i];


			var reader = new FileReader();
			reader.readAsText(file);
			
			reader.onload = function (e) {

				// tempArrVc.push("");
				tempList.push({
					"blockchain":false,
					"vc":e.currentTarget.result,
					"onVcArr": false,
				});

				
			}
			
		}


		setTimeout(()=>{
			setVcList(tempList);
			// setArrVc(tempArrVc);
		},100);

	}

	async function getClientKeys(phrase) {
		//todo change with only pubkey returns

		let test = await client.crypto.mnemonic_derive_sign_keys({
			phrase,
			path: "m/44'/396'/0'/0/0",
			dictionary: 1,
			word_count: 12,
		});
		return test;
	}
	//setPubK((getClientKeys(seed)).public);


	// let res = request();

	// let generateResult;
	// res.then((response) => {
	// 	console.log(response);
	// 	generateResult = response.data.loginGenerate;

	// 	let res2 = request2(generateResult);

	// 	res2.then((response2) => {
	// 		console.log(response2);
	// 	});
	// });

	function decryptSeed(pin) {

		var decrypted = aes.decryptText(sessionStorage.seedHash, pin);

		const engPattern = /[a-z]/;

		if(!engPattern.test(decrypted)){
			alert("Wrong PIN");
			return false;
		}

		let seed_arr = decrypted.split(" ");

		if(!seed_arr == 12) {
			alert("Wrong PIN");
			return false;
		}

		for(let i = 0; i < seed_arr.length; i++) {
			for(let j = 0; j < seed_arr[i].length; j++) {
				if(!engPattern.test(seed_arr[i][j])){
					alert("Wrong PIN");
					return false;
				}
			}
		}

		return decrypted;

	}

	async function getClientBalance(clientAddress) {
		let address = clientAddress;
		if (
			clientAddress ===
			"0:0000000000000000000000000000000000000000000000000000000000000000"
		){
			console.log(0);
			return 0;
		}
		try {
			let clientBalance = await client.net.query_collection({
				collection: "accounts",
				filter: {
					id: {
						eq: address,
					},
				},
				result: "balance",
			});
			return +clientBalance.result[0].balance / 1000000000;
		} catch (e) {
			console.log("catch E", e);
			return e;
		}
	}

	async function createDID3() {

		let pass = prompt("Enter your PIN");

		let seed = decryptSeed(pass);

		if(!seed){
			return;
		}

		create();

		async function create() {
			let bal = getClientBalance(sessionStorage.address);

			bal.then(
				async (data) => {
					if(data < 0.5){
						alert("Insufficient balance");
						return;
					} else {

						setLoader(true);

						const acc = new Account(DEXClientContract, {
							address: sessionStorage.address,
							signer: signerKeys(await getClientKeys(seed)),
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
										addr: sessionStorage.address,
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

						} catch (e) {
							setLoader(false);
						}

						// try{
						// 	const acc2 = new Account(DidStorageContract, {
						// 		address: dexrootAddr,
						// 		signer: signerNone(),
						// 		client,
						// 	});
						// 	const res2 = await acc2.runLocal("resolveDidDocument", {
						// 		id: "0x" + pubkey,
						// 	});
					
						// 	console.log(res2);
					
						// 	let addrDidDoc = res2.decoded.out_messages[0].value.addrDidDocument;
					
						// 	const didAcc = new Account(DidDocumentContract, {
						// 		address: addrDidDoc,
						// 		signer: signerNone(),
						// 		client,
						// 	});
					
						// 	const resDid = await didAcc.runLocal("getDid", {});
					
						// 	//setDidDoc(resDid.decoded.out_messages[0].value.value0);
						// 	console.log(resDid.decoded.out_messages[0].value.value0);
						// } catch(e) {
						// 	console.log(e);
						// }



						setTimeout(async function(){
							const acc2 = new Account(DidStorageContract, {
								address: dexrootAddr,
								signer: signerNone(),
								client,
							});
							const res2 = await acc2.runLocal("resolveDidDocument", {
								id: "0x" + pubkey,
							});


					
					
							let addrDidDoc = res2.decoded.out_messages[0].value.addrDidDocument;

							try{

								const accDid = new Account(DidDocumentContract, {
									address: addrDidDoc,
									signer: signerNone(),
									client,
								})

								const resInit = await accDid.run("init", {
									issuerAddr: sessionStorage.address
								}, {
									signer: signerKeys(await getClientKeys(seed))
								})


							} catch(e) {
								setLoader(false);
								alert("Error Init!")
								return;
							}
					
							const didAcc = new Account(DidDocumentContract, {
								address: addrDidDoc,
								signer: signerNone(),
								client,
							});
					
							const resDid = await didAcc.runLocal("getDid", {});
					
							//setDidDoc(resDid.decoded.out_messages[0].value.value0);

							let tempDoc = JSON.parse(resDid.decoded.out_messages[0].value.value0.didDocument);

							let tempDid = tempDoc.id;



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

		
		
	}

	async function resolveDID() {

		let tempDid = DID.split(':')[2];
		
		setLoader(true);

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
		} catch(e) {
			setLoader(false);
			alert("Error! \n Possible reasons: \n - Wrong DID \n - This DID has been deleted");
		}

		
	}

	async function updateDIDDocument() {
		
		let pass = prompt("Enter your PIN");

		let seed = decryptSeed(pass);

		if(!seed) {
			return;
		}


		temp();

		async function temp() {
			let tempDid = DID.split(':')[2];

			setLoader(true);


			let keys = await getClientKeys(seed);

			const acc = new Account(DEXClientContract, {
				address: sessionStorage.address,
				signer: signerKeys(keys),
				client,
			});


			const acc2 = new Account(DidStorageContract, {
				address: dexrootAddr,
				signer: signerNone(),
				client,
			});

			const res2 = await acc2.runLocal("resolveDidDocument", {
				id: "0x" + tempDid,
			});


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

			} catch (e) {
			}

			setTimeout(async function(){
				try{
					const resDid = await didAcc.runLocal("getDid", {});

					setDidDoc(resDid.decoded.out_messages[0].value.value0);
					setLoader(false);
				} catch(e) {
					alert("Error!");
					setLoader(false);
					
				}
			},20000)
		}

	}

	function addAttribute() {
		Object.keys(JSON.parse(didDoc.didDocument)).map((item)=>{
			if(item==curentAttr){
				alert("This attribute already exist!");
				return;
			}
		});
		let tempDidDoc ={};
		for(let key in didDoc) {
			let temp = didDoc[key];
			if(key == "didDocument"){
				let tempDoc = JSON.parse(temp);
				tempDoc[curentAttr] = "null";
				tempDidDoc[key] = JSON.stringify(tempDoc);
			} else {
				console.log(temp);
				tempDidDoc[key] = temp;
			}
		}
		setDidDoc(tempDidDoc);
	}

	function deleteAttribute(item) {

		let tempDidDoc ={};
		for(let key in didDoc) {
			let temp = didDoc[key];
			if(key == "didDocument"){
				let tempDoc = JSON.parse(temp);
				delete tempDoc[item];
				tempDidDoc[key] = JSON.stringify(tempDoc);
			} else {
				tempDidDoc[key] = temp;
			}
		}
		setDidDoc(tempDidDoc);

	}

	function saveAttribute(item,value) {

		let tempDidDoc ={};
		for(let key in didDoc) {
			let temp = didDoc[key];
			if(key == "didDocument"){
				let tempDoc = JSON.parse(temp);
				tempDoc[item] = value;
				tempDidDoc[key] = JSON.stringify(tempDoc);
			} else {
				tempDidDoc[key] = temp;
			}
		}
		setDidDoc(tempDidDoc);

	}

	async function updateDidStatus() {

		let pass = prompt("Enter your PIN");

		let seed = decryptSeed(pass);

		if(!seed) {
			return;
		}

		temp();

		async function temp() {
	
			if(curentStatus == undefined) {
				alert("Set status");
				return;
			}
	
			let tempDid = DID.split(':')[2];
	
			let bal = getClientBalance(sessionStorage.address);
	
			bal.then(
				async (data) => {
					if(data < 1){
						alert("Insufficient balance");
						return;
					} else {
	
						setLoader(true);
	
						const acc = new Account(DEXClientContract, {
							address: sessionStorage.address,
							signer: signerKeys(await getClientKeys(seed)),
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
	
						} catch (e) {
						}
	
						setTimeout(async function(){
							const resDid = await didAcc.runLocal("getDid", {});
	
							setDidDoc(resDid.decoded.out_messages[0].value.value0);
							setLoader(false);
						}, 20000);
	
					}
				}
			);
		}

	}

	async function updateDidPub() {

		let pass = prompt("Enter your PIN");

		let seed = decryptSeed(pass);

		if(!seed) {
			return;
		}

		temp();

		async function temp() {
			if(curentAddr == undefined) {
				alert("Set Address");
				return;
			}
	
			let tempDid = DID.split(':')[2];
			let bal = getClientBalance(sessionStorage.address);
	
			bal.then(
				async (data) => {
					if(data < 1){
						alert("Insufficient balance");
						return;
					} else {
	
						setLoader(true);
	
						const acc = new Account(DEXClientContract, {
							address: sessionStorage.address,
							signer: signerKeys(await getClientKeys(seed)),
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
	
						} catch (e) {
							setLoader(false);
							return;
						}
	
						setTimeout(async function(){
							try{
								const resDid = await didAcc.runLocal("getDid", {});
	
								setDidDoc(resDid.decoded.out_messages[0].value.value0);
								setLoader(false);
							} catch(e) {
								alert("Error!");
								setLoader(false);
							}
						}, 20000);
	
					}
				}
			);
		}
	}

	async function deleteDid() {

		let pass = prompt("Enter your PIN");

		let seed = decryptSeed(pass);

		if(!seed) {
			return;
		}

		temp();

		async function temp() {
			let tempDid = DID.split(':')[2];

			let bal = getClientBalance(sessionStorage.address);

			bal.then(
				async (data) => {
					if(data < 1){
						alert("Insufficient balance");
						return;
					} else {

						setLoader(true);

						const acc = new Account(DEXClientContract, {
							address: sessionStorage.address,
							signer: signerKeys(await getClientKeys(seed)),
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

						} catch (e) {
							setLoader(false);
							return;
						}

						setTimeout(async function(){
							// const resDid = await didAcc.runLocal("getDid", {});

							// setDidDoc(resDid.decoded.out_messages[0].value.value0);
							// console.log(resDid.decoded.out_messages[0].value.value0);

							const res3 = await acc2.runLocal("resolveDidDocument", {
								id: "0x" + tempDid,
							});
					

							try {
								const resDid = await didAcc.runLocal("getDid", {});

								setDidDoc(resDid.decoded.out_messages[0].value.value0);
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

	function backToLogin() {

		setDidDoc("");
		setDID("");

	}

	function testreq() {

		// let data = '{"user":{"did": "did:everscale:f28b5fb95c2bfdc70b939de1ce2d79e1b8d233223596490827a91bc600fd876d"}}';

		// var xhr = new XMLHttpRequest();
		// xhr.open("POST", "http://ssi.defispace.com/auth", true);
		// xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");

		// xhr.send(data);

		// xhr.onreadystatechange = function() 
		// {
		// if (xhr.readyState == 4)
		// {
		// 	if(xhr.status == 200) 
		// 	{
		// 		console.log(xhr.responseText);
		// 	}
		// }
		// }

		// const request = fetch("https://ssi.defispace.com/auth", {
		// 		method: "POST",
		// 		// headers: {"Content-Type": "application/json; charset=utf-8"},
		// 		body: {
		// 			body:
		// 				JSON.parse('{"user":{"did": "did:everscale:f28b5fb95c2bfdc70b939de1ce2d79e1b8d233223596490827a91bc600fd876d"}}'),
		// 		},
		// }).then((response) => console.log(response));

		function sendSign(data) {
			fetch("https://ssi.defispace.com/auth/login", {
				method: "post",
				headers: {
					'Content-Type': 'application/json; charset=utf-8',
					'Connection' : 'keep-alive'
				},
	
				body: `{
					"user":
					{
						"signatureHex":"${data}",
						"did": "f28b5fb95c2bfdc70b939de1ce2d79e1b8d233223596490827a91bc600fd876d"
				}
				}`
				}).then((data)=>{
					return data.json();

				}).then((data)=>{
					testSign(data.token);
				})
		}

		function testSign(data) {
			fetch("https://ssi.defispace.com/auth/user", {
				method: "get",
				headers: {
					'Content-Type': 'application/json; charset=utf-8',
					'Connection' : 'keep-alive',
					'Authorization': `Token ${data}`
				},
	
				
				}).then((data)=>{
					return data.json();

				}).then((data)=>{
				})
		}

		fetch("https://ssi.defispace.com/auth", {
			method: "post",
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
				'Connection' : 'keep-alive'
			},

			body: '{"user":{"did": "f28b5fb95c2bfdc70b939de1ce2d79e1b8d233223596490827a91bc600fd876d"}}'
			})
			.then( (response) => { 
				return response.json();
				}).then(async function(data) {
					// data is the parsed version of the JSON returned from the above endpoint.
					let msg = data.value;
					const msgHash = sha256(msg).toString();

					let privatemsg = (await getClientKeys(seed)).secret;


					return await ed.sign(msgHash, privatemsg);
					
				}).then((data)=>{
					sendSign(data);
				});

	}

	// async function signMessage(input) {

    //     const msg = input.message
    //     const msgHash = crypto.createHash('sha256').update(msg).digest('hex');
    //     console.log(msgHash)

		

    //     return await ed.sign(msgHash, input.privateKey);
    // }

	async function testFunc(vc) {
		let pass = prompt("Enter your PIN");


		let seed = decryptSeed(pass);

		if(!seed){
			return;
		}

		const keys = await getClientKeys(seed);

		const value = await decryptVerifiableCredential(vc, keys.secret);
		setAlertW({hidden: false,text: value.vc ,title: "VC "})
	}
 
	return (
		<Router>

			<div className={alertW.hidden?"hide":"modal-w modal-welcome"}>

				<button className="close" onClick={()=>setAlertW({hidden: true, text:"", title:""})}>
					<span></span>
					<span></span>
				</button>

				<div class="text">{alertW.title}</div>

				<span class="content">
					{alertW.text}
				</span>

			</div>

			{didDoc ? (
				<div className={alertW.hidden?"modal-w modal-welcome modal-did-document":"hide"}>

					
					<div className={loader ? "lds-dual-ring" : "hide"}></div>
					<div className="text">DID Document</div>
					<button onClick={()=>{setShowDoc(!showDoc)}}>{showDoc?"Hide":"Show"}</button>

					{showDoc?
						<>
						<div className="attribute">
							<span>status:</span>
							{didDoc.status}
						</div>
						<div className="attribute">
							<span>PubKey:</span>
							{didDoc.PubKey}
						</div>
						<div className="attribute">
							<span>issuerAddres:</span>
							{didDoc.issuerAddr}
						</div>
						<div className="attribute">
							{Object.keys(JSON.parse(didDoc.didDocument)).map((item, i) => {
								return (
									<div>
										<span>{item}:</span>{" "}
										{JSON.stringify(JSON.parse(didDoc.didDocument)[item])}
									</div>
								);
							})}
						</div>

						<div className="menu-document">
							<span className={menuCurent==0?"active":""} onClick={()=>setMenuCurent(0)}>Change document</span>
							<span className={menuCurent==1?"active":""} onClick={()=>setMenuCurent(1)}>Change status</span>
							<span className={menuCurent==2?"active":""} onClick={()=>setMenuCurent(2)}>Change controller</span>
							<span className={menuCurent==3?"active":""} onClick={()=>setMenuCurent(3)}>Delete document</span>
							
						</div>
						<div class="content-document">
							<div className={menuCurent==0?"menu-item new-did":"hide"}>
								<div className="curent-attr">
									{Object.keys(JSON.parse(didDoc.didDocument)).map((item, i) => {
										let temp;
										return (
											<div>
												<span>{item}:</span>{" "}
												<input type="text" onChange={(ev)=>{temp=ev.target.value}} placeholder={JSON.stringify(JSON.parse(didDoc.didDocument)[item])}/>
												<button onClick={()=>deleteAttribute(item)}>Delete</button>
												<button onClick={()=>{saveAttribute(item,temp)}}>Save</button>
											</div>
										);
									})}
								</div>
								<div class="new-attr">
									<select name="" id="" onChange={(ev)=>{setCurentAttr(ev.target.value)}}>
										{attributes.map((item,i)=>{
											return(
											<option>{item}</option>
											);
										})}
									</select>
									<button onClick={addAttribute}>Add attribute</button>
								</div>
								<button onClick={updateDIDDocument}>Save Changes</button>
							</div>
							<div className={menuCurent==1?"menu-item":"hide"}>
								<div>
									<select name="" id="" onChange={(ev)=>{setCurentStatus(ev.target.value)}}>
										<option>1</option>
										<option>0</option>
									</select>
								</div>
								<button onClick={updateDidStatus}>Save Changes</button>
							</div>
							<div className={menuCurent==2?"menu-item":"hide"}>
								<div>
									{/* <input type="text" placeholder="New PubKey" onChange={(ev)=>{setCurentPub(ev.target.value)}}/> */}
									<input type="text" placeholder="New Address" onChange={(ev)=>{setCurentAddr(ev.target.value)}}/>
								</div>
								<button onClick={updateDidPub}>Save Changes</button>
							</div>
							<div className={menuCurent==3?"menu-item":"hide"}>
								<button onClick={deleteDid}>Delete Document</button>
							</div>
							
						</div>
						<div className="note">
							Note: Transactions can take 5 to 15 seconds
						</div>
					</>:null	
					}

					<div className="text">VC Management</div>

					<div class="VC-list">

						{/* <div class="element">

						<input type="checkbox" id="scales" name="scales"/>
						<label for="scales">VC1</label>

						</div>

						<div class="element">

						<input type="checkbox" id="scales" name="scales"/>
						<label for="scales">VC2</label>

						</div> */}

						{vcList.map((i, index)=>{
							return(
								<div class="element" >

									<input type="checkbox" onClick={(ev)=>{toggleVP(ev,i.vc, index)}} />
									<label>VC {index+1}</label>

									<button className={i.blockchain?"":"hide"} onClick={()=>{deleteVC(i.addrVC)}}>Delete</button>
									<button className={i.blockchain?"hide":""} onClick={()=>{uploadVC(i)}}>Upload</button>

									<button onClick={()=>{downloadVC(i.vc)}}>Download</button>

									{/* <button className={i.status == "active"?"":"hide"} onClick={()=>{deactivateVC(i.statusAddress)}}>Disable</button> */}



									<button onClick={async ()=>{
										// if(i.blockchain) {
										// 	let pass = prompt("Enter your PIN");

										// 	let seed = decryptSeed(pass);

										// 	if(!seed){
										// 		return;
										// 	}

										// 	const keys = await getClientKeys(seed);

										// 	const value = await decryptVerifiableCredential(i.vc, keys.secret);
										// 	setAlertW({hidden: false,text: value.vc ,title: "VC"})
										// } else {
											setAlertW({hidden: false,text: i.vc ,title: "VC "+(index+1)})
										// }

										}}>show VC</button>

									{/* <div>
										{i}
									</div> */}

									<span>Status: {i.status}</span>
									

								</div>
							)
						})}

						

					</div>

					<div class="Vc-drop">
						<label for="Vc">Upload New VC File:</label>

						<input type="file" id="Vc" name="Vc"accept=".json" multiple onChange={download}/>
					</div>
					<div>
						<button onClick={()=>{

							if(vcList.length<1) {
								alert("Select at least one VC");
							} else {
								

								console.log(arrVc);

								let tempVcArr = [];

								for(let i = 0; i < vcList.length; i++) {
									if(vcList[i].onVcArr) {
										tempVcArr.push(vcList[i].vc);
									}
								}

								console.log(tempVcArr);

								if(tempVcArr.length < 1) {
									alert("Select at least one VC");
								} else {
									localStorage.setItem("vclist", JSON.stringify(tempVcArr));
									history.push("/vp");
								}

								// history.push("/vp");
							}

							
							}}> Generate VP</button>
					</div>



					
					<button onClick={backToLogin}>Back</button>
				</div>
			) : (
				<div className={alertW.hidden?"modal-w modal-welcome":"hide"}>
					<div className={loader ? "lds-dual-ring" : "hide"}></div>
					<div className="text">Welcome!</div>

					{/* <button type="button" className="btn btn-secondary" onClick={DidCreate}>
					I want to create DID
				</button>
				<button type="button" className="btn btn-secondary" onClick={createDID}>
					I want to create DID2
				</button> */}
					<button
						type="button"
						className="btn btn-secondary"
						onClick={createDID3}
					>
						I want to create DID
					</button>

					<div class="text">I already have a DID</div>
					<input
						type="text"
						placeholder="DID"
						onChange={(ev) => {
							setDID(ev.target.value.trim());
						}}
					/>
					<button
						type="button"
						className="btn btn-secondary"
						onClick={resolveDID}
					>
						Log in with DID
					</button>

					{/* <button onClick={testreq}>test</button> */}
				</div>
			)}
		</Router>
	);
}

export default WelcomeDidPage;
