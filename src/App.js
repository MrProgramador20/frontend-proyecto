import React from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
    return (
        <div>
            <h1>Mi Aplicación</h1>
            <LoginForm />
            <hr />
            <RegisterForm />
        </div>
    );
}

export default App;
