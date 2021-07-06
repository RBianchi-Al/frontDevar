import containerImg from '../../photos/container.svg'
import closeImg from '../../photos/close.svg'
import { Container } from "./styles";
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { connect } from 'react-redux';
import axios from 'axios';

interface IModules {
    id: number;
    name: string | undefined;
    description: string | undefined;
    
}


export function Summary(){
    const [modules, setModules] =useState<IModules[]>([]);
    
    useEffect(() => {

        api.get('/modules')
        .then(response => setModules(response.data))   
        
    }, [])

 
    return (
        <Container >
            {modules.map(module=>(
            
            <div key={module.id}>
                <header className="background-button" >
                    <img src={containerImg} alt="Total"/>
                    <strong>{module.name}</strong>
                    <button 
                    type="button" 
                    className="react-modal-close" 
                    >
                         <img src={closeImg} alt="closed" />
                    </button>
                </header>
                
                <p>{module.description}</p>
            </div>
            ))}              
        </Container>
    )
}

function mapStateProps(state: { id: any; }){
    return{
        result: state.id
    }
}

export default connect(mapStateProps)   

function id(id: any): { type: string; id: any; } {
    throw new Error('Function not implemented.');

}
