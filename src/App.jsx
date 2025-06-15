import { useState } from 'react';
import './App.css';
import zinter from './assets/zinn.png';
import qr from './assets/frame.png';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={zinter} alt="Zinter Logo" style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }} />
      </div>
      <img src={qr} alt="QR Code" className="qr-code" />
    </>
  );
}

export default App;
