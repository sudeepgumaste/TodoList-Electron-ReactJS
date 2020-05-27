import React, {useState} from 'react'
import {v4} from 'uuid';
import styled from 'styled-components';
import colors from '../styleVariables/colors';
import Todo from './Todo';

const Container = styled.div`
  flex:1;
  height: 100%;
  background: ${colors.todosBackgroundLight};
  /* border-radius: 3rem 0 0 3rem; */
  padding: 2rem 0;
  color: ${colors.fontPrimary};
  font-family: 'Poppins Bold';
  overflow: auto;

  ::-webkit-scrollbar{
    height: 0.7rem;
    width: 0.7rem;
    cursor: pointer;
  }

  ::-webkit-scrollbar-track{
    cursor: pointer;
    background: ${colors.lightBlue};
  }

  ::-webkit-scrollbar-thumb{
    background: ${colors.darkBlue};
  }

  .todos{
    min-width: 750px;
    padding: 0 5rem;
    h1{
      margin-bottom: 2rem;
    }
  
    &__form-container{
      width: 100%;
      padding: 1rem;
      background: #fff;
      font-family: 'Poppins Regular';
      font-size: '0.8rem';
      margin-bottom: 1rem;
      .todos__form {
        border-bottom: 1px solid ${colors.lightBlue};
        /* margin-bottom : 1rem; */
        position: relative;
        display: flex;
        padding: 0.2rem;
      
        &::before{
          content: '';
          position: absolute;
          bottom : -2px;
          left: 0px;
          width: 100%;
          height: 2px;
          background: ${colors.darkBlue};
          /* opacity : 0; */
          transform: scaleX(0);
          /* transform-origin: left; */
          transition: transform ease 300ms, opacity ease 300ms;
        }
        
        &:focus-within{
          &::before{
            opacity: 1;
            transform: scaleX(1);
          }
  
        }
        
        &__input {
          width: 100%;
          background: none;
          border: none;
  
          &:focus + .todos__form__btn{
            color: ${colors.darkBlue};
          }
        }
  
        &__btn{
          background: none;
          border: none;
          font-size: 2rem;
          margin: -0.5rem 0;
          color: ${colors.lightBlue};
          cursor: pointer;
          transition: color ease 300ms;
        }
      }
    }

  }
  .no-category{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: ${colors.lightBlue};
    font-family: 'Poppins Medium';
    font-size: 2rem;
  }
`

const Todos = ({header, todos, setTodos}) => {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if(newTodo){
      const todo = {
        uuid: v4(),
        task: newTodo
      }
      if(todos){
        setTodos([todo, ...todos]);
      }else{
        setTodos([todo]);
      }
      setNewTodo(_=>'');
    }
  }

  const handleRemoveTodo = (uuid) => {
    const updatedTodos = todos.filter((todo)=>todo.uuid !== uuid);
    setTodos(updatedTodos);
  }

  return (
    <Container>
      {
        header ?
        (
          <div className="todos">
            <div className='todos__header'>
              <h1>
                {header}
              </h1>
            </div>
            <div className='todos__form-container'>
              <form className="todos__form" onSubmit={ handleAddTodo }>
                <input
                  className='todos__form__input'
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  type='text'
                  placeholder='Add task'
                />
                <button className='todos__form__btn'>+</button>
              </form>
            </div>
            {
              todos && todos.map(todo=>(
                <Todo key={todo.uuid} task={todo.task} handleRemoveTodo={()=>handleRemoveTodo(todo.uuid)} />
              ))
            }

          </div>
        ) :
        (
          <div className="no-category">
            Please start by creating a list
          </div>
        )
      }
      
    </Container>
  )
}

export default Todos
