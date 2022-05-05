const { Account } = require('@eversdk/appkit')
const { TonClient, signerNone, signerKeys } = require('@eversdk/core')
// const { libNode } = require('@eversdk/lib-node')

const statusVCRootAPI = require('../sdkVC/Everscale/statusVCRootAPI')
const statusVCAPI = require('../sdkVC/Everscale/statusVCAPI')
const ResolveAPI = require('../sdkVC/Everscale/ResolveAPI')

const { StatusVCContract } = require('../contracts/vc/StatusVCContract')
const { StatusVCRootContract } = require('../contracts/vc/StatusVCRootContract')
const { IndexStatusContract } = require("../contracts/vc/IndexStatusContract")
const { VCContract } = require('../contracts/vc/VCContract')
const { ResolveContract } = require('../contracts/vc/ResolveContract')
const { IndexVCContract } = require('../contracts/vc/IndexVCContract')

const resolveAddressDev = "0:9ddbb37cf5ed12a33bdcfdde3f86c79252febc936d3a6ee640dd3342ceaebf51"
const resolveAddressMain = "0:350abbb01c142fab86b3af5aa1e46a5a26ba4f80ab45fd0af806abe7ca787ecf"


module.exports = {

    newAddressStatusVCRoot: async (client) => {
        return new Promise(async (resolve, reject) => {
            try {
                var account = new Account(StatusVCRootContract, {
                    signer: signerKeys(await client.crypto.generate_random_sign_keys()),
                    client: client
                })
                resolve({
                    address: await account.getAddress(),
                    keys: account.signer.keys
                })
            } catch(er) {
                reject(er)
            }
        })
    },

    deployStatusVCRoot: async (address, keys, client, issuerAddress) => {
        return new Promise(async (resolve, reject) => {
            try {
                var account = new Account(StatusVCRootContract, {
                    address: address,
                    signer: signerKeys(keys),
                    client: client
                })

                var ress = await account.deploy({
                    initInput: {
                        codeStatusVC: StatusVCContract.code,
                        codeIndexStatus: IndexStatusContract.code,
                        issuer: issuerAddress
                    }
                })

                resolve(ress)
            } catch(er) {
                reject(er)
            }
        })
    },

    newAddressVC: async (client) => {
        return new Promise(async (resolve, reject) => {
            try {
                var account = new Account(VCContract, {
                    signer: signerKeys(await client.crypto.generate_random_sign_keys()),
                    client: client
                })
                resolve({
                    address: await account.getAddress(),
                    keys: account.signer.keys
                })
            } catch(er) {
                reject(er)
            }
        })
    },

    deployVC: async (address, keys, client, ownerAddress, type, value) => {
        return new Promise(async (resolve, reject) => {
            try {
                var account = new Account(VCContract, {
                    address: address,
                    signer: signerKeys(keys),
                    client: client
                })

                var ress = await account.deploy({
                    initInput: {
                        addrOwner: ownerAddress,
                        Type: type,
                        value: value,
                        codeIndexVC: IndexVCContract.code
                    }
                })

                resolve(ress)
            } catch(er) {
                reject(er)
            }
        })
    },

    createStatus: async (statusVCRoot, userAccount, holder) => {
        return new Promise(async (resolve, reject) => {
            try {
                var ress = await statusVCRootAPI.getInfo(statusVCRoot)

                await statusVCRootAPI.createStatusVC(await statusVCRoot.getAddress(), userAccount, holder)

                resolve(await statusVCRootAPI.resolveStatusVC(statusVCRoot, ress.id))
            } catch(er) {
                reject(er)
            }
        })
    },

    resolveStatus: async (addressStatus, client) => {
        return new Promise(async (resolve, reject) => {
            try {
                var statusAccount = await statusVCAPI.createAccountStatusVC(addressStatus, client)

                var ress = await statusVCAPI.getInfo(statusAccount)

                if(ress.Status == 0) {
                    resolve("active")
                } else if(ress.Status == 1) {
                    resolve("deactivated")
                } else if(ress.Status == 2) {
                    resolve("suspended")
                }
            } catch(er) {
                reject(er)
            }
        })
    }

    

}