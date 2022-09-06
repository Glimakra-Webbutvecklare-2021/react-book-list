function Book(props) {
    return (<>
        <h1>Book Details</h1>
        <p>Your selected book:</p>
        <p>title: {props.selectedBook.title}</p>
        <p>author: {props.selectedBook.author}</p>
        <p>is available: {props.selectedBook.isAvailable ? "Yes" : "No"}</p>
        </>
    );
}

export default Book;