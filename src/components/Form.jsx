import { useState } from "react";
import Button from "./Button";
import Input from "./input";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleChange = (e, setName) => {
    setName(e.target.value)
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Fill your name pls.");
      return;
    }

    if (!email){
    alert("Type your Email")
     return;
    } else if (!email.includes(".com")) {
      alert("Email should include '.com'");
      return;
    }

    if (!phoneNumber) {
      alert("Your phone Number is important")
    return;
    }else if (phoneNumber.length < 11 || phoneNumber.length > 14) {
      alert ("Phone number should be between 11 and 14 characters long")
      return;
    }

    const user = {
      name,
      email,
      phoneNumber
    }

    const message = `Welcome ${user.name}, email: ${user.email} and ${user.phoneNumber}`

    alert(message);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
         
         <Input
        type="text"
        placeholder="John Doe"
        value={name}
        label="name"
        labelText ="Name"
        setState = {setName}
        handleChange = {handleChange}
      />
      <Input
        type="text"
        placeholder="@gmail.com"
        value={email}
        label="email"
        labelText ="Email"
        setState = {setEmail}
        handleChange = {handleChange}
      />
      <Input
        type="number"
        placeholder="+234**********"
        value={phoneNumber}
        label="phoneNumber"
        labelText ="Phone Number"
        setState = {setPhoneNumber}
        handleChange = {handleChange}
      />
      <Button/>
    </form>
  );
};

export default Form;