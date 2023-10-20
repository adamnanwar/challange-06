import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import NoToken from "./components/auth/NoToken";
import Protected from "./components/auth/Protected";
import Search from "./pages/Search";
import DetailMovie from "./pages/DetailMovie";
import Login from "./users/Login";
import Register from "./users/Register";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH}>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />

        <Route
          path="/login"
          element={
            <NoToken>
              <Login />
            </NoToken>
          }
        />

        <Route
          path="/register"
          element={
            <NoToken>
              <Register />
            </NoToken>
          }
        />

        <Route path="/search" element={<Search />} />

        <Route
          path="users/detail/:id"
          element={
            <Protected>
              <DetailMovie />
            </Protected>
          }
        />
      </Routes>
      <ToastContainer theme="colored" />
    </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
