import { useState, useEffect } from 'react';
import BlogList from './BlogList';


const Home = () => {

    const [blogs, setBlogs] = useState([
        {title : 'My First React App', body : 'lorem ipsum...', author: 'jojolee', id: 1},
        {title : 'React is quick easy', body : 'lorem ipsum...', author: 'casyvina', id: 2},
        {title : 'Third day with React Native', body : 'lorem ipsum...', author: 'jojolee', id: 3},
    ]);

    const [name, setName] = useState('casyvina')

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs)
    };

    useEffect(() => {
        console.log('use effect ran');
        console.log(name);
    }, [name]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title='All blogs' handleDelete={handleDelete}/>
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'jojolee')} title='Jojolee'/> */}
            <p>{ name }</p>
            <button onClick={() => setName('Jojolee')}>change name</button>
        </div>
     );
}
 
export default Home;