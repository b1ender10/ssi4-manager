const StatusVCRootContract = {
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
                        "name": "codeStatusVC",
                        "type": "cell"
                    },
                    {
                        "name": "codeIndexStatus",
                        "type": "cell"
                    },
                    {
                        "name": "issuer",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "createStatusVC",
                "inputs": [
                    {
                        "name": "holder",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "issuer",
                        "type": "address"
                    },
                    {
                        "name": "id",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "resolveCodeHashStatusVC",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "resolveStatusVC",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "addrStatusVC",
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
                "name": "_codeStatusVC",
                "type": "cell"
            },
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_issuer",
                "type": "address"
            },
            {
                "name": "_codeIndexStatus",
                "type": "cell"
            }
        ]
    },
    tvc: "te6ccgECIQEABGkAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gseBQQgAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8GgYDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8HR0GAiggghBhwdChu+MCIIIQazbRBrrjAgkHA3Qw+Eby4Ez4Qm7jANHbPCKOISTQ0wH6QDAxyM+HIM5xzwthAsjPk6zbRBrOy//NyXD7AJFb4uMAf/hnHAgZAAj4TPhLBFAgghA/YUWcuuMCIIIQQLV2VrrjAiCCEGCDv/G64wIgghBhwdChuuMCGA4MCgOCMPhG8uBM+EJu4wDR2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAOHB0KGM8Wy//JcPsAkTDi4wB/+GccCxkBCNs8+QASA3Qw+Eby4Ez4Qm7jANP/0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+Tgg7/xs7NyXD7AJEw4uMAf/hnHA0ZAm6NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATbPFjbPPkAcMjPhkDKB8v/ydAxEhEDODD4RvLgTPhCbuMA+kGV1NHQ+kDf0ds82zx/+GccDxkD/mim/mCCEBTck4C+8uBk2zz4S9s8+En4TVUC+ExVAyD5AMjPigBAy//Iz4WIzxONBJBHhowAAAAAAAAAAAAAAAAAAcDPFszPg1UwyM+RApt8ss5VIMjOzAHIzs3Nzclw+wD4J28QaKb+YKG1f3D7AvhLpPhr+EnIz4WIzoBvz0ASERAADMmBAID7AABKbXDIy/9wWIBA9EMByMv/cViAQPRDyPQAyQHIz4SA9AD0AM+ByQEW+CjIzvhK0AHJ2zwTAhYhizits1jHBYqK4hUUAQgB2zzJFgEmAdTUMBLQ2zzIz44rbNYSzM8RyRYBZtWLL0pA1yb0BNMJMSDXSpHUjoDiiy9KGNcmMAHIz4vSkPQAgCDPCwnPi9KGzBLMyM8RzhcBBIgBIAJIMPhCbuMA+Ebyc9TU+kGV1NHQ+kDf0fgA+GwB+Gr4bds8f/hnGhkAPPhN+Ez4S/hK+EP4QsjL/8s/z4PMy/9ZyM7MzcntVAIW7UTQ10nCAYqOgOIcGwKMcO1E0PQFiPhqcPhrjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+GyI+G2AQPQO8r3XC//4YnD4Y3D4ayAgAEDtRNDT/9M/0wAx1NP/1NHQ+kDU0fht+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShIB8AFHNvbCAwLjQ5LjAAAA==",
    code: "te6ccgECHgEABDwABCSK7VMg4wMgwP/jAiDA/uMC8gsbAgEdAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8FwMDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8GhoDAiggghBhwdChu+MCIIIQazbRBrrjAgYEA3Qw+Eby4Ez4Qm7jANHbPCKOISTQ0wH6QDAxyM+HIM5xzwthAsjPk6zbRBrOy//NyXD7AJFb4uMAf/hnGQUWAAj4TPhLBFAgghA/YUWcuuMCIIIQQLV2VrrjAiCCEGCDv/G64wIgghBhwdChuuMCFQsJBwOCMPhG8uBM+EJu4wDR2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAOHB0KGM8Wy//JcPsAkTDi4wB/+GcZCBYBCNs8+QAPA3Qw+Eby4Ez4Qm7jANP/0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+Tgg7/xs7NyXD7AJEw4uMAf/hnGQoWAm6NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATbPFjbPPkAcMjPhkDKB8v/ydAxDw4DODD4RvLgTPhCbuMA+kGV1NHQ+kDf0ds82zx/+GcZDBYD/mim/mCCEBTck4C+8uBk2zz4S9s8+En4TVUC+ExVAyD5AMjPigBAy//Iz4WIzxONBJBHhowAAAAAAAAAAAAAAAAAAcDPFszPg1UwyM+RApt8ss5VIMjOzAHIzs3Nzclw+wD4J28QaKb+YKG1f3D7AvhLpPhr+EnIz4WIzoBvz0APDg0ADMmBAID7AABKbXDIy/9wWIBA9EMByMv/cViAQPRDyPQAyQHIz4SA9AD0AM+ByQEW+CjIzvhK0AHJ2zwQAhYhizits1jHBYqK4hIRAQgB2zzJEwEmAdTUMBLQ2zzIz44rbNYSzM8RyRMBZtWLL0pA1yb0BNMJMSDXSpHUjoDiiy9KGNcmMAHIz4vSkPQAgCDPCwnPi9KGzBLMyM8RzhQBBIgBHQJIMPhCbuMA+Ebyc9TU+kGV1NHQ+kDf0fgA+GwB+Gr4bds8f/hnFxYAPPhN+Ez4S/hK+EP4QsjL/8s/z4PMy/9ZyM7MzcntVAIW7UTQ10nCAYqOgOIZGAKMcO1E0PQFiPhqcPhrjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+GyI+G2AQPQO8r3XC//4YnD4Y3D4ax0dAEDtRNDT/9M/0wAx1NP/1NHQ+kDU0fht+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShHRwAFHNvbCAwLjQ5LjAAAA==",
    codeHash: "cfd7fbb13f93190354ef35d7dde85eaec971ac251632d78b47a348177013a709",
};
module.exports = { StatusVCRootContract };