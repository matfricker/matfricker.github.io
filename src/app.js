import { useState, useEffect } from 'react';

import { CustomComponent } from './custom-component';

import logo from '../public/logo.png';

import './index.css';

function App() {

  // Declare a new state variable
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    customers()
        .then((res) => {
          console.log(res);
        });
  }, []);

  const customers = async () => {
    const response =
      await fetch("https://api.fricker.io/customers");

    setCustomer(await response.json());
  }

  function start() {
    const logo = document.querySelector('.logo');
    // start logo animation
    if (logo.classList.contains('to-left')) {
      logo.classList.remove('to-left');
    } else {
      logo.classList.add('to-right');
    }
  }

  function reset() {
    const logo = document.querySelector('.logo');
    // stop animation
    spinStop(logo);
  }

  function spinStop(element) {
    if (element.classList.contains('to-left')) {
      element.classList.remove('to-left');
    }

    if (element.classList.contains('to-right')) {
      element.classList.remove('to-right');
    }
  }

  return (
    <div className="app">
      <section className="content">
        {customer.map((data) => {
          return (
            <div key={data.customerId}>{data.firstName} {data.lastName}</div>
          )
        })}
        <h2>{customer.length}</h2>
      </section>

      <section className="animation">
        <button type="button" id="btnStart" className="primary" onClick={start}>Start</button>
        <button type="button" id="btnReset" className="primary" onClick={reset}>Reset</button>
        <img src={logo.src} className="logo" alt="logo" />
      </section>

      <CustomComponent name="Custom Component" />
      <footer>Build in React | {new Date().getFullYear()}</footer>
    </div>
  );
}

export default App;
export class customer {
  customerId;
  firstName;
  lastName;
}