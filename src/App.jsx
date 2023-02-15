import './App.css';
import { createContext } from 'react';
import Chat from './components/Chat';
import Form from './components/Form';
import Context from './components/Context';
import {Routes,Route} from 'react-router-dom'
export const FormContext = createContext()
function App() {
  const {x}= Context()
  const context = {x}
  return (
    <FormContext.Provider value={context}>
    <div className="App">
      <Routes>
        <Route path='/' element={<Chat/>}/>
        <Route path='/Form' element={<Form/>}/>
      </Routes>
    </div>
    </FormContext.Provider>
  );
}

export default App;
