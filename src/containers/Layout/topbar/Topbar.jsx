import React, { useEffect, useState } from "react";
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
  PopoverBody,
} from "reactstrap";
import axios from "axios";

const Topbar = () => {
  const [popoverOpen, setPopoverOpen] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  async function fetchData() {
    try {
      const { data } = await axios.get("user/me");
      setUser(data);
    } catch (e) {}
  }
  useEffect(() => {
    (async () => {
      fetchData();
    })();
  }, []);

  const submit = async (e) => {
    e.preventDefault();

    const response = await axios
      .post(
        "user/login-or-register",
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res.data.token}`;
        fetchData();
      })
      .catch(function (err) {
        if (err.response) {
          switch (err.response.status) {
            case 400:
              setPopoverOpen(err.response.data.message);
              break;
            case 401:
              setPopoverOpen(err.response.data.message);
              break;
          }
        }
      });
  };

  const logout = async () => {
    await axios.post("user/logout", {}, { withCredentials: true });
    setUser(null);
    axios.defaults.headers.common["Authorization"] = "";
  };

  return (
    <Navbar color="dark" expand="md" dark className="fixed-top">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <NavbarBrand href="/" className="topbar__logo mr-auto">
            <TheaterIcon className="topbar__logo-icon mb-1" />
            FUNNY MOVIES
          </NavbarBrand>
          <ul className="navbar-nav me-auto mb-2 mb-md-0"></ul>
          {!user ? (
            <Form inline className="d-flex" onSubmit={submit}>
              <Input
                id="userEmail"
                name="email"
                placeholder="Email"
                type="email"
                className="me-5"
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                id="userPassword"
                name="password"
                placeholder="Password"
                type="password"
                className="me-5"
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button id="Popover1" className="w-100">
                Register / Login
              </Button>
              <Popover
                placement="bottom"
                isOpen={popoverOpen !== "" ? true : false}
                target="Popover1"
              >
                <PopoverBody>{popoverOpen}</PopoverBody>
              </Popover>
            </Form>
          ) : (
            <div className="d-flex">
              <Label className="navbar-text me-5 mt-auto mb-auto">
                {user?.email}
              </Label>
              <Button href="/share" className="me-5 mt-auto mb-auto">
                Share a movie
              </Button>
              <Button className="mt-auto mb-auto" onClick={logout}>
                Logout
              </Button>
            </div>
          )}
        </div>
      </div>
    </Navbar>
  );
};

export default Topbar;
