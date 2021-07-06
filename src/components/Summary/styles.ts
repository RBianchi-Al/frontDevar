import styled from "styled-components";


export const Container = styled.main`
    
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 1rem;


    div{
        cursor: pointer;
        display: flex;
        flex-direction: row;
        -webkit-box-align: center;
        align-items: center;
        text-align: left;
        -webkit-box-pack: justify;
        justify-content: space-between;
        padding: 14px 14px;
        border-radius: 16px;
        background: rgb(250, 250, 250);
        border: 1px solid var(--text-subtitle);
        color: var(--text-button);
        font-weight: 500;

        p{
            font-size: 15px;
            padding-top: 5rem;
        }

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-color: solid 1rem var(--text-button);
        }
        strong{
            padding: 5px;
            margin-top: -1.0rem;
            font-size: 1.0rem;
            font-weight: 600;
            line-height: 1rem;
            color: var(--text-buttondois);
            align-items: center;

        }

        &.background-button{
            background: var(--text-buttondois);
            color: #fff;
        }
        transition: 0.2s;
        &:hover{
            filter: brightness(0.9);
            border-color: solid 1rem var(--text-button);
            
        }
    }

    
`;
