import React, {useState} from "react";
import { useAuth } from "../store/auth";

const defaultConatctFormData ={  
   username: "",
  email: "",
  message: "",};
const ContactPage = () => {
     const [contact, setContact] = useState(defaultConatctFormData);
  
      const [userData, setUserData] = useState(true);
  const { user } = useAuth();

 
    if (userData && user) {
      setContact({
        username: user.username,
        email: user.email ,
        message: "",
      });
      setUserData(false);
    }
 

        const handleInput = (e) => {
        const { name, value } = e.target;
     setContact((prevcontact) => ({
          ...prevcontact,
          [name]: value,
        }));
      };
    
        const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(contact);
      try {
    
    const response = await fetch("http://localhost:5000/api/from/contact",{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(contact),
    });
     if(response.ok){
      setContact(defaultConatctFormData);
      alert('message sent successfully')
     }
   } catch (error) {
    console.log(error);
    
   }
 

      }
  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4"> 

        <div>
          <label className="block mb-1 font-medium">Username</label>
          <input
                  type="text"
                name="username"
                placeholder="Enter your user name"
                id="username"
                value={contact.username}
                onChange={handleInput}
                autoComplete="off"
                required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
        
                type="email"
                name="email"
                placeholder="Enter your user email"
                id="email"
                value={contact.email}
                onChange={handleInput}
                autoComplete="off"
                required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

   

        <div>
          <label className="block mb-1 font-medium">Message</label>
           <textarea
                name="message"
                id="message"
                value={contact.message}
                onChange={handleInput}
                required
                autoComplete="off"
                cols={30}
                rows={10}
              ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
