import React from 'react'

const Person = ({name, age, hobbies}) => {
  return (
    <div className="person">
      <p>Learn some information about this person</p>
      <div className="detail">
        <p>Name: {name}</p> 
        <p>Age: {age}</p> 
        <ul>
          {
            hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)
          }
        </ul>
        {
          age >= 21 ? <h3>Have a Drink</h3>: <h3>you must be 21</h3>  
        }
      </div>
    </div>
  )
}
const data = [
  {
    name: "Naira Marley",
    age: 20,
    hobbies: ["Hiking", "Drinking", "Travelling"]
  },
  {
    name: "Davido",
    age: 25,
    hobbies: ["Hiking", "Drinking", "Travelling"]
  },
  {
    name: "Burna Boy",
    age: 30,
    hobbies: ["Hiking", "Drinking", "Travelling"]
  },
]

const DisplayPerson = () => data.map(({name, age, hobbies}, index) => <Person key={index} name={name} age={age} hobbies={hobbies}  />)
export default DisplayPerson;
