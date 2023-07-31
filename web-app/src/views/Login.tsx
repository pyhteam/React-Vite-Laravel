import { Link } from "react-router-dom";

export default function Login() {
    const onSubmit = (e: any) => {
        e.preventDefault();
        console.log("onSubmit");
    };
    return (
        <form onSubmit={onSubmit}>
            <h1>
                Login into your account <span>👋</span>
            </h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="btn btn-block" type="submit">
                Login
            </button>

            <p className="text-center">
                Don't have an account?
                <Link to="/signup">Sign up</Link>
            </p>
        </form>
    );
}
