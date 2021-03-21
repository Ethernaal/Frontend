import React, { Component } from "react";
import axios from "axios";
import Web3 from 'web3';

import { Grid, Cell } from "styled-css-grid";
import sendileToIPFS from "../../helpers/imageUpload";
import metaDataUpload from "../../helpers/metaDataUpload";
import mintNft from "../../helpers/mintNft";
import "./custom.css";

const web3 = new Web3()

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
      debugger;
      this.setState({
        imageBuffer: myBuffer,
        isUploaded: true,
        title: "",
        artistNameResidence: "",
        description: "",
        price: "",
        ipfsHash: response.data.IpfsHash,
        response: response,
      });
    } catch (error) {}
  };

  create = async () => {
    let hash = "QmQLJBPeiwbiKpmvaQrv2ru1vHY3gmUb2DadjdXbUC3ZZD";
    let wallletAddress = "0x60f80121c31a0d46b5279700f9df786054aa5ee5";
    let ipfsMetaUrl = "https://ipfs.infura.io/ipfs/" + this.state.ipfsHash;
    // axios
    //   .get("https://ipfs.infura.io/ipfs/" + this.state.ipfsHash)
    //   .then((res) => {
    //     console.log("IPFS response: " + JSON.stringify(res.data));
    //     debugger;
    //     if (
    //       this.state.description &&
    //       this.state.isUploaded &&
    //       this.state.title &&
    //       this.state.artistNameResidence &&
    //       this.state.price
    //     ) {
    //       this.setState({
    //         nft: {
    //           ipfsImageUrl: res.data.image,
    //           ipfsImageHash: res.data.image.substr(
    //             res.data.image.lastIndexOf("/") + 1
    //           ),
    //           ipfsMetadataUrl: ipfsMetaUrl,
    //           ipfsMetadataHash: this.state.ipfsHash,
    //           metadataBuffer: res.data,
    //         },
    //       });
    //     }
    //   });

    const [selectedAddress] = await window.ethereum.enable();
    debugger
      let dataP = JSON.stringify(
        {
            "name":"TestNFT",
            "description":"Test NFT",
            "image":ipfsMetaUrl,
            "external_url":"https://app.rarible.com/"+selectedAddress+":123913",
            "artist_url": "an ENS URL pointing to the artists site",
            "artist_years_of_experience": 4,
            "artist_location": "London",
            "attributes":[
                {
                    "key":"Test",
                    "trait_type":"Test",
                    "value":"Test"
                }
        ]
    });

    let response = await metaDataUpload(dataP);

    let provider = new web3.providers.HttpProvider("https://rinkeby.infura.io/v3/fe44d28e1c184e6bb159f8839d4c965d")
    web3.setProvider(provider)
    const accounts = await web3.eth.getAccounts();
    debugger
    mintNft(accounts[0])
    .then((response) => {console.log(response);})
    .catch((error) => {console.log(error)});

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
