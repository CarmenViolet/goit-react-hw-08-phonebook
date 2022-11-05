import { NavLink } from 'react-router-dom';

export const AuthNavigation = () => {
  return (
    <ul>
      <li>
        <NavLink to="register">Registration</NavLink>
      </li>
      <li>
        <NavLink to="login">Log in</NavLink>
      </li>
    </ul>
  );
};