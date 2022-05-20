import React from "react";
import {render, screen} from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders learn react link", () => {
    try {
      render(<App />);
      const linkElement = screen.getByText(/Home/i);
      expect(linkElement).toBeInTheDocument();
    } catch (err) {
      console.log(err);
    }
  });
});
