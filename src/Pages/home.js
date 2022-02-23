import { Button } from "primereact/button";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Dialog } from "primereact/dialog";
import Card from "../Components/Card/Card";
import Form from "../Components/Form/Form";
import {
  // changeOpenModal,
  setUsers,
  setTrashUsers,
  changeUpdateClick,
  setUpdateName,
  setUpdateEmail,
  setDeleteLoading,
} from "../redux/reducers/userReducers";
import api from "../api/axiosConfig";

function Home() {
  const users = useSelector((state) => state.user.users);
  const trashUsers = useSelector((state) => state.user.trashUsers);
  // const openModal = useSelector((state) => state.user.openModal);
  const updateName = useSelector((state) => state.user.updateName);
  const updateEmail = useSelector((state) => state.user.updateEmail);
  const loading = useSelector((state) => state.user.loading);
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();

  const addUserHandler = async (contact) => {
    const request = contact;
    // console.log(request);
    const response = await api.post("/contacts", request);
    console.log(response);
    dispatch(setUsers([...users, response.data]));
  };

  // var updateId;
  const handleUpdate = (id, name, email) => {
    // dispatch(changeOpenModal());
    dispatch(changeUpdateClick(true));
    dispatch(setUpdateName(name));
    dispatch(setUpdateEmail(email));
    // updateId = id;
  };

  const addUpdateUserHandler = async (user) => {
    const request = user;
    const response = await api.put(`/contacts/${user.id}`, request);
    const { id, name, email } = response.data;
    dispatch(
      setUsers(
        users.map((user) => {
          return user.id === id ? { id, name, email } : user;
        })
      )
    );
  };

  const handleDelete = async (id, name, email) => {
    dispatch(setDeleteLoading(true));
    await api.delete(`/contacts/${id}`);
    dispatch(setDeleteLoading(false));
    const newUsers = users.filter((user) => {
      return user.id !== id;
    });
    dispatch(setUsers(newUsers));

    const request = { id, name, email };
    const response = await api.post("/recyclebin", request);
    dispatch(setTrashUsers([...trashUsers, response.data]));
  };

  return (
    <div className="text-center mt-10">
      <div className="flex justify-end items-center mr-8 md:mr-12 text-white">
        <Button
          label="Create User"
          icon="pi pi-plus"
          className="p-button-raised p-button-success p-button-sm"
          onClick={() => {
            setModalOpen(true);
          }}
        />
      </div>
      {modalOpen && (
        <Form
          addUserHandler={addUserHandler}
          updateName={updateName}
          updateEmail={updateEmail}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          addUpdateUserHandler={addUpdateUserHandler}
        />
      )}
      {loading ? (
        <div>
          <i
            className="pi pi-spin pi-spinner mt-4"
            style={{ fontSize: "2em", color: "green" }}
          ></i>
        </div>
      ) : (
        <Card
          handleUpdate={handleUpdate}
          // addUpdateUserHandler={addUpdateUserHandler}
          // updateId={updateId}
          handleDelete={handleDelete}
          setModalOpen={setModalOpen}
          modalOpen={modalOpen}
        />
      )}
    </div>
  );
}

export default Home;
