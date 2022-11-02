import { useContext } from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css'

const Login = () => {

    const [error, setError] = useState(null)
    const { userLoggin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLoggin(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true })
            })
            .catch((error) => {
                setError(error.message)
            })

    }

    return (
        <div className='form-container'>
            <h3 className='form-title'>Login</h3>
            <p className='text-error'>{error}</p>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="Password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <input className='btn-submit' type="submit" value="Submit" />
            </form>
            <p className='create-account'>New a Ema-John <Link to='/singup'>Create A New Account</Link> </p>
            <div className="loginGoogle">
                <h5>Continue With Google</h5>
            </div>
        </div>
    );
};

export default Login;