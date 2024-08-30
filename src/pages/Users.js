import React, { useContext, useState } from "react";
import { Context } from '../App'
import "../style.css"


export default function Users() {
    const [users, setUsers] = useState([
        {
            id: "c1",
            name: "mtyubbbb",
            maxi_price: 50,
            maxi_unit: 1,
            mini_price: 15,
            mini_unit: 10,
            multiplier: 1,
            checkState: false,
            initialState: false,
            category: "drink"
        },
        {
            id: "c2",
            name: "sbsfs",
            maxi_price: 30,
            maxi_unit: 2,
            mini_price: 2,
            mini_unit: 9,
            multiplier: 1,
            checkState: false,
            initialState: false,
            category: "drink"
        },
        {
            id: "c3",
            name: "fsvsfs",
            maxi_price: 90,
            maxi_unit: 0,
            mini_price: 3,
            mini_unit: 5,
            multiplier: 1,
            checkState: false,
            initialState: false,
            category: "cereal"
        }
    ])

    const { textInput } = useContext(Context)
    const matchCheck = textInput.toUpperCase()
    const filteredData = users?.filter(item => {
        return matchCheck === item.name.toUpperCase().substr(item.name.toUpperCase().indexOf(matchCheck), textInput.length)
    })
    return (
        <>
            <div style={{ width: "100%" }}>
                <nav style={styles.nav}>
                    <h3>Orders</h3>
                </nav>
                {true ?
                    <table style={{ paddingTop: 58, overflowY: "scroll", width: "100%" }}>
                        <thead style={{ position: "sticky", top: 60, backgroundColor: "#f8f9fa", }}>
                            <tr>
                                <th>userId</th>
                                <th>E-mail</th>
                                <th>Date Created</th>
                                <th>Last Purchase Date</th>
                                <th>Complaints</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>660a1f75f6a1064a13de91d7</td>
                                <td>peterolanrewaju22@gmail.com</td>
                                <td>{Date.now()}</td>
                                <td>{Date.now()}</td>
                                <td>
                                    <div>eafe</div>
                                    <div>eafe</div>
                                </td>
                            </tr>
                            {matchCheck === "" ?
                                users?.map((i) =>
                                    <tr key={i._id || i.id}>
                                        <td>{i.name}</td>
                                        <td>{i.mini_price}</td>
                                        <td>{i.mini_unit}</td>
                                        <td>{i.maxi_price}</td>
                                        <td>{i.maxi_unit}</td>
                                    </tr>
                                )
                                :
                                filteredData?.map((i) =>
                                    <tr key={i._id || i.id}>
                                        <td>{i.name}</td>
                                        <td>{i.mini_price}</td>
                                        <td>{i.mini_unit}</td>
                                        <td>{i.maxi_price}</td>
                                        <td>{i.maxi_unit}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    : <div style={{ textAlign: "center", fontWeight: "bold" }}>
                        <div className="loader"></div>
                        <div>Loading...</div>
                    </div>
                }
            </div>
        </>
    )
}

const styles = {
    nav: {
        width: "100%",
        height: 26,
        display: "flex",
        justifyContent: "space-betwwen",
        marginTop: 34,
        position: "fixed",
        backgroundColor: "#78759f",
        zIndex: 4
    }
}