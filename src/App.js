import logo from './logo.png';
import './App.css';

function App() {

  function start() {
    let isStop = false;
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
      spinLeft(logo);
    } else {
      spinRight(logo);
    }
  }

  function reset() {
    const logo = document.querySelector('.logo');
    // stop animation
    spinStop(logo);
  }

  function spinRight(element) {
    if (!element.classList.contains('to-right')) {
      element.classList.add('to-right');
    }

    if (element.classList.contains('to-left')) {
      element.classList.remove('to-left');
    }
  }

  function spinLeft(element) {
    if (!element.classList.contains('to-left')) {
      element.classList.add('to-left');
    }

    if (element.classList.contains('to-right')) {
      element.classList.remove('to-right');
    }
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
      <header className="header">
        <p>Hello from React World</p>
        <button id="btnStart" className="primary" onClick={start}>Start</button>
        <button id="btnSwitch" className="primary" onClick={switchDirection}>Switch</button>
        <button id="btnReset" className="primary" onClick={reset}>Reset</button>
        <img src={logo} className="logo" alt="logo" />
      </header>
    </div>
  );

}

export default App;