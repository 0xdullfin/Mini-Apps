import './pages.scss';
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

function Login() {
  return (
    <div className='login-container'>
        <div className="login-wrapper">
            <div className="head-wrapper">
                <h3>Welcome Back</h3>
                <h4>Login to your account</h4>
            </div>
            <div className="form-wrapper">
                <form className='form' action="">
                    <label htmlFor="user-email">
                        <h4>Email</h4>
                    </label>
                    <input type="text" id='user-email' placeholder='Enter your email' />
                    <label htmlFor="user-password">
                        <h4>Password</h4>
                    </label>
                    <div className="password-input-wrapper">
                        <input id='user-password' type="password" placeholder='Enter your password' />
                        <LuEye className='eye-icon'/>
                    </div>
                    <button>
                        <h3>Log in</h3>
                    </button>
                </form>
            </div>
            <div className="bottom-wrapper">
                <h4>Don't have an account?</h4>
                <span>Register</span>
            </div>
        </div>
    </div>
  )
}

export default Login;
