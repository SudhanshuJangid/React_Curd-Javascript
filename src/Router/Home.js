import React, { useState, useEffect, createContext } from "react";
import { Schehma } from "../Components/Sechma.jsx";
import { useFormik } from "formik";
import Modal from 'react-bootstrap/Modal';
import Mform from "../Components/Mform";
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Button, Container, Col, Row } from "react-bootstrap";
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import Form from 'react-bootstrap/Form';
export const EmplName = createContext();


const Home = () => {
    const onSubmit = async (values, action) => {
        console.log(values);
        console.log(action);
        await new Promise((reslove) => setTimeout(reslove, 2000));
        // action.resetForm();
    }

    const initialUser = {
        EmplName: "",
        FatherN: "",
        Bod: "",
        Blood: "",
        Gender: "",
        Status: "",
        Passport: "",
        Adhar: "",
        Moblie: "",
        Paddress: "",
        Email: "",
        Pmaddress: "",
        photo: "",
        sign: "",
        Role: "",
        Baccount: "",
        AccountH: "",
        Panno: "",
        Bankadd: "",
    }

    const [newUser, setNewUser] = useState(initialUser);

    const [myData, setMyData] = useState([]);



    // const handleData = (e) => {
    //     // console.log(e.target.value, "sdcvsdf-------------------------")
    //     setNewUser({ ...newUser, [e.target.name]: e.target.value });
    // }

    useEffect(() => {
        loadUser();
    }, [newUser])

    const [toggle, setToggle] = useState(false);

    const loadUser = () => {
        axios.get("https://localhost:7276/api/CrudOperation/Curd Operation Modal", {
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then((res) => {
                setMyData(res.data)
            });
    }

    const postData = () => {
        console.log(values);
        axios.post("https://localhost:7276/api/CrudOperation", values, {
            headers: { "Content-Type": "multipart/form-data" },
        }).then((res) => {
            loadUser()
            handleClose()
            setNewUser(initialUser)
        });

    }

    const EditUserDetails = (item) => {
        // console.log(item);
        handleShow();
        setToggle(true);
        setValues(item);
    }

    const updateUser = () => {
        console.log(newUser);
        axios.put(`https://localhost:7276/api/CrudOperation/${values.Id}`, values, {
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then((res) => {
                setValues(res.data);
                console.log(res.data);
                loadUser()
                handleClose()

            })

    }

    //Delete axios...
    function deleteUser() {
        handleS()
    }
    const deleteData = (id) => {
        axios.delete(`https://localhost:7276/api/CrudOperation/${id}`)
            .then(() => {
                loadUser();
            })
        handleC()
    }


    const { setValues, values, errors, touched, handleBlur, isSubmitting, handleChange, handleSubmit } = useFormik({
        initialValues: initialUser,
        validationSchema: Schehma,
        onSubmit
    })
    ///// console.log(errors)

    //image Concept....
    const [previmage, setPrevimage] = useState(null)
    const [prevsign, setPrevsign] = useState(null)
    const handleimg = (e) => {
        setValues({ ...values, [e.target.name]: e.target.files[0] });
        //preview....
        setPrevimage(URL.createObjectURL(e.target.files[0]))
        // setPrevsign(URL.createObjectURL(e.target.files[0]))
    }
    
    const handlesign = (e) => {
        setValues({ ...values, [e.target.name]: e.target.files[0] });
        //preview....
        //setPrevimage(URL.createObjectURL(e.target.files[0]))
        setPrevsign(URL.createObjectURL(e.target.files[0]))
    }
    //End Here....

    //button close Modal... and show Show Modal....
    const [show, setShow] = useState(false);
    const handleClose = () => { setNewUser(initialUser); setShow(false); };
    const handleShow = () => {
        setShow(true);
        setToggle(false);
    }


    //.......
    //check start box...
    const [check, setCheckvalue] = useState(false);
    const handleCheck = (e) => {
        if (e.target.checked) {
            setCheckvalue(true);
            newUser.Pmaddress = newUser.Paddress;
        }
        else {
            setCheckvalue(false);
            newUser.Pmaddress = "";
        }
    }
    //check box...

    //delete Modal....
    const [showD, setShowD] = useState(false);
    const handleC = () => setShowD(false);
    const handleS = () => setShowD(true);


    //Search fliter....
    const [searchterm, setSearch] = useState('');
    return (
        <>
            <Container>
                <EmplName.Provider value={{
                    newUser,
                    postData,
                    updateUser,
                    show,
                    handleClose,
                    handleShow,
                    check,
                    handleCheck,
                    handleimg,
                    previmage,
                    prevsign,
                    handlesign,
                    toggle,
                    values, errors, touched, handleBlur, isSubmitting, handleChange, handleSubmit
                }}>

                    <Mform />
                </EmplName.Provider>
                <h1>Home....</h1>



                <Row>
                    <Col lg={3}>
                        <Form.Control className="my-4" size="sm" type="text" placeholder="Search bar" onChange=
                            {(e) => setSearch(e.target.value)} />
                    </Col>
                    <Col lg={9}></Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Employee Name</th>
                                        <th>FatherN</th>
                                        <th>Salary</th>
                                        {/* <th>Photo</th> */}
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        myData.filter((find) => {
                                            if (searchterm === "") {
                                                return find;
                                            } else if (find.EmplName.toLowerCase().includes(searchterm.toLowerCase())) {
                                                return find;
                                            }
                                        }).map((item, index) =>
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.EmplName}</td>
                                                <td>{item.FatherN}</td>
                                                <td>{item.Salary}</td>
                                                {/* <td>
                                                    <img
                                                        src={`/uploads/${item.photo}`}
                                                        style={{ height: "78px" }} />
                                                </td> */}
                                                <td><Button className="btn btn-warning me-2" onClick={() => EditUserDetails(item)}><AiFillEdit /></Button>

                                                    <Button className="btn btn-danger ms-2" onClick={deleteUser} ><AiFillDelete /></Button></td>

                                                {/* //delete Modal.... */}
                                                <Modal show={showD} onHide={handleC}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Modal heading</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>plz Confirm if want to delete data from table...!</Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={handleC}>
                                                            Close
                                                        </Button>
                                                        <Button className="btn btn-danger" onClick={() => deleteData(item.Id)}>
                                                            Delete data
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>
                                            </tr>

                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>


            </Container>
        </>
    )
}
export default Home;