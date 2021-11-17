import { render } from "@testing-library/react";
import { ErrorMessage } from ".";

describe("ErrorMessage", () => {
  test("Deve renderizar a página ErrorMessage", () => {
    render(<ErrorMessage />);
  });
});
