import {useState} from "react";

export default function InputFeld(){

    const[name, setName] = useState('');

    const getNane = () => {
        alert("Ich hole die Daten " + name)
    }

    return(
        <div>
            <input type="text" placeholder="search by name" value={name} onChange={ev => setName(ev.target.value)}/>
           <br/>
            <button onClick={getNane}>name</button>
        </div>
    )
}