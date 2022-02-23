import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/home";
import Trash from "./Pages/trash";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import api from "./api/axiosConfig";
import { useDispatch } from "react-redux";
import {
  getUsers,
  getTrashUsers,
  setLoading,
  setTrashLoading,
} from "./redux/reducers/userReducers";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const retriveUsers = async () => {
      dispatch(setLoading(true));
      const response = await api.get("/contacts");
      dispatch(setLoading(false));
      dispatch(getUsers(response.data));
    };

    retriveUsers();

    const retriveTrashUsers = async () => {
      dispatch(setTrashLoading(true));
      const response = await api.get("recyclebin");
      dispatch(setTrashLoading(false));
      dispatch(getTrashUsers(response.data));
    };

    retriveTrashUsers();
  });

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem", textAlign: "center" }}>
                <p>404 Error Page Not Found!</p>
              </main>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/trash" element={<Trash />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
