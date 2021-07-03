import logoImg from '../../photos/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onHandleOpenCurso: () => void;
}

export function Header({onHandleOpenCurso}: HeaderProps){

    return (
        <Container>
          <Content>
                <img src={logoImg} alt="logo do Curso" />
                <div>
                    <button type="button" onClick={onHandleOpenCurso}>Cadastrar cursos</button>
                    <button type="button">Módulos</button>
                    <button type="button" id="but">Login</button>
                </div>
                
                
                
          </Content>
        </Container>
    )
}