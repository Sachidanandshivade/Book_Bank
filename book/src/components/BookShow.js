import BookEdit from './BookEdit';
import { useState } from 'react';


function BookShow({book,onDelete,onEdit}) { 
const [showedit,setedit]=useState(false);

    const handledeleteClick = () =>{
        onDelete(book.id);
    };
    const handleeditClick= () =>{
        setedit(!showedit);

    };
    const handleSubmit =(id,newtitle) =>{
       setedit(false);
       onEdit(id,newtitle)
    }
    let content =<h3>{book.title}</h3>;
    if(showedit)
    {
        content=<BookEdit onSubmit={handleSubmit} book={book}/>;
    }
    return <div className='book-show'><div>{content}</div>
    <div className="actions">
    <button className="edit" onClick={handleeditClick}>edit</button>
        <button className="delete" onClick={handledeleteClick}>Delete</button>
    </div>
    </div>;
}

export default BookShow;