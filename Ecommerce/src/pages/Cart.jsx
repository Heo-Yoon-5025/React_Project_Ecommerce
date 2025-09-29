import { useSelector } from "react-redux";

export default function Cart() {
  let cart = useSelector((state) => state.cart);
  let user = useSelector((state) => state.user);

  return (
    <div className="container">
      <h2 className="my-4">Your cart</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Title</th>
            <th scope="col">Count</th>
            <th scope="col">Change</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, idx) => (
            <tr key={idx}>
              <th scope="row">{idx + 1}</th>
              <td>{item.name}</td>
              <td>{item.count}</td>
              <td>
                <button>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
