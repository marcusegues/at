import React from 'react';
import styled from 'styled-components';
import { CurrencyPair } from '../../../reducers/currencyPairs/types';
import { OrderSide, OrderType } from '../../../reducers/orders/types';
import { NewOrder } from '../OrdersTableContainer';
import { CurrencyPairInput } from './CurrencyPairInput';
import { SideInput } from './SideInput';
import { TypeInput } from './TypeInput';

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
  onSelectType: (type: OrderType) => void;
  newOrder: NewOrder;
}

export const NewOrderEntry = (props: Props) => {
  console.log('Rendering New Order entry');
  return (
    <Container>
      <Title>{`Orders (${props.orderCount})`}</Title>
      <CurrencyPairInput
        currencyPairs={props.currencyPairs}
        onSelectCurrencyPair={props.onSelectCurrencyPair}
        selectedCurrencyPair={props.newOrder.pair}
      />
      <SideInput onSelectSide={props.onSelectSide} selectedSide={props.newOrder.side} />
      <TypeInput onSelectType={props.onSelectType} selectedType={props.newOrder.type} />
    </Container>
  );
};
