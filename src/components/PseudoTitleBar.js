import React,{useState} from 'react'
import styled from 'styled-components';
import colors from '../styleVariables/colors';

import { ReactComponent as CloseIcon } from '../assets/icons/close.svg';
import { ReactComponent as MinimizeIcon } from '../assets/icons/minimise.svg';
import { ReactComponent as MaximizeIcon } from '../assets/icons/maximise.svg';
import { ReactComponent as UnMaximizeIcon } from '../assets/icons/unmaximise.svg';
import measures from '../styleVariables/measures';


const electron = window.require('electron');

// const electron = { ipcRenderer : { send: ()=>{}}}

const { ipcRenderer } = electron;

const Container = styled.div`
  position:absolute;
  /* padding: 0rem 1rem; */
  top: 0;
  left: 0;
  width: 100vw;
  height: ${measures.titleBarHeight};
  z-index: 500;
  display: flex;
  align-items:center;
  -webkit-user-select: none;
  -webkit-app-region: drag;
  background: ${colors.darkestBlue};

  .title-bar__btn-area{
    margin-left: auto;
    justify-self: flex-end;
    height: 100%;
    align-items: center;
    display: flex;
    -webkit-app-region: no-drag;
    button{
      height: 100%;
      background: none;
      border: none;
      padding: 0.2rem 0.7rem;
      cursor: pointer;
      align-items: center;
      &:hover{
        background: rgba(0,0,0,0.3)
      }
      &:nth-child(3){
        &:hover{
          background: ${colors.darkRed}
        }
      }
    }
  }

  .title-bar__title{
    margin-left: 1rem;
    justify-self: center;
    font-family: 'Poppins Regular';
    font-size: ${colors.lightestBlue};
    color: #fff;
    font-size: 0.8rem;
  }
`


const PseudoTitleBar = () => {
  const [ zoom, setZoom ]  = useState(false);

  const handleClose = () => {
    ipcRenderer.send('window:close');
  }

  const handleMinimize =() => {
    ipcRenderer.send('window:minimize');
  }

  const handleMaximize =() => {
    console.log(zoom);
    if(zoom){
      ipcRenderer.send('window:unmaximize');
    }else{
      ipcRenderer.send('window:maximize');
    }
    setZoom(zoom=>!zoom);
  }


  return (
    <Container>
      <div className="title-bar__title">
        Todo list
      </div>
      <div className="title-bar__btn-area">
        <button onClick={handleMinimize}><MinimizeIcon/></button>
        <button onClick={handleMaximize}>{zoom?<UnMaximizeIcon/>:<MaximizeIcon/>}</button>
        <button onClick={handleClose}><CloseIcon/></button>
      </div>
    </Container>
  )
}

export default PseudoTitleBar
