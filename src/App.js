import React from 'react';
import './App.css';
import logo from './assets/logo.svg';
import Feature from './Feature/FeatureComponent';
import icon_1 from './assets/icon_1.svg';
import icon_2 from './assets/icon_2.svg';
import icon_3 from './assets/icon_3.svg';
import icon_4 from './assets/icon_4.svg';
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
                          <Feature icon={icon_1} id='ic_1' title='Simple' text='Make it easier for international customers to pay you.'/>
                          <Feature icon={icon_2} id='' title='Economical' text='Cut your international transfers by more than 80%.'/>
                          <Feature icon={icon_3} id='' title='Transparent' text='Be kept in the loop about all your international transfers.'/>
                          <Feature icon={icon_4} id='' title='Secure' text='We use secure methods we already trust.'/>
                      </div>
                  </div>
                  <div className="form-block">
                      <h3 className="form-title">
                          Get started with Lean Paymants
                      </h3>
                      <p className="form-subtitle">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </p>
                      <Input placeholder={'First Name'} />
                      <Input placeholder={'Last Name'} />
                      <Input placeholder={'Email'} />
                      <Input placeholder={'Personal Cell'} />
                      <MainButton btnName={'Create Account'}/>
                      <div className="agreement-block">
                          <input type='checkbox'/>
                          <p className="main-text">
                              By creating an account, you are agreeing to our terms.
                          </p>
                      </div>
                      <p className="main-text flex">
                          Already have an account?
                          <a>Sign In</a>
                      </p>
                  </div>
              </div>
          </div>
    </div>
  );
}

export default App;
