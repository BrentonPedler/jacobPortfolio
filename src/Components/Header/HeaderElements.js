import styled from 'styled-components';

export const HeaderMain = styled.section`
    background: rgb(212,122,232);
    background: radial-gradient(circle, rgba(212,122,232,1) 0%, rgba(168,236,231,1) 100%);
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    height: 80vh;
`;

export const HeaderInfo = styled.div`
    border: 2px solid black;
    border-radius: 5px;
    padding: 50px;
`;

export const HeaderH1 = styled.h1`
    font-size: 3rem;
    text-align: center;
`;

export const HeaderP = styled.p`4
    font-size: 2rem;
`;

