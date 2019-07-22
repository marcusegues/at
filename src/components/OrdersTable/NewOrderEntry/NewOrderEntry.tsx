import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { CurrencyPair } from '../../../reducers/currencyPairs/types';
import { OrderSide, OrderType } from '../../../reducers/orders/types';
import { NumberInput } from '../../Input/NumberInput';
import { NewOrderState } from '../OrdersTableContainer';
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
  onSelectQuantity: (quantity: number | undefined) => void;
  onSelectLimit: (limit: number | undefined) => void;
  newOrder: NewOrderState;
  onSubmitNewOrder: () => void;
}

export const NewOrderEntryInner = (props: Props) => {
  console.log('Rendering New Order entry', props.newOrder.type === OrderType.Limit);
  return (
    <Container>
      <Title>{`Orders (${props.orderCount})`}</Title>
      <CurrencyPairInput
        value={props.newOrder.pair}
        onChange={props.onSelectCurrencyPair}
        currencyPairs={props.currencyPairs}
      />
      <SideInput value={props.newOrder.side} onChange={props.onSelectSide} />
      <TypeInput value={props.newOrder.type} onChange={props.onSelectType} />
      {props.newOrder.type === OrderType.Limit ? (
        <NumberInput value={props.newOrder.limit} onChange={props.onSelectLimit} placeholder={'Limit'} />
      ) : null}
      <NumberInput
        value={props.newOrder.quantity}
        onChange={props.onSelectQuantity}
        placeholder={'Quantity'}
      />
      <Button type="primary" onClick={props.onSubmitNewOrder}>
        Submit
      </Button>
    </Container>
  );
};

// Performance optimization for functional components (analogous to shouldComponentUpdate in class components, or PureComponent)
export const NewOrderEntry = React.memo(NewOrderEntryInner);
