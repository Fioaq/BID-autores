import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [authors, setAuthors] = useState([]);
    const navigate= useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/author")
            .then(res => {
                console.log(res.data);
                setAuthors(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    const deleteHandler= id =>{
        axios.delete(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                console.log(res.data);
                setAuthors(prev => prev.filter(author => author._id != id))
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <Header linkText="Add an author" linkDirection="/new" subtitle="We have quotes by:" />
            <table className="table table-striped table-hover ms-4" style={{width: '35rem'}}>
                <thead>
                    <tr>
                        <th scope="col">Author</th>
                        <th scope="col">Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map((author, idx) =>
                        <tr key={idx}>
                            <td style={{width: '20rem'}}>{author.name}</td>
                            <td>
                                <button className='btn btn-success me-4' onClick={() => navigate(`edit/${author._id}`)}>Edit</button>
                                <button className='btn btn-danger' onClick={() => deleteHandler(author._id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Home