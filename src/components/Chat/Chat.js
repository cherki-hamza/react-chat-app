import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from "../../DB/firebase";
import { ChatEngine } from "react-chat-engine";
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';

const Chat = () => {

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const { user } = useAuth();



    const handleLogout = async () => {
        await auth.signOut();

        navigate('/');
    }

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();

        return new File([data], 'userPhoto.jpg', { type: 'image/jpeg' });
    }

    useEffect(() => {
        if (!user) {
            navigate('/');
            return;
        }

        axios.get('https://api.chatengine.io/users/me', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'project-id': process.env.REACT_APP_CHAT_ENGINE_ID,
                'user-name': user.email,
                'user-secret': user.uid,
            }
        })
            .then(() => {
                setLoading(false);
            })
            .catch(() => {
                let formdata = new FormData();
                formdata.append('email', user.email);
                formdata.append('username', user.email);
                formdata.append('secret', user.uid);

                getFile(user.photoURL)
                    .then((avatar) => {
                        formdata.append('avatar', avatar, avatar.name);

                        axios.post('https://api.chatengine.io/users/',
                            formdata,
                            { headers: { 'private-key': process.env.REACT_APP_CHAT_ENGINE_KEY, 'Access-Control-Allow-Origin': '*' } }
                        )
                            .then(() => setLoading(false))
                            .then((error) => console.log(error))

                    })
            })
        console.log(user);

    }, [user, navigate]);

    if (!user || loading) return <div className='alert alert-info'>Loading...</div>

    return (
        <div className='chats-page'>
            <div className='nav-bar'>
                <div className='logo-tab'>
                    ch-chat
                </div>
                <div className='text-center text-white'>
                    <img className='ch_img my-2 mx-5' src={user.photoURL} />
                    <span>{user.email}</span>
                </div>
                <div
                    onClick={handleLogout}
                    className='logout-tab'>
                    Logout
                </div>
            </div>

            <ChatEngine
                height="calc(100vh - 66px)"
                projectID={process.env.REACT_APP_CHAT_ENGINE_ID}
                userName={user.email}
                userSecret={user.uid}
            >

            </ChatEngine>
        </div>
    )
}

export default Chat