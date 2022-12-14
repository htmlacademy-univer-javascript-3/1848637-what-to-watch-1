import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AuthStatus } from '../../constants/constants';

type Props = {
  children: JSX.Element
}

const PrivateRoute : FC<Props> = ({ children }) => {
  const { authStatus } = useAppSelector((state) => state);
  const hasAccess = authStatus === AuthStatus.Auth;

  return hasAccess ? children : <Navigate to={'/login'}/>;
}

export default PrivateRoute;
