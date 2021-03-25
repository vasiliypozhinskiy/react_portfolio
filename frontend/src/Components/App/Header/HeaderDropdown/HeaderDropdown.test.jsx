import {unmountComponentAtNode} from "react-dom";
import {render, fireEvent, screen} from "@testing-library/react";
import HeaderDropdown from "./HeaderDropdown";
import React from "react";
import {BrowserRouter} from 'react-router-dom'
import configureStore from "../../../../store";
import {Provider} from "react-redux";


const store = configureStore();
const AllWrappers = ({children}) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <React.StrictMode>
                    {children}
                </React.StrictMode>
            </Provider>
        </BrowserRouter>
    )
}

const renderWithWrappers = (ui, options) =>
    render(ui, { wrapper: AllWrappers, ...options })

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

test('On click must toggle menu', () => {
    const {getByRole} = renderWithWrappers(<HeaderDropdown/>)
    const dropdown = getByRole("navigation")
    fireEvent.click(dropdown)
    expect(screen.getByText('Project planner'))
});
