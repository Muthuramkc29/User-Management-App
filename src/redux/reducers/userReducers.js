import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    trashUsers: [],
    // openModal: false,
    name: "",
    email: "",
    updateClick: false,
    updateId: "",
    updateName: "",
    updateEmail: "",
    loading: false,
    trashLoading: false,
    deleteLoading: false,
  },
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload;
    },

    getTrashUsers: (state, action) => {
      state.trashUsers = action.payload;
    },

    // changeOpenModal: (state, action) => {
    //   state.openModal = !state.openModal;
    // },

    setName: (state, action) => {
      state.name = action.payload;
    },

    setEmail: (state, action) => {
      state.email = action.payload;
    },

    setUsers: (state, action) => {
      state.users = action.payload;
    },

    setTrashUsers: (state, action) => {
      state.trashUsers = action.payload;
    },

    changeUpdateClick: (state, action) => {
      state.updateClick = action.payload;
    },

    setUpdateName: (state, action) => {
      state.updateName = action.payload;
    },

    setUpdateEmail: (state, action) => {
      state.updateEmail = action.payload;
    },

    setUpdateId: (state, action) => {
      state.updateId = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setTrashLoading: (state, action) => {
      state.trashLoading = action.payload;
    },

    setDeleteLoading: (state, action) => {
      state.deleteLoading = action.payload;
    },
  },
});

export const {
  getUsers,
  getTrashUsers,
  // changeOpenModal,
  setName,
  setEmail,
  setUsers,
  setTrashUsers,
  changeUpdateClick,
  setUpdateName,
  setUpdateEmail,
  setUpdateId,
  setLoading,
  setTrashLoading,
  setDeleteLoading,
} = userSlice.actions;

export default userSlice.reducer;
