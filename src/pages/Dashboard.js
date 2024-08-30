import React, { useContext, useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import { Link } from 'react-router-dom'
import { io } from 'socket.io-client';
import { FaCoins } from 'react-icons/fa';
import { PiMoney } from 'react-icons/pi';
import { PiUsersThreeFill } from "react-icons/pi"
import { RiShoppingCartFill } from "react-icons/ri"
import { TbMapPinCheck } from 'react-icons/tb'

import { Context } from "../App"

// const socket = io("http://localhost:27017")

// socket.emit("event", { val: 33 })

export default function Dashboard({ setToggle }) {
    const { url } = useContext(Context)
    const [counts, setCounts] = useState({ noOfFoodItems: '', noOfCustomers: '' })
    useEffect(() => {
        setToggle(true)

        const loadCounts = async () => {
            try {
                const c = await fetch(`${url}/admin/count`)
                const count = await c.json()
                setCounts(count)
                console.log(counts)
            } catch (err) {
                document.write("cant load counts")
            }
        }
        // loadCounts()

        var chart
        (async function () {
            const dataa = [
                { year: 2010, count: 10 },
                { year: 2011, count: 20 },
                { year: 2012, count: 15 },
                { year: 2013, count: 25 },
                { year: 2014, count: 22 },
                { year: 2015, count: 30 },
                { year: 2016, count: 28 },
            ];

            chart = new Chart(
                document.getElementById('ctx'),
                {
                    // type: 'line',
                    // data: {
                    //   datasets: [
                    //     {
                    //       label: 'Acquisitions by year',
                    //       data: data.map(row => row.count)
                    //     }
                    //   ]
                    //   labels: data.map(row => row.year),
                    // }
                    data: {
                        datasets: [
                            {
                                type: 'line',
                                label: 'Orders',
                                data: [10, 20, 70, 50, 80, 4, 33, 9, 16, 20, 30, 40, 20, 70, 50, 80, 20, 70, 50, 80, 4, 33, 9, 16, 20, 30, 40, 20, 70, 50, 80, 20, 70, 50, 80, 4, 33, 9, 16, 20, 30, 40, 20, 70, 50, 80, 20, 70, 50, 80, 4, 33, 9, 16, 20, 30, 40, 20, 70, 50, 80, 20, 70, 50, 80, 4, 33, 9, 16, 20, 30, 40, 20, 70, 50, 80, 20, 70, 50, 80, 4, 33, 9, 16, 20, 30, 40, 20, 70, 50, 80, 20, 70, 50, 80, 4, 33, 9, 16, 20, 30, 40, 20, 70, 50, 80, 20, 70, 50, 80, 4, 33, 9, 16, 20, 30, 40, 20, 70, 50, 80, 20, 70, 50, 80, 4, 33, 9, 16, 20, 30, 40, 20, 70, 50, 80]
                            },
                            {
                                type: 'bar',
                                label: 'Customers',
                                color: "black",
                                data: [20, 10, 20, 70, 50, 80, 4, 33, 9, 16, 70, 50, 80, 80, 4, 33, 9, 16, 70, 20, 70, 50, 80, 4, 33, 9, 16, 20, 30, 40, 20, 70, 50, 80, 20, 70, 50, 80, 4, 33, 9, 16, 20, 30, 40, 20, 70, 50, 80, 20, 70, 50, 80, 4, 33, 9, 16, 20, 30, 40, 20, 70, 50, 80, 20, 70, 50, 80, 4, 33, 9, 16, 20, 30, 40, 20, 70, 50, 80, 20, 70, 50, 80, 4, 33, 9, 16, 20, 30, 40, 20, 70, 50, 80, 20, 70, 50, 80, 4, 33, 9, 16, 20, 30, 40, 20, 70, 50, 80, 20, 70, 50, 80, 4, 33, 9, 16, 20, 30, 40, 20, 70, 50, 80, 20, 70, 50, 80, 4, 33, 9, 16, 20, 30, 40, 20, 70, 50, 80, 20, 70, 50, 80, 4, 33, 9, 16, 20, 30, 40, 20, 70, 50, 80, 20, 70, 50, 80, 4, 33, 9, 16, 20, 30, 40, 20, 70, 50, 80],
                            }
                        ],
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
                    }
                }
            )
        })();
        return () => { chart.destroy() }
    }, [])

    const [datadel, setdatadel] = useState("Worked!")
    const options = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    };
    const [date, setDate] = useState(new Date().toLocaleString('en-US', options) + ".")

    // const read = () => {
    //     socket.emit("hello", "Yeah!", (response) => {
    //         setdatadel(response);
    //     })
    // }

    function Card(props) {
        return (
            <div style={{ ...styles.card, backgroundColor: props.bg }}>
                <div>
                    <h2>{props.cardtextval}</h2>
                    <h6>{props.cardtext}</h6>
                </div>
                <div>{props.icon}</div>
            </div>
        )
    }
    const li = [{ n: "iuytrer" }, { n: "lkjhgfdsd" }]
    function PlateCard(props) {
        return (
            <div style={styles.plateCard}>
                <p style={styles.plateCard_p}>{props.title}</p>
                <hr />
                <ul style={{ listStyleType: "square", marginLeft: 22 }}>
                    {props.children?.map((i, index) => (
                        <li key={index}>{i}</li>
                    ))}
                </ul>
            </div>
        )
    }

    return (
        <div style={{ marginLeft: 234, marginRight: 6, marginTop: 40, overflow: "hidden" }}>
            <div style={{ display: "flex" }}>
                {/* <button onClick={() => { read() }}>click</button> */}
                <div style={styles.cardscontainer}>
                    <div style={{ display: "flex" }}>
                        <Card cardtext="Customers" cardtextval={counts.noOfCustomers} icon={<PiUsersThreeFill size={46} />} bg="orange" />
                        <Card cardtext="Total Items" cardtextval={counts.noOfFoodItems} icon={<RiShoppingCartFill size={46} />} bg="blue" />
                    </div>
                    <div style={{ display: "flex" }}>
                        <Card cardtext="Revenue" cardtextval="₦566,000" icon={<FaCoins color="white" size={46} />} bg="lime" />
                        <Card cardtext="Regions" cardtextval="5" icon={<TbMapPinCheck size={46} />} bg="coral" />
                    </div>
                    <div style={{ minWidth: "100%" }}>
                        <p style={{ marginLeft: 10, fontWeight: "bold" }}>Today :</p>
                        <p style={{ marginLeft: 10 }}>Total Customers' order: 700</p>
                        <p style={{ marginLeft: 10 }}>Total Order Expense: 28,000</p>
                        <p style={{ marginLeft: 10 }}>Total Order Income: 18,000</p>
                    </div>
                </div>
                <hr />
                <div>
                    <div style={styles.graph}>
                        <canvas id="ctx" style={{}}></canvas>
                    </div>
                </div>
            </div>
            <div style={{ width: "100%", marginTop: 4, backgroundColor: "#fff" }}>
                <p>#######</p>
                <hr style={{ marginTop: 4, marginBottom: 4 }} />
                <div style={{ height: "auto", display: "flex", justifyContent: "space-evenly" }}>
                    <PlateCard title="Top Earners" children={["Item 1", "Item 2", "Item 3"]} />
                    <PlateCard title="Promotions" children={["Company 1", "Company 2", "Company 3"]} />
                    <PlateCard title="Selected Reviews" children={["User 1", "User 2", "User 3"]} />
                    <PlateCard title="About to Expire" children={["Item 1", "Item 2", "Item 3"]} />
                </div>
                <div style={{ height: 4 }}></div>
            </div>
        </div>
    )
}


const styles = {
    card: {
        width: 228,
        height: 100,
        borderRadius: 6,
        margin: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        color: "#fff",
    },
    cardscontainer: {
        padding: 8,
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "#fff"
    },
    graph: {
        width: 602,
        height: "100%",
        // overFlow: "auto",
        // overFlowX: "auto",
        overflowX: "auto",
        backgroundColor: "#fff",
    },
    plateCard: {
        minWidth: 250,
        height: 300,
        marginLeft: 8,
        marginRight: 8,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        backgroundColor: "purple",
    },
    plateCard_p: {
        margin: 8,
        fontWeight: "bold",
        whiteSpace: "nowrap",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
}