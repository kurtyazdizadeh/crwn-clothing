import styles from 'styled-components';

export const CartItemContainer = styles.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

export const CartItemImage = styles.img`
  width: 30%;
`;

export const ItemDetailsContainer = styles.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;
