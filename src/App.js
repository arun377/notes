
import './App.css';
import Appbar from './components/Appbar'
import Student from './components/Student'
import { Route,Routes } from 'react-router-dom';
import Signin from './components/Signin';
import EditUser from './components/EditUser';
function App() {
  return (
    <div className="App">
    <Appbar/>
    <Routes>
      <Route path="/Signin" element={<Signin/>}/>
      <Route path="/EditUser/:id" element={<EditUser/>}/>
    </Routes>
    <Student/>
   
   
    </div>
  );
}

export default App;

