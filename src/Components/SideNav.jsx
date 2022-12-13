import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                &#9776;
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Capsitech</Offcanvas.Title>
                </Offcanvas.Header>
                <NavLink end to="/"  onClick={handleClose}>Home</NavLink>
                <NavLink to="/about" onClick={handleClose} >About</NavLink>
            </Offcanvas>

        </>
    )
}
export default SideNav;
