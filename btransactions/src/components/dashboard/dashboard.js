import ExpensesSummary from "../expenses/expensessummary";
import "./dashboard.css";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Transactions from "../transactions/transactions";
import AccountSummary from "../accountsummary/accountsummary";
import Transfer from "../transfer/transfer";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);

  let userData = {
    userName: faker.name.firstName() + " " + faker.name.lastName(),
    accountNumber: faker.finance.account(),
    routingNumber: faker.finance.routingNumber(),
    accountTotalValue: 100000,
    avatar: faker.image.avatar(),
  };

  let total = {
    totalCheckings: 0,
    totalSavings: 0,
    totalInvestments: 0,
    totalAmount: 0,
  };
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch("https://retoolapi.dev/kMWSRy/data");
      const allData = await resp.json();
      setTransactions(allData);
    };
    fetchData();
  }, []);

  transactions.forEach((transaction) => {
    let accountType = transaction.accountType;
    if (accountType === "Checkings") {
      total.totalCheckings += transaction.paymentValue;
    } else if (accountType === "Savings") {
      total.totalSavings += transaction.paymentValue;
    } else if (accountType === "Investments") {
      total.totalInvestments += transaction.paymentValue;
    }
    total.totalAmount += transaction.paymentValue;
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <AccountSummary total={total} userData={userData} />
        </div>
        <div className="col-6">
          <ExpensesSummary transactions = {transactions} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Transfer total={total} />
        </div>
        <div className="col">
          <Transactions transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
