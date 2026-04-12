import react_img from "../assets/react.svg";
function Card(){
    return(
        <div className="card">
            <img src={react_img} alt="Card Image" className="card_img" />
            <h2 className = "card_title">Card Title</h2>
            <p>This is a card component.</p>
        </div>
     );
}

export default Card;    