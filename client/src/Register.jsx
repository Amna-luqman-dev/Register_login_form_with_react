import "./Register.css";
import AUTH_IMAGE from "./assets/robot.png";

export default function Register(){
return (
  <>
  {/* main page */}

    <div className="register-page">
      <div className="register-container">
        <div className="register-image">
          <div className="register-image-bg" style={{ backgroundImage: `url(${AUTH_IMAGE})` }}>
          </div>
          
          <div className="register-image-overlay">

            <div className="register-image-text">
              <h2>Join Our Community</h2>
              <p>Create an account and discover a world of possibilities</p>
            </div>
          </div>
        </div>
        {/* form section */}
        <div className="register-form-section">
          <div className="register-form-header">
            <h1>Create Account</h1>
            <p>Join and start our journey</p>
          </div>
          <form className="register-form">
            <div className="auth-form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="auth-form-group">
              <label>Password</label>
              <input type="Password" placeholder="Enter your password" required />
              <p className="password-hint">Minimum 6 chrachters</p>
            </div>
            
            <div className="form-check">
              <input id="terms" name="terms" type="checkbox" required />
              <label htmlFor="terms">
                i agree to that{"  "}
                and{"  "}
                <a href="#" className="link">
                  Privacy Policy
                </a>
              </label>
            </div>
            <button type="submit" className="link-btn">
              Create Account
            </button>
          </form>
          <div className="register-footer">
            <p>
              Already have an account?{" "}
              <a href="/" className="Link-btn">
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);



}