import containerImg from '../../photos/container.svg'

import { Container } from "./styles";


export function Summary(){
    return (
        <Container>
            <div>
                <header className="background-button" >
                    <img src={containerImg} alt="Total"/>
                    <strong>Front-end</strong>
                </header>
                <p>3/3</p>
            </div>  
            <div>
                <header className="background-button" >
                    <img src={containerImg} alt="Total"/>
                    <strong>Front-end</strong>
                </header>
                <p>3/3</p>
            </div> 
            <div>
                <header className="background-button" >
                    <img src={containerImg} alt="Total"/>
                    <strong>Front-end</strong>
                </header>
                <p>3/3</p>
            </div> 
            <div>
                <header className="background-button" >
                    <img src={containerImg} alt="Total"/>
                    <strong>Front-end</strong>
                </header>
                <p>3/3</p>
            </div> 
            <div>
                <header className="background-button" >
                    <img src={containerImg} alt="Total"/>
                    <strong>Front-end</strong>
                </header>
                <p>3/3</p>
            </div> 
            <div>
                <header className="background-button" >
                    <img src={containerImg} alt="Total"/>
                    <strong>Infraestrutura</strong>
                </header>
                <p>3/3</p>
            </div> 
        </Container>
    )
}