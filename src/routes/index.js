import { Route, IndexRoute } from 'react-router'

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
import CoreLayout from 'layouts/CoreLayout'
import LandingLayout from 'layouts/LandingLayout'
import LoginLayout from 'layouts/LoginLayout'
import DashboardLayout from 'layouts/DashboardLayout'
import HomeView from 'views/HomeView'
import DashboardView from 'views/DashboardView'
import AboutView from 'views/AboutView'

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={LandingLayout}>
      <IndexRoute component={HomeView} />
    </IndexRoute>
    <Route path='/login' component={LoginLayout}>
      <IndexRoute component={AboutView} />
    </Route>
    <Route path='/dashboard' component={DashboardLayout}>
      <IndexRoute component={DashboardView} />
    </Route>
  </Route>
)
