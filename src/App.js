import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AllRoutes from './Pages/AllRoutes';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
 <Navbar/>
 <AllRoutes/>
 <Footer/>
<Toaster/>
    </div>
  );
}

export default App;
