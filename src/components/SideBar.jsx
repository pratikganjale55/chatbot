import React from "react";
import NodeComponents from "./NodeComponents";

const SideBar = ({ isSelected, text, textId, setText, setId }) => {
  return (
    <div>
      <div
        className="position-absolute border rounded overflow-hidden d-none d-lg-block"
        style={{
          right: "1rem",
          top: "2rem",
          bottom: "2rem",
          width: "20rem",
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        }}
      >
        <NodeComponents
          isSelected={isSelected}
          text={text}
          textId={textId}
          setText={setText}
          setId={setId}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary position-absolute start-50 d-lg-none"
        style={{ bottom: "2rem", transform: "translateX(-50%)" }}
        data-bs-toggle="offcanvas"
        data-bs-target="#barBottom"
        aria-controls="barBottom"
      >
        Add node
      </button>
      <div
        className={`offcanvas offcanvas-bottom d-lg-none h-50 ${
          isSelected && "show"
        }`}
        tabIndex="-1"
        id="barBottom"
        aria-labelledby="barBottomLabel"
      >
        <NodeComponents
          isSelected={isSelected}
          text={text}
          textId={textId}
          setText={setText}
          setId={setId}
        />
      </div>
    </div>
  );
};

export default SideBar;
