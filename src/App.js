import './App.css';
import Form from './Pages/Form'
import { HashRouter, Routes, Route } from "react-router-dom";
import Success from './Pages/Success';
import Details from './Pages/Details'
import './css/responsiveStyles.css';

function App() {
  return (

    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/success" element={<Success />} />
          <Route path="/details" element={<Details />} />
        </Routes>

      </HashRouter>
    </div>
  );
}

export default App;
