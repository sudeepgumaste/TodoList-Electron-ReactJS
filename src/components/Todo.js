import styled from 'styled-components';
import React from 'react'
import colors from '../styleVariables/colors';

import { ReactComponent as RemoveIcon } from '../assets/icons/remove.svg';

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  background: #fff;
  box-shadow: 4px 4px 20px rgba(0,0,0,0,2);
  font-family: 'Poppins Regular';
  font-size: '0.8rem';
  margin-bottom: 1rem;
  color: ${colors.fontPrimary};
  display: flex;
  align-items: center;

  .task__remove{
    border:none;
    height: 2rem;
    width: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    border-radius: 0.3rem;
    cursor: pointer;
    background: none;
    transition: background 300ms ease;
    
    svg{
      fill: ${colors.lightRed} !important;
      transition: fill 300ms ease;
    }
    
    &:hover{
      svg{
        fill: ${colors.darkRed} !important;
      }
      background: ${colors.lightRed};
    }
  }
`

const Todo = ({task, handleRemoveTodo}) => {
  return(
    <Container>
      {task}

      <button className="task__remove" onClick={ handleRemoveTodo }>
        <RemoveIcon/>
      </button>
    </Container>
  )
}

export default Todo