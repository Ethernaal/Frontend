const axios = require('axios');

// var dataP = JSON.stringify(
//     {
//         "name":"TestNFT",
//         "description":"Test NFT",
//         "image":"ipfs://ipfs/QmQLJBPeiwbiKpmvaQrv2ru1vHY3gmUb2DadjdXbUC3ZZD/image1.jpg",
//         "external_url":"https://app.rarible.com/0x60f80121c31a0d46b5279700f9df786054aa5ee5:123913",
//         "artist_url": "an ENS URL pointing to the artists site",
//         "artist_years_of_experience": 4,
//         "artist_location": "London",
//         "attributes":[
//             {
//                 "key":"Test",
//                 "trait_type":"Test",
//                 "value":"Test"
//             }
//     ]
// });

const pinJSONToIPFS = (data) => {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
    return axios
        .post(url, data, {
            headers: {
                pinata_api_key: "b7c2feaad1b9f334121f",
                pinata_secret_api_key: "c78c21e894412085804708db7978fa89f2469abad803c444ca17641c13cb947b"
            }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
};

export default pinJSONToIPFS