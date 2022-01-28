import styled from "styled-components";

export const MenuDiv = styled.div`
    background: #232e35;
    position: fixed;
    bottom: 0;
    width: 100%;
`

export const MenuLink = styled.a`
    text-decoration: none;
    color: #FFFFFA;
    &:hover{
        color: #2CB67D;
    }
`
export const ItemDiv = styled.div`
    display: flex;
    flex-direction: column;
`

export const ItemIcon = styled.img`
    width: 30px;
    margin-left: auto;
    margin-right: auto;
`

export const NavDiv = styled.div`
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    padding: .5rem;
`

