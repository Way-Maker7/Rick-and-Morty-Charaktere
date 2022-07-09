import  characters from '../characters.json'

export default function Gallery(){

    const names = characters.map(c => <div><img src={c.image}/> {c.name}</div>);

    return(
        <div>
            {names}
        </div>
    )

}