import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router"

export const Navigation = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="posts">Posts</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}