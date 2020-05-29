import { render } from "@testing-library/react";
import React from "react";
import { App } from "../components/App";

describe("App", () => {
  it("should render", () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });
});
