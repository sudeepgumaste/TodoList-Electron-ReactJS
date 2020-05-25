import styled from 'styled-components';
import React from 'react'
import colors from '../styleVariables/colors';

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  background: #fff;
  box-shadow: 4px 4px 20px rgba(0,0,0,0,2);
  font-family: 'Poppins Regular';
  font-size: '0.8rem';
  margin-bottom: 1rem;
  color: ${colors.fontPrimary};
`

const Todo = ({task}) => {
  return(
    <Container>
      {task}
    </Container>
  )
}

export default Todo