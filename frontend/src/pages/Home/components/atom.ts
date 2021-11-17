import { atom } from "recoil";

export const generate = atom({
  key: "home",
  default: {
    error: false,
    name: "",
    email: "",
    password: ""
  },
});
