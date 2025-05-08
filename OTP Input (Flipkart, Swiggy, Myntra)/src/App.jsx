import { lazy } from 'react';
import './App.css';

const OTP = lazy(() => import('./components/OTP'));

const OTP_DIGIT_COUNT = 5;

function App() {

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <OTP OTP_DIGIT_COUNT={OTP_DIGIT_COUNT} />
    </div>
  )
}

export default App
