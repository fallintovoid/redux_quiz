import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Results from "./pages/Results/Results";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='quiz/:quizId' element={<Quiz/>}/>
        <Route path='quiz/:quizId/results' element={<Results/>}/>
        <Route path='admin' element={<AdminPanel/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
