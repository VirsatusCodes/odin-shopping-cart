import React from "react";
import {render, screen, act, waitForElementToBeRemoved} from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import HomePage from "../pages/HomePage";


describe('HomePage testing', ()=> {

    it('renders greeting', () => {
        render(<HomePage />); /* one instance of render HomePage cant work for multiple tests apparently */
        
        expect(screen.getByRole('heading').textContent).toMatch(/Welcome to our store!/);
    });

    it('renders mission statement', () => {
        render(<HomePage />); 
        
        expect(screen.getByText(/Here/)).toBeInTheDocument();
    })
});