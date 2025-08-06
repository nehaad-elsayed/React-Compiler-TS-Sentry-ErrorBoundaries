import { useState } from "react";
import CustomErrorBoundary from "./components/ErrorBoundary"; // bn3ml call ll error boundary 3shan n wrab elchildren (react nodes) gowah
import BuggyComponent from "./components/BuggyComponent";

// 3shan y3ml 3mleya mo3qda
function ExpensiveComponent({ count }: { count: number }) {
  console.log("Re-rendering ExpensiveComponent 🚀");

  let total = 0;

  // 3shan ageeb 3dd 3shwa2y
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
      {/* elawl n3ml import el error boundary 3shan nwrab elchildren (react nodes) gowah */}
      {/* lw feeh ay moshkla 7slt msh ht5rog bara elcomponent  */}
      <CustomErrorBoundary>
        <div className="container">
          <h1>React Compiler With Sentry Error Boundary</h1>

          <button onClick={() => setCount(count + 1)}>Increment</button>

          {/* hn3ml hena bardo encapsulate l ExpensiveComponent 3shan lw 7asal error myo5rogsh barra  */}
          <CustomErrorBoundary>
            <ExpensiveComponent count={count} />
          </CustomErrorBoundary>

          <h2>Error Boundary Test</h2>

          {/* hena bardo bn3ml encapsulation l el BuggyComponent 3shan lw 7asal error myo5rogsh barra  */}
          <CustomErrorBoundary>
            {/* elbuggy component da bs 3shan y3ml simulation l elerror   */}
            <BuggyComponent />
          </CustomErrorBoundary>
        </div>
      </CustomErrorBoundary>
    </div>
  );
}

export default App;
