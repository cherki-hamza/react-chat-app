import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from "../../DB/firebase";
import { ChatEngine } from "react-chat-engine";
import { useAuth } from '../../context/AuthContext';

const Chat = () => {

    const navigate = useNavigate();

    const { user } = useAuth();

    console.log(user);

    const handleLogout = async () => {
        await auth.signOut();

        navigate('/');
    }

    return (
        <div className='chats-page'>
            <div className='nav-bar'>
                <div className='logo-tab'>
                    ch-chat
                </div>

                <div
                    onClick={handleLogout}
                    className='logout-tab'>
                    <span></span>
                    Logout
                </div>
            </div>

            <ChatEngine
                height="calc(100vh - 66px)"
                projectID="d8694cd1-7bfb-40d9-8ff2-7731cade35f5"
                userName="."
                userSecret="."
            >

            </ChatEngine>
        </div>
    )
}

export default Chat