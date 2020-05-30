import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { App } from "../components/App";
import store from "../state/store";

describe("App", () => {
  it("should render", () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(container).toBeTruthy();
  });
});
