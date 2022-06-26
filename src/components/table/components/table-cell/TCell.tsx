import React, { ReactNode } from 'react'
import '../table/table.component.sass'
export interface TCellProps {
    children: any
    hasSelect?: any
}

const TCell = ({children}: TCellProps) => {
  return (
    <></>
  )
}

export default TCell

export const TCellWrapper = ({children, hasSelect}: TCellProps) => {
  console.log('TCellWrapper', children)

  return (
    <div className='up-table-td'>{children.props.children}</div>
  )
}
