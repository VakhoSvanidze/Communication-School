import { useState } from "react";
import Input from "./Inputs.js";
import Results from "./Results.js";


function InputField({
  firstName, setFirstName,
  lastName, setLastName,
  email, setEmail,
  city, setCity,
  count, setCount
}) {
 
  function handleClick() {
    setCount(prevCount => {
      return [...prevCount, prevCount.length]
    })
  }
  return (
    <section className="inputs">
      <Input 
        htmlFor="firstName"
        title="სახელი"
        id="fistName"
        placeholder="შენი სახელი, კაი კაცი"
        value={firstName}
        set={setFirstName}
      />
      <Input 
        htmlFor="lastName"
        title="გვარი"
        id="lastName"
        placeholder="რა გვარის კაცი ხარ?"
        value={lastName}
        set={setLastName}
      />
      <Input 
        htmlFor="email"
        title="ელ-ფოსტა"
        id="email"
        type="email"
        placeholder="სად მოვიწეროთ?"
        value={email}
        set={setEmail}
      />
      <Input 
        htmlFor="city"
        title="ქალაქი"
        id="city"
        placeholder="საიდან ხარ, შემოგევლე"
        value={city}
        set={setCity}
      />
    <button 
      className="button"
      onClick={handleClick}>
        დამატება
      </button>
    

    </section>
  )
}

export default InputField;

