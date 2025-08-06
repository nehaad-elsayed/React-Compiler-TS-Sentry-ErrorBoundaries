import { useState } from "react";
import CustomErrorBoundary from "./components/ErrorBoundary"; // bn3ml call ll error boundary 3shan n wrab elchildren (react nodes) gowah
import BuggyComponent from "./components/BuggyComponent";

function ExpensiveComponent({ count }: { count: number }) {
  console.log("Re-rendering ExpensiveComponent 🚀");
  let total = 0;
  for (let i = 0; i < Math.random() * 1000000000; i++) {
    total += i;
  }
  return (
    <p>
      Total: {total} | Count: {count}
    </p>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container-2">
      <CustomErrorBoundary>
        <div className="container">
          <h1>React Compiler With Sentry Error Boundary</h1>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <CustomErrorBoundary>
            <ExpensiveComponent count={count} />
          </CustomErrorBoundary>

          <h2>Error Boundary Test</h2>
          <CustomErrorBoundary>
            <BuggyComponent />
          </CustomErrorBoundary>
        </div>
      </CustomErrorBoundary>
    </div>
  );
}

export default App;
