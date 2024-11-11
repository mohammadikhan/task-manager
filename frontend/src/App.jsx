import './index.css';
import Login from './components/Login';
import Register from './components/Register';

console.log("Server is up and running on localhost:3000");

function App() {
  return (
    <>
    <header>
      <h1> TaskManage </h1>
      
      {/* <Login/> */}
      
    </header>
    <Login/>
    <Register/>
    </>
    
    
  
  );
}

export default App;
