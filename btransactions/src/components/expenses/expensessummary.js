import "./expensessummary.css";
import Highcharts from "highcharts";
import { useEffect, useState } from "react";

const ExpensesSummary = ({ transactions }) => {
  let expensses = {
    food: 0,
    other: 0,
    shopping: 0,
    investment: 0,
  };

  transactions.forEach((tra) => {
    if (tra.transactionName === "insurance") {
      expensses.other += tra.paymentValue;
    } else if (tra.transactionName === "Food") {
      expensses.food += tra.paymentValue;
    } else if (
      tra.transactionName === "Amazon" ||
      tra.transactionName === "Spotify" ||
      tra.transactionName === "Google Inc"
    ) {
      expensses.shopping += tra.paymentValue;
    } else if (tra.transactionName === "Investment") {
      expensses.investment += tra.paymentValue;
    }
  });

  const state = {
    series: [
      {
        name: "Shopping",
        colorByPoint: true,
        data: [
          {
            name: "Shoping",
            y: expensses.shopping,
            selected: true,
          },
          {
            name: "Food",
            y: expensses.food,
          },
          {
            name: "Investments",
            y: expensses.investment,
          },
          {
            name: "Others",
            y: expensses.other,
          },
        ],
      },
    ],
  };

  const highChartsRender = () => {
    Highcharts.chart({
      chart: {
        type: "pie",
        renderTo: "expenses-summary",
      },
      title: {
        verticalAlign: "middle",
        floating: true,
        text: "Expenses by category",
        style: {
          fontSize: "10px",
        },
      },
      plotOptions: {
        pie: {
          dataLabels: {
            format: "{point.name}: {point.y:0f} $",
          },
          innerSize: "70%",
        },
      },
      series: state.series,
    });
  };

  useEffect(() => {
    highChartsRender();
  }, []);
  return (
    <div className="expenses">
      <h5 className="expesesTitle">Expenses by Category October 2022</h5>
      <div id="expenses-summary" style={{ marginTop: "20px" }}></div>
    </div>
  );
};

export default ExpensesSummary;
