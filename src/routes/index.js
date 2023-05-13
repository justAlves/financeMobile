import React from "react";
import { View } from 'react-native'
import Signin from "../pages/Signin";

function Routes(){

    const isAuth = false

    return(
        isAuth ? <View></View> : <Signin/>
    )
}

export default Routes