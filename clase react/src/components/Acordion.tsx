import { useState } from "react";



function Acordion() {
    const [cerrado, setcerrado] = useState(false)

    return (
        <div>
            
            <h1>Acordion</h1>
            <button onClick={() =>{setcerrado(!cerrado)}}>+</button>
            { cerrado ?
                <></>:
            <div>
                <p>que dice la banda x2</p>
                <p>sapa</p>
            </div>}
        </div>
        



    )
}

export default Acordion