import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function DefaultLayout() {
    const { user, token } = useStateContext();
    if (!token) {
        return <Navigate to="/login" replace={true} />;
    }
    const logout = () => {
        localStorage.removeItem("ACCESS_TOKEN");
    };
    return (
        <div id="defaultLayout">
            <aside>
                <Link to="/dashboard">Dashboard </Link>
                <Link to="/users">Users </Link>
            </aside>
            <div className="content">
                <header>
                    <div>Header</div>
                    <div>
                        <span>{user?.name}</span>
                        <a href="#" onClick={logout} className="btn-logout" >Logout</a>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
