import characters from '../characters.json'
import GalleryItems from "./GalleryItems";
import "./Gallery.css"
import InputFeld from "./InputFeld"

export default function Gallery() {

    const names = characters.map(c => <GalleryItems character={{
        name: c.name, imageUrl: c.image, status: c.status,
        species: c.species, index: c.id
    }}/>);

    return (
        <div>
            <InputFeld />
            <br/>
            <br/>
            <div className="Gallery">

                {names}
            </div>
        </div>
    )

}