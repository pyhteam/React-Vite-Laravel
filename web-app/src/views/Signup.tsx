import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

export default function Signup() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const {setCurrentUser,setToken} = useStateContext()

    const onSubmit = (e: any) => {
        e.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            confirm_password: confirmPasswordRef.current.value,
        }
        console.log(payload);
        axiosClient.post('/signup', payload)
            .then(({data}) => {
                setCurrentUser(data.user);
                setToken(data.token);
            })
            .catch(function (error) {
                console.log(error);
            });
    };


    return (
        <>

                    <form onSubmit={onSubmit}>
                        <h1>
                            Signup into your account
                        </h1>
                        <input ref={nameRef} type="text" placeholder="Name" />
                        <input ref={emailRef} type="email" placeholder="Email" />
                        <input ref={passwordRef} type="password" placeholder="Password" />
                        <input ref={confirmPasswordRef} type="password" placeholder="Confirm Password" />
                        <button className="btn btn-block" type="submit">
                            Register
                        </button>

                        <p className="text-center">
                            Already have an account?
                            <Link to="/login">Login</Link>
                        </p>
                    </form>
        </>
    );
}
