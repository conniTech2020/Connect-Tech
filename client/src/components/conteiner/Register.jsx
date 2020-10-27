import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { CreateUser } from '../../api/index';
import Footer from '../basicComponents/Footer';

const Register = () => {
  const [error, seterror] = useState('');
  const [succeed, setsucceed] = useState('');
  const [isRedirect, setIsRedirect] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    password2: '',
    isTeacher: true,
    // status: "", // check box
    // skills: "", // string Array
  });

  const { fullName, email, password, password2, isTeacher } = formData;

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
    console.log(e);
    e.preventDefault(); // prevent refresh/reload page

    if (password !== password2) {
      seterror('password are not match!');
      // setAlert("Passwords do not match", "danger");
    } else {
      // register({ name, email, password });
      makenewuser();
    }
  };

  const makenewuser = async () => {
    try {
      const response = await CreateUser(formData);
      // console.log(err.response.data.errors[0].msg);
      // setsucceed('new user created!');
      // <Redirect to="/lectureCards"
      setsucceed('new user created!');
      setIsRedirect(true);
      seterror('');
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      seterror(err.response.data.errors[0].msg);
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Create Your Account
      </p>
      <form className='form' onSubmit={onSubmit}>
        <div className='form-group'>
          <div>Full Name</div>
          <input
            type='text'
            name='fullName'
            value={fullName}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <div>Email Address</div>
          <input type='email' name='email' value={email} onChange={onChange} />
          <small className='form-text'>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className='form-group'>
          <div>Password</div>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <div>Confirm Password</div>
          <input
            type='password'
            name='password2'
            value={password2}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <div>
            <small>Joining as a Lecture.</small>
          </div>
          <input id='Lecture' name='who' type='radio' />
          <label
            className='Radio-Buttons'
            for='Lecture'
            value={formData.isTeacher}
            onChange={onChange}
          >
            Lecture
          </label>
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p style={{ color: 'red' }}>{error}</p>
      <p style={{ color: 'green' }}>{succeed}</p>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
      {isRedirect && formData.isTeacher && <Redirect to='/lectureCards' />}
      {/* {  !isRedirect  && formData.isTeacher && <Redirect to="/lectureCards"/> } */}
      <Footer />
    </Fragment>
  );
};

export default Register;
