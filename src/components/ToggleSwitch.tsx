import Button from "./Button";
import { ThemeContext } from '../ThemeContext';
import { useContext } from 'react';

const ToggleSwitch = ({ onToggle }) => {
  const { theme } = useContext( ThemeContext );
  return (
    <>
      <Button className="button" onClick={onToggle} bgcolor = {theme.btn} color = {theme.btncolor}>Theme[{theme.name}]</Button>
    </>
  );
};

export default ToggleSwitch;