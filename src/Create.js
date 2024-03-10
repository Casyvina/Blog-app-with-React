import { useState } from "react";
import { useHistory } from "react-router-dom"

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('casy');
    const [isPending, SetIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        SetIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            // console.log('new blog added')
            SetIsPending(false)
            // history.go(-1)
            history.push('/')
        })

        
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label >Blog title:</label>
                <input 
                type="text"
                requireds
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label >Blog body:</label>
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                >
                </textarea>
                <label>Blog author:</label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="casy">casy</option>
                    <option value="joewey">jowey</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Add Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;