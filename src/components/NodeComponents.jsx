import React from "react";
import SelectionNode from "./SelectionNode";
import EditMessage from "./EditMessage";

const NodeComponents = ({ isSelected, text, textId, setText, setId }) => {
  return (
    <div>
      <div className="p-1 h-100">
        <section className="p-2 text-info-emphasis">
          {isSelected ? (
            <EditMessage
              value={text}
              textId={textId}
              setId={setId}
              setText={setText}
            />
          ) : (
            <SelectionNode />
          )}
        </section>
      </div>
    </div>
  );
};

export default NodeComponents;
