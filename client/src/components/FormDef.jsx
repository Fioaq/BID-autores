import React from 'react';
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const FormDef = ({ initialValues, onSubmit }) => {
    const navigate = useNavigate();
    const productError = Yup.object().shape({
        name: Yup.string()
            .min(3, "Name must be at least 3 characters.")
            .required("Name is required")
    });

    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={productError}
        >
            {({ errors, touched, isValid, dirty }) => (
                <Form>
                    <label htmlFor='name' className='m-2'>Name</label>
                    {touched.name && errors.name && <label className="text-danger">* {errors.name}</label>}
                    <Field name="name" className="form-control" />
                    <div className='d-flex justify-content-evenly'>
                        <button
                            className="btn btn-primary mt-3"
                            style={{ width: "30%" }}
                            onClick={() => navigate('/')}
                        >Cancel</button>
                        <button
                            type='submit'
                            className="btn btn-primary mt-3"
                            style={{ width: "30%" }}
                            disabled={!(isValid && dirty)}
                        >Submit</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
};

export default FormDef