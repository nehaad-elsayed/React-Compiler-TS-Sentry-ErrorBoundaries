import { useState } from "react";

interface BuggyComponentProps {
  shouldThrow?: boolean;
}

export function BuggyComponent({ shouldThrow = false }: BuggyComponentProps) {
  const [count, setCount] = useState(0);

  if (shouldThrow) {
    throw new Error("This is a test error to demonstrate error boundary!");
  }

  if (count > 5) {
    throw new Error("Component crashed after 5 clicks!");
  }

  return (
    <div
      style={{
        padding: "15px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        margin: "10px 0",
      }}
    >
      <h3>Buggy Component</h3>
      <p>Click count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          backgroundColor: "#ff7675",
          color: "white",
          border: "none",
          padding: "8px 16px",
          borderRadius: "4px",
          cursor: "pointer",
          marginRight: "10px",
        }}
      >
        Increment (will crash after 5)
      </button>
      <button
        onClick={() => {
          throw new Error("Manual error trigger!");
        }}
        style={{
          backgroundColor: "#e17055",
          color: "white",
          border: "none",
          padding: "8px 16px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Trigger Error
      </button>
    </div>
  );
}

export default BuggyComponent;
