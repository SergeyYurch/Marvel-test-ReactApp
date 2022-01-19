
const CharListItem = (props) => {

    const {name, thumbnail} = props.char;

    return (

        <li className="char__item">
            <img src={thumbnail} style={thumbnail.includes('image_not_available.jpg') ? { objectFit: "contain" }:null} alt="marvel pers" />
            <div className="char__name">{name}</div>
        </li>

    )
}


export default CharListItem;