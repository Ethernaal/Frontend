import React from "react";
import { NetworkErrorMessage } from "./NetworkErrorMessage";
import logo from "../components/images/roundedLogo.png";
import { Grid, Cell } from "styled-css-grid";

export function ConnectWallet({ connectWallet, networkError, dismiss }) {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-12 text-center">
          {/* Metamask network should be set to Localhost:8545. */}
          {networkError && (
            <NetworkErrorMessage message={networkError} dismiss={dismiss} />
          )}
        </div>
        <div
          style={{ marginTop: "15%" }}
          className="p-4 text-center align-middle"
        >
          <Grid columns={1}>
            <Cell>
              <img width={250} height={250} src={logo} alt="Logo" />
            </Cell>
            <Cell style={{ marginTop: "3%" }} center>
              <button
                style={{width: "148px"}}
                type="button"
                class="btn btn-outline-dark mb-2 rounded-pill"
                onClick={connectWallet}
                width={50}
              >
                Create
              </button>
            </Cell>
          </Grid>
        </div>
      </div>
    </div>
  );
}
