import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import useStorage from "../hooks/useStorage";
import { useEffect } from "react";
const Login = () => {
  const {value, setValue} = useStorage("user");
  const navigate = useNavigate();
  const {register,handleSubmit,setError,clearErrors,formState:{errors, isValid,isSubmitting, isValidating}} = useForm();
  useEffect(() => {
    console.log(value);
    if(value){
      navigate("/surveys");
    }
  },[]);

  const access = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const data = await response.json();
        setValue(data);
        navigate("/surveys");
      } else {
        const error = await response.json();
        setError("email", { message: error.message });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section>
      <header>
        <h1>Log In</h1>
      </header>
      <form onSubmit={handleSubmit(access)} autoComplete="off">
        <fieldset>
          <input type="text" placeholder="Email" {...register("email",{
            validate: (value) => {
              if (!value) {
                setError("email", { message: "Email is required" });
                return false;
              }
              if(value.length < 5){
                setError("email", { message: "Email must be at least 5 characters" });
                return false;
              }
              const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!regex.test(value)) {
                setError("email", { message: "Invalid email format" });
                return false;
              }
              clearErrors("email");
              return true;
            }
          })} />
          {errors.email && <p>{errors.email.message}</p>}
        </fieldset>
        <fieldset>
          <input type="password" placeholder="Password" {...register("password",{
            validate: (value) => {
              if (!value) {
                setError("password", { message: "Password is required" });
                return false;
              }
              if(value.length < 8){
                setError("password", { message: "Password must be at least 8 characters" });
                return false;
              }
              const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
              if (!regex.test(value)) {
                setError("password", { message: "Password must contain at least one letter, one number, and one special character" });
                return false;
              }
              clearErrors("password");
              return true;
            }
          })}/>
          {errors.password && <p>{errors.password.message}</p>}
        </fieldset>
        <button disabled={!isValid || isSubmitting || isValidating}>
          {isSubmitting && "Logging in..." }
          {!isValid && "Log in"}
          {isValid && !isValidating && "Access"}
          {isValidating && "Validating..."}
        </button>
      </form>
    </section>
  )
}

export default Login