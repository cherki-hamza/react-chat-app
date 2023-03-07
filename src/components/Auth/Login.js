import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { auth } from '../../DB/firebase';
import firebase from 'firebase/compat/app';


const Login = () => {
    return (
        <div id="login-Page">
            <div id='login-card'>
                <h2>Welcome to cherki Hamza Chat App</h2>

                <div className='login-button google'
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >

                    <span className='text-center'> <GoogleOutlined /> Sign In with Google</span>
                </div>
                <br /><br /><br />

                <div className='login-button facebook'
                    onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
                >
                    <span className='text-center'> <FacebookOutlined /> Sign In with Facebook</span>
                </div>

            </div>
        </div>
    )
}

export default Login