import logo from "./logo.svg";
import "./App.css";
import LeftNavBar from "./LeftNavBar";
import TopNavBar from "./TopNavBar";
import BillList from "./BillList";
import BillSummary from "./BillSummary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      {" "}
      {/* wrap your app with BrowserRouter */}
      <div className="flex bg-blue-50">
        <LeftNavBar />
        <div className="flex-grow">
          <div>
            <TopNavBar />
          </div>
          <div>
            <Routes>
              <Route path="/" element={<BillList />} />
              <Route path="/bill-summary" element={<BillSummary />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
