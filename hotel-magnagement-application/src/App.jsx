<<<<<<< HEAD
//todo // imported methods from packages
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

//todo //this are imported pages
=======
// import Button from "./ui/Button";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

//todo // this is the import for pages
>>>>>>> practice
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Settings from "./pages/Settings";
import Users from "./pages/Users";

<<<<<<< HEAD
//todo // imported components
=======
//todo // this is component imports
>>>>>>> practice
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="cabins" element={<Cabins />} />
<<<<<<< HEAD
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="account" element={<Account />} />
          <Route path="login" element={<Login />} />
=======
          <Route path="account" element={<Account />} />
          <Route path="login" element={<Login />} />
          <Route path="settings" element={<Settings />} />
          <Route path="user" element={<Users />} />
>>>>>>> practice
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
