import React, { useState } from "react";
import TheaterIcon from "mdi-react/TheaterIcon";

import {
  Navbar,
  NavbarBrand,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Popover,
  PopoverHeader,
  PopoverBody
} from "reactstrap";

const Topbar = () => {
  const [isLogin, setIsLogin] = useState(0);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () =>{
    setPopoverOpen(!popoverOpen)
  }
  return (
    <Navbar color="dark" expand="md" dark className="fixed-top">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <NavbarBrand href="/" className="topbar__logo mr-auto">
            <TheaterIcon className="topbar__logo-icon mb-1" />
            FUNNY MOVIES
          </NavbarBrand>
          <ul className="navbar-nav me-auto mb-2 mb-md-0"></ul>
          {isLogin ? (
            <Form inline className="d-flex">
              <Input
                id="userEmail"
                name="email"
                placeholder="Email"
                type="email"
                className="me-5"
              />

              <Input
                id="userPassword"
                name="password"
                placeholder="Password"
                type="password"
                className="me-5"
              />

              <Button id="Popover1" className="w-100" onClick={toggle}>Register / Login</Button>
              <Popover
                placement="bottom"
                isOpen={popoverOpen}
                target="Popover1"
                toggle={toggle}
              >
                <PopoverBody>
                  Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                  Pellentesque ornare sem lacinia quam venenatis vestibulum.
                </PopoverBody>
              </Popover>
            </Form>
          ) : (
            <div className="d-flex">
              <Label className="navbar-text me-5 mt-auto mb-auto">tam@tam.com</Label>
              <Button href="/share" className="me-5 mt-auto mb-auto">Share a movie</Button>
              <Button className="mt-auto mb-auto">Logout</Button>
            </div>
          )}
        </div>
      </div>
    </Navbar>
  );
};

export default Topbar;
