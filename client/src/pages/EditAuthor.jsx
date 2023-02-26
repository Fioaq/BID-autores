import React, { useEffect, useState } from 'react'
import FormDef from '../components/FormDef'
import Header from '../components/Header'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const EditAuthor = () => {
    const initialValues = {
        name: ""
    }
    const [author, setAuthor] = useState(initialValues);
    const { id } = useParams();
    const navigate= useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                console.log(res.data);
                setAuthor(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    const onSubmitHandler = (values, actions) => {
        axios.put(`http://localhost:8000/api/author/${id}`, values)
            .then(res => {
                console.log(res.data);
                actions.resetForm(initialValues);
                navigate('/');
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <Header linkText="Home" linkDirection="/" subtitle="Edit this author:" />
            <div className='ms-4 border border-3 p-4' style={{width: "30%"}}>
                <FormDef initialValues={author} onSubmit={onSubmitHandler} />
            </div>
        </>
    )
}

export default EditAuthor