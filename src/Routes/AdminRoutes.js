import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../Components/Shared/LoadingSpinner/LoadingSpinner";
import { authContext } from "../Context/AuthProvider";
import useAdmin from "../CustomHooks/UseAdmin";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
