import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Password from './Components/Password';

function App() {
const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);

const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
};

return (
  <div>
    {/* <input
      type={showPassword ? 'text' : 'password'}
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Enter your password"
    />
    <button onClick={togglePasswordVisibility}>
      {showPassword ? 'Hide' : 'Show'}
    </button> */}
    <Password/>
  </div>
);
}

export default App
