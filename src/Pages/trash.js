import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import React from "react";
import TrashCard from "../Components/Card/TrashCard";
import {
  setDeleteLoading,
  setRestoreLoading,
  setTrashUsers,
  setUsers,
} from "../redux/reducers/userReducers";
import { useDispatch, useSelector } from "react-redux";
import api from "../api/axiosConfig";

function Trash() {
  const users = useSelector((state) => state.user.users);
  const trashUsers = useSelector((state) => state.user.trashUsers);
  const trashLoading = useSelector((state) => state.user.trashLoading);
  const dispatch = useDispatch();

  const handleTrashUserDelete = async (id) => {
    dispatch(setDeleteLoading(true));
    await api.delete(`/recyclebin/${id}`);
    dispatch(setDeleteLoading(false));
    const newUsers = trashUsers.filter((user) => {
      return user.id !== id;
    });
    dispatch(setTrashUsers(newUsers));
  };

  const handleRestore = async (user) => {
    dispatch(setRestoreLoading(true));
    await api.delete(`/recyclebin/${user.id}`);
    dispatch(setRestoreLoading(false));
    const newUsers = trashUsers.filter((trashUser) => {
      return trashUser.id !== user.id;
    });
    dispatch(setTrashUsers(newUsers));
    const response = await api.post("/contacts", user);
    dispatch(setUsers([...users, response.data]));
  };

  return (
    <div className="px-16 mt-10">
      <Link to="/">
        <Button
          label="Back"
          icon="pi pi-arrow-left"
          className="p-button-raised p-button-success p-button-sm"
        />
      </Link>
      {trashLoading ? (
        <div className="flex justify-center mt-5">
          <i
            className="pi pi-spin pi-spinner"
            style={{ fontSize: "2em", color: "green" }}
          ></i>
        </div>
      ) : (
        <TrashCard
          handleTrashUserDelete={handleTrashUserDelete}
          handleRestore={handleRestore}
        />
      )}
    </div>
  );
}

export default Trash;
