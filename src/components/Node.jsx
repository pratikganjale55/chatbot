import React, { useMemo } from "react";
import {
  Handle,
  Position,
  getConnectedEdges,
  useNodeId,
  useStore,
} from "reactflow";

const Node = ({ data, selected }) => {

return (
    <div>
      <div
        className={`card p-1 ${
          selected && "shadow-lg border border-info"
        } bg-body-tertiary`}
        style={{ minWidth: "12rem" }}
      >
        <div
          className="card-header text-center  text-info-emphasis fw-bold"
          style={{
            background:
              "radial-gradient(circle at 10% 20%, rgb(215, 223, 252) 0%, rgb(255, 255, 255) 0%, rgb(215, 223, 252) 84%)",
          }}
        >
          {data.heading}
        </div>
        <div className="card-body">{data.content}</div>
        <Handle
          type="source"
          position={Position.Bottom}
          id="h-2"
          isConnectable={true}
          
        />
        <Handle type="target" position={Position.Top} id="h-1" isConnectable={true} />
      </div>
    </div>
  );
};

export default Node;
