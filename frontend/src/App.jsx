import './styles/index.css'
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

console.log("Server is up and running on localhost:3000");

function App() {
  return (
    
    <div className='body'>
      <TypeAnimation
        sequence={[
          'Plan, track, and achieve your goals.',
          1000,
          'Prioritze. Organize. Succeed.',
          1000,
          'Break it down into tasks!',
          1000,
          'What will you finish today?'
          
        ]}
        wrapper="span"
        speed={50}
        className='animation'
        repeat={Infinity}
      />
        <BrowserRouter>
          <Routes>
            <Route path='/'></Route>
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
          </Routes>
        </BrowserRouter>
     
    </div>
    
  );
}

export default App;
