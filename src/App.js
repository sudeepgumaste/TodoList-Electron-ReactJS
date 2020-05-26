import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import Wrapper from './components/Wrapper'
import Categories from './components/Categories'
import Todos from './components/Todos'
import PseudoTitleBar from './components/PseudoTitleBar';

const App = () => {
  const [categories, setCategories] = useState([
    {
      uuid: 'kjsd-fsdf-adsh-adjs',
      name: 'Personal'
    },
    {
      uuid: 'kjns-fsdf-adsh-adjs',
      name: 'Academic'
    },
    {
      uuid: 'kjsd-adsk-adsh-adjs',
      name: 'Shopping'
    }
  ])
  const [todos, setTodos] = useState({
    'Personal': [
      {
        uuid: 'kjas-wrkl-dskd-sdkj',
        task: 'Do some shit'
      }
    ],
    'Academic': [
      {
        uuid: 'kjqw-wrkl-dskd-sdkj',
        task: 'Do some other shit'
      }
    ],
    'Shopping': []
  })
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleUpdateTodos = (updatedList) => {
    const updatedTodos = {
      ...todos,
      [categories[selectedCategory].name] : updatedList
    }
    setTodos(updatedTodos);
  }

  const handleAddCategory = (name) => {
    const newCategory = {
      uuid : v4(),
      name: name
    }
    const updatedList = [newCategory, ...categories]
    setCategories(_=>updatedList);
    setSelectedCategory(_=>0);
    setTodos(_=>({
      ...todos,
      [name]: []
    }))
  }


  useEffect(()=>{
    console.log(todos)
  }, [todos])

  return (
    <Wrapper>
      <PseudoTitleBar />
      <Categories
        categories={categories}
        handleAddCategory={handleAddCategory}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setTodos={setTodos}
      />
      <Todos 
        header={categories[selectedCategory].name} 
        todos={todos[categories[selectedCategory].name]} 
        setTodos={handleUpdateTodos} 
      />
    </Wrapper>
  )
}

export default App;
