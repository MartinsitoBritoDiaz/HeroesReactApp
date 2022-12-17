import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/', {
      replace: true
    })
  };

  return (
    <div className="container mt-5">
      <h1 className="fw-bold text-center">Login</h1>

      <div className="text-center mt-3">
        <button className="btn btn-primary" onClick={onLogin}>
          Login
        </button>
      </div>
    </div>
  );
};
