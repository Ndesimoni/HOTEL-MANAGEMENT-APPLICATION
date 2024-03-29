// import Button from "./ui/Button";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

//todo // this is the import for pages
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Settings from "./pages/Settings";
import Users from "./pages/Users";

//todo // this is component imports
import GlobalStyles from "./styles/GlobalStyles";
import AppLayOut from "./ui/AppLayOut";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <AppLayOut>
                <Route index element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="bookings" element={<Bookings />} />
                <Route path="cabins" element={<Cabins />} />
                <Route path="account" element={<Account />} />
                <Route path="login" element={<Login />} />
                <Route path="settings" element={<Settings />} />
                <Route path="user" element={<Users />} />
                <Route path="*" element={<PageNotFound />} />
              </AppLayOut>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
