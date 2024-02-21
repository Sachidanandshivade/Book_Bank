
import {useState} from 'react'
function BookCreate({onCreate}) {
    const [title,setTitle]=useState('');
    const handlechange =(event) => {
setTitle(event.target.value)};

const handleSubmit=(event) => {
event.preventDefault();
onCreate(title);
setTitle('');
};

    return <div className='book-create'>
        <h3>ADD A BOOK</h3>
        <form onSubmit={handleSubmit}>
            <label>title</label>
            <input className='input'value={title} onChange={handlechange}/>
            <button classname='button'>create!</button>
        </form>
    </div>;
}

export default BookCreate;