import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const SingIn = () => {
    const [error, setError] = useState(null);

    const { createUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password.length < 6) {
            setError('Password should be 6 characters or more');
            return;
        }
        if (password !== confirm) {
            setError('Your password did not match');
            return;
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch((error) => {
                console.error(error)
                error.reset();
            })
    }

    return (
        <div className='form-container'>
            <h3 className='form-title'>Sing Up</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="Password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="Password">Confirm Password</label>
                    <input type="password" name="confirm" id="" required />
                </div>
                <p className='text-error'>{error}</p>
                <input className='btn-submit' type="submit" value="Submit" />
            </form>
            <p className='create-account'>All ready have a account <Link to='/login'>Login</Link> </p>
            <div className="loginGoogle">
                <h5>Continue With Google</h5>
            </div>
        </div>
    );
};

export default SingIn;