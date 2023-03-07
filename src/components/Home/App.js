import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Auth/Login";
import { AuthProvider } from "../../context/AuthContext";
import Chat from "../Chat/Chat";
import Privacypolicy from "../prevacy/Privacypolicy";

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <AuthProvider>
        <Routes>
          <Route path="/chats" element={<Chat />} />
          <Route path="/" element={<Login />} />
          <Route path="/privacy-policy" element={<Privacypolicy />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;