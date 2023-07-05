import React from 'react';
import { useForm } from 'react-hook-form';

const SubScribe = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
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
                                <form  onSubmit={handleSubmit(onSubmit)} >
                                    <div className="uk-flex uk-flex-middle">
                                        <input className="uk-input" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} type="email" name="email" placeholder="Email Address ...." />
                                        <button className="uk-button uk-button-danger" type="submit">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubScribe;