import React, { useState } from "react";
import { useReactFlow } from "reactflow";

const SaveButton = () => {
  const { getNodes, getEdges } = useReactFlow();
  const [saveResp, setSaveResp] = useState(null);

  const isSaveValid = () => {
    const unConnectedNodes = getNodes().filter(
      (node) =>
        !getEdges().some(
          (edge) => edge.source === node.id || edge.target === node.id
        )
    );
    if (!unConnectedNodes.length > 0) {
      setSaveResp({
        mode: "success",
        text: "Saved successfully",
      });
    } else {
      setSaveResp({
        mode: "danger",
        text: "can't save check connections",
      });
    }
    setTimeout(() => {
      setSaveResp(null);
    }, 1000);
  };
  return (
    <div>
      <div
        className="position-absolute start-50"
        style={{ top: "2rem", transform: "translateX(-50%)" }}
      >
        <button
          type="button"
          className={`btn btn-outline-${saveResp?.mode ?? "danger"}`}
          style={{ width: "max-content" }}
          onClick={isSaveValid}
        >
          Save changes
        </button>
      </div>
      {saveResp && (
        <div
          className={`position-absolute start-50 bg-${saveResp?.mode} p-2 text-white bg-opacity-75`}
          style={{ top: "5rem", transform: "translateX(-50%)" }}
        >
          <h5 className="text-center">{saveResp?.text}</h5>
        </div>
      )}
    </div>
  );
};

export default SaveButton;
