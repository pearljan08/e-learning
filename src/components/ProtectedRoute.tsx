import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../pages/auth/Auth";

const ProtectedRoute = () => {
//   return isAuthenticated() ? <Outlet /> : <Navigate to="/auth/" replace />;
    return (
        <>
            <Outlet />
        </>
    );
};

export default ProtectedRoute;