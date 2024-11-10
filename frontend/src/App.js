import './index.css';
import Card from './Card';

console.log("Server is up and running on localhost:3000");

function App() {
  return (
    <header>
      <h1> TaskManage </h1>
      <Card name="Login" isLoggedIn="false"></Card>
    </header>
  
  );
}

export default App;
