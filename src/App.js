import './App.css';
import Todo from './components/Todo/todo';
import Users from './pages/Users/users';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header/header';

function App() {
  return (
    <div
    
      style={{
        background: `url(https://i.pinimg.com/originals/9b/ed/46/9bed46d74c2aaf734e250edec98294dc.jpg)`,
        backgroundSize: 'cover'
      }}
      
    >
  
      <Header />
      <Routes>
        <Route path="/" element={< Todo />} />
        <Route path="users" element={< Users />} />
      </Routes>
    </div>
    
  );
}

export default App;
