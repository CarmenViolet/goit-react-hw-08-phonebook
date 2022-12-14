import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { selectName } from 'redux/auth/authSelectors';

export const UserAuthMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  return (
    <>
      <p>{`Welcome to homepage ${name}!`}</p>
      <button onClick={() => dispatch(logout())}>Log Out</button>
    </>
  );
};
