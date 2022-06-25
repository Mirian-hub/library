import React, { ReactNode } from 'react'
import '../table/table.component.sass'
export interface TCellProps {
    children: ReactNode
}

const TCell = ({children}: TCellProps) => {
  return (
    <div className='up-table-td'>{children}</div>
  )
}

export default TCell
