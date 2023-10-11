import styled from 'styled-components';

export const MenuItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    border: none;

    &:nth-of-type(1) {
      font-size: 1.2rem;
      font-weight: 400;
      margin-top: 1rem;
    }

    &:nth-of-type(2) {
      font-size: 1.2rem;
      font-weight: 400;
    }
  }
`;

export const ViewImgBox = styled.div<{ img_url: string }>`
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${({ img_url }) => img_url});
  background-size: contain;
  width: 15rem;
  height: 10rem;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;
