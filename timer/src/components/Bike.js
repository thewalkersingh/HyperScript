import { Link } from "react-router-dom";

const bikes = [
  { id: 1, name: "Aprillia Tuano 450" },
  { id: 2, name: "Ducati Panigale" },
  { id: 3, name: "MT Augusta" },
];

const Bike = () => (
  <>
    <h1>🧑‍💻 Developer List</h1>
    <ul>
      {bikes.map((b) => (
        <li key={b.id}>
          <Link to={`/bike/${b.id}`}>{b.name}</Link>
        </li>
      ))}
    </ul>
    <Link to="/">Home</Link>
  </>
);

export default Bike;
