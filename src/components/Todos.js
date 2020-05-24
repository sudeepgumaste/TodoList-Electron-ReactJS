import React, {useState} from 'react'

import styled from 'styled-components';
import colors from '../styleVariables/colors';

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
      </div>
    </Container>
  )
}

export default Todos
