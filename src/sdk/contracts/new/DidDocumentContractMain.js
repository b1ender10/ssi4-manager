const DidDocumentContract = {
    abi: {
        "ABI version": 2,
        "version": "2.1",
        "header": [
            "pubkey",
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
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
                "name": "init",
                "inputs": [
                    {
                        "name": "issuerAddr",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "newDidDocument",
                "inputs": [
                    {
                        "name": "didDocument",
                        "type": "string"
                    }
                ],
                "outputs": []
            },
            {
                "name": "newDidStatus",
                "inputs": [
                    {
                        "name": "status",
                        "type": "uint8"
                    }
                ],
                "outputs": []
            },
            {
                "name": "newDidIssuerAddr",
                "inputs": [
                    {
                        "name": "issuerAddr",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "deleteDidDocument",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "getDid",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "status",
                                "type": "uint8"
                            },
                            {
                                "name": "PubKey",
                                "type": "uint256"
                            },
                            {
                                "name": "issuerAddr",
                                "type": "address"
                            },
                            {
                                "name": "didDocument",
                                "type": "string"
                            }
                        ],
                        "name": "value0",
                        "type": "tuple"
                    }
                ]
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "addrDidStorage",
                        "type": "address"
                    },
                    {
                        "components": [
                            {
                                "name": "status",
                                "type": "uint8"
                            },
                            {
                                "name": "PubKey",
                                "type": "uint256"
                            },
                            {
                                "name": "issuerAddr",
                                "type": "address"
                            },
                            {
                                "name": "didDocument",
                                "type": "string"
                            }
                        ],
                        "name": "didItem",
                        "type": "tuple"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "_id",
                "type": "uint256"
            }
        ],
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
                "components": [
                    {
                        "name": "status",
                        "type": "uint8"
                    },
                    {
                        "name": "PubKey",
                        "type": "uint256"
                    },
                    {
                        "name": "issuerAddr",
                        "type": "address"
                    },
                    {
                        "name": "didDocument",
                        "type": "string"
                    }
                ],
                "name": "_didItem",
                "type": "tuple"
            },
            {
                "name": "_addrDidStorage",
                "type": "address"
            },
            {
                "name": "_id",
                "type": "uint256"
            }
        ]
    },
    tvc: "te6ccgECKQEABZoAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAgaK2zUoBAQkiu1TIOMDIMD/4wIgwP7jAvILJQgFJwEABgL87UTQ10nDAfhmjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gkh2zzTAAGOHYECANcYIPkBAdMAAZTT/wMBkwL4QuIg+GX5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK5GQcBDtMfAds88jwJA1LtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zzyPCQkCQIoIIIQOsul5rvjAiCCEHE8tRe74wITCgRQIIIQRmOCXLrjAiCCEF6ivMy64wIgghBsNV6ZuuMCIIIQcTy1F7rjAhEPDQsDJjD4RvLgTPhCbuMA0ds8MNs88gAjDB4AOPhJ+EpvEscF8uBm+EnIz4UIzoBvz0DJgQCg+wADNjD4RvLgTPhCbuMAIZPU0dDe+kDR2zww2zzyACMOHgCY+EUgbpIwcN74Sm8RuvLgZPhKbxKNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATHBfLgZPgA+EoBb1Ig+Gpxb1D4agM2MPhG8uBM+EJu4wAhk9TR0N76QNHbPDDbPPIAIxAeAFj4SfhKbxLHBfLgZoIQC+vCAHL7AvhKAW9S+Gr4ScjPhYjOgG/PQMmBAID7AAMoMPhG8uBM+EJu4wDU0ds8MNs88gAjEh4AWPhJ+EpvEscF8uBmghAL68IAcvsC+EoBb1P4avhJyM+FiM6Ab89AyYEAgPsABFAgghAIHXztuuMCIIIQLMFDRLrjAiCCEC/UAg664wIgghA6y6XmuuMCIB0bFAS4MPhCbuMA+EbycyGT1NHQ3tP/1NH4QYjIz44rbNbMzsnbPCBu8tBlIG7yf9D6QDD4SSHHBfLgZGim/mCCEBHhowC+8uBkghAL68IAggkxLQCgtX9y+wL4APhrcCAZKBYVAo6NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASIbwRwb1ABb1MBb1H4avhJyM+FiM6Ab89AyYEAgPsA2zzyACceAhjQIIs4rbNYxwWKiuIXGAEK103Q2zwYAELXTNCLL0pA1yb0BDHTCTGLL0oY1yYg10rCAZLXTZIwbeICFu1E0NdJwgGOgOMNGiMB6HDtRND0BXAgjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEiG8E+GqNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4a3EhgED0DpPXC/+RcOL4bIBA9A7yvdcL//hicPhjJwOKMPhG8uBM+EJu4wDR2zwiji0k0NMB+kAwMcjPhyDOcc8LYQLIz5K/UAg6zgFvJF4wywfL/1nIzszNzclw+wCRW+LjAPIAIxwhAAj4S/hKAyow+Eby4Ez4Qm7jANMH0ds8MNs88gAjHx4AUvhM+Ev4SvhD+ELIy//LP8+DAW8kXjDLB8v/VTDIzsxZyM7L/83Nye1UAFj4SfhKbxLHBfLgZoIQC+vCAHL7AvhKAW9Q+Gr4ScjPhYjOgG/PQMmBAID7AAOCMPhG8uBM+EJu4wDR2zwhjikj0NMB+kAwMcjPhyDOcc8LYQHIz5IgdfO2AW8kXjDLB8v/zszNyXD7AJEw4uMA8gAjIiEAKO1E0NP/0z8x+ENYyMv/yz/Oye1UAAT4SgBW7UTQ0//TP9MAMdMH0//U0dD6QNRVMG8EAdTR0PpA0//R+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShJyYAFHNvbCAwLjUzLjAAAAAMIPhh7R7Z",
    code: "te6ccgECJgEABW0AAgaK2zUlAQQkiu1TIOMDIMD/4wIgwP7jAvILIgUCJAEAAwL87UTQ10nDAfhmjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gkh2zzTAAGOHYECANcYIPkBAdMAAZTT/wMBkwL4QuIg+GX5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK5FgQBDtMfAds88jwGA1LtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zzyPCEhBgIoIIIQOsul5rvjAiCCEHE8tRe74wIQBwRQIIIQRmOCXLrjAiCCEF6ivMy64wIgghBsNV6ZuuMCIIIQcTy1F7rjAg4MCggDJjD4RvLgTPhCbuMA0ds8MNs88gAgCRsAOPhJ+EpvEscF8uBm+EnIz4UIzoBvz0DJgQCg+wADNjD4RvLgTPhCbuMAIZPU0dDe+kDR2zww2zzyACALGwCY+EUgbpIwcN74Sm8RuvLgZPhKbxKNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATHBfLgZPgA+EoBb1Ig+Gpxb1D4agM2MPhG8uBM+EJu4wAhk9TR0N76QNHbPDDbPPIAIA0bAFj4SfhKbxLHBfLgZoIQC+vCAHL7AvhKAW9S+Gr4ScjPhYjOgG/PQMmBAID7AAMoMPhG8uBM+EJu4wDU0ds8MNs88gAgDxsAWPhJ+EpvEscF8uBmghAL68IAcvsC+EoBb1P4avhJyM+FiM6Ab89AyYEAgPsABFAgghAIHXztuuMCIIIQLMFDRLrjAiCCEC/UAg664wIgghA6y6XmuuMCHRoYEQS4MPhCbuMA+EbycyGT1NHQ3tP/1NH4QYjIz44rbNbMzsnbPCBu8tBlIG7yf9D6QDD4SSHHBfLgZGim/mCCEBHhowC+8uBkghAL68IAggkxLQCgtX9y+wL4APhrcCAWJRMSAo6NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASIbwRwb1ABb1MBb1H4avhJyM+FiM6Ab89AyYEAgPsA2zzyACQbAhjQIIs4rbNYxwWKiuIUFQEK103Q2zwVAELXTNCLL0pA1yb0BDHTCTGLL0oY1yYg10rCAZLXTZIwbeICFu1E0NdJwgGOgOMNFyAB6HDtRND0BXAgjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEiG8E+GqNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4a3EhgED0DpPXC/+RcOL4bIBA9A7yvdcL//hicPhjJAOKMPhG8uBM+EJu4wDR2zwiji0k0NMB+kAwMcjPhyDOcc8LYQLIz5K/UAg6zgFvJF4wywfL/1nIzszNzclw+wCRW+LjAPIAIBkeAAj4S/hKAyow+Eby4Ez4Qm7jANMH0ds8MNs88gAgHBsAUvhM+Ev4SvhD+ELIy//LP8+DAW8kXjDLB8v/VTDIzsxZyM7L/83Nye1UAFj4SfhKbxLHBfLgZoIQC+vCAHL7AvhKAW9Q+Gr4ScjPhYjOgG/PQMmBAID7AAOCMPhG8uBM+EJu4wDR2zwhjikj0NMB+kAwMcjPhyDOcc8LYQHIz5IgdfO2AW8kXjDLB8v/zszNyXD7AJEw4uMA8gAgHx4AKO1E0NP/0z8x+ENYyMv/yz/Oye1UAAT4SgBW7UTQ0//TP9MAMdMH0//U0dD6QNRVMG8EAdTR0PpA0//R+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShJCMAFHNvbCAwLjUzLjAAAAAMIPhh7R7Z",
    codeHash: "361223945c55bf575b2cebce8c4d1dd5ef4b02ef0fa22e086837da6f9c418f6e",
};
module.exports = { DidDocumentContract };