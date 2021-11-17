import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { Home } from ".";

describe("Home", () => {
  test("Deve renderizar a página Home", () => {
    render(
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    );
  });
});
