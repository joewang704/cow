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
      <SidebarContainer />
      <CalendarContainer />
      <NotificationsContainer />
      <ErrorContainer />
    </div>
  )
}

export default App
