import { Link } from "react-router-dom";
function Cancel() {
  return (
    <>
      <h1>Payment Cancelled</h1>
      <Link to="/store">Back to Store</Link>
    </>
  );
}
export default Cancel;
