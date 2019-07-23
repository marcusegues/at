import { Select } from 'antd';
import React from 'react';
import { OrderSide } from '../../../reducers/orders/types';

const { Option } = Select;

interface Props {
  onChange: (side: OrderSide) => void;
  value: OrderSide;
}

export const SideInputInner = ({ onChange, value }: Props) => {
  console.log('Rendering Side input');
  return (
    <Select style={{ width: 100, margin: 5 }} value={value} onChange={onChange}>
      {Object.values(OrderSide).map(side => (
        <Option key={side} value={side}>
          {side}
        </Option>
      ))}
    </Select>
  );
};

export const SideInput = React.memo(SideInputInner);
