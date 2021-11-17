import { render } from "@testing-library/react";
import { Footer } from ".";

describe("Footer", () => {
  test("Deve renderizar o componente Footer", () => {
    render(<Footer />);
  });
});
