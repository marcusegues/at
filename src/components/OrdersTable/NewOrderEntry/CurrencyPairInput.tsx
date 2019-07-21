import { Select } from 'antd';
import React from 'react';
import { CurrencyPair } from '../../../reducers/currencyPairs/types';
const { Option } = Select;

interface Props {
  currencyPairs: CurrencyPair[];
  onSelectCurrencyPair: (currencyPair: string) => void;
  selectedCurrencyPair?: string;
}

const CurrencyPairInputInner = (props: Props) => {
  console.log('Render currency pair', props);
  return (
    <Select
      style={{ width: 150 }}
      placeholder={'Select symbol'}
      showSearch={true}
      onChange={props.onSelectCurrencyPair}
      value={props.selectedCurrencyPair}
    >
      {props.currencyPairs.map(cp => (
        <Option key={cp.pair} value={cp.pair}>
          {cp.pair}
        </Option>
      ))}
    </Select>
  );
};

// Performance optimization for functional components (analogous to shouldComponentUpdate in class components, or PureComponent)
const areEqual = (prevProps: Props, nextProps: Props) => {
  console.log(
    'Comp',
    prevProps.currencyPairs === nextProps.currencyPairs,
    prevProps.onSelectCurrencyPair === nextProps.onSelectCurrencyPair,
    prevProps.selectedCurrencyPair === nextProps.selectedCurrencyPair
  );
  return (
    prevProps.currencyPairs === nextProps.currencyPairs &&
    prevProps.onSelectCurrencyPair === nextProps.onSelectCurrencyPair &&
    prevProps.selectedCurrencyPair === nextProps.selectedCurrencyPair
  );
};

export const CurrencyPairInput = React.memo(CurrencyPairInputInner, areEqual);
