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
    'kjsd-fsdf-adsh-adjs': [
      {
        uuid: 'kjas-wrkl-dskd-sdkj',
        task: 'Do some shit'
      }
    ],
    'kjns-fsdf-adsh-adjs': [
      {
        uuid: 'kjqw-wrkl-dskd-sdkj',
        task: 'Do some other shit'
      }
    ],
    'kjsd-adsk-adsh-adjs': []
  })
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleUpdateTodos = (updatedList) => {
    const updatedTodos = {
      ...todos,
      [categories[selectedCategory].uuid] : updatedList
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

  const handleRemoveCategory = (uuid) => {
    // console.log(uuid)
    const updatedCategories = categories.filter(category=>category.uuid!==uuid);
    const updatedTodos = {
      ...todos
    };
    delete updatedTodos[uuid];

    console.log(updatedCategories);
    console.log(updatedTodos);
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
        handleRemoveCategory={handleRemoveCategory}
      />
      <Todos 
        header={categories[selectedCategory].name} 
        todos={todos[categories[selectedCategory].uuid]} 
        setTodos={handleUpdateTodos} 
      />
    </Wrapper>
  )
}

export default App;
