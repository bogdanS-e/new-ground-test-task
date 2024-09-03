import { ITableData, TableType } from 'types/table';

const tableNames = Object.values(TableType);
const maxGuestsByType = {
  [TableType.BoothTable]: 4,
  [TableType.DiningTable]: 6,
  [TableType.OutdoorTable]: 8,
  [TableType.PrivateDiningTable]: 10,
};

export const generateRandomTables = (num: number): ITableData[] => {
  const tables = [];

  for (let i = 0; i < num; i++) {
    const type = tableNames[Math.floor(Math.random() * tableNames.length)];
    const maxGuests = maxGuestsByType[type];

    const table: ITableData = {
      id: `table-${i}`,
      type,
      name: `${type} ${i + 1}`,
      warning: Math.random() > 0.9, // 10% chance of warning
      guests: Math.floor(Math.random() * maxGuests),
      maxGuests,
    };

    tables.push(table);
  }

  return tables;
};
