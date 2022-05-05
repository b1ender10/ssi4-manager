const ed = require("noble-ed25519")
const sha256 = require("crypto-js/sha256")

const AES = require("crypto-js/aes");
const Utf8 = require('crypto-js/enc-utf8');

const moduleEver = require("./moduleEver");
const jsonld = require('jsonld');

const CREDENTIALS_CONTEXT_V1_URL = "https://www.w3.org/2018/credentials/v1";

const dateRegex = new RegExp('^(\\d{4})-(0[1-9]|1[0-2])-' +
    '(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):' +
    '([0-5][0-9]):([0-5][0-9]|60)' +
    '(\\.[0-9]+)?(Z|(\\+|-)([01][0-9]|2[0-3]):' +
    '([0-5][0-9]))$', 'i');

module.exports = {

    issueVC: async (credential, secretKey) => {
        return new Promise(async (resolve, reject) => {
            try {
                if(!credential) {
                    throw new TypeError('"credential" parameter is required for issuing.');
                }

                if(!credential.issuanceDate) {
                    const now = (new Date()).toJSON();
                    credential.issuanceDate = `${now.substr(0, now.length - 5)}Z`;
                }

                checkVC(credential);

                credential["proof"] = await VCSignature(credential, credential.issuer, secretKey)
                resolve(credential)
            } catch(er) {
                reject(er)
            }
        })
    },

    verifyVC: async (VC, publicKey) => {
        return new Promise(async (resolve, reject) => {
            try {
                const cloneVC = { ...VC }
                const proof = cloneVC.proof;
                delete cloneVC.proof;

                resolve(await verifyData(proof["proofValue"], JSON.stringify(cloneVC), publicKey))
            } catch(er) {
                reject(er)
            }
        })
    },

    verifyStatusVC: async (credentialStatus, statusVC) => {
        return new Promise(async (resolve, reject) => {
            try {
                var status = statusVC.getStatus(credentialStatus)

                if(status == "active") {
                    resolve(true)
                } else {
                    resolve(false)
                }
            } catch(er) {
                reject(er)
            }
        })
    },

    verifyIssuanceDateVC: async (IssuanceDate) => {
        return new Promise(async (resolve, reject) => {
            try {
                var nowDate = new Date()
                if(new Date(IssuanceDate).valueOf() <= nowDate.valueOf()) {
                    resolve(true)
                } else {
                    resolve(false)
                }
            } catch(er) {
                reject(er)
            }
        })
    },

    verifiExpirationDateVC: async (ExpirationDate) => {
        return new Promise(async (resolve, reject) => {
            try {
                var nowDate = new Date()
                if(new Date(ExpirationDate).valueOf() >= nowDate.valueOf()) {
                    resolve(true)
                } else {
                    reject(false)
                }
            } catch(er) {
                reject(er)
            }
        })
    },

    encryptVerifiableCredential: async (verifiableCredential, secretKey) => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(AES.encrypt(JSON.stringify(verifiableCredential), secretKey).toString())
            } catch(er) {
                reject(er)
            }
        })
    },

    decryptVerifiableCredential: async (cipherVC, secretKey) => {
        try {
            var bytes = AES.decrypt(cipherVC, secretKey); 
            return JSON.parse(bytes.toString(Utf8));
        }
        catch (e) {
            console.log(e);
        }
        return new Promise(async (resolve, reject) => {
            try {
                var bytes = AES.decrypt(cipherVC, secretKey);
                resolve(JSON.parse(bytes.toString(Utf8)))
            } catch(er) {
                reject(er)
            }
        })
    }





    

}

async function VCSignature (VC, issuerDID, secretKey) {
    return new Promise(async (resolve, reject) => {
        try {
            var proof = {
                "type": "Ed25519Signature2020",
                "created": (new Date()).toJSON(),
                "verificationMethod": issuerDID,
                "proofPurpose": "assertionMethod",
                "proofValue": await signData(JSON.stringify(VC), secretKey)
            }
            resolve(proof)
        } catch(er) {
            reject(er)
        }
    })
}

function checkVC(credential) {

    if(credential['@context'][0] !== CREDENTIALS_CONTEXT_V1_URL) {
        throw new Error(
            `"${CREDENTIALS_CONTEXT_V1_URL}" needs to be first in the ` +
            'list of contexts.');
    }

    // check type presence and cardinality
    if(!credential.type) {
        throw new Error('"type" property is required.');
    }

    if(!jsonld.getValues(credential, 'type').includes('VerifiableCredential')) {
        throw new Error('"type" must include `VerifiableCredential`.');
    }

    if(!credential.credentialSubject) {
        throw new Error('"credentialSubject" property is required.');
    }

    // If credentialSubject.id is present and is not a URI, reject it
    if(credential.credentialSubject.id) {
        validateUriId({
            id: credential.credentialSubject.id, propertyName: 'credentialSubject.id'
        });
    }

    if(!credential.issuer) {
        throw new Error('"issuer" property is required.');
    }

    // check issuanceDate cardinality
    if(jsonld.getValues(credential, 'issuanceDate').length > 1) {
        throw new Error('"issuanceDate" property can only have one value.');
    }

    // check issued is a date
    if(!credential.issuanceDate) {
        throw new Error('"issuanceDate" property is required.');
    }

    if('issuanceDate' in credential) {
        if(!dateRegex.test(credential.issuanceDate)) {
            throw new Error(
                `"issuanceDate" must be a valid date: ${credential.issuanceDate}`);
        }
    }

    // check issuer cardinality
    if(jsonld.getValues(credential, 'issuer').length > 1) {
        throw new Error('"issuer" property can only have one value.');
    }

    // check issuer is a URL
    if('issuer' in credential) {
        const issuer = getIdStr(credential.issuer);
        if(!issuer) {
            throw new Error(`"issuer" id is required.`);
        }
        validateUriId({id: issuer, propertyName: 'issuer'});
    }

    if('credentialStatus' in credential) {
        if(!credential.credentialStatus.id) {
            throw new Error('"credentialStatus" must include an id.');
        }
        if(!credential.credentialStatus.type) {
            throw new Error('"credentialStatus" must include a type.');
        }
    }

    jsonld.getValues(credential, 'evidence').forEach(evidence => {
        const evidenceId = getIdStr(evidence);
        if(evidenceId) {
            validateUriId({id: evidenceId, propertyName: 'evidence'});
        }
    });

    // check expires is a date
    if('expirationDate' in credential &&
        !dateRegex.test(credential.expirationDate)) {
        throw new Error(
            `"expirationDate" must be a valid date: ${credential.expirationDate}`);
    }
}

function validateUriId({id, propertyName}) {
    let parsed;
    try {
        parsed = new URL(id);
    } catch(e) {
        const error = new TypeError(`"${propertyName}" must be a URI: "${id}".`);
        error.cause = e;
        throw error;
    }

    if(!parsed.protocol) {
        throw new TypeError(`"${propertyName}" must be a URI: "${id}".`);
    }
}

function getIdStr(obj) {
    if(typeof obj === 'string') {
        return obj;
    }

    if(!('id' in obj)) {
        return;
    }

    return obj.id;
}

async function signData(msg, secretKey){

    const msgHash = sha256(msg).toString();

    return await ed.sign(msgHash, secretKey);
}

async function verifyData(signatureHex, msg, publicKey){

    const msgHash = sha256(msg).toString();

    return await ed.verify(signatureHex, msgHash, publicKey);
}