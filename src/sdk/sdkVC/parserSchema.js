const rp = require('request-promise')
const JsonVC = require('../data/VC.json')

module.exports = {

    getJsonURI: async (uri) => {
        return new Promise(async (resolve, reject) => {
            try {
                var ress = await rp(uri)
                resolve(JSON.parse(ress))
            } catch(er) {
                reject(er)
            }
    })
    },

    getMetadataVC: async (requiredFields, credentialSubject) => {
        return new Promise(async (resolve, reject) => {
            try {
                var JsonMetadataVC

                JsonMetadataVC = await setContext()
                for(i = 0; i < requiredFields.length; i++) {
                    var name
                    if(requiredFields[i] == "credentialSubject") {
                        name = credentialSubject
                    } else if(requiredFields[i] == "evidence") {
                        name = await setEvidence()
                    } else if(requiredFields[i] == "proof") {
                        name = await setProof()
                    } else {
                        name = JsonVC["VC"][requiredFields[i]]
                    }

                    JsonMetadataVC+= name

                    if(i == requiredFields.length -1) {
                        JsonMetadataVC = JsonMetadataVC.substring(0, JsonMetadataVC.lenght)
                        JsonMetadataVC += " }"
                    }

                }

                resolve(JSON.parse(JsonMetadataVC))


            } catch(er) {
                reject(er)
            }
        })
    },
    
    getJsonShema: async (Json, classVC) => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(Json["@context"][classVC])
            } catch(er) {
                reject(er)
            }
        })
    }

}

async function setContext() {
    return new Promise(async (resolve, reject) => {
        try {
            resolve("{ \"@context\":[],")
        } catch(er) {
            reject(er)
        }
    })
}

async function setEvidence() {
    return new Promise(async (resolve, reject) => {
        try {
            resolve("\"evidence\": [],")
        } catch(er) {
            reject(er)
        }
    })
}

async function setProof() {
    return new Promise(async (resolve, reject) => {
        try {
            resolve("\"proof\": {" +
            "\"type\": \"Ed25519Signature2020\"," +
            "\"created\": \"2021-11-13T18:19:39Z\"," +
            "\"verificationMethod\": \"https://example.edu/issuers/14#key-1\"," +
            "\"proofPurpose\": \"assertionMethod\"," +
            "\"proofValue\": \"z58DAdFfa9SkqZMVPxAQpic7ndSayn1PzZs6ZjWp1CktyGesjuTSwRdoWhAfGFCF5bppETSTojQCrfFPP2oumHKtz\" }")
        } catch(er) {
            reject(er)
        }
    })
}

async function setTermsOfUse() {

}


