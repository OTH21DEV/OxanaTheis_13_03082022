
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import User from "./pages/User/User";
import Transactions from "./pages/TransactionsBankChecking/TransactionsBankChecking";
import TransactionsBankSavings from "./pages/TransactionsBankSavings/TransactionsBankSavings";
import TransactionsCreditCard from "./pages/TransactionsCreditCard/TransactionsCreditCard";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/dashboard" element={<User />}></Route>
          <Route path="/transactions/bankchecking" element={<Transactions/>}></Route>
          <Route path="/transactions/banksavings" element={<TransactionsBankSavings/>}></Route>
          <Route path="/transactions/bankcreditcard" element={<TransactionsCreditCard/>}></Route>
        </Routes>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
