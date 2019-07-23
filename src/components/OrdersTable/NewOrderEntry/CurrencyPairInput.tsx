import { Select } from 'antd';
import React from 'react';
import { CurrencyPair } from '../../../reducers/currencyPairs/types';
const { Option } = Select;

interface Props {
  currencyPairs: CurrencyPair[];
  onChange: (currencyPair: string) => void;
  value?: string;
}

const CurrencyPairInputInner = (props: Props) => {
  console.log('Render currency pair', props);
  return (
    <Select
      data-cy="currencyPairInput"
      style={{ width: 100, margin: 5 }}
      placeholder={'Symbol'}
      showSearch={true}
      onChange={props.onChange}
      value={props.value}
    >
      {props.currencyPairs.map(cp => (
        <Option data-cy="currencyPair" key={cp.pair} value={cp.pair}>
          {cp.pair}
        </Option>
      ))}
    </Select>
  );
};

// Performance optimization for functional components (analogous to shouldComponentUpdate in class components, or PureComponent)
export const CurrencyPairInput = React.memo(CurrencyPairInputInner);
