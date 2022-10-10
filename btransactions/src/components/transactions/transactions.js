import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const Transactions = ({ transactions }) => {
  const rowData = transactions;

  const [colDefs, setColDefs] = useState([
    {
      field: "transactionDate",
      width: 180,
      comparator: (valueA, valueB, nodeA, nodeB, isDescending) => {
        if (valueA === valueB) return 0;
        return valueA > valueB ? 1 : -1;
      },
    },
    { field: "paymentType" },
    {
      field: "paymentValue",
      valueFormatter: (params) => "$" + params.value,
    },
    { field: "transactionName", width: 260 },
  ]);

  return (
    <div className="transactions">
      <h5 style={{ textAlign: "center" }}>All transactions</h5>
      <div className="ag-theme-alpine" style={{ height: 400, width: 850 }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={{ sortable: true, filter: true }}
          pagination={true}
          paginationPageSize={7}
        ></AgGridReact>
      </div>
    </div>
  );
};

export default Transactions;
