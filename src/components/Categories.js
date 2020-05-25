import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import colors from '../styleVariables/colors';

const Container = styled.div`
  height: 100%;
  width: 280px;
  padding: 2rem;
  background: ${colors.categoryBackgroundLight};
  color: ${colors.fontPrimary};
  font-family: 'Poppins Bold';

  .category__heading {
    margin-bottom: 2rem;
  }

  .category__form {
    border-bottom: 1px solid ${colors.lightBlue};
    margin-bottom : 1rem;
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
      transform: scaleX(0);
      transform-origin: left;
      transition: transform ease 300ms, opacity ease 300ms;
    }
    
    &:focus-within{
      &::before{
        opacity: 1;
        transform: scaleX(1);
      }

    }
    
    &__input {
      flex: 1;
      background: none;
      border: none;

      &:focus + .category__form__btn{
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

  .category__list {
    list-style: none;
    font-size: 1.2rem;
    width: 100%;

    &__btn {
      padding: 0.5rem;
      color: ${colors.fontSecondary};
      background: none;
      border: none;
      font-family: 'Poppins Medium';
      cursor: pointer;
      width: 100%;
      position: relative;
      transition: background ease 300ms;
      
      &::before{
        content: '';
        position: absolute;
        top:0;
        left:0;
        width: 3px;
        height: 100%;
        opacity:0;
        transition: opacity ease 300ms;
      }
      
      &:hover{
        color: ${colors.darkestBlue};
        background: ${colors.lightestBlue};
        &::before{
          background: ${colors.darkBlue};
          opacity: 1;
        }
      }

      &.selected{
        color: ${colors.darkestBlue};
        background: ${colors.lightBlue};
        &::before{
          background: ${colors.darkestBlue};
          opacity: 1;
        }
      }
    }
  }
  .category__list--alt{
    font-size: 1rem;
    color : ${colors.lightBlue};
    text-align : center;
    font-family : 'Poppins Regular';
  }
`;


const Categories = ({ categories, selectedCategory, setSelectedCategory, ...props }) => {
  const [newList, setNewList] = useState('');

  const handleAddCategory = (e) => {
    e.preventDefault();
    if(newList){
      props.handleAddCategory(newList);
      setNewList(_=>'');
    }
  }

  return (
    <Container>
      <h2 className='category__heading'>LIST</h2>
      <form className='category__form' onSubmit={handleAddCategory}>
        <input
          className='category__form__input'
          value={newList}
          onChange={(e) => setNewList(e.target.value)}
          type='text'
        />
        <button className='category__form__btn'>+</button>
      </form>
      <ul className='category__list'>
        {categories?categories.map((item, index) => (
          <li key={item.uuid}>
            <button onClick={()=>setSelectedCategory(index)} className={`category__list__btn ${selectedCategory===index ? 'selected' : ''}`}>{item.name}</button>
          </li>
        )):
        <p className='category__list--alt'>No categories added</p>
      }
      </ul>
    </Container>
  );
};

export default Categories;
