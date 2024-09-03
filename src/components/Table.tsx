import styled, { css, keyframes } from 'styled-components';
import { ITableData, TableType } from 'types/table';

interface ITableProps {
  table: ITableData;
}

const tableIcon = {
  [TableType.BoothTable]: '🛋️',
  [TableType.DiningTable]: '🍽️',
  [TableType.OutdoorTable]: '🌳',
  [TableType.PrivateDiningTable]: '🚪',
};

const Table = ({ table }: ITableProps) => {
  const { warning, type, name, guests, maxGuests } = table;

  return (
    <TableWrapper warning={warning}>
      <TableTypeIcon>{tableIcon[type]}</TableTypeIcon>
      <TableInfo>
        <h3>{name}</h3>
        <p>
          Guests: {guests}/{maxGuests}
        </p>
      </TableInfo>
    </TableWrapper>
  );
};

export default Table;

const blink = keyframes`
  0%, 50%, 100% {
    box-shadow: 0px 0px 10px 5px red;
  }
  25%, 75% {
    box-shadow: none;
  }
`;

const animation = () => css`
  ${blink} 2s infinite;
`;

const TableWrapper = styled.div<{ warning: boolean }>`
  width: 150px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  background-color: white;
  animation: ${({ warning }) => (warning ? animation : 'none')};
`;

const TableTypeIcon = styled.div`
  font-size: 40px;
`;

const TableInfo = styled.div`
  margin-top: 10px;
`;
