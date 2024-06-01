import React from "react";

export const CreateNode = () => {
  const dragStart = (e, nodeType, contentText) => {
    e.dataTransfer.setData("dataType", nodeType);
    e.dataTransfer.setData("label", contentText);
    e.dataTransfer.effectAllowed = "move";
  };

  return (
    <>
      <button
        type="button"
        className="btn"
        style={{ background: "#B9D9EB", color: "#041E42" }}
        draggable
        onDragStart={(e) => dragStart(e, "customNode", "dummy text")}
      >
        Create node
      </button>
      <hr />
      <p className="text-center fst-italic ">
        Note : If You want to edit node then click on that node{" "}
      </p>
    </>
  );
};
