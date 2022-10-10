import "./transfer.css";
const Transfer = ({ total }) => {
  return (
    <div className="transfer">
      <h3>Transfer Money</h3>
      <h5>Current Account Checkings</h5>
      <h6>Available amount $ {total.totalCheckings}</h6>
      <form>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle dropdownButtons"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Select account from
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#/">
              Checking
            </a>
            <a className="dropdown-item" href="#/">
              Savings
            </a>
            <a className="dropdown-item" href="#/">
              Investment
            </a>
          </div>
          <button
            className="btn btn-secondary dropdown-toggle dropdownButtons"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Select account to
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#/">
              Checking
            </a>
            <a className="dropdown-item" href="#/">
              Savings
            </a>
            <a className="dropdown-item" href="#/">
              Investments
            </a>
          </div>
        </div>
        <div className="input-group mb-3 inputGroup">
          <div className="input-group-prepend">
            <span className="input-group-text">$</span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Amount (to the nearest dollar)"
          />
          <div className="input-group-append">
            <span className="input-group-text">.00</span>
          </div>
        </div>
        <button type="submit" className="btn btn-secondary">
          Transfer
        </button>
      </form>
    </div>
  );
};

export default Transfer;
