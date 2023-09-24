
import React, { useState, useEffect } from 'react';
import axios from 'axios';
export{};

interface Birthday {
  employeeId: string;
  firstName: string;
  dateOfBirth: Date; // Assuming dateOfBirth is a string
}

const BirthdayList: React.FC = () => {
  const [birthdays, setBirthdays] = useState<Birthday[]>([]);

  useEffect(() => {
    // Fetch birthdays for today when the component mounts
    fetchBirthdays();
  }, []);

  const fetchBirthdays = () => {

    axios.get('http://localhost:5000/users/api/birthdays/today').then((response) => {
      console.log(response.data);
      setBirthdays(response.data);
    });
  };

  return (
    <div>
      <h1>Birthdays Today</h1>
      <button onClick={fetchBirthdays}>Fetch Birthdays</button> {/* Add a button to trigger the fetch */}
      <ul>
        {birthdays.map((birthday) => (

          <li key={birthday.employeeId}>
            {birthday.firstName} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BirthdayList;

