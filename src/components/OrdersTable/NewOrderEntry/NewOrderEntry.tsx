import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { CurrencyPair } from '../../../reducers/currencyPairs/types';
import { OrderSide, OrderType } from '../../../reducers/orders/types';
import { NumberInput } from '../../Input/NumberInput';
import { isNewOrderValid } from '../helpers';
import { NewOrderState } from '../OrdersTableContainer';
import { CurrencyPairInput } from './CurrencyPairInput';
import { SideInput } from './SideInput';
import { TypeInput } from './TypeInput';

const Container = styled.div`
  border: solid 1px rgb(189, 195, 199);
  border-bottom: 0;
  padding: 5px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
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
      <InputContainer>
        <CurrencyPairInput
          value={props.newOrder.pair}
          onChange={props.onSelectCurrencyPair}
          currencyPairs={props.currencyPairs}
        />
        <SideInput value={props.newOrder.side} onChange={props.onSelectSide} />
        <TypeInput value={props.newOrder.type} onChange={props.onSelectType} />
        {props.newOrder.type === OrderType.Limit ? (
          <NumberInput
            data-cy={'limitInput'}
            value={props.newOrder.limit}
            onChange={props.onSelectLimit}
            placeholder={'Limit'}
          />
        ) : null}
        <NumberInput
          data-cy={'quantityInput'}
          value={props.newOrder.quantity}
          onChange={props.onSelectQuantity}
          placeholder={'Quantity'}
        />
        <Button
          data-cy="submitOrder"
          type="primary"
          disabled={!isNewOrderValid(props.newOrder, props.currencyPairs)}
          onClick={props.onSubmitNewOrder}
          style={{ marginLeft: 20 }}
        >
          Submit Order
        </Button>
      </InputContainer>
    </Container>
  );
};

// Performance optimization for functional components (analogous to shouldComponentUpdate in class components, or PureComponent)
export const NewOrderEntry = React.memo(NewOrderEntryInner);
