import BookEdit from './BookEdit';
import { useState } from 'react';


function BookShow({book,onDelete}) { 
const [showedit,setedit]=useState(false);

    const handledeleteClick = () =>{
        onDelete(book.id);
    };
    const handleeditClick= () =>{
        setedit(!showedit);
    };
    let content =<h3>{book.title}</h3>;
    if(showedit)
    {
        content=<BookEdit book={book}/>;
    }
    return <div className='book-show'><div>{content}</div>
    <div className="actions">
    <button className="edit" onClick={handleeditClick}>edit</button>
        <button className="delete" onClick={handledeleteClick}>Delete</button>
    </div>
    </div>;
}

export default BookShow;