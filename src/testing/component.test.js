import React from "react";
import {render, screen, act, waitForElementToBeRemoved} from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Nav from "../components/NavBar.js";


/* describe('Nav testing', () => {

    it('nav links go to correct location', () => {
        render(<Nav />); 
    
        expect(screen.getByText('Catalogue')).toBeInTheDocument();
    })
}); */

/* resolve this error later */