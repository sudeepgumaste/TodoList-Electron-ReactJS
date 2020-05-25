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
  /* box-shadow: 4px 4px 20px ${colors.lightestBlue}01; */
`

const Todo = ({children, ...props}) => {
  
  return(
    <Container>
      {children}
    </Container>
  )
}

export default Todo