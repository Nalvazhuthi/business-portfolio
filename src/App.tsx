import Navbar from "./components/common/navbar";
import Home from "./pages/home";
import "./style/main.scss";
const App = () => {
  return (
    <div className="main-container">
      <Navbar />
      <Home/>
    </div>
  );
};

export default App;
