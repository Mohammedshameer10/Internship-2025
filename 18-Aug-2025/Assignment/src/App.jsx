import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Box, Typography } from '@mui/material';

function App() {
  const [input, setInput] = useState('');

  const products = [
    { id: 1, name: "Toyota Camry", category: "Sedan", price: 24500 },
    { id: 2, name: "Honda Accord", category: "Sedan", price: 26500 },
    { id: 3, name: "BMW 3 Series", category: "Sedan", price: 41000 },
    { id: 4, name: "Chevrolet Silverado 1500", category: "Truck", price: 32000 },
    { id: 5, name: "Tesla Model 3", category: "Electric", price: 39999 },
    { id: 6, name: "Ford Mustang", category: "Sports Car", price: 27000 },
    { id: 7, name: "Toyota RAV4", category: "SUV", price: 29000 },
    { id: 8, name: "Porsche 911", category: "Sports Car", price: 100000 },
    { id: 9, name: "Chevrolet Bolt EV", category: "Electric", price: 36000 },
    { id: 10, name: "Mercedes-Benz C-Class", category: "Luxury", price: 42000 }
  ];

  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 2,
      renderCell: (params) => highlightText(params.value)
    },
    {
      field: 'category',
      headerName: 'Category',
      flex: 1.5,
      renderCell: (params) => highlightText(params.value)
    },
    {
      field: 'price',
      headerName: 'Price',
      flex: 1,
      renderCell: (params) => `$${params.value}`
    },
  ];

  const highlightText = (text) => {
  if (!input) return text;
  const regex = new RegExp(`(${input})`, 'i');
  const parts = text.split(regex);
  return parts.map((part, index) =>
    part.toLowerCase() === input.toLowerCase() ? (
      <Box
        key={index}
        component="span"
        sx={{ backgroundColor: 'yellow' }}
      >
        {part}
      </Box>
    ) : (
      <Box key={index} component="span">{part}</Box>
    )
  );
};


  return (
    <>
      <Typography
        variant="h4"
        align="center"
        sx={{ py: 2, mt: '3%', fontWeight: 'light' }}
      >
        Find Your Next Ride in Seconds!
      </Typography>

      <Box
        sx={{ display: 'flex', justifyContent: 'center', p: 2 }}
      >
        <TextField
          label="Search"
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          sx={{
            mb: 3,
            width: '60%',
            fontSize: '18px'
          }}
        />
      </Box>

      <Box
        sx={{
          height: 600,
          width: '60%',
          mx: 'auto',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <DataGrid
          rows={products}
          columns={columns}
          pageSize={5}
          getRowId={(row) => row.id}
        />
      </Box>
    </>
  );
}

export default App;
