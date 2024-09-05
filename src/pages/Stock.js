import React, { Suspense, useContext, useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import "../style.css"
import { Context } from "../App"


function AddNewItem({currVal, setCurrVal, categories, closeAddItem, addItem}) {
    return (
        <>  
            
            <form>
            <div id="editOverlay" style={styles.overlay}></div>
            <div id="addItemBox" style={styles.addItemBox}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 6 }}>
                    <p style={{ minWidth: 84 }}>Category: </p>
                    <input type="text" list="category" style={styles.input} defaultValue={currVal.category} autoComplete="true" required  onChange={(e) => {setCurrVal((prev) => ({...prev, category: (e.target.value).toString()}))}}/>
                    <datalist id="category" >
                        {categories?.map((i) =>
                            <option value={i}>{i}</option>
                        )}
                    </datalist>
                </div>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 6 }}>
                    <p style={{ minWidth: 84 }}>name: </p>
                    <input type="text" defaultValue={currVal.name} placeholder="item-name" maxLength="30" style={styles.input} autoComplete="true" required onChange={(e) => {setCurrVal((prev) => ({...prev, name: (e.target.value).toString()}))}}/>
                </div>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 6 }}>
                    <p style={{ minWidth: 84 }}>mini_unit:</p>
                    <input type="text" list="mini_unit" style={styles.input} defaultValue={currVal.mini_unit} autoComplete ="true" onChange={(e) => {setCurrVal((prev) => ({...prev, mini_unit: (e.target.value).toString()}))}}/>
                    <datalist id="mini_unit" >
                        <option value="cup" />
                        <option value="carton">Carton</option>
                        <option value="litre">Litre</option>
                    </datalist>
                </div>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 6 }}>
                    <p style={{ minWidth: 84 }}>mini_price: </p>
                    <input type="text" placeholder="digits" defaultValue={currVal.mini_price}  maxLength="30" pattern="^[0-9]+$" title="Requires digits only!" style={styles.input} onChange={(e) => {setCurrVal((prev) => ({...prev, mini_price: +(+e.target.value).toFixed(2)}))}}/>
                </div>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 6 }}>
                    <p style={{ minWidth: 84 }}>maxi_unit: </p>
                    <input type="text" list="maxi_unit" defaultValue={currVal.maxi_unit} style={styles.input} required onChange={(e) => {setCurrVal((prev) => ({...prev, maxi_unit: (e.target.value).toString()}))}}/>
                    <datalist id="maxi_unit" >
                        <option value="cup" />
                        <option value="carton">Carton</option>
                        <option value="litre">Litre</option>
                    </datalist>
                </div>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 6 }}>
                    <p style={{ minWidth: 84 }}>maxi_price: </p>
                    <input type="text" placeholder="digits" defaultValue={currVal.maxi_price} maxLength="30" pattern="^[0-9]+$" title="Requires digits only!" style={styles.input} onChange={(e) => {setCurrVal((prev) => ({...prev, maxi_price: +(+e.target.value).toFixed(2)}))}}/>
                </div>
                <div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
                    <p style={{ minWidth: 84 }}>Item_image:</p>
                    <input id="img" type="file" accept="image/*" required />
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end", paddingInlineEnd: 18, marginTop: "25%" }}>
                    <input style={styles.button} type="reset" value="CANCEL" onClick={() => { setCurrVal({}); closeAddItem() }} />
                    <input style={{ ...styles.button, backgroundColor: "green" }} type="submit" value="SAVE" onClick={(e) => {e.preventDefault(); addItem()}} />
                    {/* <input style={{ ...styles.button, backgroundColor: "blue" }} value="SAVEu" onClick={() => { console.log(document.getElementById('img').files[0]) }} /> */}
                    {/* <input style={{ ...styles.button, backgroundColor: "green" }} type="submit" value="SAVE" onClick={(event) => { event.preventDefault(); setCurrVal({}); fetchData()}} /> */}
                </div>
            </div>
            </form> 
            {/* remove form tag if no effect on required prop */}

        </>
    )
}

export default function Stock() {
    const { textInput, url } = useContext(Context)
    const [data, setData] = useState([
        {
            id: "c1",
            name: "mtyub",
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
    const matchCheck = textInput.toUpperCase()
    const [cate_gory, setCategory] = useState("all")
    const [delOvelay, setDelOverlay] = useState(false)
    const [currVal, setCurrVal] = useState({
        name: "",
        maxi_price: "",
        maxi_unit: "",
        mini_price: "",
        mini_unit: "",
        checkState: false,
        initialState: false,
        category: "",
        // img: document.getElementById('img')?.files[0]
    })
    const fetchData = async () => {
        // alert(document.cookie)
        try {
            const food = await fetch(`${url}/admin/food`, {
                // headers: {
                //     Authorization: "Bearer " + token,
                // },
                method: "GET",
                // credentials: "include"
            })
            const jsonresult = await food.json()
            setData(jsonresult)
        } catch (err) { console.log(err, "error while fetching!") }
    }

    const addItem = async() => {
        const img = document.getElementById('img').files[0];
        const formData = new FormData()
        for (const i in currVal){
            formData.append(i, currVal[i])
        }
        formData.set("img", img)
        try{
            const response = await fetch(`${url}/admin/add-item`, {
                method: "PUT",
                body: formData
            })
            const result = await response.json();
            console.log(result)
            if (result.status == true){
                closeAddItem()
                fetchData()
            }
        } catch(err) {alert("An error occured while saving")}
    }
    
    const delData = async (_id) => {
        const removal = await fetch(`${url}/admin/${_id}`, { method: "DELETE" })
        const res = await removal.json()
        if (res.status === true) {
            displayData = data.filter(item => {
                return item._id !== _id
            })
            setData(displayData)
        } else {
            alert("Error!")
        }
    }

    let displayData;
    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        if (!data) {
            document.getElementById("overlay").style.display = "block"
        } else {
            document.getElementById("overlay").style.display = "none"
        }

    }, [data])

    const openAddItem = () => {
        document.getElementById("addItemBox").style.display = "block"
        document.getElementById("editOverlay").style.display = "block"
    }
    const closeAddItem = () => {
        // setCurrVal({})
        var addItemBox = document.getElementById("addItemBox")
        addItemBox.style.display = "none"
        document.getElementById("overlay").style.display = "none"
        document.getElementById("editOverlay").style.display = "none"
    }
    const getCategory = (event) => {
        setCategory(event.target.value)
        return (event.target.value)
    }
    const categories = [...new Set(data?.map(item => item.category))];
    categories?.map(i => {
        switch (cate_gory) {
            case "all":
                displayData = data
                break;
            case i:
                displayData = data.filter(item => {
                    return i === item.category
                })
                break;
            default:
                // displayData = data
                break;
        }
    })
    const filteredData = displayData?.filter(item => {
        return matchCheck === item.name.toUpperCase().substr(item.name.toUpperCase().indexOf(matchCheck), textInput.length)
    })
    function DelModal(i) {
        return (
            <>
                {delOvelay ?
                    <div style={styles.ovelayForDel}>
                        <p style={{ margin: 20 }}>Confirm deletion of <span style={{ color: "green", fontSize: "55px", }}>{currVal.name} </span></p>
                        <hr />
                        <div style={{ position: "absolute", left: "50%", bottom: 0, transform: "translate(-50%,-50%)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <input style={styles.button} type="button" value="CANCEL" onClick={() => { setDelOverlay(false); closeAddItem() }} />
                            <input style={{ ...styles.button, backgroundColor: "red" }} type="button" value="CONFIRM" onClick={() => { delData(currVal._id); closeAddItem(); setDelOverlay(false) }} />
                        </div>
                    </div >
                    : null
                }
            </>
        )
    }
    function Edit({ i }) {
        return (
            <>
                <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                    <div style={{ cursor: "context-menu" }}>
                        <AiOutlineEdit color="#0f0" onClick={() => {
                            setCurrVal(i); openAddItem();
                        }} />
                        {/* <AiOutlineEdit color="#0f0" onClick={() => { console.log({ ...i }); openAddItem(); }} /> */}
                    </div>
                    <div style={styles.removeItem} onClick={() => { document.getElementById("overlay").style.display = "block"; setCurrVal(i); setDelOverlay(true) }}>&#215;</div>
                </div>
            </>
        )
    }

    return (
        <>
            <div id="overlay" style={styles.overlay} onClick={() => document.getElementById("addItemBox").style.display="none"}></div>
            <div className="tt" style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                <nav style={styles.nav}>
                    <h3>Stock</h3>
                    <div style={{ display: "flex", marginLeft: "auto" }}>
                        <div>
                            <select id="cate_gory" name="cate_gory" value={cate_gory} style={styles.selector} onChange={getCategory}>
                                <option value="all">All Items</option>
                                {categories?.map((i) =>
                                    <option value={i}>{i}</option>
                                )}
                            </select>
                        </div>
                        <div className="navlist" onClick={() => { }}>
                            Unavailable Items
                        </div>
                        <div className="navlist" onClick={() => { openAddItem(); }} >
                            Add New Item
                        </div>
                    </div>
                </nav>
                {data ?
                    <table style={{ paddingTop: 58, overflowY: "scroll" }}>
                        <thead style={{ position: "sticky", top: 60, backgroundColor: "#f8f9fa" }}>
                            <tr>
                                <th>image</th>
                                {/* <td>id</td> */}
                                <th>name</th>
                                <th>mini_price</th>
                                <th>mini_unit</th>
                                <th>maxi_price</th>
                                <th>maxi_unit</th>
                                <th>Total Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Suspense fallback={<div className="loader"></div>}>
                                {matchCheck === "" ?
                                    displayData?.map((i) =>
                                        <tr key={i._id || i.id}>
                                            <td><img src={`${url}/${i.img}`} alt="not available" width="120" height="75" /></td>
                                            {/* <td>{i.id}</td> */}
                                            <td>{i.name}</td>
                                            <td>{i.mini_price}</td>
                                            <td>{i.mini_unit}</td>
                                            <td>{i.maxi_price}</td>
                                            <td>{i.maxi_unit}</td>
                                            <td>{i.total_stock}</td>
                                            <td><Edit i={i} /></td>
                                        </tr>
                                    )
                                    :
                                    filteredData?.map((i) =>
                                        <tr key={i._id || i.id}>
                                            <td><img src={`${url}/${i.img}`} alt="not available" width="120" height="75" /></td>
                                            {/* <td>{i.id}</td> */}
                                            <td>{i.name}</td>
                                            <td>{i.mini_price}</td>
                                            <td>{i.mini_unit}</td>
                                            <td>{i.maxi_price}</td>
                                            <td>{i.maxi_unit}</td>
                                            <td>{i.total_stock}</td>
                                            <td><Edit i={i} /></td>
                                        </tr>
                                    )
                                }
                            </Suspense>
                        </tbody>
                    </table>
                    : <div style={{ textAlign: "center", fontWeight: "bold" }}>
                        <div className="loader"></div>
                        <div>Loading...</div>
                    </div>
                }
                {/* <form action={`${url}/admin/add-item`} method="post" encType="multipart/form-data"> */}
                    <AddNewItem currVal={currVal} setCurrVal={setCurrVal} categories={categories} closeAddItem={closeAddItem} addItem={addItem}/>
                {/* </form> */}
            </div>
            <DelModal />
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
    selector: {
        backgroundColor: "#78759f",
        fontSize: 18,
        outline: "none",
        border: "none",
        cursor: "grab"
    },
    input: {
        width: "80%",
        height: "32px",
        padding: 2,
        border: "1px solid #eaefef",
        // outline: "none",
        backgroundColor: "white",
        textTransform: "capitalize"
    },
    button: {
        width: 66,
        height: 28,
        marginInline: 8,
        outline: "none",
        border: "1px solid grey",
        borderRadius: 4,
        color: "white",
        backgroundColor: "grey"
    },
    addItemBox: {
        width: 400,
        height: "100vh",
        display: "none",
        position: "fixed",
        flexDirection: "column",
        top: 60,
        right: 0,
        padding: 4,
        paddingTop: 22,
        zIndex: 446,
        borderBottomLeftRadius: 16,
        backgroundColor: "lightgrey",
    },
    removeItem: {
        fontSize: 24,
        marginBottom: 6,
        marginLeft: 10,
        fontWeight: "bold",
        color: "#f00",
        cursor: "context-menu",
        userSelect: "none"
    },
    overlay: {
        position: "fixed",
        display: "none",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 5,
        // cursor: "pointer"
    },
    ovelayForDel: {
        position: "fixed",
        top: "50%",
        left: "50%",
        width: "400px",
        height: "180px",
        borderRadius: "16px",
        textAlign: "center",
        fontSize: "30px",
        zIndex: 6,
        backgroundColor: "white",
        transform: "translate(-50%,-50%)",
        // -ms-transform,: translate(-50%,-50%),
    },

}

