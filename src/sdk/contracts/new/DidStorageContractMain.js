const DidStorageContract = {
    abi: {
        "ABI version": 2,
        "version": "2.1",
        "header": [
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                    {
                        "name": "codeDidDocument",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "addDid",
                "inputs": [
                    {
                        "name": "pubKey",
                        "type": "uint256"
                    },
                    {
                        "name": "didDocument",
                        "type": "string"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "signData",
                "inputs": [
                    {
                        "name": "data",
                        "type": "string"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "verifySignature",
                "inputs": [
                    {
                        "name": "data",
                        "type": "string"
                    },
                    {
                        "name": "signature",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "resolveCodeHashDidDocument",
                "inputs": [],
                "outputs": [
                    {
                        "name": "codeHashDidDocument",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "resolveDidDocument",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "addrDidDocument",
                        "type": "address"
                    }
                ]
            }
        ],
        "data": [],
        "events": [],
        "fields": [
            {
                "name": "_pubkey",
                "type": "uint256"
            },
            {
                "name": "_timestamp",
                "type": "uint64"
            },
            {
                "name": "_constructorFlag",
                "type": "bool"
            },
            {
                "name": "_codeDidDocument",
                "type": "cell"
            },
            {
                "name": "_totalDid",
                "type": "uint256"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "a39f382ecde118eef7c5f7290435b36066c98fb528871a792f4728defa72e9f9",
};
module.exports = { DidStorageContract };