import React from 'react';
import {addBookAC, bookReducer, bookType, changeAuthorBookAC, changeNameBookAC, deleteBookAC} from "./books-reduser";


let startState: Array<bookType>;
let endState: Array<bookType>;

beforeEach(() => {

    startState = [
        {
            id: '1',
            authorBook: "Владимир Набоков",
            nameBook: "Лолита",
            img: ""

        },
        {
            id: '2',
            authorBook: "Народное творчество",
            nameBook: "Колобок",
            img: ""
        }
    ]

})

test('addBooks', () => {
    endState = bookReducer(startState, addBookAC("Гоголь", "Вечера на хуторе", ""))
    expect(endState.length).toBe(3);
    expect(endState !== startState).toBeTruthy()
});

test('DeleteBooks', () => {
    endState = bookReducer(startState, deleteBookAC('1'))
    expect(endState.length).toBe(1);
    expect(endState !== startState).toBeTruthy()
});

test('changeNameBook', () => {
    endState = bookReducer(startState, changeNameBookAC("1", "Aда"))
    expect(endState[0].nameBook).toBe("Aда");
});
test('changeAuthorBook', () => {
    endState = bookReducer(startState, changeAuthorBookAC("1", "Маяковский"))
    expect(endState[0].authorBook).toBe("Маяковский");
});
