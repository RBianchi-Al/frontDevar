import { useState} from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Modules';
import { GlobalStyle } from './styles/global';
import { Footer } from './components/Footer';
import {NewClassesModal} from './components/NewClasses'


export function App() {
  const[isNewCursoModalOpen, setIsNewCursoModalOpen] = useState(false)

  function handleOpenNewTransationModal(){
      setIsNewCursoModalOpen(true)
  }
  function handleCloseNewTransationModal(){
      setIsNewCursoModalOpen(false)
  }
  return (
    
    <>
      <Header onHandleOpenCurso={handleOpenNewTransationModal}/>
        <Dashboard/>
       
      <GlobalStyle/>
      <NewClassesModal 
        isOpen={isNewCursoModalOpen}
        onRequestClose={handleCloseNewTransationModal}
      />
      <Footer/>
    </>
  );
}

