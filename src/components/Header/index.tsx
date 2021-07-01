import logoImg from '../../photos/logo.svg'
import { Container, Content } from './styles'

export function Header(){
    return (
        <Container>
          <Content>
                <img src={logoImg} alt="logo do Curso" />
                <div>
                    <button type="button">Módulos</button>
                    <button type="button" id="but">Login</button>
                </div>
                
          </Content>
        </Container>
    )
}