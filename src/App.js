
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Quiz from './components/Quiz';
import Results from './components/Results';
import Layout from './components/Layout';
import Authenticate from './components/Authenticate';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route element ={<Authenticate/>}>
          <Route path="/" element={<Layout/>} >
            <Route path="/quiz" element={<Quiz/>} />
            <Route path="/results" element={<Results/>} />
          </Route>
        </Route>
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;
