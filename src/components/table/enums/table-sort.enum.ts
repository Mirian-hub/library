export enum TableSortDirection {
  DESC = 'desc',
  ASC = 'asc'
}

export interface TableSort {
  name: string;
  direction: TableSortDirection;
}
