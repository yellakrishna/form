import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

const emailPattern=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;




  function handelSubmit() {
    if (email.trim() === "") {
      setErrors({ ...errors, email: "Enter email address" });
    } 
    else if(!emailPattern.test(email)){
      setErrors({ ...errors, email: "Enter vaild email address" });

    }
    else {
      setErrors({ ...errors, email: "" });
    }


if (password.trim() === "") {
      setErrors({ ...errors, password: "Enter  password" });
    } 
    
else if(password.trim().length<8){
  setErrors({ ...errors, password: "password is minimum 8 characters" });


}


    
    else {
      setErrors({ ...errors, password: "" });
    }




  }

  return (
    <>
      <div className="border w-25 mt-5 m-auto p-3">
        <h2 className="text-primary text-center">Login Form</h2>

        <div>
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {errors.email && <span className="text-danger">{errors.email}</span>}
        </div>

        <div>
          <label>password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {errors.password && (
            <span className="text-danger">{errors.password}</span>
          )}
        </div>

        <div className="mt-3">
          <button className="btn btn-primary" onClick={handelSubmit}>Login</button>
        </div>
      </div>
    </>
  );
}

export default App;




