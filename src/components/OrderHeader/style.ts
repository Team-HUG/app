import styled from 'styled-components';

export const OrderHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem 3rem;
  position: fixed;
  left: 0;
  height: 84vh;
  width: 20vw;
`;

export const OrderHeaderItemBox = styled.div<{ current?: string; clicked?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17.2vw;
  height: 7vh;
  margin-bottom: 10px;
  background-color: ${(props) => (props.current === props.clicked ? '#fb4f00' : '#ffffff')};
  border-radius: 10px;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${(props) => (props.current === props.clicked ? '#ffffff' : '#000000')};
  cursor: pointer;
  box-shadow: 8px 5px 10px rgba(0, 0, 0, 0.1);
`;

export const AnotherButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12rem;
`;

export const CartButton = styled(OrderHeaderItemBox)`
  background-color: #ffffff;
  color: #000000;
`;

export const EmployeeButton = styled(OrderHeaderItemBox)`
  background-color: #fb4f00;
`;
