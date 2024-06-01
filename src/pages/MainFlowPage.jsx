import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  ReactFlowProvider,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";

import "reactflow/dist/style.css";
import SaveBtn from "../components/SaveButton";
import Sidebar from "../components/SideBar";
import CustomNode from "../components/Node";
import { initialEdges, initialNodes } from "../assets/initialElement";

const nodeTypes = { customNode: CustomNode };

let nodeIdCounter = 1;
const generateNodeId = () => `dropId_${nodeIdCounter++}`;

function MainFlowPage() {
  const flowRef = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [flowInit, setFlowInit] = useState(null);
  const [editText, setEditText] = useState("");
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  console.log(initialEdges, initialNodes);
  useEffect(() => {
    const selectedNodes = nodes.some((node) => node.selected);
    setIsSelected(selectedNodes);
  }, [nodes]);

  const handleNodeClick = (e, node) => {
    setSelectedNodeId(node.id);
    setEditText(node.data.content);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      const dataType = e.dataTransfer.getData("dataType");
      const label = e.dataTransfer.getData("label");

      if (typeof dataType === "undefined" || !dataType) {
        return;
      }
      const position = flowInit.screenToFlowPosition({
        x: e.clientX,
        y: e.clientY,
      });

      setNodes((prevNodes) =>
        prevNodes.concat({
          id: generateNodeId(),
          type: dataType,
          position: position,
          data: {
            heading: "Send Message",
            content: label,
          },
        })
      );
    },
    [setNodes, flowInit]
  );

  const handleConnect = useCallback(
    (params) =>
      setEdges((prevEdges) => addEdge({ ...params, id: "50" }, prevEdges)),
    [setEdges]
  );

  return (
    <div className="App">
      <ReactFlowProvider>
        <ReactFlow
          ref={flowRef}
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={handleConnect}
          nodeTypes={nodeTypes}
          onNodeClick={handleNodeClick}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onInit={setFlowInit}
        >
          <Controls position="bottom-left" />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
        <Sidebar
          isSelected={isSelected}
          text={editText}
          setText={setEditText}
          textId={selectedNodeId}
          setId={setSelectedNodeId}
        />
        <SaveBtn />
      </ReactFlowProvider>
    </div>
  );
}

export default MainFlowPage;
