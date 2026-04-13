import react_img from "../assets/react.svg";
function Card(props){
    return(
        <div className="card">
            <img src="../assets/react.svg" alt="Card Image" className="card_img" />
            <h2 className = "card_title">{props.name} <br></br>is student:-{props.bool1  ? "Yes":"No"} with ternary operator</h2>
            <p>This is a card component.</p>
        </div>
     );
}

export default Card;