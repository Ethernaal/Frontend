import React from "react";
import {
    Link
  } from 'react-router-dom'
import logo from '../images/logo.png';

export const Header = () => (
           <header className="header">
          <div>
            <div className="d-flex justify-content-start">
              <div className="p-2 ml-5"><img width={400} src={logo} alt="Logo" /></div>
            </div>
              <div className="d-flex justify-content-center">
                <div className="p-4 mt-2">PORTFOLIO</div>
                <div className="p-4 mt-2"><Link to='/artist'>ARTIST</Link></div>
                <div className="p-4 mt-2">ETHERNAAL MUSEUM</div>
                <div className="p-4 mt-2">DeFi</div>
                <div className="p-4 mt-2">DAO</div>
                <div className="p-4 mt-2">WORDPRESS</div>
                <div className="p-4 mt-2">REGISTER</div>
              <div className="p-4">
                <div className="row no-gutters align-items-center">
                  <input
                    className="form-control border-secondary rounded-pill"
                    type="search"
                    id="example-search-input2"
                  />
                  <div className="col-auto">
                    <button
                      className="btn btn-outline-light text-dark border-0 rounded-pill ml-n5"
                      type="button"
                    >
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
          </div>
          </div>
        </header>
  )
