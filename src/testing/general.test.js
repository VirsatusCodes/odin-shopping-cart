import React from "react";
import {render, screen, act, waitForElementToBeRemoved} from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import TestComponent from "./TestComponent";



/* describe('TestComponent Input', () => {
    it('calls onChange correct number of times', () => {
        const onChangeMock = jest.fn();
        render(<TestComponent onChange={onChangeMock} />);
        const input = screen.getByRole('textbox');

        userEvent.type(input, 'Lion');

        expect(onChangeMock).toHaveBeenCalledTimes(4);
    });

    it('calls onChange with correct argument(s) on each input', () => {
        const onChangeMock = jest.fn();
        render(<TestComponent onChange={onChangeMock} />)
        const input = screen.getByRole('textbox');

        userEvent.type(input, 'Ox');

        expect(onChangeMock).toHaveBeenNthCalledWith(1, 'O');
        expect(onChangeMock).toHaveBeenNthCalledWith(2, 'Ox');
    });

    it('input has correct values', () => {
        const onChangeMock = jest.fn();
        render(<TestComponent onChange={onChangeMock} />);
        const input = screen.getByRole('textbox');
        

        userEvent.type(input, 'Whale');

        console.log(input.id)
        
        expect(input).toHaveValue('Whale');
    })
});

describe('TestComponent component', () => {
    it('renders correct heading', () => {
        const {getByRole} = render(<TestComponent />);
        expect(getByRole('heading').textContent).toMatch(/our first test/i);
    });
});

describe('TestComponent component', () => {
    it('renders magnificent monkeys', () => {
        const {container} = render(<TestComponent />);
        expect(container).toMatchSnapshot();
    });
});

it('renders radical rhinos after button click', () => {
    render(<TestComponent />);
    const button = screen.getByRole('button', {name: 'Click Me'});

    have to use act when state is changed
    act(() => {
        userEvent.click(button);
    })
    

    expect(screen.getByRole('heading').textContent).toMatch(/radical rhinos/i)
})

test('render h1 element', () => {
    render(<TestComponent />);

    screen.debug(); this console.log's the dom tree

    expect(screen.getByText('Hello World')).toBeInTheDocument();
});

test('list contains 5 animals', () => {
    render(<TestComponent />);

    const listElement = screen.getByRole('list')
    const listItems = screen.getAllByRole('listitem');

    expect(listElement).toBeInTheDocument();
    expect(listElement).toHaveClass('animals');
    expect(listItems.length).toEqual(5);
})

test('loading text is shown while API request is in progress', async () => {
    render(<TestComponent />);
    const loading = screen.getByText('Loading...');

    expect(loading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));

});


 */