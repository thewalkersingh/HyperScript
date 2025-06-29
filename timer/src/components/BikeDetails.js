import { Link, useParams } from "react-router-dom";
const BikeDetails = () => {
  const { id } = useParams();
  return (
    <>
      <h4>All Details of Bikes</h4>
      <h6>📄 Details for Bike with ID: {id}</h6>
      <Link to="/">Home</Link>
    </>
  );
};
export default BikeDetails;
