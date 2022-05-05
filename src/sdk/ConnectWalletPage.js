import React, {useState} from "react";
import { Redirect } from 'react-router-dom';
import backspace from "./img/backspace.png";
import {Account} from "@eversdk/appkit";
import {libWeb} from "@eversdk/lib-web";

import {signerKeys} from "@eversdk/core";

import * as BigNumberJS from "bignumber.js";

// import {DEXClientContract} from "../extensions/contracts/mainNet/DEXClient.js";
// import {DEXRootContract} from "../extensions/contracts/mainNet/DEXRoot.js";
// import {DEXConnectorContract} from "../extensions/contracts/mainNet/DEXConnector.js";
// import {TONTokenWalletContract} from "../extensions/contracts/mainNet/TONTokenWallet.js";

import {DEXClientContract} from "../extensions/contracts/main/DEXClient.js";
import {DEXRootContract} from "../extensions/contracts/main/DEXRoot.js";
import {DEXConnectorContract} from "../extensions/contracts/main/DEXConnector.js";
import {TONTokenWalletContract} from "../extensions/contracts/main/TONTokenWallet.js";

import {Address, ProviderRpcClient, TvmException} from "ton-inpage-provider";

const config = require('./config.json');

const {TonClient} = require("@eversdk/core");

TonClient.useBinaryLibrary(libWeb);

const client = new TonClient({network: {endpoints: [config.DappServer]}});

const pidCrypt = require("pidcrypt");
require("pidcrypt/aes_cbc");

const ton = new ProviderRpcClient();

function ConnectWalletPage() {
	const [curentPage, setCurentPage] = useState(0);
	const [curentPageLogin, setCurentPageLogin] = useState(0);

	const [check, setCheck] = useState(false);

	const [input1, setInput1] = useState("");
	const [input2, setInput2] = useState("");
	const [input3, setInput3] = useState("");
	const [input4, setInput4] = useState("");

	const [inputV1, setInputV1] = useState("");
	const [inputV2, setInputV2] = useState("");
	const [inputV3, setInputV3] = useState("");
	const [inputV4, setInputV4] = useState("");

	const [inputL1, setInputL1] = useState("");
	const [inputL2, setInputL2] = useState("");
	const [inputL3, setInputL3] = useState("");
	const [inputL4, setInputL4] = useState("");

	const [hasTon] = useState(false);

	// function goChromeStore() {
	// 	console.log(1);
	// 	window.open(
	// 		"https://chrome.google.com/webstore/detail/ever-wallet/cgeeodpfagjceefieflmdfphplkenlfk",
	// 		"_self",
	// 	);
	// }

	let pass = "";
	let mnemonic = "";

	// main net
	// let dexrootAddr =
	// 	"0:e6bfca78593f25de9301de4f19ed798dce2210150c9c62437f192d00fb30ad31";

	// dev net
	// let dexrootAddr =
	// 	"0:b199c648ae3f6d2b1a774d51f35b5af98a346672c91f1da9c1f1ba3a0a3d69d0";

	let dexrootAddr = config.dexroot;
	
	const zeroAddress =
		"0:0000000000000000000000000000000000000000000000000000000000000000";

	const [clientData, setClientData] = useState([]);

	const [seed, setSeed] = useState("");

	const [seedLogin, setSeedLogin] = useState("");

	const [addr, setAddr] = useState();

	const [errorModal, setErrorModal] = useState([
		{
			hidden: false,
			message: "",
		},
	]);

	const [loader, setLoader] = useState(false);

	const aes = new pidCrypt.AES.CBC();

	const [connectEver, setConnectEver] = useState(false);

	async function genSeed(pin) {
		let randMnemonic = await client.crypto.mnemonic_from_random({
			word_count: 12,
		});

		let arr = randMnemonic.phrase.split(" ");
		mnemonic = randMnemonic.phrase;

		console.log("Mnemonic");
		console.log(randMnemonic);

		console.log("crypt");
		let encrypted = aes.encryptText(mnemonic, pin);
		console.log(encrypted);

		sessionStorage.setItem("seedHash", encrypted);

		setSeed(mnemonic);
	}

	function getShard(string) {
		return string[2];
	}

	async function getClientAddrAtRootForShard(pubkey, n) {
		const acc = new Account(DEXRootContract, {
			address: dexrootAddr,
			client,
		});
		try {
			const response = await acc.runLocal("getClientAddress", {
				answerId: 0,
				clientPubKey:new BigNumberJS(pubkey, 16).toFixed(),
				// clientPubKey:"0x" + pubkey,
				clientSoArg: n,
			});
			let value0 = response.decoded.output.value0;
			console.log("value0", value0);
			return value0;
		} catch (e) {
			console.log("catch E", e);
			//console.log(pubkey, n, acc);
			return e;
		}
	}

	async function onSharding(pubkey) {
		console.log("curExt onSharding", pubkey);
		try {
			// const rootContract = await contract(DEXRootContract.abi, Radiance.networks['2'].dexroot);
			let targetShard = getShard(dexrootAddr);
			// console.log("pubkeypubkey",pubkey)
			let status = false;
			let n = 0;
			let clientAddress;
			while (!status) {
				let response = await getClientAddrAtRootForShard(pubkey, n);
				console.log("response", response);
				let clientAddr = response;
				let shard = getShard(clientAddr);
				if (shard === targetShard) {
					status = true;
					clientAddress = clientAddr;
					console.log("ьыьыьваь", {
						address: clientAddr,
						keys: pubkey,
						clientSoArg: n,
					});
					setAddr(clientAddr);
					return {
						status: true,
						data: {address: clientAddr, keys: "0x" + pubkey, clientSoArg: n},
					};
				}
				if (n > 1000) {
					return {
						status: false,
						text: "sharding timeout, you tried too much, try again",
					};
				}
				n++;
			}
		} catch (e) {
			console.log("catch E", e);
			return e;
		}
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

	async function getAccType2(addr) {
		try {
			const curWalletContract = new Account(TONTokenWalletContract, {
				address: addr,
				client,
			});
			return await curWalletContract.getAccount();
		} catch (e) {
			console.log("catch E", e);
			return e;
		}
	}

	async function prepareClientDataForDeploy(phrase) {
		const clientKeys = await getClientKeys(phrase);
		let clientPubkey = clientKeys.public;
		console.log("phrasephrase", phrase);
		const clientSet = await onSharding(clientPubkey);
		console.log("clientSet", clientSet);

		setClientData([clientSet, clientKeys]);
		setLoader(false);
		return [clientSet, clientKeys];
	}

	async function getRootConnectorCode() {
		const RootContract = new Account(DEXRootContract, {
			address: dexrootAddr,
			client,
		});
		const RootCreators = await RootContract.runLocal("codeDEXconnector", {});
		return RootCreators.decoded.output;
	}

	async function deployClient(clientSet, clientKeys) {
		console.log(
			"clientSet.data.clientSoArg",
			clientSet,
			"clientKeys",
			clientKeys,
		);
		const connectorCode = await getRootConnectorCode();
		console.log("connectorCode", connectorCode.codeDEXconnector);

		console.log("DEXConnectorContract.code", DEXConnectorContract.code);
		console.log(
			"connectorCode.codeDEXconnector === DEXConnectorContract.code",
			connectorCode.codeDEXconnector === DEXConnectorContract.code,
		);

		console.log(clientSet.data.clientSoArg);

		const clientAcc = new Account(DEXClientContract, {
			initData: {
				rootDEX: dexrootAddr,
				soUINT: clientSet.data.clientSoArg,
				// codeDEXConnector: DEXConnectorContract.code,
				codeDEXConnector: DEXConnectorContract.code,
				// codeDEXConnector: ConnectorCode
			},
			signer: signerKeys(clientKeys),
			client,
		});
		const address = await clientAcc.getAddress();

		let checkAddress = clientSet.data.address === address;
		console.log(
			checkAddress,
			"checkAddress:address",
			clientSet.data.address,
			"address",
			address,
		);

		return await clientAcc.deploy({
			initFunctionName: "constructor",
			initInput: {ownerAddr: zeroAddress},
		});

		// const deployMessage = await client.abi.encode_message(await clientAcc.getParamsOfDeployMessage({
		//     initFunctionName:"constructor",
		//     initInput:{
		//         ownerAddr:zeroAddress,
		//     },
		// }));
		// let shard_block_id = (await client.processing.send_message({
		//         message: deployMessage.message,
		//         send_events: true,
		//     }, logEvents,
		// )).shard_block_id;
	}

	async function getClientBalance(clientAddress) {
		console.log("clientAddress", clientAddress);
		let address = clientAddress;
		if (
			clientAddress ===
			"0:0000000000000000000000000000000000000000000000000000000000000000"
		)
			return 0;
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
			console.log("clientBalance", clientBalance);
			return +clientBalance.result[0].balance / 1000000000;
		} catch (e) {
			console.log("catch E", e);
			return e;
		}
	}

	function PrevPage() {
		if (curentPage === 1) {
			setCurentPageLogin(0);
			setCurentPage(0);
		} else {
			setCurentPage(curentPage - 1);
		}
	}

	function NextPage() {
		if (curentPage === 0) {
			setCurentPageLogin(99);
			setCurentPage(1);
		}
		// if (curentPage === 1) {
		// 	if (check) {
		// 		setCurentPage(curentPage + 1);
		// 	} else {
		// 		setErrorModal([
		// 			{
		// 				hidden: true,
		// 				message: "Accept the user agreement",
		// 			},
		// 		]);
		// 	}
		// }
		if (curentPage === 1) {
			if (input1 !== "" && input2 !== "" && input3 !== "" && input4 !== "") {
				setCurentPage(curentPage + 1);
			} else {
				setErrorModal([
					{
						hidden: true,
						message: "Set full PIN",
					},
				]);
			}
		}
		if (curentPage === 2) {
			if (
				input1 === inputV1 &&
				input2 === inputV2 &&
				input3 === inputV3 &&
				input4 === inputV4
			) {
				setCurentPage(curentPage + 1);
				let temp = [input1, input2, input3, input4];
				pass = temp.join("");

				genSeed(pass);
			} else {
				setErrorModal([
					{
						hidden: true,
						message: "PIN codes do not match",
					},
				]);
			}
		}
		if (curentPage === 3) {
			setCurentPage(curentPage + 1);
			console.log(seed);
			setLoader(true);
			prepareClientDataForDeploy(seed);
			console.log(addr);
			console.log(loader);
		}
		if (curentPage === 4) {
			setCurentPage(curentPage + 1);
			// let bal = getClientBalance(addr);
			// setLoader(true);
			// bal.then(
			// 	(data) => {
			// 		if (data > 1) {
			// 			setLoader(false);
			// 			deployClient(clientData[0], clientData[1]);
			// 			setCurentPage(curentPage + 1);
			// 		} else {
			// 			setLoader(false);
			// 			setErrorModal([
			// 				{
			// 					hidden: true,
			// 					message: "Insufficient balance to create wallet",
			// 				},
			// 			]);
			// 		}
			// 	},
			// 	(error) => {
			// 		setLoader(false);
			// 		console.log(error); // вывести ошибку
			// 	},
			// );
		}
		if (curentPage === 5) {
			setCurentPage(99);
			setCurentPageLogin(1);
		}
	}

	function PrevPageLogin() {
		if (curentPageLogin === 1) {
			setCurentPageLogin(0);
			setCurentPage(0);
		} else {
			setCurentPageLogin(curentPageLogin - 1);
		}
	}

	function NextPageLogin() {
		if (curentPageLogin === 0) {
			setCurentPageLogin(1);
			setCurentPage(99);
		}
		if (curentPageLogin === 1) {
			if (seedLogin !== "") {
				setCurentPageLogin(curentPageLogin + 1);
			} else {
				setErrorModal([
					{
						hidden: true,
						message: "Enter seed phrase",
					},
				]);
			}
		}
		if (curentPageLogin === 2) {
			if (
				inputL1 !== "" &&
				inputL2 !== "" &&
				inputL3 !== "" &&
				inputL4 !== ""
			) {
				let temp = [inputL1, inputL2, inputL3, inputL4];
				let pass = temp.join("");

				let trim = seedLogin.trim();

				setLoader(true);

				let promiseKeys = getClientKeys(trim);
				promiseKeys.then(
					(data) => {
						let addr = data.public;
						console.log(data);
						let promiseAddr = onSharding(addr);

						promiseAddr.then(
							(data) => {
								console.log(data);

								let addr = data.data.address;
								let promiseAcc = getAccType2(data.data.address);

								promiseAcc.then(
									(data) => {
										let acc = data.acc_type;
										console.log(acc);
										if (acc === 1) {
											setLoader(false);

											let encrypted = aes.encryptText(trim, pass);

											sessionStorage.setItem("seedHash", encrypted);

											sessionStorage.setItem("address", addr);

											setCurentPageLogin(curentPageLogin + 1);
										} else {
											setLoader(false);
											setErrorModal([
												{
													hidden: true,
													message: "Incorrect seed phrase",
												},
											]);
										}
									},
									(error) => {
										setLoader(false);
										console.log(error);
									},
								);
							},
							(error) => {
								setLoader(false);
								console.log(error);
							},
						);
					},

					(error) => {
						setLoader(false);
						setErrorModal([
							{
								hidden: true,
								message: "Incorrect seed phrase",
							},
						]);
						console.log(error);
					},
				);
			} else {
				setErrorModal([
					{
						hidden: true,
						message: "Enter full PIN",
					},
				]);
			}
		}
	}

	function closeError() {
		setErrorModal([
			{
				hidden: false,
				message: "",
			},
		]);
	}

	function setValueInput(num) {
		if (input1 === "") {
			setInput1(num);
			return;
		}
		if (input2 === "") {
			setInput2(num);
			return;
		}
		if (input3 === "") {
			setInput3(num);
			return;
		}
		if (input4 === "") {
			setInput4(num);
			return;
		}
	}

	function setValueInputV(num) {
		if (inputV1 === "") {
			setInputV1(num);
			return;
		}
		if (inputV2 === "") {
			setInputV2(num);
			return;
		}
		if (inputV3 === "") {
			setInputV3(num);
			return;
		}
		if (inputV4 === "") {
			setInputV4(num);
			return;
		}
	}

	function setValueInputL(num) {
		if (inputL1 === "") {
			setInputL1(num);
			return;
		}
		if (inputL2 === "") {
			setInputL2(num);
			return;
		}
		if (inputL3 === "") {
			setInputL3(num);
			return;
		}
		if (inputL4 === "") {
			setInputL4(num);
			return;
		}
	}

	function deletevalueInput() {
		if (input4 !== "") {
			setInput4("");
			return;
		}
		if (input3 !== "") {
			setInput3("");
			return;
		}
		if (input2 !== "") {
			setInput2("");
			return;
		}
		if (input1 !== "") {
			setInput1("");
			return;
		}
	}

	function deletevalueInputV() {
		if (inputV4 !== "") {
			setInputV4("");
			return;
		}
		if (inputV3 !== "") {
			setInputV3("");
			return;
		}
		if (inputV2 !== "") {
			setInputV2("");
			return;
		}
		if (inputV1 !== "") {
			setInputV1("");
			return;
		}
	}

	function deletevalueInputL() {
		if (inputL4 !== "") {
			setInputL4("");
			return;
		}
		if (inputL3 !== "") {
			setInputL3("");
			return;
		}
		if (inputL2 !== "") {
			setInputL2("");
			return;
		}
		if (inputL1 !== "") {
			setInputL1("");
			return;
		}
	}

	// function resetPages() {
	// 	setCurentPage(0);
	// 	setCurentPageLogin(0);
	// }

	function testdep() {
		let bal = getClientBalance(addr);
		setLoader(true);
		bal.then(
			(data) => {
				//console.log(bal);
				if (data >= 0.4) {
					setLoader(false);
					// сделать проверку на выдаваемый результат deployClient, если произойдет ошибка
					// console.log(clientData[0], clientData[1]);
					// let cl1 = {data:{
					// 	address: "0:e6a0f45b9887de9ecdf04ac3e3febeba237586d711fa9f16d5625cdb337e1ee6",
					// 	clientSoArg: 0,
					// 	keys: "0x7d1cfe1421adfb7a78eb34bbc36f65171cedb6430b1c0012be0113e7e5ba8e41"
					// },status: true}

					// let cl2 = {
					// 	public: "7d1cfe1421adfb7a78eb34bbc36f65171cedb6430b1c0012be0113e7e5ba8e41",
					// 	secret: "fdd3dda0d24664e225b970cfea93b6fef6a3ee13935e59654bcf877411484412"}
					deployClient(clientData[0], clientData[1]);
					// deployClient(cl1,cl2);
					setCurentPage(curentPage + 1);
				} else {
					setLoader(false);
					console.log(clientData[0], clientData[1]);
					setErrorModal([
						{
							hidden: true,
							message: "Insufficient balance to create wallet",
						},
					]);
				}
			},
			(error) => {
				setLoader(false);
				console.log(error); // вывести ошибку
			},
		);
	}

	async function connectWallet() {
		if (!(await ton.hasProvider())) {
			console.log("Extension is not installed");
			window.open(
				"https://chrome.google.com/webstore/detail/ever-wallet/cgeeodpfagjceefieflmdfphplkenlfk",
				"_self",
			);
		}
		await ton.ensureInitialized();

		const {accountInteraction} = await ton.requestPermissions({
			permissions: ["tonClient", "accountInteraction"],
		});

		console.log(accountInteraction);
		if (accountInteraction == null) {
			console.log("Insufficient permissions");
		}

		const selectedAddress = accountInteraction.address;
		console.log(selectedAddress);
		setConnectEver(true);
	}

	return (
		<div
			className={
				curentPage === 0 || curentPageLogin === 1 || curentPageLogin === 3
					? "modal-connect modal-connect-first"
					: "modal-connect"
			}
		>
			<div className={loader ? "lds-dual-ring" : "hide"}></div>
			<div
				className={
					curentPage === 0 && errorModal[0].hidden === false ? "page" : "hide"
				}
			>
				{/* <button className="close" onClick={resetPages}>
					<span></span>
					<span></span>
				</button> */}
				<div className="title">Welcome to DefiSpace!</div>
				<div className="content content-first">
					<button className="connect-btn zeropage-btn" onClick={NextPageLogin}>
						Log In
					</button>
					<button className="connect-btn zeropage-btn" onClick={NextPage}>
						Sign Up
					</button>

					<button className="connect-btn zeropage-btn" onClick={connectWallet}>
						Connect Ever Wallet
					</button>
				</div>
			</div>
			<div
				className={
					curentPageLogin === 1 && errorModal[0].hidden === false
						? "page"
						: "hide"
				}
			>
				{/* <button className="close" onClick={resetPages}>
					<span></span>
					<span></span>
				</button> */}
				<div className="title">Enter your seed phrase.</div>
				<div className="seed-enter">
					<textarea
						name=""
						id=""
						cols={35}
						rows={4}
						onChange={(ev) => {
							setSeedLogin(ev.target.value);
						}}
					></textarea>
					<div className="break"></div>
					{/* <button className="connect-btn zeropage-btn" onClick={NextPageLogin}>Connect</button> */}
				</div>
			</div>
			<div
				className={
					curentPageLogin === 2 && errorModal[0].hidden === false
						? "page"
						: "hide"
				}
			>
				<div className="title">Enter your PIN</div>
				<div className="pin-inputs">
					<input type="text" value={inputL1} autoFocus maxLength={1} />
					<input type="text" value={inputL2} maxLength={1} />
					<input type="text" value={inputL3} maxLength={1} />
					<input type="text" value={inputL4} maxLength={1} />
					<button onClick={deletevalueInputL}>
						<img src={backspace} alt="backspace" />
					</button>
				</div>
				<div className="pin-board">
					<div className="board">
						<button onClick={() => setValueInputL("1")}>1</button>
						<button onClick={() => setValueInputL("2")}>2</button>
						<button onClick={() => setValueInputL("3")}>3</button>
						<div className="break"></div>
						<button onClick={() => setValueInputL("4")}>4</button>
						<button onClick={() => setValueInputL("5")}>5</button>
						<button onClick={() => setValueInputL("6")}>6</button>
						<div className="break"></div>
						<button onClick={() => setValueInputL("7")}>7</button>
						<button onClick={() => setValueInputL("8")}>8</button>
						<button onClick={() => setValueInputL("9")}>9</button>
						<div className="break"></div>
						<button onClick={() => setValueInputL("0")}>0</button>
					</div>
				</div>
			</div>
			<div
				className={
					curentPageLogin === 3 && errorModal[0].hidden === false
						? "page"
						: "hide"
				}
			>
				<div className="title">Congratulations!</div>
				<div className="subtitle">
					You have successfully logged into your account
				</div>
			</div>
			{/* <div
				className={
					curentPage === 1 && errorModal[0].hidden === false ? "page" : "hide"
				}
			>
				
				<div className="title">Welcome to DefiSpace!</div>
				<div className="subtitle">
					Just read the user`s agreement and set pin for registration
				</div>
				<div className="content">
					<div className="checkbox">
						<input
							type="checkbox"
							checked={check}
							onChange={() => setCheck(!check)}
						/>
					</div>
					<div className="text">
						I accept the terms <br /> in the{" "}
						<a href="https://defispace.com/">Users`s Agreement</a>
					</div>
				</div>
			</div> */}
			<div
				className={
					curentPage === 1 && errorModal[0].hidden === false ? "page" : "hide"
				}
			>
				<div className="title">Set PIN for quick login</div>
				<div className="pin-inputs">
					<input type="text" value={input1} maxLength={1} />
					<input type="text" value={input2} maxLength={1} />
					<input type="text" value={input3} maxLength={1} />
					<input type="text" value={input4} maxLength={1} />
					<button onClick={deletevalueInput}>
						<img src={backspace} alt="backspace" />
					</button>
				</div>
				<div className="pin-board">
					<div className="board">
						<button onClick={() => setValueInput("1")}>1</button>
						<button onClick={() => setValueInput("2")}>2</button>
						<button onClick={() => setValueInput("3")}>3</button>
						<div className="break"></div>
						<button onClick={() => setValueInput("4")}>4</button>
						<button onClick={() => setValueInput("5")}>5</button>
						<button onClick={() => setValueInput("6")}>6</button>
						<div className="break"></div>
						<button onClick={() => setValueInput("7")}>7</button>
						<button onClick={() => setValueInput("8")}>8</button>
						<button onClick={() => setValueInput("9")}>9</button>
						<div className="break"></div>
						<button onClick={() => setValueInput("0")}>0</button>
					</div>
				</div>
			</div>
			<div
				className={
					curentPage === 2 && errorModal[0].hidden === false ? "page" : "hide"
				}
			>
				<div className="title">Repeat PIN</div>
				<div className="pin-inputs">
					<input type="text" value={inputV1} autoFocus maxLength={1} />
					<input type="text" value={inputV2} maxLength={1} />
					<input type="text" value={inputV3} maxLength={1} />
					<input type="text" value={inputV4} maxLength={1} />
					<button onClick={deletevalueInputV}>
						<img src={backspace} alt="backspace" />
					</button>
				</div>
				<div className="pin-board">
					<div className="board">
						<button onClick={() => setValueInputV("1")}>1</button>
						<button onClick={() => setValueInputV("2")}>2</button>
						<button onClick={() => setValueInputV("3")}>3</button>
						<div className="break"></div>
						<button onClick={() => setValueInputV("4")}>4</button>
						<button onClick={() => setValueInputV("5")}>5</button>
						<button onClick={() => setValueInputV("6")}>6</button>
						<div className="break"></div>
						<button onClick={() => setValueInputV("7")}>7</button>
						<button onClick={() => setValueInputV("8")}>8</button>
						<button onClick={() => setValueInputV("9")}>9</button>
						<div className="break"></div>
						<button onClick={() => setValueInputV("0")}>0</button>
					</div>
				</div>
			</div>
			<div
				className={
					curentPage === 3 && errorModal[0].hidden === false ? "page" : "hide"
				}
			>
				<div className="title">Copy your seed phrase</div>
				{/* <div className="subtitle">You are registered in Defi Space</div> */}
				<div className="content">
					<div className="text-seed">
						Don`t forget to save the seed-phrase <br /> from your{" "}
						<a href="https://defispace.com/">account recovery settings</a>
						<div className="seed">{seed}</div>
					</div>
				</div>
			</div>
			<div
				className={
					curentPage === 4 && errorModal[0].hidden === false ? "page" : "hide"
				}
			>
				<div className="title">Top up your wallet for activation</div>
				{/* <div className="subtitle">You are registered in Defi Space</div> */}
				<div className="content">
					<div className="text-address">
						Please send 2 or more TON to this address:
						<span>{addr}</span>, and click "Create wallet".
					</div>
				</div>
			</div>
			<div
				className={
					curentPage === 5 && errorModal[0].hidden === false ? "page" : "hide"
				}
			>
				<div className="title">Congrats!</div>
				<div className="subtitle">You are registered in Defi Space</div>
				{/* <div className="content">
                        <div className="text-seed">
                            Please send 2 or more TON to this address: {}, and click "Create wallet".
                            <div className="seed">
                                {seed}
                            </div>
                        </div>
                    </div> */}
			</div>
			<div className={errorModal[0].hidden === true ? "page" : "hide"}>
				<button className="close" onClick={closeError}>
					<span></span>
					<span></span>
				</button>
				<div className="message">{errorModal[0].message}</div>
			</div>
			<div
				className={
					errorModal[0].hidden === false &&
					curentPage > 0 &&
					curentPageLogin > 4
						? "pagination"
						: "hide"
				}
			>
				{/* <div className="dots">
					<button
						className={curentPage === 1 ? "active dot" : "dot"}
						onClick={() => setCurentPage(1)}
					></button>
					<button
						className={curentPage === 2 ? "active dot" : "dot"}
						onClick={() => setCurentPage(2)}
					></button>
					<button
						className={curentPage === 3 ? "active dot" : "dot"}
						onClick={() => setCurentPage(3)}
					></button>
					<button
						className={curentPage === 4 ? "active dot" : "dot"}
						onClick={() => setCurentPage(4)}
					></button>
					<button
						className={curentPage === 5 ? "active dot" : "dot"}
						onClick={() => setCurentPage(5)}
					></button>
					<button
						className={curentPage === 6 ? "active dot" : "dot"}
						onClick={() => setCurentPage(6)}
					></button>
				</div> */}
				<div className="break"></div>
				<div className="next">
					<button
						className={curentPage === 5 ? "hide" : "connect-btn"}
						onClick={PrevPage}
					>
						Back
					</button>
					<button
						className={curentPage !== 4 ? "hide" : "connect-btn"}
						onClick={() => {
							navigator.clipboard.writeText(addr);
						}}
					>
						Copy
					</button>

					<button
						className={curentPage !== 4 ? "hide" : "connect-btn"}
						onClick={testdep}
					>
						Create wallet
					</button>

					<button
						className={
							curentPage === 5 || curentPage === 4 ? "hide" : "connect-btn"
						}
						onClick={NextPage}
					>
						Next
					</button>

					{/* <button
						className={curentPage !== 5 ? "hide" : "connect-btn"}
						onClick={NextPage}
					>
						Deploy
					</button>
					
					<button
						className={
							curentPage === 6 || curentPage === 5 ? "hide" : "connect-btn"
						}
						onClick={NextPage}
					>
						Next
					</button> */}

					<button
						className={curentPage !== 5 ? "hide" : "connect-btn"}
						onClick={NextPage}
					>
						Great!
					</button>
				</div>
			</div>

			<div
				className={
					errorModal[0].hidden === false &&
					curentPageLogin > 0 &&
					curentPage > 5
						? "pagination"
						: "hide"
				}
			>
				{/* <div className="dots">
					<button
						className={curentPageLogin === 1 ? "active dot" : "dot"}
						onClick={() => setCurentPageLogin(1)}
					></button>
					<button
						className={curentPageLogin === 2 ? "active dot" : "dot"}
						onClick={() => setCurentPageLogin(2)}
					></button>
					<button
						className={curentPageLogin === 3 ? "active dot" : "dot"}
						onClick={() => setCurentPageLogin(2)}
					></button>
				</div> */}
				<div className="break"></div>
				<div className="next">
					<button
						className={curentPageLogin === 3 ? "hide" : "connect-btn"}
						onClick={PrevPageLogin}
					>
						Back
					</button>
					<button
						className={curentPageLogin !== 1 ? "hide" : "connect-btn"}
						onClick={NextPageLogin}
					>
						Connect
					</button>
					<button
						className={curentPageLogin !== 2 ? "hide" : "connect-btn"}
						onClick={NextPageLogin}
					>
						Next
					</button>
					<a href="#/welcome-did" className={curentPageLogin < 3 ? "hide" : ""}>
						<button className={curentPageLogin < 3 ? "hide" : "connect-btn"}>
							Great!
						</button>
					</a>
				</div>
				{connectEver?<Redirect to="/welcome-did-ever"/>:null}
			</div>
		</div>
	);
}

export default ConnectWalletPage;
