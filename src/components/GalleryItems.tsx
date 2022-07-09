import {Character} from "../model";

interface GalleryItemProps{
    character: Character;
}

export default function GalleryItems(props: GalleryItemProps){




    return(
        <div>
           <img src={props.character.imageUrl}/>
            <div className= "character-information">

                <div><span className="name"> Name: </span> {props.character.name}</div>
                <div><span className="status"> Status: </span> {props.character.status}</div>
                <div><span className="species"> Species: </span> {props.character.species}</div>
                <div><span className="index"> Id: </span> {props.character.index}</div>
            </div>

        </div>
    )
}