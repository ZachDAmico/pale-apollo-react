import { Link } from "react-router-dom";
function Success() {
  return (
    <>
      <h1>Payment was successful</h1>
      <Link to="/store">Back to Store</Link>
    </>
  );
}
export default Success;
