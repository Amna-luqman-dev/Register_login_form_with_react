import { FaGoogle, FaGithub } from "react-icons/fa";
import "./Login.css";
import AUTH_IMAGE from "./assets/robot.png";

export default function Login() {
    return (
        <div className="login-page">
            <div className="login-container">
                {/* Image Section */}
                <div className="login-image">
                    <div
                        className="login-image-bg"
                        style={{ backgroundImage: `url(${AUTH_IMAGE}) `}}>
                            
                        </div>
                    
                    <div className="login-image-overlay">
                        <div className="login-image-text">
                            <h2>Welcome Back!</h2>
                            <p>Enter your details and continue your journey with us.</p>
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <div className="login-form-section">
                    <div className="login-form-header">
                        <h1>Welcome Back</h1>
                        <p>Sign in to continue your journey</p>
                    </div>

                    <form className="login-form">
                        <div className="auth-form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email" required />
                        </div>

                        <div className="auth-form-group">
                            <label>Password</label>
                            <input type="password" placeholder="Enter your password" required />
                        </div>

                        <div className="form-options">
                            <label>
                                <input type="checkbox" /> Remember me
                            </label>
                            <a href="/forgot-password">Forgot password?</a>
                        </div>

                        <button type="submit" className="btn-primary">
                            Login
                        </button>
                    </form>

                    <div className="login-register">
                        <p>
                            Don’t have an account?{" "}
                            <a href="/register" className="link-btn">
                                Register now
                            </a>
                        </p>
                    </div>

                    <div className="divider">
                        <span>Or continue with</span>
                    </div>

                    <div className="social-buttons">
                        <button className="social-btn">
                            <FaGoogle />
                        </button>
                        <button className="social-btn">
                            <FaGithub />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}