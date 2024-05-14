import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  const [imie, setImie] = useState('');
  const [nazwisko, setNazwisko] = useState('');
  const [kurs, setKurs] = useState('');

  const courses = [
    'Programowanie w C#',
    'Angular dla początkujących',
    'Kurs Django',
  ];

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (imie && nazwisko && kurs) {
      alert(`${imie} ${nazwisko} zapisał się na ${kurs}`);
    } else {
      alert('Brak wszystkich danych!');
    }
  };

  return (
    <div className="container">
      <h1>Liczba kursów: {courses.length}</h1>

      <ol>
        {courses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ol>

      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="imie">Imię:</label>
          <input
            type="text"
            className="form-control"
            id="imie"
            placeholder="Podaj swoje imię"
            value={imie}
            onChange={(event) => setImie(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="nazwisko">Nazwisko:</label>
          <input
            type="text"
            className="form-control"
            id="nazwisko"
            placeholder="Podaj swoje nazwisko"
            value={nazwisko}
            onChange={(event) => setNazwisko(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="kurs">Kurs:</label>
          <select
            className="form-control"
            id="kurs"
            value={kurs}
            onChange={(event) => setKurs(event.target.value)}
          >
            <option value="">Wybierz opcje</option>
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Dodaj do kursu
        </button>
      </form>
    </div>
  );
}

export default App;
