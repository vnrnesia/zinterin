import { useState } from 'react';
import './App.css';
import zinter from './assets/zinn.png';
import qr from './assets/frame.png';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
     
        <h1 className="title">ZINTERIN</h1>
        <p className="subtitle">строительные смеси</p>
        <img
          src={qr}
          alt="QR Code"
          className="qr-code"
        />
      </div>
    </>
  );
}

export default App;
