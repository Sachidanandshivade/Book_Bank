import {useState} from 'react';

function BookEdit({book,onSubmit}) {
    const  [title,settitle] =useState(book.title);
    const handleChange = (event) =>{
        settitle(event.target.value);
    };
    const handlesubmit = (event) =>{
        event.preventDefault();
        onSubmit(book.id,title);
    };
    return <form onSubmit={handlesubmit} className="book-edit">
        <label>title</label>
        <input className="input"  value={title} onChange={handleChange}/>
        <button className="button is-primary">save</button>
    </form>;
}

export default BookEdit;