import React from 'react'
import SidebarContainer from '../../containers/SidebarContainer'
import CalendarContainer from '../../containers/CalendarContainer'
import NotificationsContainer from '../../containers/NotificationsContainer'
import ErrorContainer from '../../containers/ErrorContainer'
import NavbarContainer from '../../containers/NavbarContainer'

/**
 * Base component for application pages
 * @param {object} props - object
 * @param {ReactElement} props.children - child component to render
 */
const App = () => {
  return (
    <div className="fill-height">
      <div className="fill-height">
        <NavbarContainer />
        <ErrorContainer />
        <SidebarContainer />
        <CalendarContainer />
        <NotificationsContainer />
      </div>
    </div>
  )
}

export default App
