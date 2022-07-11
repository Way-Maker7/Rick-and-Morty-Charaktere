
import GalleryItems from "./GalleryItems";
import "./Gallery.css"
import {useEffect, useState} from "react";
import {Character, Info, PageData} from "../model";


export default function Gallery() {

    const[input, setInput] = useState('');
    const[character, setCharacters] = useState<Array<Character>>([]);
    const[info, setInfo] = useState<Info>()

    useEffect(
        () => fetchPage(),[]
    );


    const fetchPage = (url: string = 'https://rickandmortyapi.com/api/character') => {
        fetch(url)
            .then(response => response.json())
            .then((page:PageData) => {
                setCharacters(page.results);
                setInfo(page.info)
            })
    }

    const nextPage = () => fetchPage(info!.next);

    const prevPage = () => fetchPage(info!.prev);


    const components = character.filter(c => c.name.toLowerCase().includes(input.toLowerCase()))
        .map(c => <div key={c.id}><GalleryItems character={c}/></div>)

    {/*
        const components = characters.filter(c => c.name.toLowerCase().includes(input.toLowerCase()))
            .map(c => <GalleryItems character={{
                name: c.name, imageUrl: c.image, status: c.status,
                species: c.species, index: c.id
            }}/>);*/
    }

    {/*
        const names = characters.map(c => <GalleryItems character={{
            name: c.name, imageUrl: c.image, status: c.status,
            species: c.species, index: c.id
        }}/>);*/
    }

    return (
        <div>
            <div className="navigation">
                { info?.prev && <button onClick={prevPage}>Prev</button> }
                { info?.next && <button onClick={nextPage}>Next</button> }
            </div>
<br/>
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