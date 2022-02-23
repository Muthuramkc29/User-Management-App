import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import React from "react";

function Trash() {
  return (
    <div className="px-16 mt-10">
      <Link to="/">
        <Button
          label="Back"
          icon="pi pi-arrow-left"
          className="p-button-raised p-button-success p-button-sm"
        />
      </Link>
    </div>
  );
}

export default Trash;
