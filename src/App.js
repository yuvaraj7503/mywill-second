
import './App.css';
import Navbar from './components/navbar/Navbar';
import Navaimg from './components/header/Navaimg';
import Home from './components/side bar/Home';
import Form from './components/form/Form';
import Listbox from './components/list box/Listbox';




function App() {
  return (
    <div>
      
         <Navbar/>
      <div>
      <Navaimg/>
      </div>
      <div>
       <Home/>
      </div>
       <Form/>
      <div>
    <Listbox/>
    
      </div>
      
    </div>
  );
}
 
export default App;
