import React, { Component } from "react";
import Web3 from "web3";

import { Grid, Cell } from "styled-css-grid";
import sendileToIPFS from "../../helpers/imageUpload";
import metaDataUpload from "../../helpers/metaDataUpload";
import mintNft from "../../helpers/mintNft";
import getNonce from "../../helpers/getNonce";
import "./custom.css";

const ipfsAPI = require('ipfs-http-client');
const ipfs = ipfsAPI({host: 'ipfs.infura.io', port: '5001', protocol: 'https' })

export default class UploadNftForm extends Component {
  state = {
    isUploaded: false,
  };

  captureFile = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const file = e.target.files[0];
    let reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => this.convertToBuffer(reader, file);
  };

  convertToBuffer = async (reader, file) => {
    // file is converted to a imageBuffer to prepare for uploading to IPFS
    const myBuffer = await Buffer.from(reader.result);

    try {
      let response = await sendileToIPFS(file);
      debugger
      const ipfsResult = await ipfs.add(file, {onlyHash: true})
      console.log({path: ipfsResult.path})

      this.setState({
        imageBuffer: myBuffer,
        isUploaded: true,
        title: "",
        artistNameResidence: "",
        description: "",
        price: "",
        websiteURL:"https://rec0ver.eth.link/",
        ipfsHash: response.data.IpfsHash,
        response: response,
      });
    } catch (error) {}
  };

  create = async () => {

    const [selectedAddress] = await window.ethereum.enable();
    let contractAddress = "0x25646B08D9796CedA5FB8CE0105a51820740C049"
    let tokenId = await getNonce("0x25646B08D9796CedA5FB8CE0105a51820740C049",selectedAddress)
    const externalUrl = `https://rinkeby.rarible.com/${contractAddress}:${tokenId}`
    debugger
    // let dataP = JSON.stringify({
    //   name: "TestNFT",
    //   description: "Test NFT",
    //   "image": `ipfs://ipfs/${uploadedImage.IpfsHash}`,
    //   external_url: externalUrl,
    //   attributes: [
    //     {
    //       key: "Test",
    //       trait_type: "Test",
    //       value: "Test",
    //     },
    //   ],
    // });

    const metadata = {
      "name": "NAME HERE",
      "description": "DESC HERE",
      "image": `ipfs://ipfs/${this.state.IpfsHash}`,
      "external_url": externalUrl,
      "attributes": [
         {
            "key": "test",
            "trait_type": "test",
            "value": "test"
         }
      ]
   }

    let response = await metaDataUpload(metadata);

    if (response) {
      // let provider = new web3.providers.HttpProvider(
      //   "https://rinkeby.infura.io/v3/fe44d28e1c184e6bb159f8839d4c965d"
      // );
      // web3.setProvider(provider);
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            // Request account access if needed
            await window.ethereum.enable();
            // Acccounts now exposed
           
            const accounts = await window.web3.eth.getAccounts();

            mintNft(accounts[0], tokenId, "/ipfs/"+response.data.IpfsHash)
              .then((response) => {
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              });
        } catch (error) {
            // User denied account access...
        }
    }

    }
  };
  onInputchange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <Grid
        style={{ marginTop: "7%" }}
        justifyContent={"center"}
        columns={"1000px"}
      >
        <Grid columns={"repeat(auto-fit,minmax(300px,1fr))"}>
          <Grid justifyContent={"center"} columns={1}>
            <Grid columns={3}>
              <Cell>
                <div className="row no-gutters align-items-center">
                  <div class="custom-file">
                    <input
                      className="form-control border-secondary rounded-pill"
                      type="file"
                      id="exampleInputFile"
                      onChange={this.captureFile}
                    />
                  </div>
                </div>
              </Cell>
              <Cell>Upload Image</Cell>
            </Grid>
            {this.state.isUploaded && (
              <>
                <Grid columns={3}>
                  <Cell>
                    <div className="row no-gutters align-items-center">
                      <input
                        className="form-control border-secondary"
                        type="text"
                        name="title"
                        id="example-search-input2"
                        onChange={this.onInputchange}
                      />
                    </div>
                  </Cell>
                  <Cell>Title</Cell>
                </Grid>
                <Grid columns={3}>
                  <Cell>
                    <div className="row no-gutters align-items-center">
                      <input
                        className="form-control border-secondary"
                        type="text"
                        name="artistNameResidence"
                        id="example-search-input2"
                        onChange={this.onInputchange}
                      />
                    </div>
                  </Cell>
                  <Cell>Artist name - Residence</Cell>
                </Grid>
                <Grid columns={3}>
                  <Cell>
                    <div className="row no-gutters align-items-center">
                      <input
                        className="form-control border-secondary"
                        type="text"
                        name="description"
                        id="example-search-input2"
                        onChange={this.onInputchange}
                      />
                    </div>
                  </Cell>
                  <Cell>Description</Cell>
                </Grid>
                <Grid columns={3}>
                  <Cell>
                    <div className="row no-gutters align-items-center">
                      <input
                        className="form-control border-secondary"
                        type="number"
                        name="artisExperience"
                        id="example-search-input2"
                        onChange={this.onInputchange}
                      />
                    </div>
                  </Cell>
                  <Cell>Artist Yeears of Experience</Cell>
                </Grid>
                <Grid columns={3}>
                  <Cell>
                    <div className="row no-gutters align-items-center">
                      <input
                        className="form-control border-secondary"
                        value={this.state.websiteURL}
                        type="text"
                        name="websiteURL"
                        id="example-search-input2"
                        onChange={this.onInputchange}
                      />
                    </div>
                  </Cell>
                  <Cell> Website URL</Cell>
                </Grid>
                <Grid columns={3}>
                  <Cell>
                    <div className="row no-gutters align-items-center">
                      <input
                        className="form-control border-secondary"
                        type="text"
                        name="price"
                        id="example-search-input2"
                        onChange={this.onInputchange}
                      />
                    </div>
                  </Cell>
                  <Cell>Price</Cell>
                  <Cell>
                    <button
                      type="button"
                      class="btn btn-outline-dark mb-2 rounded-pill"
                      onClick={this.create}
                    >
                      Create
                    </button>
                  </Cell>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
