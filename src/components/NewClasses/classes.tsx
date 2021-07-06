import Modal from 'react-modal';
import {Container} from './styles';
import closeImg from '../../photos/close.svg'
import { FormEvent, useState } from 'react';
import api from '../../services/api';
Modal.setAppElement('#root')

interface NewClassesModalProps{
    isOpen: boolean;
    onRequestClose: () => void; 
}

export function NewClassesModal({isOpen, onRequestClose}:NewClassesModalProps){
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState(Date)

    function handleCreateNewModules(event: FormEvent){
     event.preventDefault()
       const data = ({
            name, 
            description,
            date
        })
        api.post('/classes', data)
        console.log(data)
    }


    return(
    <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
        <button type="button" onClick={onRequestClose} className="react-modal-close" >
            <img src={closeImg} alt="closed" />
        </button>
        <Container onSubmit={handleCreateNewModules}>
             <h1>Cadastrar curso</h1>
             <input
             placeholder="Título"
             type="text"
             value={name}
             onChange={event => setName(event.target.value)}

             />
             <input
             placeholder="Data"
             type="date"
             value={date}
             onChange={event => setDate(event.target.value)}
             />
            
             <input
             placeholder="Módulo"
             type="text"
             value={description}
             onChange={event => setDescription(event.target.value)}

             />
             <section>

             </section>
             <button type="submit" className="button-submit" >Cadastrar</button>
        </Container>
    
    </Modal>
    );
}


