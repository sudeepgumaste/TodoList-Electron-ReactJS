import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  position:absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 2.5rem;
  z-index: 500;
  display: flex;
  align-items:center;

  .title-bar__btn-area{
    margin-left: auto;
    margin-right: 1rem;
  }
`


const PseudoTitleBar = () => {
  return (
    <Container>
      <div className="title-bar__btn-area">
        <button>-</button>
        <button>o</button>
        <button>x</button>
      </div>
    </Container>
  )
}

export default PseudoTitleBar
