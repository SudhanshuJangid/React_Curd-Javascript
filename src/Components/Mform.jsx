import React, { useContext } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { AiFillCaretRight, AiFillSave, AiOutlineClose } from 'react-icons/ai';
import { EmplName } from "../Router/Home";


const Mform = () => {

    const {
        // newUser,
        // handleData,
        postData,
        updateUser,
        show,
        handleClose,
        handleShow,
        handleimg,
        handleCheck,
        previmage,
        prevsign,
        handlesign,
        toggle,
        values, errors, touched, handleBlur, isSubmitting, handleChange, handleSubmit
    } = useContext(EmplName)

    return (
        <>
            <Container>
                <Row>
                    <Col lg={3} className="p-0">
                        <Button variant="primary" className="" onClick={handleShow}
                        >
                            Add Employe
                        </Button></Col>
                </Row>
            </Container>

            <Modal size="xl" show={show} onHide={handleClose}>

                <Form autoComplete="off" onSubmit={handleSubmit}>
                    <div>
                        <Row className="m-2 mt-3 ">
                            <Col lg={3} className="d-flex align-items-center">
                                <h6>Basic Informations</h6>
                            </Col>
                            <Col lg={7}>
                                <hr />
                            </Col>

                            <Col lg={2}>
                                <Button variant="outline-warning mx-2" type="submit" disabled={isSubmitting} onClick={toggle ? updateUser : postData}><AiFillSave /></Button>
                                <Button variant="outline-danger" onClick={handleClose}><AiOutlineClose /></Button>
                            </Col>
                        </Row>
                    </div>

                    <Row className="mx-3">
                        <Col lg={6}>
                            <Row>
                                <Col lg={4}>
                                    <Form.Label>Empl. Name</Form.Label>
                                </Col>
                                <Col lg={1}></Col>
                                <Col lg={6}>
                                    <Form.Control type="text" size="sm" name="EmplName" id="EmplName" value={values.EmplName} onChange={handleChange} onBlur={handleBlur} className={errors.EmplName && touched.EmplName ? "input-error" : ""} />
                                    {errors.EmplName && touched.EmplName && <small className="error-text">{errors.EmplName}</small>}
                                </Col>
                            </Row>
                            <Row className="pt-2">
                                <Col lg={4}>
                                    <Form.Label>Birth Date</Form.Label>
                                </Col>
                                <Col lg={1}></Col>
                                <Col lg={6}>
                                    <Form.Control type="date" size="sm" name="Bod" id="Bod" value={values.Bod} onChange={handleChange}
                                        onBlur={handleBlur} className={errors.Bod && touched.Bod ? "input-error" : ""} />
                                    {errors.Bod && touched.Bod && <small className="error-text">{errors.Bod}</small>}
                                </Col>
                            </Row>
                            <Row className="pt-2">
                                <Col lg={4}>
                                    <Form.Label>Gender</Form.Label>
                                </Col>
                                <Col lg={1}></Col>
                                <Col lg={6}>
                                    <Form.Select size="sm" name="Gender" id="Gender" value={values.Gender} onChange={handleChange}
                                        onBlur={handleBlur} className={errors.Gender && touched.Gender ? "input-error" : ""}>
                                        <option>Select</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </Form.Select>
                                    {errors.Gender && touched.Gender && <small className="error-text">{errors.Gender}</small>}
                                </Col>
                            </Row>
                            <Row className="pt-2">
                                <Col lg={4}>
                                    <Form.Label>Passport No</Form.Label>
                                </Col>
                                <Col lg={1}></Col>
                                <Col lg={6}>
                                    <Form.Control type="text" size="sm" name="Passport" id="Passport" value={values.Passport} onChange={handleChange}
                                        onBlur={handleBlur} className={errors.Passport && touched.Passport ? "input-error" : ""} />
                                    {errors.Passport && touched.Passport && <small className="error-text">{errors.Passport}</small>}
                                </Col>
                            </Row>
                            <Row className="pt-2">
                                <Col lg={4}>
                                    <Form.Label>Mobile No</Form.Label>
                                </Col>
                                <Col lg={1}></Col>
                                <Col lg={6}>
                                    <Form.Control type="text" size="sm" name="Moblie" id="Moblie" value={values.Moblie} onChange={handleChange}
                                        onBlur={handleBlur} className={errors.Moblie && touched.Moblie ? "input-error" : ""} />
                                    {errors.Moblie && touched.Moblie && <small className="error-text">{errors.Moblie}</small>}
                                </Col>
                            </Row>
                            <Row className="pt-2">
                                <Col lg={4}>
                                    <Form.Label>Present Address</Form.Label>
                                </Col>
                                <Col lg={1}></Col>
                                <Col lg={7}>
                                    <Form.Control as="textarea" id="Paddress" name="Paddress" value={values.Paddress} onChange={handleChange}
                                        onBlur={handleBlur} className={errors.Paddress && touched.Paddress ? "input-error" : ""}></Form.Control>
                                    {errors.Paddress && touched.Paddress && <small className="error-text">{errors.Paddress}</small>}
                                </Col>
                            </Row>
                            <Row className="pt-2">
                                <Col lg={4}>
                                    <Form.Label>Candidate Image</Form.Label>
                                </Col>
                                <Col lg={1}></Col>
                                <Col lg={7}>
                                    <Form.Control type="file" size="sm" name="photo" id="photo" onChange={handleimg} />
                                    <img src={previmage} alt="" />
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6}>
                            <Row>
                                <Col lg={1}></Col>
                                <Col lg={4}>
                                    <Form.Label>Father Name</Form.Label>
                                </Col>
                                <Col lg={6}>
                                    <Form.Control type="text" size="sm" name="FatherN" value={values.FatherN} onChange={handleChange}
                                        onBlur={handleBlur} className={errors.FatherN && touched.FatherN ? "input-error" : ""} />
                                    {errors.FatherN && touched.FatherN && <small className="error-text">{errors.FatherN}</small>}
                                </Col>
                            </Row>
                            <Row className="pt-2">
                                <Col lg={1}></Col>
                                <Col lg={4}>
                                    <Form.Label>Blood Group</Form.Label>
                                </Col>
                                <Col lg={6}>
                                    <Form.Select size="sm" name="Blood" value={values.Blood} onChange={handleChange}
                                        onBlur={handleBlur} className={errors.Blood && touched.Blood ? "input-error" : ""}>
                                        <option>Select</option>
                                        <option value="O-">O-</option>
                                        <option value="B+">B+</option>
                                        <option value="A-">A-</option>
                                        <option value="A+">A+</option>
                                    </Form.Select>
                                    {errors.Blood && touched.Blood && <small className="error-text">{errors.Blood}</small>}
                                </Col>
                            </Row>
                            <Row className="pt-2">
                                <Col lg={1}></Col>
                                <Col lg={4}>
                                    <Form.Label>Marital Status</Form.Label>
                                </Col>
                                <Col lg={6}>
                                    <Form.Select size="sm" name="Status" value={values.Status} onChange={handleChange}
                                        onBlur={handleBlur} className={errors.Status && touched.Status ? "input-error" : ""}>
                                        <option>Select</option>
                                        <option value="Team1">Team1</option>
                                        <option value="Team2">Team2</option>
                                        <option value="Team3">Team3</option>
                                    </Form.Select>
                                    {errors.Status && touched.Status && <small className="error-text">{errors.Status}</small>}
                                </Col>
                            </Row>
                            <Row className="pt-2">
                                <Col lg={1}></Col>
                                <Col lg={4}>
                                    <Form.Label>Aadhar Number</Form.Label>
                                </Col>
                                <Col lg={6}>
                                    <Form.Control type="text" size="sm" name="Adhar" id="Adhar" value={values.Adhar} onChange={handleChange}
                                        onBlur={handleBlur} className={errors.Adhar && touched.Adhar ? "input-error" : ""}></Form.Control>
                                    {errors.Adhar && touched.Adhar && <small className="error-text">{errors.Adhar}</small>}
                                </Col>
                            </Row>
                            <Row className="pt-2">
                                <Col lg={1}></Col>
                                <Col lg={4}>
                                    <Form.Label>Card No/Role</Form.Label>
                                </Col>
                                <Col lg={3} className="inbox pe-0">
                                    <Form.Select size="sm" name="Role" id="Role" value={values.Role} onChange={handleChange}
                                        onBlur={handleBlur} className={errors.Role && touched.Role ? "input-error" : ""}>
                                        <option value="Select">Select</option>
                                        <option value="Intern">Intern</option>
                                        <option value="Employe">Employe</option>
                                        <option value="Manager">Manager </option>
                                    </Form.Select>
                                    {errors.Role && touched.Role && <small className="error-text">{errors.Role}</small>}
                                </Col>
                                <Col lg={3} className="inbox ps-0">
                                    {/* <Form.Control type="text" size="sm" /> */}
                                </Col>
                            </Row>
                            <Row className="pt-2">
                                <Col lg={1}></Col>
                                <Col lg={4}>
                                    <Form.Label>Email</Form.Label>
                                </Col>
                                <Col lg={7}>
                                    <Form.Control type="text" size="sm" name="Email" id="Email" value={values.Email} onChange={handleChange}
                                        onBlur={handleBlur} className={errors.Email && touched.Email ? "input-error" : ""} />
                                    {errors.Email && touched.Email && <small className="error-text">{errors.Email}</small>}
                                </Col>
                            </Row>
                            <Row className="pt-2">
                                <Col lg={1}></Col>
                                <Col lg={4}>
                                    <Form.Label>Premanent Address</Form.Label>
                                </Col>
                                <Col lg={7}>
                                    <Form.Control as="textarea" id="Pmaddress" name="Pmaddress" value={values.Pmaddress} onChange={handleChange}
                                        onBlur={handleBlur} className={errors.Pmaddress && touched.Pmaddress ? "input-error" : ""}></Form.Control>
                                    {errors.Pmaddress && touched.Pmaddress && <small className="error-text">{errors.Pmaddress}</small>}
                                </Col>
                            </Row>
                            <Row className="pt-2">
                                <Col lg={1}></Col>
                                <Col lg={4}>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <small><Form.Check type="checkbox" label="Same as present Addres." onChange={handleCheck} /></small>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="pt-2">
                                <Col lg={4}>
                                    <Form.Label>Candidate Sign</Form.Label>
                                </Col>
                                <Col lg={1}></Col>
                                <Col lg={7}>
                                    <Form.Control type="file" size="sm" name="sign" id="sign" onChange={handlesign} />
                                    <img src={prevsign} alt="" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <div>
                        <Row className="m-2 mt-3">
                            <Col lg={2} className="d-flex align-items-center">
                                <h6>Bank Details</h6>
                            </Col>
                            <Col lg={10}>
                                <hr />
                            </Col>
                        </Row>
                    </div>

                    <Row className="mx-3">
                        <Col lg={6}>
                            <Row className="pt-2">
                                <Col lg={4}>
                                    <Form.Label>Bank Account No</Form.Label>
                                </Col>
                                <Col lg={1}></Col>
                                <Col lg={6}>
                                    <Form.Control type="text" size="sm" name="Baccount" id="Baccount" value={values.Baccount} onChange={handleChange}
                                        onBlur={handleBlur} className={errors.Baccount && touched.Baccount ? "input-error" : ""} />
                                    {errors.Baccount && touched.Baccount && <small className="error-text">{errors.Baccount}</small>}
                                </Col>
                            </Row>
                            <Row className="pt-2">
                                <Col lg={4}>
                                    <Form.Label>Account Holder Name</Form.Label>
                                </Col>
                                <Col lg={1}></Col>
                                <Col lg={6}>
                                    <Form.Control type="text" size="sm" name="AccountH" id="AccountH" value={values.AccountH} onChange={handleChange}
                                        onBlur={handleBlur} className={errors.AccountH && touched.AccountH ? "input-error" : ""} />
                                    {errors.AccountH && touched.AccountH && <small className="error-text">{errors.AccountH}</small>}
                                </Col>
                            </Row>
                            <Row className="pt-2">
                                <Col lg={4}>
                                    <Form.Label>Pan No.</Form.Label>
                                </Col>
                                <Col lg={1}></Col>
                                <Col lg={6}>
                                    <Form.Control type="text" size="sm" name="Panno" id="Panno" value={values.Panno} onChange={handleChange}
                                        onBlur={handleBlur} className={errors.Panno && touched.Panno ? "input-error" : ""} />
                                    {errors.Panno && touched.Panno && <small className="error-text">{errors.Panno}</small>}
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6}>
                            <Row className="pt-2">
                                <Col lg={1}></Col>
                                <Col lg={4}>
                                    <Form.Label>Bank Name/IFSC Code</Form.Label>
                                </Col>
                                <Col lg={3} className="inbox pe-0">
                                    <Form.Control type="text" size="sm" placeholder="Bank N." />
                                </Col>
                                <Col lg={3} className="inbox ps-0">
                                    <Form.Control type="text" size="sm" placeholder="IFSC C." />
                                </Col>
                            </Row>
                            <Row className="pt-2">
                                <Col lg={1}></Col>
                                <Col lg={4}>
                                    <Form.Label>Bank Address</Form.Label>
                                </Col>
                                <Col lg={7}>
                                    <Form.Control as="textarea" id="Bankadd" name="Bankadd" value={values.Bankadd} onChange={handleChange}
                                        onBlur={handleBlur} className={errors.Bankadd && touched.Bankadd ? "input-error" : ""}></Form.Control>
                                    {errors.Bankadd && touched.Bankadd && <small className="error-text">{errors.Bankadd}</small>}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Form>
            </Modal>

        </>


    );
}
export default Mform