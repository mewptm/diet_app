
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Question from './components/Question';
import Ynquiz1 from './yesnoquiz/Ynquiz1';
import Ynquiz2 from './yesnoquiz/Ynquiz2';

function App() {
  return (
    //<div className="App">
    // <BrowserRouter>
    //   <Routes>
    //     <Route part="/ynquiz1" element={<Ynquiz1 />}> </Route>
    //     <Route part="/ynquiz2" element={<Ynquiz2 />}> </Route>
    //   </Routes>
    // </BrowserRouter>
    //</div>
    <Ynquiz1></Ynquiz1>
  );
}


export default App;
