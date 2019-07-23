import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Order } from '../../reducers/orders/types';

interface Column {
  headerName: string;
  field: string;
}

interface Props {
  columns: Column[];
  rows: Order[];
}

export const OrdersTableInner = ({ columns, rows }: Props) => {
  console.log('Rendering Orders table');

  return (
    <div style={{ width: '100%', height: 500 }} className="ag-theme-balham">
      <AgGridReact columnDefs={columns} rowData={rows} />
    </div>
  );
};

export const OrdersTable = React.memo(OrdersTableInner);
