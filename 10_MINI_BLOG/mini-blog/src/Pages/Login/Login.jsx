import { Navigate } from "react-router-dom";
import { useAuthValue } from "../../Context/AuthContext";
import styles from "./Login.module.css"

const Login = () => {
  const { user } = useAuthValue();

  if(user){
    return <Navigate to="/" />
  }
  return (
    <>
      <div>
          <h1>Login</h1>
      </div>
    </>
  )
}

export default Login