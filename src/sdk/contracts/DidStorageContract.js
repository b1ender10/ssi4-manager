const DidStorageContract = {
	abi: {
		"ABI version": 2,
		version: "2.1",
		header: ["time", "expire"],
		functions: [
			{
				name: "constructor",
				inputs: [
					{
						name: "codeDidDocument",
						type: "cell",
					},
				],
				outputs: [],
			},
			{
				name: "addDid",
				inputs: [
					{
						name: "pubKey",
						type: "uint256",
					},
					{
						name: "didDocument",
						type: "string",
					},
				],
				outputs: [
					{
						name: "value0",
						type: "uint256",
					},
				],
			},
			{
				name: "signData",
				inputs: [
					{
						name: "data",
						type: "string",
					},
				],
				outputs: [
					{
						name: "value0",
						type: "uint256",
					},
				],
			},
			{
				name: "verifySignature",
				inputs: [
					{
						name: "data",
						type: "string",
					},
					{
						name: "signature",
						type: "uint256",
					},
				],
				outputs: [
					{
						name: "value0",
						type: "bool",
					},
				],
			},
			{
				name: "resolveCodeHashDidDocument",
				inputs: [],
				outputs: [
					{
						name: "codeHashDidDocument",
						type: "uint256",
					},
				],
			},
			{
				name: "resolveDidDocument",
				inputs: [
					{
						name: "id",
						type: "uint256",
					},
				],
				outputs: [
					{
						name: "addrDidDocument",
						type: "address",
					},
				],
			},
		],
		data: [],
		events: [],
		fields: [
			{
				name: "_pubkey",
				type: "uint256",
			},
			{
				name: "_timestamp",
				type: "uint64",
			},
			{
				name: "_constructorFlag",
				type: "bool",
			},
			{
				name: "_codeDidDocument",
				type: "cell",
			},
			{
				name: "_totalDid",
				type: "uint256",
			},
		],
	},
};
module.exports = {DidStorageContract};
