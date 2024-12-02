import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { api } from '../../ApiConfig';
import Sheet from '@mui/joy/Sheet';
import { useState, useEffect } from 'react';

function createData(Id, Mobile, FirstName, LastName, address) {
  return { Id, Mobile, FirstName, LastName, address };
}



export default function DenseTable() {

  const [users, setUsers] = useState();

  const fetchData = async () => {
    try {
      const response = await api.get('/api/users/');
      setUsers(response?.data);
      console.log(response?.data);

    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <TableContainer component={Paper} >


      <Table sx={{ minWidth: 100, backgroundColor: 'rgb(55 65 81)' }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontWeight: 'bold', color: 'white' }}>Id</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', color: 'white' }}>Mobile</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', color: 'white' }}>FirstName</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', color: 'white' }}>LastName</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', color: 'white' }}>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ overflowY: 'auto', maxHeight: '400px' }}>
          {users?.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >

              <TableCell align="center" sx={{ color: 'white' }}>{row.id}</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>{row.mobile}</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>{row.firstName}</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>{row.lastName}</TableCell>
              <TableCell component="th" scope="row" align="center" sx={{ color: 'white' }}>
                {row.role}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </TableContainer>

  );
}

/*import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import {
  DataGridPro,
  useGridApiRef,
  gridExpandedRowCountSelector,
  gridVisibleColumnDefinitionsSelector,
  gridExpandedSortedRowIdsSelector,
} from '@mui/x-data-grid-pro';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function ScrollPlayground() {
  const apiRef = useGridApiRef();

  const [coordinates, setCoordinates] = React.useState({
    rowIndex: 0,
    colIndex: 0,
  });

  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
  });

  React.useEffect(() => {
    const { rowIndex, colIndex } = coordinates;
    apiRef.current.scrollToIndexes(coordinates);
    const id = gridExpandedSortedRowIdsSelector(apiRef)[rowIndex];
    const column = gridVisibleColumnDefinitionsSelector(apiRef)[colIndex];
    apiRef.current.setCellFocus(id, column.field);
  }, [apiRef, coordinates]);

  const handleClick = (position) => () => {
    const maxRowIndex = gridExpandedRowCountSelector(apiRef) - 1;
    const maxColIndex = gridVisibleColumnDefinitionsSelector(apiRef).length - 1;

    setCoordinates((coords) => {
      switch (position) {
        case 'top':
          return { ...coords, rowIndex: Math.max(0, coords.rowIndex - 1) };
        case 'bottom':
          return { ...coords, rowIndex: Math.min(maxRowIndex, coords.rowIndex + 1) };
        case 'left':
          return { ...coords, colIndex: Math.max(0, coords.colIndex - 1) };
        case 'right':
          return { ...coords, colIndex: Math.min(maxColIndex, coords.colIndex + 1) };
        default:
          return { ...coords, rowIndex: 0, colIndex: 0 };
      }
    });
  };

  const handleCellClick = (params) => {
    const rowIndex = gridExpandedSortedRowIdsSelector(apiRef).findIndex(
      (id) => id === params.id,
    );
    const colIndex = gridVisibleColumnDefinitionsSelector(apiRef).findIndex(
      (column) => column.field === params.field,
    );
    setCoordinates({ rowIndex, colIndex });
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ width: 300, margin: '0 auto 16px' }}>
        <Grid container justifyContent="center">
          <Grid item>
            <Button onClick={handleClick('top')}>top</Button>
          </Grid>
        </Grid>
        <Grid container textAlign="center">
          <Grid item xs={4}>
            <Button onClick={handleClick('left')}>left</Button>
          </Grid>
          <Grid item xs={4}>
            <IconButton
              color="primary"
              aria-label="home"
              onClick={handleClick('home')}
            >
              <HomeIcon />
            </IconButton>
          </Grid>
          <Grid item xs={4}>
            <Button onClick={handleClick('right')}>right</Button>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item>
            <Button onClick={handleClick('bottom')}>bottom</Button>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ height: 400 }}>
        <DataGridPro
          apiRef={apiRef}
          onCellClick={handleCellClick}
          hideFooter
          {...data}
        />
      </Box>
    </Box>
  );
}*/

