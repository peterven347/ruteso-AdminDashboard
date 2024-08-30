import React, {useContext,useState} from "react";
import { Context } from "../App";
// import backdrop from "../assets/backdrop.png"
export default function Login() {
    const {url} = useContext(Context)
    const [email, setEmail] = useState("admin1@gmail.com")
    const [password, setPassword] = useState("Admin12345.")
    const submitForm = async() => {
        try {
        //   const response = await fetch(`${url}/admin/register`, {
          const response = await fetch(`${url}/admin/login`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password
            })
          });
    
        //   if (!response.ok) {
        //     throw new Error('Networkk response was not ok');
        //   }
    
        if (response.redirected) {
            window.location.href = response.url;
        } else {
            const result = await response.text();
            document.getElementById('response').innerText = result;
        }
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        //   document.getElementById('response').innerText = 'Error: ' + error.message;
        }
    }

    const fn = async() => {
        const tt = await fetch(`${url}/logi`, {
            method: "GET",
            credentials: "include",
        })
        const tii = await tt.json()
        document.getElementById('response').innerText = tii.found;
    }
    const fnn = async() => {
        const tt = await fetch(`${url}/`, {
            method: "GET",
            credentials: "include",
        })
        const tii = await tt.json()
        // document.getElementById('response').innerText = tii.found;
    }
    return (
        <>
            <div style={styles.parent}>
                <div style={styles.logo}>
                    <img src={"src/assets/backdrop.png" || require("../assets/backdrop.png")} alt="Ruteso" width="100%" height="100%" />   {/* first src for electron */}
                </div>

                <div style={styles.login_container}>
                    <div style={styles.login}>
                        <h1 style={{ marginBottom: 48, color: "#fff" }}>Welcome Back!</h1>
                        <label htmlFor="email" style={{ marginBottom: 4 }}>Username</label>
                        <input style={styles.input} type="email" placeholder="email" id="email" defaultValue={email} onChange={(e) => {setEmail(e.target.value)}} onFocus={() => document.getElementById('response').innerText = '\u00A0'}/>
                        <br />
                        <label htmlFor="password" style={{ marginBottom: 4 }}>Password</label>
                        <input style={styles.input} type="password" placeholder="Admin12345." id="password" defaultValue={password} onChange={(e) => {setPassword(e.target.value)}}/>
                        <div style={{ marginTop: 16, marginBottom: 32 }}>
                            <input type="checkbox" style={{ accentColor: "rgba(18, 18, 25, 0.2)" }} /> <span>Remember me</span>
                        </div>
                        <button style={styles.button} id="form" onClick={() => submitForm()}>SUBMIT</button>
                        <button style={styles.button} onClick={() => fnn()}>/</button>
                        <button style={styles.button} onClick={() => fn()}>logi</button>
                        {/* <input style={{color: "white", backgroundColor: "blue", height: "32px", width: "100%", borderRadius: 6, border: "1px solid"}} type="submit" value="SUBMIT"/> */}
                        <p style={{ marginLeft: "auto" }}>Forgot password?</p>
                        <p id="response">{'\u00A0'}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

const styles = {
    parent: {
        width: "100%",
        display: "flex",
        overflow: "hidden",
        whiteSpace: "nowrap",
    },
    logo: {
        backgroundColor: "rgb(18, 18, 25)",
        width: "60%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    login_container: {
        color: "#ccc",
        backgroundColor: "rgb(18, 18, 25)",
        width: "40%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden"

    },
    login: {
        width: "60%",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        // backgroundColor: "red",
    },
    input: {
        fontWeight: "bold",
        fontSize: 14,
        width: "100%",
        height: "32px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        outlineColor: "#ccc",
        paddingLeft: "6px"
    },
    // input:focus :{
    //     box-shadow:0 0 0 10px red;
    // }
    button: {
        color: "white",
        backgroundColor: "#00f",
        height: "32px",
        width: "100%",
        borderRadius: 6,
        border: "2px solid rgba(0, 0, 255, 0.1)"
    }
}
