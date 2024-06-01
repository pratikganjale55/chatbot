import React from "react";
import SideBar from "./SideBar";
import { CreateNode } from "./CreateNode";

const SelectionNode = () => {
  return (
    <div className="d-flex flex-column align-items-center text-center">
      <h5>drag button to create node</h5>
      <CreateNode />
    </div>
  );
};

export default SelectionNode;
