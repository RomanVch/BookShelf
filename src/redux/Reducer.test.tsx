import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import {useDispatch} from "react-redux";
const initialStates =[
  {
    id:1,
    authorBook:"Владимир Набоков",
    nameBook:"Лолита",
    img:""

  },
  {
    id:2,
    authorBook:"Народное творчество",
    nameBook:"Колобок",
    img:""
  }
]

test('renders learn react link', () => {
  const dispatch=useDispatch()
  
  expect(linkElement).toBeInTheDocument();
});
