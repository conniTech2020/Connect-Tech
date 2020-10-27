import React from 'react';
import { useHistory } from 'react-router-dom';

function Logout(props) {
  const history = useHistory();

  const out = () => {
    console.log(localStorage.getItem('authToken'));
    localStorage.removeItem('authToken');
    console.log(localStorage.getItem('authToken'));
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
