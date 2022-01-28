import styled from "styled-components";

export const PrincipalDiv = styled.div`
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`

export const CardsContainer = styled.div`
    margin: 70px 0;
    display: flex;
    justify-content: space-around;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
`

export const CardImg = styled.img`
    width: 100px;
    border-radius: 50%;
`
export const CardLink = styled.a`
    text-decoration: none;
    color: #fffffe;
    &:hover {
        color: #2CB67D;
    }
`