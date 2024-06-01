import React, { useCallback, useState } from "react";

import ReactFlow, {
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from "reactflow";
export const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "User's Input" },
    position: { x: 500, y: 100 },
  },
  {
    id: "2",
    data: { label: "Process Input" },
    type: "default",
    position: { x: 500, y: 200 },
  },
  {
    id: "3",
    data: { label: "Print yes" },
    position: { x: 200, y: 350 },
  },
  { id: "4", data: { label: "Print No" }, position: { x: 500, y: 350 } },
  { id: "5", data: { label: "Retake test" }, position: { x: 850, y: 350 } },
  {
    id: "6",
    data: { label: "Retake Test Yes" },
    position: { x: 1050, y: 450 },
  },
  { id: "7", data: { label: "Retake Test No" }, position: { x: 700, y: 450 } },
  {
    id: "8",
    type: "output",
    data: { label: "User's Output / End application" },
    position: { x: 500, y: 650 },
  },
];
export const initialEdges = [
  { id: "el1-2", source: "1", target: "2" },
  { id: "el2-3", source: "2", target: "3", animated: true },
  { id: "el2-4", source: "2", target: "4", animated: true },
  { id: "el2-5", source: "2", target: "5", animated: true },
  { id: "el6-1", source: "1", target: "6", label: "Back to Input" },
];
const Sample = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodeChange = useCallback(
    (x) => setNodes((newNode) => applyNodeChanges(x, newNode)),
    [setNodes]
  );

  const onEdgeChange = useCallback(
    (x) => setEdges((eds) => applyEdgeChanges(x, eds)),
    [setEdges]
  );

  const onEdgeConnect = useCallback(
    (x) => setEdges((eds) => addEdge({ ...x, animated: true }, eds)),
    [setEdges]
  );

  return (
    <div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodeChange}
        onEdgesChange={onEdgeChange}
        onConnect={onEdgeConnect}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default Sample;
