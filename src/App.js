import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import ConnectionErr from './pages/ConnectionErr';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Navbar from './pages/Navbar'
import Orders from './pages/Orders'
import Sidebar from './pages/Sidebar'
import Stats from './pages/Stats'
import Stock from './pages/Stock'
import Users from './pages/Users';

// const url = "https://rutesobackend.onrender.com"
const url = "http://172.24.16.1:27017"

export const Context = createContext({})
export default function App({ route }) {

  const [toggle, setToggle] = useState(false)
  const [online, setOnline] = useState(navigator.onLine)
  const [textInput, setInput] = useState("")
  
  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);


  return (
    <>
      {online ? null : <p style={{zIndex: 200, position:"fixed", top: 400, color: 'red'}}>first</p>}
      {/* {!online ? null : <p style={{zIndex: 200, position:"fixed", top: 400, color: 'red'}}>second</p>} */}
      {navigator.onLine ? null : <ConnectionErr />}
      <div style={{ display: "flex" }}>
        <HashRouter>
          <Context.Provider value={{ textInput: textInput, setInput: setInput, url: url }}>
            <Navbar setToggle={() => setToggle(!toggle)} />
            <Sidebar toggle={toggle} setToggle={() => { setToggle(!toggle); }} />
            <Routes>
              <Route index element={<Dashboard setToggle={() => setToggle(true)} />} />
              <Route path="/stocks" element={<Stock />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/users" element={<Users />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<div style={styles.invalidRoute}><h1>Page Not Found!</h1></div>} />
            </Routes>
          </Context.Provider>
        </HashRouter>
      </div>
    </>
  )
}

const styles={
  invalidRoute: {
    width: "100vh",
    height: "100vh",
    display: "flex",
    flex: 1,
    color: "#fff",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    zIndex:900000000,
    // overflow: "none"
  }
}