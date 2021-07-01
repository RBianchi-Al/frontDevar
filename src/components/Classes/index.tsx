import cameraIgm from '../../photos/camera.svg';
import relogioIgm from '../../photos/relogio.svg';
import {Container} from './styles';

export function Classes(){
    return(
        <Container>
            <div className="principal">
            <div className="comeco" >
                <h2>React</h2>
                <span>1/1</span>
            </div>
            <div>
                <h1>Apresentação do React e do projeto</h1>
                <p>Nessa aula vamos apresentar todo o projeto de FrontEnd e também vamos explorar o que é o React JS e as possibilidades do seu framework..</p>
            </div>
            <div className="video">
                <div className="div-video">
                    <img src={cameraIgm} alt="vídeo" />
                    <strong>1/1</strong>
                </div>
                <div className="div-video">
                    <img src={relogioIgm} alt="Tempo" />
                    <strong>120 minutos</strong>
                </div>
          
                
            </div>
            <button type="button">Assistir</button>
            </div>
 
            <div className="principal">
            <div className="comeco" >
                <h2>React</h2>
                <span>1/1</span>
            </div>
            <div className="text-principal">
                <h1>Apresentação do React e do projeto</h1>
                <p>Nessa aula vamos apresentar todo o projeto de FrontEnd e também vamos explorar o que é o React JS e as possibilidades do seu framework..</p>
            </div>
            <div className="video">
                <div className="div-video">
                    <img src={cameraIgm} alt="vídeo" />
                    <strong>1/1</strong>
                </div>
                <div className="div-video">
                    <img src={relogioIgm} alt="Tempo" />
                    <strong>120 minutos</strong>
                </div>
          
                
            </div>
            <button type="button">Assistir</button>
            </div>
 
            <div className="principal">
            <div className="comeco" >
                <h2>React</h2>
                <span>1/1</span>
            </div>
            <div>
                <h1>Apresentação do React e do projeto</h1>
                <p>Nessa aula vamos apresentar todo o projeto de FrontEnd e também vamos explorar o que é o React JS e as possibilidades do seu framework..</p>
            </div>
            <div className="video">
                <div className="div-video">
                    <img src={cameraIgm} alt="vídeo" />
                    <strong>1/1</strong>
                </div>
                <div className="div-video">
                    <img src={relogioIgm} alt="Tempo" />
                    <strong>120 minutos</strong>
                </div>
          
                
            </div>
            <button type="button">Assistir</button>
            </div>
 
        </Container>
    )
}