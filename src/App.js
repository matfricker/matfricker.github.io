import logo from './logo.png';
import './App.css';

function App() {

  function fetchCustomers() {
    fetch("https://api.fricker.io/customers")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.error(error);
        }
      )
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

  function switchDirection() {
    const logo = document.querySelector('.logo');
    // switch direction
    if (logo.classList.contains('to-right')) {
      logo.classList.add('to-left');
      logo.classList.remove('to-right');
    } else {
      logo.classList.add('to-right');
      logo.classList.remove('to-left');
    }
  }

  function reset() {
    const logo = document.querySelector('.logo');
    // stop animation
    if (logo.classList.contains('to-left')) {
      logo.classList.remove('to-left');
    }

    if (logo.classList.contains('to-right')) {
      logo.classList.remove('to-right');
    }
  }

  return (
    <div className="app">
      <header className="header">
        <p>Hello from React World</p>
        <button id="btnStart" className="primary" onClick={start}>Start</button>
        <button id="btnSwitch" className="primary" onClick={switchDirection}>Switch</button>
        <button id="btnReset" className="primary" onClick={reset}>Reset</button>
        <button id="btnFetchCustomers" className="primary" onClick={fetchCustomers}>Fetch Customers</button>
        <img src={logo} className="logo" alt="logo" />
      </header>
    </div>
  );

}

export default App;