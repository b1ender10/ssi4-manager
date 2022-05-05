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
                "outputs": []
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
    codeHash: "6cc8553b30e46fcb9810abd018b0707390ec59850f534acccac741d78bda55c2",
};
module.exports = { DidStorageContract: DidStorageContract };
