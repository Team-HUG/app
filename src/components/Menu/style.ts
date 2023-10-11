import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 7rem;
  margin-top: 5.6rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MenuCategoryTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 4px solid #fb4f00;
  font-size: 1.5rem;
  font-weight: 600;
  padding-left: 1rem;
  color: #000000;
`;

export const MenuListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 38px;
  margin-top: 1rem;
`;
