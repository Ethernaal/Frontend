//imports needed for this function
const axios = require('axios');
const FormData = require('form-data');

const pinFileToIPFS = (file) => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    debugger
    //we gather a local file for this example, but any valid readStream source will work here.
    let data = new FormData();
    data.append('file', file);

    //You'll need to make sure that the metadata is in the form of a JSON object that's been convered to a string
    //metadata is optional
    // const metadata = JSON.stringify({
    //     name: 'testname',
    //     keyvalues: {
    //         exampleKey: 'exampleValue'
    //     }
    // });
    // data.append('pinataMetadata', metadata);

    // //pinataOptions are optional
    // const pinataOptions = JSON.stringify({
    //     cidVersion: 0,
    //     customPinPolicy: {
    //         regions: [
    //             {
    //                 id: 'FRA1',
    //                 desiredReplicationCount: 1
    //             },
    //             {
    //                 id: 'NYC1',
    //                 desiredReplicationCount: 2
    //             }
    //         ]
    //     }
    // });
    // data.append('pinataOptions', pinataOptions);

    return axios
        .post(url, data, {
            maxBodyLength: 'Infinity', //this is needed to prevent axios from erroring out with large files
            headers: {
                'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                pinata_api_key: "b7c2feaad1b9f334121f",
                pinata_secret_api_key: "c78c21e894412085804708db7978fa89f2469abad803c444ca17641c13cb947b"
            }
        })
        // .then(function (response) {
        //     debugger
        //     console.log(response.data.IpfsHash);
        //     return response.data.IpfsHash;
        // })
        // .catch(function (error) {
        //     debugger
        //     console.log(error);
        // });
};

export default pinFileToIPFS