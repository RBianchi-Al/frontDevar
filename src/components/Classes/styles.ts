import styled from "styled-components";

export const Container = styled.div`

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 2rem;

    .principal{
        display: flex;
        flex-direction: column;
        -webkit-box-pack: justify;
        justify-content: space-between;
        background-color: var(--background);
        border-radius: 32px;
        border: 1px solid var(--text-subtitle);
        padding: 2rem;
        margin: 0px;
        width: 22rem;
        min-height: 20rem;

        
        img{
            width: 20px;
            align-items: center;
            align-content: center;
            vertical-align: middle;
        }

        span{
            color: var(--text-subtitle);
            font-size: 16px;
            font-weight: 600;
            margin-bottom: -3px;
        }
        
       
            h1{
                font-size: 22px;
                color: var(--text-button);
                margin: 10px 0px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                max-height: 80px;
        }
            p{
                font-size: 14px;
                color: var(--text-primary);
                margin: 10px 0px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                max-height: 60px;
                margin: 0 1rem 1rem 1rem;
        }



    strong{
        display: flex;
        flex-direction: row;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        margin-right: 0px;
        color: var(--text-title);
        font-size: 12px;
        
    }

    .video{
        display: flex;
        flex-direction: row;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;

        color: var(--text-title);
        font-size: 14px;
        justify-content: space-between;
    }

    .div-video{
        display: flex;
        flex-direction: row;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        margin-right: 18px;
        color: var(--text-title);
        font-size: 14px;
    }
    h2{
        border-radius: 20px;
        border: 1px solid var(--text-primary);
        padding: 8px 18px 5px;
        color: var(--text-primary);
        font-size: 12px;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
    }

    .comeco{
        display: flex;
  
        flex-direction: row;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        align-items: center;
    }
    button{
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        text-decoration: none;
        display: flex;
        border: 0px;
        width: 180px;
        min-width: 100%;
        height: 3rem;
        background: var(--text-subtitle);
        color: rgb(255, 255, 255);
        border-radius: 12px;
        font-size: 16px;
        font-weight: 600;
        transition: background-color 0.3s ease 0s;
        padding: 0px;
        margin-top: 1rem;
        transition: 0.2s;
        
        &:hover{
            filter: brightness(0.9);
        }
    }

   }

`