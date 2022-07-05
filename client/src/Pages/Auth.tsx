import { Sidebar } from "../Components/Sidebar";
import { AuthModal } from "../Components/AuthModal";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { withAuth, IAuthContext } from '../Contexts/AuthContext';


const Auth = ({ isLoggedIn, logIn }: IAuthContext): JSX.Element => {
    const [isRegistered, setIsRegistered] = useState(true);

    return (
        <>
        { isLoggedIn ? <Navigate to="/map" /> : <>
            <div className="authPage">
                <Sidebar />
                <div className="authPage__container">
                    <AuthModal logIn={logIn} isRegistered={isRegistered} setIsRegistered={setIsRegistered} />
                </div>
            </div>
        </> }
        </>
    );
};

export default withAuth(Auth);