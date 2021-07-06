import logoImg from '../../photos/logo.svg'
import { Container, Content } from './styles'
import { useContext } from "react"
import { Context } from '../../Context/AuthContext'


interface HeaderProps {
    onHandleOpenCurso: () => void;
}

export function Header({onHandleOpenCurso}: HeaderProps){

    const {authenticated, handleLogin} = useContext(Context)

    return (
        <Container>
          <Content>
                <img src={logoImg} alt="logo do Curso" />
                <div>
                    <button type="button" onClick={onHandleOpenCurso}>Cadastrar Módulos</button>
                    <button type="button" onClick={onHandleOpenCurso}>Cadastrar Classes</button>
                    <button type="button" id="but" value={authenticated} onClick={handleLogin}>Login</button>
                </div>    
          </Content>
        </Container>
    )
}