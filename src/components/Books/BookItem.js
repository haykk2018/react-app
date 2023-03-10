import Star from "../Star";

const BookItem = (props) => {

    return<div>
        <h4>{props.name}</h4>
        <div>Author: {props.author}</div>
        <span>{props.description}</span>
        <div>Price: <span>{props.price}</span></div>
        <Star/><Star/><Star/><Star/><Star/>
    </div>
}
export default BookItem;