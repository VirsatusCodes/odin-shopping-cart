import React from "react";
import {
  render,
  screen,
  act,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Nav from "../components/NavBar.js";

const cart = {
  fullCart: [
    {
      id: 12345,
      quantity: 4,
    },
    {
      id: "1234",
      quantity: 6,
    },
  ],
  item: {
    id: "",
    quantity: 0,
  },
};
