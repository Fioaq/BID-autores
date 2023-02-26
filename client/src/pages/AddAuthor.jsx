import React from 'react'
import FormDef from '../components/FormDef'
import Header from '../components/Header'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddAuthor = () => {
    const navigate = useNavigate();
    const initialValues = {
        name: ""
    }

    const onSubmitHandler = (values, actions) => {
        axios.post("http://localhost:8000/api/author", values)
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
            <Header linkText="Home" linkDirection="/" subtitle="Add a new author:" />
            <div className='ms-4 border border-3 p-4' style={{width: "30%"}}>
                <FormDef initialValues={initialValues} onSubmit={onSubmitHandler} />
            </div>
        </>
    )
}

export default AddAuthor