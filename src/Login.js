import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { login } from "./features/userSlice";

function Login() {

    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(
            (userAuth) => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                        profileURL: userAuth.user.photoURL,
                    })
                );
            }
        ).catch((error) => alert(error));
    };
    const register = () => {
        if (!name) {
            return alert("Please enter a full name!");
        }

        auth.createUserWithEmailAndPassword(email, password).then(
            (userAuth) => {
                userAuth.user
                    .updateProfile({
                        displayName: name,
                        photoURL: profilePic,
                    })
                    .then(() => {
                        dispatch(
                            login({
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,
                                displayName: name,
                                photoURL: profilePic,
                            })
                        );
                    });
            }
        ).catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <img
                src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png"
                alt=""
            />

            <form>
                <input placeholder="Full name (required if registering)"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)} />

                <input placeholder="Profile pic URL {optional}" 
                type="text"
                value={profilePic}
                onChange={e => setProfilePic(e.target.value)} />

                <input placeholder="Email" 
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)} />

                <input placeholder="Password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)} />

                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
            <p> Not a member? {" "}
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    );
}

export default Login;