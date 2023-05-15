import React, {useContext} from "react";
import Signin from "../pages/Signin";
import AppRoutes from "./app.routes";
import { View, ActivityIndicator } from 'react-native'

import { AuthContext } from "../contexts/auth";

function Routes(){

    const {signed, loading} = useContext(AuthContext)

    if(loading){
        return(
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#252525'
            }}>
                <ActivityIndicator
                    size='large'
                    color='#ffffff'
                />
            </View>
        )
    }
    return(
        signed ? <AppRoutes/> : <Signin/>
    )
}

export default Routes