import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavBar from "./components/navbar/nav";
import "bootstrap-icons/font/bootstrap-icons.css";
import Dashboard from "./components/dashboard/dashboard";

function App() {
  return (
    <div>
      <NavBar />
      <Dashboard />
    </div>
  );
}

export default App;
