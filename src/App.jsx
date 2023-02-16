import "./App.css";
import { createContext } from "react";
import Chat from "./components/Chat";
import Form from "./components/Form";
import Analytic from "./components/Analytic";
import Context from "./components/Context";
import { Routes, Route } from "react-router-dom";
export const FormContext = createContext();
function App() {
  const {Answer}= Context()
  const context = {Answer}
  return (
    <FormContext.Provider value={context}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Analytic" element={<Analytic />} />
        </Routes>
      </div>
    </FormContext.Provider>
  );
}

export default App;
