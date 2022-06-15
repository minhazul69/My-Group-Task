import "./App.css";
import Dashboard from "./Pages/Components/Dashboard/Dashboard";
import Dashboard1 from "./Pages/Components/Dashboard1/Dashboard1";
import Footer from "./Pages/Components/Footer/Footer";
import Navbar from "./Pages/Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
      <Dashboard1 />
      <Footer />
    </div>
  );
}

export default App;
