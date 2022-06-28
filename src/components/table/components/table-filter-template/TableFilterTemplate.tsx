import React, {useState} from 'react'
import './tableFilterTemplate.sass'
const TableFilterTemplate = ({open, toggleGialod}) => {
  const [dialogOpen, setDialogOpen] = useState(true)
  return (
   open && <div className='modal'>
    <p> test template</p>
   <input type="date" id="birthday" name="birthday"></input>
   <input type="date" id="birthday" name="birthday" style={{float: 'right'}}></input>
   <button className='dialogBtn' onClick={toggleGialod} > search </button>
   </div>
  )
}


export default TableFilterTemplate