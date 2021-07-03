import {Container} from './styles'
import logoImg from '../../photos/logo.svg'


export function Footer(){
    return (
        <Container>
            <div>
                <img src={logoImg} alt="logo do Curso" />
               
            </div>
        </Container>
    )
}