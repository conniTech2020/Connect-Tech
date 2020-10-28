import React from 'react';
import { useHistory } from 'react-router-dom';

function Logout(props) {
  const history = useHistory();

  const out = () => {
    localStorage.removeItem('authToken');
    props.setUser({});
    history.push('/');
  };

  return (
    <>
      <button onClick={out} className='btn2 btn-light'>
        Logout
      </button>
    </>
  );
}
export default Logout;
