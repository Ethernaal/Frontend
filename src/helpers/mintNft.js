// const fs = require('fs');
const Web3 = require('web3');
// var Contract = require('web3-eth-contract');
const HDWalletProvider = require('@truffle/hdwallet-provider')
//https://rinkeby.infura.io/v3/b2b6bac2bdd9429aa801be3f4fdf80b0
//https://node-rinkeby.rarible.com
const config = {
	private: "db989f6cdb28df53e3b3983858590efe13115e70a263d50eef2f7f601922edb1",
	rpc: "https://rinkeby.infura.io/v3/b2b6bac2bdd9429aa801be3f4fdf80b0",
	erc721ContractAddress: "0x25646B08D9796CedA5FB8CE0105a51820740C049",
	apiBaseUrl: "https://api-staging.rarible.com"
}

const maker = new HDWalletProvider(config.private, config.rpc)
const web3 = new Web3(maker)

/*
Testing if the HDWallet returns the right address
*/
console.log("Maker is:", maker.addresses[0]);

const contractAbi = JSON.parse(`[{ "inputs": [ { "components": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "string", "name": "uri", "type": "string" }, { "internalType": "address[]", "name": "creators", "type": "address[]" }, { "components": [ { "internalType": "address payable", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" } ], "internalType": "struct LibPart.Part[]", "name": "royalties", "type": "tuple[]" }, { "internalType": "bytes[]", "name": "signatures", "type": "bytes[]" } ], "internalType": "struct LibERC721LazyMint.Mint721Data", "name": "data", "type": "tuple" }, { "internalType": "address", "name": "to", "type": "address" } ], "name": "mintAndTransfer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]`)

const mintNft = async (makeraddress, tokenId, metaHash) => {
	const contract = new web3.eth.Contract(contractAbi, config.erc721ContractAddress)

	// const nonce = getRandomInt(10000, 99999)
	const invocation = contract.methods
		.mintAndTransfer(
			[
				tokenId,
				metaHash,
				[makeraddress],
				[],
				["0x0000000000000000000000000000000000000000000000000000000000000000"]
			],
			makeraddress
		)

		return new Promise(async (resolve, reject) => {
            window.web3.eth.sendTransaction({
                    data: invocation.encodeABI(),
                    to: config.erc721ContractAddress,
                    from: makeraddress,
                    chainId: await window.web3.eth.net.getId(),
                    gasPrice:"50000000000",
                    gas: "10000000"
            })
            .once("transactionHash", resolve)
            .once("error", reject)});
	
}

export default mintNft;