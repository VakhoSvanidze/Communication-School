import { useState } from 'react';
import InputField from "./components/InputField.js"
import Results from "./components/Results.js";


function App() {
  //რადგანაც jsx-ში არ შეგვიძლია კლასიკური for ციკლის გამოყენება, ამიტომ მასივში ვფუშავ ახალ ელემენტებს ღილაკის ყოველ
  //კლიკზე, შემდეგ ამ მასივზე ვაკეთებ map-ს. handleClick ფუნქცია, ღილაკთან ერთად inputField ფაილშია.
  const [count, setCount] = useState([]);
  /*
    რადგანაც ცვლადების გამოყენება მჭირდებოდა არა მხოლოდ input-ებში, არამედ result-ებისთვისაც, მშობელ კომპონენტში
    მომიწია სთეითების გადატანა და ასეთი მახინჯი კოდი მივიღე. ვიცი, არასწორია და დაველოდები ლექციას, როგორ გაკეთდება
    სწორად. სხვა ვერაფერი მოიფიქრა ჩემმა ორგრამიანმა ტვინმა.  
  */
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  return(
    <main className="container">
      <InputField 
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        city={city}
        setCity={setCity}
        count={count}
        setCount={setCount}/>

      <div className="results">
        {count.map((x) => 
        <Results 
          firstName={firstName}
          lastName={lastName}
          email={email}
          city={city}
          />)}
      </div>
    </main>
  )
}

export default App;



