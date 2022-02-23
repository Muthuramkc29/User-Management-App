import { Dialog } from "primereact/dialog";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  // changeOpenModal,
  setName,
  setEmail,
  changeUpdateClick,
  setUpdateName,
  setUpdateEmail,
} from "../../redux/reducers/userReducers";
import { v4 as uuidv4 } from "uuid";
// import api from "../../api/axiosConfig";

function Form({
  addUserHandler,
  updateName,
  updateEmail,
  // updateId,
  addUpdateUserHandler,
  modalOpen,
  setModalOpen,
}) {
  const name = useSelector((state) => state.user.name);
  const email = useSelector((state) => state.user.email);
  const updateClick = useSelector((state) => state.user.updateClick);
  const updateId = useSelector((state) => state.user.updateId);
  // const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    // console.log(updateClick);
    // if (!updateClick) {
    addUserHandler({ id: uuidv4(), name: name, email: email });
    // const request = { id: uuidv4(), name, email };
    // const response = await api.post("/contacts", request);
    // dispatch(setUsers(response.data);
    dispatch(setName(""));
    dispatch(setEmail(""));
    setModalOpen(false);
    // } else {
    //   addUpdateUserHandler({
    //     id: updateId,
    //     name: updateName,
    //     email: updateEmail,
    //   });
    //   dispatch(setUpdateName(""));
    //   dispatch(setUpdateEmail(""));
    //   // dispatch(changeOpenModal());
    //   dispatch(changeUpdateClick());
    // }
  };

  const handleUpdateClick = (e) => {
    e.preventDefault();
    console.log(updateId, updateName, updateEmail);
    addUpdateUserHandler({
      id: updateId,
      name: updateName,
      email: updateEmail,
    });
    console.log(updateId, updateEmail, updateName);
    dispatch(setUpdateName(""));
    dispatch(setUpdateEmail(""));
    // dispatch(changeOpenModal());
    dispatch(changeUpdateClick());
    setModalOpen(false);
  };

  return (
    <div>
      <Dialog
        header={updateClick ? "Update User" : "Create User"}
        visible={modalOpen}
        style={{ width: "35vw" }}
        onHide={() => {
          setModalOpen(false);
          dispatch(changeUpdateClick(false));
          // dispatch(changeOpenModal());
          // dispatch(changeUpdateClick());
          console.log("hidden");
        }}
        breakpoints={{ "960px": "50vw", "640px": "75vw" }}
      >
        <form onSubmit={updateClick ? handleUpdateClick : handleSubmit}>
          <div>
            <label className="">Name</label>
            <input
              type="text"
              value={updateClick ? updateName : name}
              placeholder="Enter a name"
              required
              onChange={(e) => {
                if (!updateClick) {
                  dispatch(setName(e.target.value));
                } else {
                  dispatch(setUpdateName(e.target.value));
                  console.log(e.target.value);
                }
                // console.log(name);
              }}
              className="w-full px-4 py-2 text-sm border rounded-md focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-600 mt-2 mb-3"
            />
          </div>
          <div>
            <label className="">Email</label>
            <input
              type="text"
              value={updateClick ? updateEmail : email}
              placeholder="Enter a email address"
              required
              onChange={(e) => {
                if (!updateClick) {
                  dispatch(setEmail(e.target.value));
                } else {
                  dispatch(setUpdateEmail(e.target.value));
                  console.log(e.target.value);
                }
              }}
              className="w-full px-4 py-2 text-sm border rounded-md focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-600 mt-2 mb-3"
            />
          </div>
          <button className="w-full bg-green-600 p-2 mt-2 text-white">
            Create
          </button>
        </form>
      </Dialog>
    </div>
  );
}

export default Form;
