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
} from "reactstrap";



const Topbar = () => {
    const [isLogin, setIsLogin] = useState(0);
    return (
        <Navbar color="dark" expand="md" dark className="fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <NavbarBrand href="/" className="topbar__logo mr-auto">
                <TheaterIcon className="topbar__logo-icon" />
                FUNNY MOVIES
              </NavbarBrand>
              <ul className="navbar-nav me-auto mb-2 mb-md-0"></ul>
              {isLogin?(
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
               
                <Button className="w-100">Register / Login</Button>
              </Form>
              ):(
                  <div className="d-flex"> 
                        <Label className="navbar-text me-5">
                            tam@tam.com
                        </Label>
                        <Button className="me-5">Share a movie</Button>
                       <Button>Logout</Button>
                  </div>
                 
              )}
              
            </div>
          </div>
        </Navbar>
      )
};

export default Topbar;
