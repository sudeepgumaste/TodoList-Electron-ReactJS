import React, {useState} from 'react'

import styled from 'styled-components';
import colors from '../styleVariables/colors';
import Todo from './Todo';

const Container = styled.div`
  flex:1;
  height: 100%;
  background: ${colors.todosBackgroundLight};
  border-radius: 3rem 0 0 3rem;
  padding: 2rem 5rem;
  color: ${colors.fontPrimary};
  font-family: 'Poppins Bold'
`

const Todos = () => {
  const [header, setHeader] = useState('Personal')

  return (
    <Container>
      <div className="todos__header">
        <h1>
          {header}
        </h1>
        <Todo>
          Get a life
        </Todo>
      </div>
    </Container>
  )
}

export default Todos
