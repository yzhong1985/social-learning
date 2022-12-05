import Container from "react-bootstrap/Container"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function TopNavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand to="/home">Social Learning</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                  <NavBarLink to="/home">Creation</NavBarLink>
                  <NavBarLink to="/browsing">Browsing</NavBarLink>
                  <NavBarLink to="/profile">Profile</NavBarLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  )
}

function NavBarLink({ to, children, ...props}) {
    const resovePath = useResolvedPath(to)
    const isActive = useMatch({ path:resovePath.pathname, end: true }) 

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}


