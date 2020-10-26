import React from 'react';
import './App.css';
import logo from './assets/logo.png';
import Feature from './Feature/FeatureComponent';
import icon from './assets/icon_1.png';
import Input from "./Input/InputComponent";
import MainButton from "./MainButton/MainButtonComponent";


function App(props) {
  return (
    <div className="App">
      <div className="container">
          <div className="row">
              <div className="text-block">
                  <div className="title-block">
                      <img src={logo} className="logo"/>
                      <h3 className="page-title">
                          Stay global. Stay Learn. Save 80%
                      </h3>
                  </div>
                  <p className="page-sub-title">
                      International Payments for SME's
                  </p>
                  <div className="features-block">
                    <Feature icon={icon} title='Simple' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.'/>
                    <Feature icon={icon} title='Simple' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.'/>
                    <Feature icon={icon} title='Simple' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.'/>
                    <Feature icon={icon} title='Simple' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.'/>
                  </div>
              </div>
              <div className="form-block">
                  <h3 className="form-title">
                      Get started with Lean Paymants
                  </h3>
                  <p className="form-subtitle">
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                  </p>
                  <Input placeholder={'First Name'} />
                  <Input placeholder={'Last Name'} />
                  <Input placeholder={'Email'} />
                  <Input placeholder={'Personal Cell'} />
                  <MainButton btnName={'Create Account'}/>
                  <div className="agreement-block">
                      <input type='checkbox'/>
                      <p className="main-text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                      </p>
                  </div>
                  <p className="main-text flex">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
                      <a>Sign In</a>
                  </p>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
