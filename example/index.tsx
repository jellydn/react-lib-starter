import * as React from "react";
import { createRoot } from "react-dom/client";
import { YourComponent } from "react-lib-starter";

const App = () => (
  <div>
    <YourComponent />
  </div>
);

createRoot(document.querySelector("#root")!).render(<App />);
