import "./accountsummary.css";
const AccountSummary = ({ total, userData }) => {
  return (
    <div className="accountSummary">
      <div className="card-body p-3">
        <div className="d-flex text-black">
          <div className="flex-shrink-0">
            <img
              src={userData.avatar}
              alt="user"
              className="img-fluid"
              style={{ width: "180px", borderRadius: "10px" }}
            />
          </div>
          <div className="flex-grow-1 ms-3">
            <h5 className="mb-1">{userData.userName}</h5>
            <p className="mb-2 pb-1" style={{ color: "#2b2a2a" }}>
              Checkings Account
            </p>
            <p className="mb-2 pb-1" style={{ color: "#2b2a2a" }}>
              Account Number {userData.accountNumber}
            </p>
            <div
              className="d-flex justify-content-start rounded-3 p-2 mb-2"
              style={{ backgroundColor: "#efefef" }}
            >
              <div className="accountTitle">
                <p className="small text-muted mb-2 accountTitle">Checkings</p>
                <p className="mb-1">{total.totalCheckings}$</p>
              </div>
              <div className="accountTitle">
                <p className="small text-muted mb-2 accountTitle">Savings</p>
                <p className="mb-1">{total.totalSavings}$</p>
              </div>
              <div className="accountTitle">
                <p className="small text-muted mb-2 accountTitle">
                  Investments
                </p>
                <p className="mb-1">{total.totalInvestments}$</p>
              </div>
            </div>
            <div className="d-flex pt-2">
              <button type="button" className="btn btn-light flex-grow-1">
                Change Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSummary;
