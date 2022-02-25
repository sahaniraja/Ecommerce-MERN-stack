import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import PrivComponent from './components/PrivateComponent';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route element={<PrivComponent/>}>
          <Route path="/" element={<ProductList />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/updateprd/:id" element={<UpdateProduct/>} />
          <Route path="/profile" element={<h1>Welcome to Profile</h1>} />
          </Route>

          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />

        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
