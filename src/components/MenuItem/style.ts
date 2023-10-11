import styled from 'styled-components';

export const MenuItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 15rem;
    height: 10rem;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    object-fit: cover;
    border-radius: 10px;
  }

  span {
    border: none;

    &:nth-of-type(1) {
      font-size: 1.2rem;
      font-weight: 400;
    }

    &:nth-of-type(2) {
      font-size: 1.2rem;
      font-weight: 400;
    }
  }
`;
