import React from 'react'
import CalendarDialogForm from '../../containers/CalendarDialogForm'

const Dialog = ({ dialog }) => {
  const { type, position, id } = dialog
  return (
    <div className={`${type}-dialog`} style={{ marginTop: `${position}px` }}>
      <CalendarDialogForm eventId={id} />
    </div>
  )
}

export default Dialog
