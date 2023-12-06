import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import request from '../helpers/request';
import { ToastContainer, toast } from "react-toastify";

const SubScribe = () => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        request(`${process.env.REACT_APP_BASE_URL}/subscribe-request`, 'POST', data)
        .then((success) => {
            setSuccessMessage(success.message);
        })
        .catch(error => {
            setErrorMessage(error);
            setSuccessMessage(null);
        })
    };

    if (errorMessage) {
        toast.error(errorMessage);
    }

    if (successMessage) {
        toast.success(successMessage)
    }

    return (
        <>
            <ToastContainer
                position="bottom-left"
                autoClose={3000}
                limit={3}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className="section-subscribe">
                <div className="uk-container">
                    <div className="subscribe-box">
                        <div className="uk-grid uk-flex-middle uk-child-width-1-2@m" data-uk-grid>
                            <div>
                                <div className="section-title"><span>Latest news and deals directly to your inbox</span>
                                    <div className="uk-h2">Subscribe for updated</div>
                                </div>
                            </div>
                            <div>
                                <div className="subscribe-box__form">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className={errors?.mail?.type === "required" || errors?.mail?.type === "pattern" ? "form_block has-error uk-flex uk-flex-middle" : "form_block uk-flex uk-flex-middle"}  >
                                            <input className="uk-input" placeholder="Email" {...register("mail", { required: true, pattern: /^\S+@\S+$/i })} />
                                            {errors?.mail?.type === "pattern" ? <p className="error-info email-info" >invalid Email</p> :
                                                <p className="error-info" >This field is required</p>
                                            }
                                            <button disabled = {successMessage && true } className="uk-button uk-button-danger" type="submit">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default SubScribe;