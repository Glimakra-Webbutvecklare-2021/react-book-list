import { useState } from "react";

function BookForm(props) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setIsSubmitted(true);
    }
    return (
        <>
        <h3>Booking Form</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" readOnly value={props.book.title} />
            </div>

            <div>
                <label htmlFor="title">Author</label>
                <input type="text" id="author" readOnly value={props.book.author} />
            </div>

            <div>
                <label htmlFor="title">Return Date</label>
                <input type="date" />
            </div>
            <hr />
            <button type="submit">Submit</button>
        </form>
        {
            isSubmitted && <p style={{backgroundColor: 'lightgreen'}}>Thank you for your booking</p>
        }
        </>
    );
}

export default BookForm;