export enum TableType {
  DiningTable = 'Dining Table',
  BoothTable = 'Booth Table',
  OutdoorTable = 'Outdoor Table',
  PrivateDiningTable = 'Private Dining Table',
}

export interface ITableData {
  id: string;
  type: TableType;
  name: string;
  warning: boolean;
  guests: number;
  maxGuests: number;
}
