import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Welcome to Home page</h1>} />
          <Route path="/addproduct" element={<h1>Welcome to Add Product</h1>} />
          <Route path="/updateproduct" element={<h1>Welcome to Update Product</h1>} />
          <Route path="/profile" element={<h1>Welcome to Profile</h1>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
