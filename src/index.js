import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import ShowPost from './components/ShowPost';
import BaseLayout from './components/BaseLayout';
import Splash from './components/Splash';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
       <Switch>
        <Route path="/show/:id" component={ShowPost}/>
         <Route path="/create" component={CreatePost}/>
         <Route path="/show" component={PostList}/>
         <Route exact path="/" component={Splash}/>
       </Switch>
    </BaseLayout>
   </BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
