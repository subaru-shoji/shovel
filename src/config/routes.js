import { Router, Route, browserHistory } from 'react-router'

import App from '../app/components/App';
import Novels from '../app/components/Novels';

export default Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRedirect to='/novels' />
        <Route path='/novels' component={Novels}/>
      </Route>
    </Router>
  )
}
