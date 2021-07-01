import { Summary } from '../Summary'
import {Container} from './styles'
import {Classes} from '../Classes/index'

export function Dashboard() {
    return(
        <Container>
            <h1>Módulos</h1>
            <strong className="subtitle">Selecione os módulos disponíveis:</strong>
            <Summary/>
            <Classes/>
            
        </Container>
    )
}