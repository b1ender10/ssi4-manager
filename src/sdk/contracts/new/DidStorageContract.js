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
					{
						name: "addr",
						type: "address",
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
	tvc: "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",
	code: "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",
	codeHash: "65631ecfdb8e8d19d3de8ce732c4fe01b6b74ab8cca7b69f9b537056b1803150",
};
module.exports = {DidStorageContract};
