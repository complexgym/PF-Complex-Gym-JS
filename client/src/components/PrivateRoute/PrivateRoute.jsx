import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = ({ isAllowed, children, redirectTo = '/' }) => {
	if (!isAllowed) {
		return <Navigate to={redirectTo} />;
	}

	return children ? children : <Outlet />;
};

export default PrivateRoute;
