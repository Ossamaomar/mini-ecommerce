import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";
import { DarkModeToggle } from "./DarkModeToggle";

export default function NavMenu() {
  return (
    <Navbar
      fluid
      className="shadow-xl !px-2 sm:!px-4 md:!px-8 lg:!px-20"
      rounded
    >
      <NavbarBrand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Mini e-Commerce
        </span>
      </NavbarBrand>

      <div className="flex md:order-2 items-center gap-2">
        <DarkModeToggle />
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        {/* <NavbarLink> */}
          <Link to={"/"}>Home</Link>
        {/* </NavbarLink> */}
        {/* <NavbarLink> */}
          <Link to={"/products"}>Products</Link>
        {/* </NavbarLink> */}
        {/* <NavbarLink> */}
          <Link to={"/cart"}>Cart</Link>
        {/* </NavbarLink> */}
      </NavbarCollapse>
    </Navbar>
  );
}
