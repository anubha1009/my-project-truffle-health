import logo from './logo.svg';
import './App.css';
import LeftNavBar from './LeftNavBar';
import TopNavBar from './TopNavBar';
import BillList from './BillList';
function App() {
  return (
    <div className="flex">
    <LeftNavBar />
    <div className="flex-grow bg-gray-100">
      <div>
      <TopNavBar />
      </div>
      <div>
      <BillList />
      </div>
    </div>
  </div>
  );
}

export default App;
