
import axios from "axios"
const client = axios.create({ baseURL: "https://api-staging.rarible.com/"})

const getNonce= async(token, minter) => {
    const res = await client.get(`protocol/ethereum/nft/indexer/v0.1/collections/${token}/generate_token_id?minter=${minter}`)
    return res.data.tokenId
}

export default getNonce;