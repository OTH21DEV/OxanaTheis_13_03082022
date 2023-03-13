import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import User from "./pages/User/User";
import Transactions from "./pages/TransactionsBankChecking/TransactionsBankChecking";
import TransactionsBankSavings from "./pages/TransactionsBankSavings/TransactionsBankSavings";
import TransactionsCreditCard from "./pages/TransactionsCreditCard/TransactionsCreditCard";
import Error from "./components/Error/Error";
import PrivateRoutes from "./utils/PrivateRoutes";
//change component vers element, supp exact pour Home
/**
 * 
 *      <Route element={<PrivateRoutes />}>
              <Route path="/dashboard" element={<User />}></Route>
              <Route path="/transactions/bankchecking" element={<Transactions />}></Route>
              <Route path="/transactions/banksavings" element={<TransactionsBankSavings />}></Route>
              <Route path="/transactions/bankcreditcard" element={<TransactionsCreditCard />}></Route>
            </Route>
 * 
 * 
 * 
 */
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>

            <Route element={<PrivateRoutes />}>
              <Route path="/dashboard" element={<User />}></Route>
              <Route path="/transactions/bankchecking" element={<Transactions />}></Route>
              <Route path="/transactions/banksavings" element={<TransactionsBankSavings />}></Route>
              <Route path="/transactions/bankcreditcard" element={<TransactionsCreditCard />}></Route>
            </Route>

            <Route path="*" element={<Error />}></Route>
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
