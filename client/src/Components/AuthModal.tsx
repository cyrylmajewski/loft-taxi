import { Input } from "./Input";
import { Button } from "./Button";
import { useState } from "react";

type AppProps = {
    isRegistered: boolean;
    setIsRegistered: Function;
    logIn: Function;
};

export const AuthModal = ({ isRegistered, setIsRegistered, logIn }: AppProps) => {

    const [signUpName, setSignUpName] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPass, setSignUpPass] = useState('');

    const [signInEmail, setSignInEmail] = useState('');
    const [signInPass, setSignInPass] = useState('');

    return (
        <div className="authModal">
            {isRegistered ?
                <>
                    <h1 className="h-1">Sign In</h1>
                    <Input onChange={(e) => setSignInEmail(e.target.value)} label="Email" type="email" placeholder="mail@mail.ru" />
                    <Input onChange={(e) => setSignInPass(e.target.value)} label="Password" type="password" placeholder="*************" />
                    <a href="#" className="authModal__link text grey_1 t-d-none">Reset password</a>
                    <Button text="Log In" onClick={() => logIn(signInEmail, signInPass)} />
                    <p className="authModal__info text grey_1 t-a-center">New user? <button onClick={() => setIsRegistered(false)} className="t-d-none yellow_1">Registration</button></p>
                </> :
                <>
                    <h1 className="h-1">Sign Up</h1>
                    <Input onChange={(e) => setSignUpEmail(e.target.value)} label="Email*" type="email" placeholder="mail@mail.ru" />
                    <Input onChange={(e) => setSignUpName(e.target.value)} label="Your name*" placeholder="Петр Александрович" />
                    <Input onChange={(e) => setSignUpPass(e.target.value)} label="Password*" type="password" placeholder="*************" />
                    <Button disabled={!signUpName && !signUpEmail && !signUpPass} text="Sign Up" />
                    <p className="authModal__info text grey_1 t-a-center">Have an account? <button onClick={() => setIsRegistered(true)} className="t-d-none yellow_1">Sign in</button></p>
                </>}
        </div>
    );
}