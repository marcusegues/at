import { Select } from 'antd';
import React from 'react';
import { OrderSide } from '../../../reducers/orders/types';
const { Option } = Select;

interface Props {
  onSelectSide: (side: OrderSide) => void;
  selectedSide: OrderSide;
}

export const SideInput = ({ onSelectSide, selectedSide }: Props) => {
  console.log('Rendering Side input');
  return (
    <Select style={{ width: 150 }} value={selectedSide} onChange={onSelectSide}>
      {Object.keys(OrderSide).map(side => (
        <Option key={side} value={side}>
          {side}
        </Option>
      ))}
    </Select>
  );
};
