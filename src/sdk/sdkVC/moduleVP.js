const ed = require("noble-ed25519")
const sha256 = require("crypto-js/sha256")

module.exports = {

    createPresentation: async (verifiableCredential, id, holder) => {
        return new Promise(async (resolve, reject) => {
            try {
                var presentation = {
                    '@context': ['https://www.w3.org/2018/credentials/v1'],
                    type: ['VerifiablePresentation']
                };
                if(verifiableCredential) {
                    presentation.verifiableCredential = [].concat(verifiableCredential);
                }
                if(id) {
                    presentation.id = id;
                }
                if(holder) {
                    presentation.holder = holder;
                }
                resolve(presentation)
            } catch(er) {
                reject(er)
            }
        })
    },

    signPresentation: async (presentation, issuerDID, secretKey) => {
        return new Promise(async (resolve, reject) => {
            try {
                presentation.proof = {
                    "type": "Ed25519Signature2020",
                    "created": (new Date()).toJSON(),
                    "verificationMethod": issuerDID,
                    "proofPurpose": "assertionMethod",
                    "proofValue": await signData(JSON.stringify(presentation), secretKey)
                };

                resolve(presentation)
            } catch(er) {
                reject(er)
            }
        })
    },

    verifyPresentation: async (verifiablePresentation, publicKey) => {
        return new Promise(async (resolve, reject) => {
            try {
                const cloneVP = { ...verifiablePresentation }
                const proofProperty = cloneVP.proof;
                delete cloneVP.proof;

                resolve(await verifyData(proofProperty.proofValue, JSON.stringify(cloneVP), publicKey))
            } catch(er) {
                reject(er)
            }
        })
    }

}

async function signData(msg, secretKey){

    const msgHash = sha256(msg).toString();

    return await ed.sign(msgHash, secretKey);
}

async function verifyData(signatureHex, msg, publicKey){

    const msgHash = sha256(msg).toString();

    return await ed.verify(signatureHex, msgHash, publicKey);
}