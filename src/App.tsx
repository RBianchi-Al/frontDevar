import { useState} from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Modules';
import { GlobalStyle } from './styles/global';
import { Footer } from './components/Footer';
import {NewClassesModal} from './components/NewClasses/classes'
import {NewModulesModal} from './components/NewClasses/index'
import {Router} from 'react-router-dom';
// import Routes from './routes';
import history from './history'
import { AuthProvider } from './Context/AuthContext';

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
    <AuthProvider>
    <Router history={history}>
     
      <Header onHandleOpenCurso={handleOpenNewTransationModal}/>
        <Dashboard/>
       
      <GlobalStyle/>
      <NewClassesModal 
        isOpen={isNewCursoModalOpen}
        onRequestClose={handleCloseNewTransationModal}
      />
       <NewModulesModal 
        isOpen={isNewCursoModalOpen}
        onRequestClose={handleCloseNewTransationModal}
      />
      <Footer/>
      </Router>
      </AuthProvider>
    </>
  );
}

