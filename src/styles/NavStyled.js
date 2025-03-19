import styled from "styled-components";

export const ItemContainer = styled.div`
    display: flex;
    gap: 2px;
    justify-content: left;
    &:hover {
        cursor: pointer;
        transform: scale(1.2);
        transition: 0.3s;
    }
    &:not(:hover) {
        transform: scale(1);
        transition: 0.3s;
    }
    
`;

export const ItemLabel = styled.div`
    padding-top: 5px;
`;

export const gridStyle = {
    zIndex: 1000,
    top: "0px",
    backgroundColor: "white",
    position: "sticky",
    padding: '10px',
    borderRadius: '50px',
    boxShadow: '0px 0px 10px 5px #b0b4b4',
    justifyContent: "space-between",
};