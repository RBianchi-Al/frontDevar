import { Header } from './components/Header';
import { Dashboard } from './components/Modules';
import { GlobalStyle } from './styles/global';



export function App() {
  return (
    <>
      <Header/>
        <Dashboard/>
      <GlobalStyle/>
    </>
  );
}

