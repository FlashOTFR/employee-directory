import React from 'react';

function Results({ persons }) {
        return (
          <table className="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">DOB</th>
    </tr>
  </thead>
  <tbody>
    {persons.map((person, index) => (
    <tr key={index}>
      <td>
        <img src={person.picture.medium} alt="this is the alt"></img>
      </td>
      <td>{person.name.first}</td>
      <td>{person.phone}</td>
      <td>{person.email}</td>
      <td>{person.dob.date.slice(0,10)}</td>
    </tr>
    ))}
  </tbody>
</table>
        );
      }

 
export default Results;