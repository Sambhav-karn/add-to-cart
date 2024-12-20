import { Navbar } from "flowbite-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../MainContext";

export function Header() {
    let {count,cart} = useContext(cartContext)
  return (
    <Navbar fluid rounded className="shadow-lg sticky top-0 bg-white z-30">
      <Navbar.Brand href="https://flowbite-react.com">
        
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">E-Com App</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar href="#" active>
         <Link to={'/'}> Home </Link>
        </Navbar>
        <Navbar href="#">
        <Link to={'/cart'}> Cart ({cart.length}) </Link>
        </Navbar>
      </Navbar.Collapse>
    </Navbar>
    
  );
}
