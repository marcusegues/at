import React from 'react';
import styled from 'styled-components';
import { CurrencyPair } from '../../../reducers/currencyPairs/types';
import { OrderSide } from '../../../reducers/orders/types';
import { NewOrder } from '../OrdersTableContainer';
import { CurrencyPairInput } from './CurrencyPairInput';
import { SideInput } from './SideInput';

const Container = styled.div`
  height: 125px;
  border: solid 1px rgb(189, 195, 199);
  border-bottom: 0;
  padding: 5px;
`;

const Title = styled.span`
  display: block;
`;

interface Props {
  orderCount: number;
  currencyPairs: CurrencyPair[];
  onSelectCurrencyPair: (currencyPair: string) => void;
  onSelectSide: (side: OrderSide) => void;
  newOrder: NewOrder;
}

export const NewOrderEntry = ({
  orderCount,
  currencyPairs,
  onSelectCurrencyPair,
  onSelectSide,
  newOrder,
}: Props) => (
  <Container>
    <Title>{`Orders (${orderCount})`}</Title>
    <CurrencyPairInput
      currencyPairs={currencyPairs}
      onSelectCurrencyPair={onSelectCurrencyPair}
      selectedCurrencyPair={newOrder.pair}
    />
    <SideInput onSelectSide={onSelectSide} selectedSide={newOrder.side} />
  </Container>
);
