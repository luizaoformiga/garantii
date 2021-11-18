import { atom } from "recoil";

export const generate = atom({
  key: "main",
  default: {
    name: "",
    email: "",
    password: "",
    sucess: false,
    error: false,
  },
});
