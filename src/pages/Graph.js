{
    userids.map((i) =>
        <tr key={i}>
            <td>{i}</td>
            {todayOrders[i].map((j) =>
                <tr>
                   {j.map((k) =>
                        <tr>
                            <td style={{backgroundColor: 'yellow',}}>{k.name}</td>
                        </tr>
                    )}
                <tr><td>.............................................</td></tr>
                    {/* <td>...................ttt..........................</td> */}
                </tr>
            )}
        </tr>
)}

{
    userids.map((i) =>
        <tr key={i}>
            <td>{i}</td>
            <td>
                <tr>

            {todayOrders[i].map((j) =>
                   j.map((k) =>
                        <tr style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                <td>{k.name}</td>
                        </tr>
            ))}
                </tr>
            </td>
        </tr>
)}