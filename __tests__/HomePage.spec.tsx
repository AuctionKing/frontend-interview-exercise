import Home from "../app/page";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  test("render", async () => {
    render(<Home />);
    expect(screen.getByText("Welcome")).toBeInTheDocument();
  });
});
