import {Character} from "../model";
import "./GalleryItems.css";

interface GalleryItemProps {
    character: Character;
}

export default function GalleryItems(props: GalleryItemProps) {


    return (
        <div className="Card">
            <h3>Name: {props.character.name}</h3>

            <img src={props.character.imageUrl} alt="img"/>

            <ul>
                <li>Status: {props.character.status}</li>
                <li>Species:{props.character.species}</li>
                <li> Id: {props.character.index}</li>

            </ul>


        </div>
    )
}