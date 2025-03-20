import styled from "styled-components";

export const TopContainer = styled.div`
        display: flex;
        justify-content: space-between;
        height: 50px;
        align-items: center;
    `;

export const ItemStyled = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    gap: 10px;
    background-color: ${ props => props.rowNo % 2 === 0 ? "#ffffff" : "rgba(0,0,0,0.05)" };
  `;
export const LeftSide = styled.div`
    width: 5%;
    height: auto;
    justify-content: center;
    align-items: center;
    display: flex;
  `;
export const CenterSide = styled.div`
    width: 65%;
    height: auto;
  `;
export const RightSide = styled.div`
    width: 30%;
    height: auto;
    text-align: right;
  `;
export const DivLine = styled.div`
    width: 100%;
    height: 0.5px;
    background-color: gray;
  `;