import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../store/auth";
import { ToastContainer, toast } from 'react-toastify';

const SignupPage = () => {

   const [user, setUser] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });



  const Navigate = useNavigate();

const {storeTokenInLS} = useAuth();

    const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

    const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(user);
    try {
      

     const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
 const res_data = await response.json();
    console.log("res form server", res_data.extraDetails);
 if(response.ok) {
 toast.success("sigin successful", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
       theme: "colored",
     
        });
  //  store the token 
 storeTokenInLS(res_data.token);
  setUser({ username: '',
    email: '',
    phone: '',
    password: '',});
    Navigate("/");
 } else{
     toast.error(res_data.extraDetails ? res_data.extraDetails: res_data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    theme: "colored",
     
        });
    }
  

      } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      <form className="space-y-4 " onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            
                      type="text"
                      name="username"
                      id="username"
                      required
                      autoComplete="off"
                      placeholder="Enter your username"
                      value={user.username}
                      onChange={handleInput}
                
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email Address</label>
          <input
          
              type="email"
                      name="email"
                      id="email"
                      required
                      autoComplete="off"
                      placeholder="Enter your email"
                      value={user.email}
                      onChange={handleInput}
                    
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
            type="number"
                      name="phone"
                      id="phone"
                      required
                      autoComplete="off"
                      placeholder="Enter your phone number"
                      value={user.phone}
                      onChange={handleInput}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
               type="password"
                      name="password"
                      id="password"
                      required
                      autoComplete="off"
                      placeholder="Enter your password"
                      value={user.password}
                      onChange={handleInput}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

    
   

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
