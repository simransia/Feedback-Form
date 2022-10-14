import './App.css';
import Form from './Pages/Form'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Success from './Pages/Success';
import Details from './Pages/Details'
import './css/responsiveStyles.css';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Form/>} />
      <Route path="/success" element={<Success/>} />
      <Route path="/details" element={<Details/>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
