import { useState } from 'react'
import './App.css'
import LiveKitModal from './components/LiveKitModal';

function App() {
  const [showSupport, setShowSupport] = useState(false);

  const handleSupportClick = () => {
    setShowSupport(true)
  }

  return (
    <div className="app">
      <div class="btn">
        <button className="support-button" onClick={handleSupportClick}>
          Talk to an Agent!
        </button>
      </div>

      {showSupport && <LiveKitModal setShowSupport={setShowSupport}/>}
    </div>
  )
}

export default App
