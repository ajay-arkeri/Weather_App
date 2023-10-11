import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div>
      <h1 className="bg-red-500">Weather App</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
