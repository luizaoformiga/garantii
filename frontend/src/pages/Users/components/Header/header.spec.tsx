import { render } from "@testing-library/react";
import { Header } from ".";

describe("Header", () => {
  test("Deve renderizar o componente Header", () => {
    render(<Header />);
  });
});
