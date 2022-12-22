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

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" component={<Home />}></Route>
            <Route path="/signin" component={<SignIn />}></Route>

            <Route component={<PrivateRoutes />}>
              <Route path="/dashboard" component={<User />}></Route>
              <Route path="/transactions/bankchecking" component={<Transactions />}></Route>
              <Route path="/transactions/banksavings" component={<TransactionsBankSavings />}></Route>
              <Route path="/transactions/bankcreditcard" component={<TransactionsCreditCard />}></Route>
            </Route>

            <Route path="*" component={<Error />}></Route>
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
