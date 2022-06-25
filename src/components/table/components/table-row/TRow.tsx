import React from 'react'
import TCell from '../table-cell/TCell'
import '../table/table.component.sass'

export interface TRowProps {
    children: JSX.Element| JSX.Element[]
    header?: boolean
}

 const TRow = ({children, header} : TRowProps) => {  
  console.log('children', children)  
  console.log('header', header)  
  return (
    header ? <div className='up-table-th'> {children} </div>: <div className='up-table-row' > {children} </div>
  )
}

export default TRow;
