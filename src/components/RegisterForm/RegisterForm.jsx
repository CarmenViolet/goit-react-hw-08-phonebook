import { register } from 'redux/auth/authOperations';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleInput = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="">
          Name
          <input 
          type="text" 
          name="name" 
          value={name} 
          onChange={handleInput} />
        </label>
        <label htmlFor="">
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="">
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInput}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
