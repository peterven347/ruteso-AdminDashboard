import React, { useState } from "react";
import "../style.css"
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineStock, AiOutlineCopyright } from "react-icons/ai"
import { BiArrowBack } from "react-icons/bi"
import { BiBarChart } from "react-icons/bi"
import { IoHome } from 'react-icons/io5';
import { PiUsersThreeFill } from "react-icons/pi"
import { RiShoppingCartFill } from "react-icons/ri"


export default function Sidebar({ toggle, setToggle }) {
    const location = useLocation();
    const path = location.pathname === '/'
    const loginpath = location.pathname === "/login"

    return (
        !loginpath &&
        <>
            {toggle && <div style={styles.sidebar}>
                {!path ? <div style={styles.closeSideBar} onClick={setToggle}>&#215;</div> : <div style={{ marginTop: 37 }}></div>}
                <div style={styles.linkdiv}>
                    <Link style={styles.linktext} to="/">
                        <IoHome color="white" size={22} style={styles.icon} />Dashboard
                    </Link>
                </div>
                <div style={styles.linkdiv} onClick={setToggle}>
                    <Link style={styles.linktext} to="/stocks">
                        <AiOutlineStock color="white" size={22} style={styles.icon} />
                        <p>Stock Inventory</p>
                    </Link>
                    {/* <span style={{fontWeight: "bold", marginRight: 14, marginLeft: "auto", color: "white"}}>&gt;</span> */}
                </div>
                <div style={styles.linkdiv} onClick={setToggle}>
                    <Link style={styles.linktext} to="/orders">
                        <RiShoppingCartFill color="white" size={22} style={styles.icon} />
                        <p>Order Management</p>
                    </Link>
                </div>
                <div style={styles.linkdiv} onClick={setToggle}>
                    <Link style={styles.linktext} to="/users">
                        <PiUsersThreeFill color="white" size={22} style={styles.icon} />
                        <p>Users</p>
                    </Link>
                </div>
                <div style={styles.linkdiv} onClick={setToggle}>
                    <Link style={styles.linktext} to="/stats">
                        <BiBarChart color="white" size={22} style={styles.icon} />
                        <p>Stats</p>
                    </Link>
                </div>
                <div style={styles.linkdiv} onClick={setToggle}>
                    <Link style={styles.linktext} to="/login">
                        <BiArrowBack color="white" size={22} style={styles.icon} />
                        <p>Logout</p>
                    </Link>
                </div>
                <footer style={styles.footer}>
                    <p>Copyright &#169; {new Date().getFullYear()}. Ruteso</p>
                </footer>
            </div>
            }
        </>
    )
}

const styles = {
    linkdiv: {
        marginBottom: 28,
    },
    linktext: {
        fontSize: 14,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        flexShrink: 0,
    },
    icon: {
        minWidth: 40,
        marginRight: 8,
    },
    footer: {
        width: "auto",
        color: "purple",
        marginTop: "auto",

    },
    sidebar: {
        display: "flex",
        flexDirection: "column",
        minWidth: 228,
        height: "100vh",
        backgroundColor: "rgb(18, 18, 25)",
        position: "fixed",
        zIndex: 6,
        textAlign: "center"
    },
    closeSideBar: {
        fontSize: 32,
        marginTop: -6,
        marginLeft: "auto",
        color: "white",
        cursor: "context-menu"
    }
}

