import { render } from "@testing-library/react";
import React from "react";
import { AccountsListItem } from "../AccountsListItem";

describe("AccountsListItem", () => {
  it("should display the text of a platform", () => {
    const platform = {
      placeholder: "https://github.com/",
      text: "Github",
      icon: "GitHub",
      id: "Github",
    };
    const name = new RegExp(platform.text, "i");

    const { getByRole } = render(<AccountsListItem platform={platform} />);

    expect(getByRole("textbox", { name })).toBeInTheDocument();
  });
});
