import {Character} from "../model";

interface GalleryItemProps{
    character: Character;
}

export default function GalleryItems(props: GalleryItemProps){




    return(
        <div>
           <img src={props.character.imageUrl}/>
        </div>
    )
}