import React, { useState, useEffect, useRef } from 'react';
import { v4 } from 'uuid';
import Wrapper from './components/Wrapper'
import Categories from './components/Categories'
import Todos from './components/Todos'
import PseudoTitleBar from './components/PseudoTitleBar';

const App = () => {

  const [categories, setCategories] = useState(_=>JSON.parse(localStorage.getItem('categories')) || []);
  const [todos, setTodos] = useState(_=>JSON.parse(localStorage.getItem('todos')) || {});
  const [selectedCategory, setSelectedCategory] = useState(_=>categories ? 0 : -1);

  const handleUpdateTodos = (updatedList) => {
    const updatedTodos = {
      ...todos,
      [categories[selectedCategory].uuid]: updatedList
    }
    setTodos(updatedTodos);
  }

  const handleAddCategory = (name) => {
    const newCategory = {
      uuid: v4(),
      name: name
    }
    const updatedList = [newCategory, ...categories]
    setCategories(_ => updatedList);
    setSelectedCategory(_ => 0);
    setTodos(_ => ({
      ...todos,
      [name]: []
    }))
  }

  const handleRemoveCategory = (uuid) => {

    if (selectedCategory === categories.length - 1) {
      queueMicrotask(() => {
        setSelectedCategory(_ => selectedCategory - 1);
      })
    }

    queueMicrotask(
      ()=>{
        const updatedCategories = categories.filter(category => category.uuid !== uuid);
        const updatedTodos = {
          ...todos
        };
        delete updatedTodos[uuid];
    
        setCategories(_=>updatedCategories);
        setTodos(_=>updatedTodos);
      }
    );
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories))
  }, [categories])

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
        header={categories[selectedCategory] ? categories[selectedCategory].name : ''}
        todos={categories[selectedCategory] ? todos[categories[selectedCategory].uuid] : []}
        setTodos={handleUpdateTodos}
      />
    </Wrapper>
  )
}

export default App;
