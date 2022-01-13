import React from "react";

import {
    BrowserRouter,
    Routes as RoutesReactRouter,
    Route
  } from "react-router-dom";
import { Home } from "../pages/home";
import { NewRoom } from "../pages/NewRoom";

export const Routes = () => {

    return (
        <BrowserRouter>
        <RoutesReactRouter>
            <Route path='/' element={<Home/>}/>
            <Route path='/new-room' element={<NewRoom/>}/>
        </RoutesReactRouter>
        </BrowserRouter>
    )
}