import React from "react";
import {render, screen, act, waitForElementToBeRemoved} from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import TestComponent from "./TestComponent";