import React, {useEffect} from "react";
import openSocket from 'socket.io-client';

export default function Stats(){

    return(
        <>
        <div style={styles.container}>Stats</div>
        </>
    )
}

const styles = {
    container: {
        width: "100%",
        marginTop: 34,
        backgroundColor: "grey"
    }
}