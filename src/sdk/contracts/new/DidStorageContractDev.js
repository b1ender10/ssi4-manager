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
    codeHash: "69dd73154bb45ab705a4c9ec1e220bb9a7eac03d2b6bd001d9e22c4edc0505a5",
};
module.exports = { DidStorageContract };