/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

const columns = [
  { field: 'Varients', headerName: 'Variants', width: 150, editable: true },
  { field: 'Price', headerName: 'Price', width: 120, editable: true },
  { field: 'Available', headerName: 'Available', width: 120, editable: true },
  { field: 'Stock', headerName: 'Stock', width: 120, editable: true },
  { field: 'SKU', headerName: 'SKU', width: 120, editable: true },
];

export default function VariantTable({ variantList }) {
  // console.log("variantList:", variantList);

  const [rows, setRows] = useState([]);

  useEffect(() => {
    const rowList = variantList.map((variant, index) => {
      return {
        id: index,
        Varients: variant,
        Price: 0,
        Available: 'no',
        Stock: 0,
        SKU: 'N/A',
      };
    });
    setRows(rowList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = params => {
    console.log('params:', params.row);
  };

  const handleCellEditCommit = params => {
    const { id, field, value } = params;

    // Update the cell value in the rows state
    const updatedRows = rows.map(row => {
      if (row.id === id) {
        return { ...row, [field]: value };
      }
      return row;
    });

    setRows(updatedRows);
    // You can handle the cell value update here, such as updating the state or making an API call.
    console.log(
      'Cell edit committed: id=',
      id,
      'field=',
      field,
      'value=',
      value
    );
  };

  const renderCell = params => {
    const { field } = params;

    const isEditable = columns.find(column => column.field === field)?.editable;

    if (isEditable) {
      return (
        <input
          value={params.value}
          onChange={e =>
            handleCellEditCommit({ ...params, value: e.target.value })
          }
        />
      );
    }

    return params.value;
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        onRowClick={handleClick}
        editMode="row"
        onEditCellChangeCommitted={handleCellEditCommit}
        renderCell={renderCell}
      />
    </div>
  );
}
