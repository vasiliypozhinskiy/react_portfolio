import { render } from '@testing-library/react';
import AppRoot from "./AppRoot";
import React from "react";
import {unmountComponentAtNode} from "react-dom"

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('App root renders', () => {
  render(<AppRoot />, container);
});
