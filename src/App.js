import React, {useState} from 'react';
import { Route } from 'react-router-dom';
import '../src/components/scss/app.scss';
import UserForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Favorites from './components/Favorites';
import Menu from './components/Menu';
import VendorPage from './components/VendorPage';
import SearchPage from './components/SearchPage';



function App() {
  // const [savedList, setSavedList] = useState( [] );

  // const addToSavedList = fav => {
  //   setSavedList( [...savedList, fav] );
  // };

  return (
    <div className='App'>

      <Route exact path ='/' component={UserForm}/>
      <Route exact path ="/register" component={RegisterForm}/>
      <Route exact path = '/favorites' component={Favorites} />
      {/* needs remove and menu buttons and 'add rating component'*/}
      <Route exact path = '/truck-search' component={SearchPage} />
      {/* needs 'add to favorites' and menu buttons 'add rating component'*/}
      <Route exact path = '/trucks' component={VendorPage} />
      {/* create button on top of page */}
      {/* needs edit and delete buttons */}
      <Route exact path = '/trucks/:id/menu' component={Menu} />

      {/* <Route path ='/favorites/:id' render={(props => <Favorites addToSavedList={addToSavedList} {...props} list={savedList}/>)}/>   */}
    
    </div>
  
  );
}

export default App;





