import React from 'react';
import { Link } from 'react-router-dom';
import './landingPage.css';

export default class LandingPage extends React.Component {
    

    public render() {
        return (
            <div className='landing-page'>
                <div className='form-container'>
                    <this.TitleHeader />
                    <this.LoginForm />
                </div>
            </div>
        )
    }

    public TitleHeader = () => {
        return (
            <h1 className='title-header'>Tier1</h1>
        );
    }

    public LoginForm = () => {
        return (
            <div className='login-form'>
                <input id='username-input' placeholder='username'/>
                <input id='username-input' placeholder='password'/>
                <Link to="/dashboard">
                    <button id='login-button' type='submit' >Log In</button>
                </Link>
            </div>
        )
    }
}