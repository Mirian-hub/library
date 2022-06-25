export const TableAlign = {
  LEFT: 'left',
  RIGHT: 'right'
} as const;

export type TableAlignType = typeof TableAlign[keyof typeof TableAlign];
