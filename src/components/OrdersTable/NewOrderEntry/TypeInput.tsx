import { Select } from 'antd';
import React from 'react';
import { OrderType } from '../../../reducers/orders/types';
const { Option } = Select;

interface Props {
  onSelectType: (side: OrderType) => void;
  selectedType: OrderType;
}

export const TypeInput = ({ onSelectType, selectedType }: Props) => {
  console.log('Rendering Type input');
  return (
    <Select style={{ width: 150 }} value={selectedType} onChange={onSelectType}>
      {Object.keys(OrderType).map(type => (
        <Option key={type} value={type}>
          {type}
        </Option>
      ))}
    </Select>
  );
};
