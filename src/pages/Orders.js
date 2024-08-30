import React, { useContext, useEffect, useState } from "react";
import { Context } from "../App"

export default function Orders() {
    const { url } = useContext(Context)
    const [todayOrders, setTodayOrders] = useState({
        // "660a1f75f6a1064a13de91d7": [
        //     [
        //         {
        //             "name": "dsssxd",
        //             "mini_unit": "litre",
        //             "mini_price": 44,
        //             "mini_quantity": 1,
        //             "maxi_unit": "litre",
        //             "maxi_price": 54,
        //             "maxi_quantity": 0,
        //             "category": "tuber",
        //             "cost": 44
        //         },
        //         {
        //             "name": "ann",
        //             "mini_unit": "ann",
        //             "mini_price": 5,
        //             "mini_quantity": 1,
        //             "maxi_unit": "ann",
        //             "maxi_price": 5,
        //             "maxi_quantity": 0,
        //             "category": "ann",
        //             "cost": 5
        //         },
        //         {
        //             "name": "dsssxd",
        //             "mini_unit": "litre",
        //             "mini_price": 44,
        //             "mini_quantity": 1,
        //             "maxi_unit": "litre",
        //             "maxi_price": 54,
        //             "maxi_quantity": 0,
        //             "category": "tuber",
        //             "cost": 44
        //         },
        //         // {
        //         //     "Total_Cost": 93
        //         // }
        //     ],
        //     [
        //         {
        //             "name": "dsssxduuuuuu",
        //             "mini_unit": "litre",
        //             "mini_price": 44,
        //             "mini_quantity": 1,
        //             "maxi_unit": "litre",
        //             "maxi_price": 54,
        //             "maxi_quantity": 0,
        //             "category": "tuber",
        //             "cost": 44
        //         },
        //         // {
        //         //     "Total_Cost": 44
        //         // }
        //     ],
        //     [
        //         {
        //             "name": "dsssxd",
        //             "mini_unit": "litre",
        //             "mini_price": 44,
        //             "mini_quantity": 1,
        //             "maxi_unit": "litre",
        //             "maxi_price": 54,
        //             "maxi_quantity": 0,
        //             "category": "tuber",
        //             "cost": 44
        //         },
        //         // {
        //         //     "Total_Cost": 44
        //         // }
        //     ],
        //     [
        //         {
        //             "name": "ann",
        //             "mini_unit": "ann",
        //             "mini_price": 5,
        //             "mini_quantity": 1,
        //             "maxi_unit": "ann",
        //             "maxi_price": 5,
        //             "maxi_quantity": 0,
        //             "category": "ann",
        //             "cost": 5
        //         },
        //         {
        //             "name": "cereal",
        //             "mini_unit": "ann",
        //             "mini_price": 5,
        //             "mini_quantity": 1,
        //             "maxi_unit": "ann",
        //             "maxi_price": 5,
        //             "maxi_quantity": 0,
        //             "category": "cereal",
        //             "cost": 5
        //         },
        //         // {
        //         //     "Total_Cost": 10
        //         // }
        //     ]
        // ],
        // "660a1f75f6a1064a13de9d7": [
        //     [
        //         {
        //             "name": "dsssxd",
        //             "mini_unit": "litre",
        //             "mini_price": 44,
        //             "mini_quantity": 1,
        //             "maxi_unit": "litre",
        //             "maxi_price": 54,
        //             "maxi_quantity": 0,
        //             "category": "tuber",
        //             "cost": 44
        //         },
        //         {
        //             "name": "ann",
        //             "mini_unit": "ann",
        //             "mini_price": 5,
        //             "mini_quantity": 1,
        //             "maxi_unit": "ann",
        //             "maxi_price": 5,
        //             "maxi_quantity": 0,
        //             "category": "ann",
        //             "cost": 5
        //         },
        //         {
        //             "name": "dsssxd",
        //             "mini_unit": "litre",
        //             "mini_price": 44,
        //             "mini_quantity": 1,
        //             "maxi_unit": "litre",
        //             "maxi_price": 54,
        //             "maxi_quantity": 0,
        //             "category": "tuber",
        //             "cost": 44
        //         },
        //         // {
        //         //     "Total_Cost": 93
        //         // }
        //     ],
        //     [
        //         {
        //             "name": "dsssxduuuuuu",
        //             "mini_unit": "litre",
        //             "mini_price": 44,
        //             "mini_quantity": 1,
        //             "maxi_unit": "litre",
        //             "maxi_price": 54,
        //             "maxi_quantity": 0,
        //             "category": "tuber",
        //             "cost": 44
        //         },
        //         // {
        //         //     "Total_Cost": 44
        //         // }
        //     ],
        //     [
        //         {
        //             "name": "dsssxd",
        //             "mini_unit": "litre",
        //             "mini_price": 44,
        //             "mini_quantity": 1,
        //             "maxi_unit": "litre",
        //             "maxi_price": 54,
        //             "maxi_quantity": 0,
        //             "category": "tuber",
        //             "cost": 44
        //         },
        //         // {
        //         //     "Total_Cost": 44
        //         // }
        //     ],
        //     [
        //         {
        //             "name": "ann",
        //             "mini_unit": "ann",
        //             "mini_price": 5,
        //             "mini_quantity": 1,
        //             "maxi_unit": "ann",
        //             "maxi_price": 5,
        //             "maxi_quantity": 0,
        //             "category": "ann",
        //             "cost": 5
        //         },
        //         {
        //             "name": "cereal",
        //             "mini_unit": "ann",
        //             "mini_price": 5,
        //             "mini_quantity": 1,
        //             "maxi_unit": "ann",
        //             "maxi_price": 5,
        //             "maxi_quantity": 0,
        //             "category": "cereal",
        //             "cost": 5
        //         },
        //         // {
        //         //     "Total_Cost": 10
        //         // }
        //     ]
        // ]
    })
    const userids = Object.keys(todayOrders)
    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const today = fetch(`${url}/admin/history`)
                const todayResult = await (await today).json()
                setTodayOrders(todayResult)
            } catch (err) { console.log(err) }
        }
        fetchHistory()
    }, [])
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
                                <th>userID</th>
                                <th>Order(s)</th>
                                <th>Status</th>
                                <th>Courier</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userids?.map((i) =>
                                    <tr key={i}>
                                        <td>{i}</td>
                                        {todayOrders[i].map((j) =>
                                            <tr style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                {j.map((k) =>
                                                    <tr>
                                                        <td>{k.name}</td>
                                                    </tr>
                                                )}
                                                <tr><td>{"_ ".repeat(20)}</td></tr>
                                            </tr>
                                        )}
                                        <td>Pending</td>
                                        <td>Mr. Sadiq</td>
                                    </tr>
                                )}
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
    },
}