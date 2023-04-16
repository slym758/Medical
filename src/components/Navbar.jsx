import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import { AiFillInstagram, AiFillFacebook, AiOutlineUser } from "react-icons/ai";
import img from "../assets/logo.png";
import "../App.css";

function navbar() {
  const activeLink = "blue";
  const nomalLink = "";
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo" src={img} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav_menu">
              <NavLink
                className="nav_item"
                style={({ isActive }) => ({
                  color: isActive ? activeLink : nomalLink,
                })}
                to="/"
              >
                Anasayfa
              </NavLink>

              <NavLink
                className="nav_item"
                style={({ isActive }) => ({
                  color: isActive ? activeLink : nomalLink,
                })}
                to="/about"
              >
                Hakkımızda
              </NavLink>

              <NavLink
                className="nav_item"
                style={({ isActive }) => ({
                  color: isActive ? activeLink : nomalLink,
                })}
                to="/product"
              >
                Ürünlerimiz
              </NavLink>

              <NavLink
                className="nav_item"
                style={({ isActive }) => ({
                  color: isActive ? activeLink : nomalLink,
                })}
                to="/contact"
              >
                İletişim
              </NavLink>
            </Nav>
            <Nav className="nav_right">
              <Nav.Link className="nav_item_right">
                <i>
                  <AiOutlineUser />
                </i>
              </Nav.Link>
              <Nav.Link className="nav_item_right">
                <i>
                  <AiFillFacebook />
                </i>
              </Nav.Link>

              <Nav.Link className="nav_item_right">
                <i>
                  <AiFillInstagram />
                </i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default navbar;
