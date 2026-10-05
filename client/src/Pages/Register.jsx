import './pages.scss';

function Register() {
  return (
    <div className='register-container'>
        <div className="register-wrapper">
            <div className="head-wrapper">
                <h3>Create your account</h3>
                <h4>Enter your details to create an account</h4>
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
                        <input id='user-password' type="password" placeholder='Create a password' />
                    </div>
                    <label htmlFor="user-password">
                        <h4>Confirm Password</h4>
                    </label>
                    <div className="password-input-wrapper">
                        <input id='user-password' type="password" placeholder='Confirm your password' />
                    </div>
                    <button>
                        <h3>Create Account</h3>
                    </button>
                </form>
            </div>
            <div className="bottom-wrapper">
                <h4>Already have an account?</h4>
                <span>Sign In</span>
            </div>
        </div>
    </div>
  )
}

export default Register;
