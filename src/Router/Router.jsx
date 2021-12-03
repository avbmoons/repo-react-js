import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import {ROUTES} from "./constants";
import {Home} from "../Screens/Home";
import { Chats } from '../Screens/Chats/Chats';
import { Profile } from '../Screens/Profile/Profile';
import {NotFound} from '../Screens/NotFound/NotFound';
import { RouterList } from '../Components/RouterList/RouterList';
import { NoChats } from '../Screens/NoChats/NoChats';

const INIT_CHATS={id1: {name:"chat 1"}};

export function Router() {

    const [chatList]=useState(INIT_CHATS);

  return (   
      
            <BrowserRouter>
            
            <RouterList />

            <Switch>                
                <Route exact path={ROUTES.CHATS}><Chats chatList={chatList}/></Route>
                <Route exact path={ROUTES.PROFILE} render={()=><Profile/>}></Route>
                <Route exact path={ROUTES.HOME}> <Home/></Route>
                <Route path={ROUTES.NO_CHAT} render={()=><NoChats/>}></Route>
                <Route path={ROUTES.NOT_FOUND} render={()=><NotFound/>}></Route>
                <Route><Redirect to={ROUTES.NOT_FOUND}/></Route>

            </Switch>      
        

            </BrowserRouter>
   
  );
}

export default Router;
