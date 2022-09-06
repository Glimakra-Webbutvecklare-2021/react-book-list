import { Link } from "react-router-dom";


function BookList(props) {
    return (
        <>
            <h1>BookList</h1> 
            <p>This is a BookList Page</p>
            <hr />
            {props.books.map(b => <div key={b.id} onClick={() => props.setSelectedBook(b)}><Link to={`/books/${b.id}`}>{b.title} by {b.author}</Link></div>)}
        </>
    );
}

export default BookList;