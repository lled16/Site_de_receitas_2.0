
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReceitasDoces from "./Components/Pages/ReceitasDoces";
import ReceitasSalgadas from "./Components/Pages/ReceitasSalgadas";
import CadastroReceita from "./Components/Pages/CadastroReceita";
import Drinks from "./Components/Pages/Drinks";
import Home from "./Components/Pages/Home";
import Principal from "./Components/Pages/Principal";
import Login from './Components/Pages/Login';
import StoreProvider  from './Components/Store/Provider';
import Receita from './Components/Pages/Receita';
import EditaReceita from './Components/Pages/EditaReceita';





function App() {
  return (
    <div className="App">


     
      <BrowserRouter>
      <StoreProvider>
        <Routes>
          <Route exact path="/" index element={<Principal />} />
          <Route path="login" index element={<Login />} />
          <Route path="home" index element={<Home />} />
          <Route path="receitasdoces" element={<ReceitasDoces />} />
          <Route path="receitassalgadas" element={<ReceitasSalgadas />} />
          <Route path="drinks" element={<Drinks />} />
          <Route path="cadastroreceitas" element={<CadastroReceita />} />
          <Route path="receita" element={<Receita />} />
          <Route path="editaReceita" element={<EditaReceita />} />
        </Routes>
      </StoreProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
