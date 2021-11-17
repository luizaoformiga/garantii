import { render } from "@testing-library/react";
import { Users } from ".";

describe("Users", () => {
  test("Deve renderizar a página Users", () => {
    render(<Users />);
  });
});
