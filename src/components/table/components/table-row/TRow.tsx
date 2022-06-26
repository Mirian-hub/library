import React from 'react'
import TCell from '../table-cell/TCell'
import '../table/table.component.sass'

export interface TRowProps {
    children: JSX.Element| JSX.Element[]
    header?: boolean
}

 const TRow = ({children, header} : TRowProps) => {  
  return (
      <div className='up-table-row' >      
         {children}
      </div>
  )
}

export default TRow;
