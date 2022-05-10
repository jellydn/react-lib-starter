import * as React from "react";
import ReactDOM from "react-dom/client";

import { YourComponent } from "../src";

describe("it", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    const root = ReactDOM.createRoot(div);
    root.render(<YourComponent />);
    root.unmount();
  });
});
