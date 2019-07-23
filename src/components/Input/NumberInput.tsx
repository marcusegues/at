import { InputNumber } from 'antd';
import React from 'react';

interface Props {
  'data-cy': string;
  onChange: (quantity: number | undefined) => void;
  value: number | undefined;
  placeholder?: string;
  defaultValue?: number;
}

const NumberInputInner = (props: Props) => (
  <InputNumber
    data-cy={props['data-cy']}
    style={{ margin: 5 }}
    value={props.value}
    min={0}
    defaultValue={props.defaultValue}
    onChange={props.onChange}
    placeholder={props.placeholder}
  />
);

NumberInputInner.defaultProps = {
  defaultValue: 0,
};

export const NumberInput = React.memo(NumberInputInner);
