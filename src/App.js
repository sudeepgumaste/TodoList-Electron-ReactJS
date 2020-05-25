import React,{useState} from 'react';

import Wrapper from './components/Wrapper'
import Categories from './components/Categories'
import Todos from './components/Todos'
import PseudoTitleBar from './components/PseudoTitleBar';

const App = () =>  {
  
  return (
    <Wrapper>
      <PseudoTitleBar/>
      <Categories />
      <Todos/>
    </Wrapper>
  )
}

export default App;
