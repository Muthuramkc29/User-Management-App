import { Button } from "primereact/button";
import React, { useState } from "react";
// import { Dialog } from "primereact/dialog";
import Card from "../Components/Card/Card";
import Form from "../Components/Form/Form";

function Home() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="text-center mt-10">
      <div className="flex justify-end items-center mr-12 text-white">
        <Button
          label="Create User"
          icon="pi pi-plus"
          className="p-button-raised p-button-success p-button-sm"
          onClick={() => {
            setOpenModal(!openModal);
            console.log(openModal);
          }}
        />
      </div>
      {openModal && <Form setOpenModal={setOpenModal} />}
      <Card />
    </div>
  );
}

export default Home;
