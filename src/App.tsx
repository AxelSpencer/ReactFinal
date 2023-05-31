import { Outlet, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import './App.css';
import Button from './components/Button';
import { ThemeContext } from './ThemeContext';
import ToggleSwitch from './components/ToggleSwitch';

function App() {
  const navigate = useNavigate();

  const handleShowHome = () => {
    navigate('home');
  };

  const handleShowProducts = () => {
    navigate('products');
  };

  const handleShowCart = () => {
    navigate('wishlist');
  };
  
  const { toggleTheme } = useContext(ThemeContext);

  const { theme } = useContext( ThemeContext );

  return (
    <div className="App">
      <hr />
      <Button onClick={() => handleShowHome()} className="button" bgcolor = {theme.btn} color = {theme.btncolor}>
        Home
      </Button>
      <Button onClick={() => handleShowProducts()} className="button" bgcolor = {theme.btn} color = {theme.btncolor}>
        Products
      </Button>
      <Button onClick={() => handleShowCart()} className="button" bgcolor = {theme.btn} color = {theme.btncolor}>
        Wishlist
      </Button>
      <ToggleSwitch onToggle={toggleTheme} />

      <hr />
      <Outlet />
    </div>
  );
}

export default App;
