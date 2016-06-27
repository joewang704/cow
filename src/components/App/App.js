import React from 'react'
import SidebarContainer from '../../containers/SidebarContainer'
import CalendarContainer from '../../containers/CalendarContainer'
import NotificationsContainer from '../../containers/NotificationsContainer'
import ErrorContainer from '../../containers/ErrorContainer'
/**
 * Base component for application pages
 * @param {object} props - object
 * @param {ReactElement} props.children - child component to render
 */
const App = () => {
  return (
    <div className="fill-height">
      <ErrorContainer />
      <SidebarContainer />
      <CalendarContainer />
      <NotificationsContainer />
    </div>
  )
}

export default App
