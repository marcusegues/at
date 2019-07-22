import { Select } from 'antd';
import React from 'react';
import { OrderType } from '../../../reducers/orders/types';
const { Option } = Select;

interface Props {
  onChange: (side: OrderType) => void;
  value: OrderType;
}

export const TypeInputInner = ({ onChange, value }: Props) => {
  console.log('Rendering Type input');
  return (
    <Select style={{ width: 100, margin: 5 }} value={value} onChange={onChange}>
      {(Object.keys(OrderType) as Array<keyof typeof OrderType>).map(type => (
        <Option key={type} value={OrderType[type]}>
          {type}
        </Option>
      ))}
    </Select>
  );
};

export const TypeInput = React.memo(TypeInputInner);
