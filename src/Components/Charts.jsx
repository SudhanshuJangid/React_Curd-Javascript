import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Sector, BarChart, Bar } from 'recharts';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

const Charts = () => {
    const [chartD, setChartD] = useState([]);
    const [salaryData, setSalaryData] = useState([]);


    useEffect(() => {
        loadUse()
        getSalaries()
    }, [setChartD, setSalaryData])

    const loadUse = async () => {
        await axios.get("https://localhost:7276/api/CrudOperation").then((res) => {
            setChartD(res.data)
        }).catch(er => console.error(er));
    }

    console.log("sdfs")
    const getSalaries = async () => {
        await axios.get("https://localhost:7276/api/Salary")
            .then(res => {
                const employeeData = [];
                const dataArr = res.data.map(el => ({ salary: el.Salary, team: el.Teams }));
                let teamArr = dataArr.map(el => (el.team));
                teamArr = teamArr.filter((el, index) => teamArr.indexOf(el) === index);
                // console.log(teamArr);
                for (let team of teamArr) {
                    let salaryArr = dataArr.filter(el => el.team === team);
                    salaryArr = salaryArr.map(el => (el.salary));
                    employeeData.push({ name: team, ...salaryArr });
                }
                //console.log(employeeData)
                setSalaryData(employeeData);
            })
            .catch(er => console.error(er))
    }




    return (
        <>
            <Container>
                <Row>
                    <Col lg={6}>
                        <h3>hello Charts....</h3>
                        <BarChart width={730} height={250} data={chartD}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="Status" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Role" fill="#8884d8" />
                            <Bar dataKey="EmplName" fill="#8884d8" />
                            <Bar dataKey="Salary" fill="#8884d8" />
                            <Bar dataKey="Gname" fill="#8884d8" />
                            <Bar dataKey="GSalary" fill="#8884d8" />
                        </BarChart>
                    </Col>
                    <Col>
                        {/* <BarChart width={730} height={250} data={salaryData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="0" fill="#8884d8" />
                            <Bar dataKey="1" fill="#8884d8" />
                            <Bar dataKey="2" fill="#8884d8" />
                        </BarChart> */}
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Charts;
