import styled from 'styled-components';


export const Container = styled.header `
    background: var(--hash)
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding:3rem 1rem 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    

    
  
    }
    img{
        height: 2rem;
    }
    div{
        #but{
            margin: 0 15px;
            font-size: 1rem;
            color: var(--blue);
            border-color: var(--blue);
            background:  var(--hash);
            border: 1px solid var(--blue);
            padding: 0 2rem;
            border-radius: 0.25rem;
            height: 3rem;

        }
            
        button{
        margin: 0 15px;
        font-size: 1rem;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        transition: 0.2s;
        &:hover{
            filter: brightness(0.9);
        }

        

    }

`
