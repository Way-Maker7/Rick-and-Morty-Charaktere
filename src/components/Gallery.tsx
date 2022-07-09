import characters from '../characters.json'
import GalleryItems from "./GalleryItems";
import "./Gallery.css"
import {useState} from "react";


export default function Gallery() {

    const[input, setInput] = useState('');

    const components = characters.filter(c => c.name.toLowerCase().includes(input.toLowerCase()))
        .map(c => <GalleryItems character={{
            name: c.name, imageUrl: c.image, status: c.status,
            species: c.species, index: c.id
        }}/>);

    {/*
        const names = characters.map(c => <GalleryItems character={{
            name: c.name, imageUrl: c.image, status: c.status,
            species: c.species, index: c.id
        }}/>);*/
    }

    return (
        <div>
            <div>
            <label htmlFor="name">search by name: </label>
            <input type="text" id="name" value={input} onChange={event => setInput(event.target.value)}/>
            </div>
            <br/>
            <br/>
            <div className="Gallery">
                {components}
            </div>
        </div>
    )

}