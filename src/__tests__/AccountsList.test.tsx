import { render } from "@testing-library/react";
import React from "react";
import { AccountsList } from "../components/AccountsList";

describe("AccountsList", () => {
  it("should render", () => {
    const { container } = render(<AccountsList />);
    expect(container).toBeTruthy();
  });
});
