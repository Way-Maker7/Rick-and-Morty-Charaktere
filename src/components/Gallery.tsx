import  characters from '../characters.json'
import GalleryItems from "./GalleryItems";

export default function Gallery(){

    const names = characters.map(c => <GalleryItems character={{name: c.name, imageUrl: c.image, status: c.status,
    species: c.species, index: c.id}}/>);

    return(
        <div>
            {names}
        </div>
    )

}