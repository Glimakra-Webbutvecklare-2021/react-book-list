import { useState } from "react";
import BookForm from "../components/BookForm";

function Book(props) {
    const [isBookingFormOpen, setIsBookingFormOpened] = useState(false);

    const formatDate = (dateTimeStr)  => {
        return new Date(dateTimeStr).toDateString();
    }

    return (<>
        <h1>Book Details</h1>
        <p>Your selected book:</p>
        <p>title: {props.selectedBook.title}</p>
        <p>author: {props.selectedBook.author}</p>
        <p>is available: {props.selectedBook.isAvailable ? 
            <button onClick={() => setIsBookingFormOpened(!isBookingFormOpen)}>Book</button> :
            `No, it is available again ${formatDate(props.selectedBook.returnDateTime)}`}</p>
        {
            isBookingFormOpen && <BookForm book={props.selectedBook}/>
        }
        </>

    );
}

export default Book;