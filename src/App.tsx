import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { ITableData } from 'types/table';
import { generateRandomTables } from 'utils/server';

import Table from 'components/Table';

function App() {
  // use moch data here. In a real proect we'll get from the server the initial data. Using web sockets if the data updates in real time
  const [tables, setTables] = useState<ITableData[]>(generateRandomTables(100));

  // Function to randomly update only one table's data
  const randomSingleTableUpdate = () => {
    const randomIndex = Math.floor(Math.random() * tables.length);

    setTables((prevTables) =>
      prevTables.map((table, index) =>
        index === randomIndex
          ? {
              ...table,
              guests: Math.floor(Math.random() * table.maxGuests),
              warning: Math.random() > 0.8,
            }
          : table
      )
    );
  };

  useEffect(() => {
    //subscribe to server events
    //in our case we manually update a random table of course
    const interval = setInterval(randomSingleTableUpdate, 3000);
    return () => clearInterval(interval);
  }, [tables]);

  return (
    <TableContainer>
      {tables.map((table) => (
        <Table key={table.id} table={table} />
      ))}
    </TableContainer>
  );
}

export default App;

const TableContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
