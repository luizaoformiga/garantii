import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { NewUsers } from ".";

describe("NewUsers", () => {
  test("Deve renderizar a página NewUsers", () => {
    render(
      <RecoilRoot>
        <NewUsers />
      </RecoilRoot>
    );
  });
});
