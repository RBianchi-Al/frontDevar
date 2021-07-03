import { useEffect, useState } from 'react';
import cameraIgm from '../../photos/camera.svg';
import relogioIgm from '../../photos/relogio.svg';
import {Container} from './styles';
// import api from '../../services/api';
import axios from 'axios';


interface IClasses {
    id: number;
    name: string;
    description: string;
    
}


export function Classes(){
    const [classes, setClasses] = useState<IClasses[]>([]);

    useEffect(() => {
        axios
        .get('http://localhost:5050/api/classes')
        .then(response => setClasses(response.data))      

    }, [])



    return(

        
        <Container>
           
            {classes.map(classe => (
                <div key={classe.id}className="principal"> 

                <div className="comeco" >
                    <h2>{classe.name}</h2>
                    <span>1/1</span>
                </div>
                <div>
                    <h1>{classe.name}</h1>
                    <p>{classe.description}</p>
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
            ))}
                
        </Container>
    )
}