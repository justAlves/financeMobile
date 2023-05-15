import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../pages/Home";
import AddItem from "../pages/AddItem";
import DrawerHeader from "../components/DrawerHeader";

const Drawer = createDrawerNavigator()

function AppRoutes(){
  return(
    <Drawer.Navigator
      drawerContent={(props) => <DrawerHeader {...props}/>}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#252525'
        },
        drawerActiveBackgroundColor: '#141414',
        drawerActiveTintColor: '#fff',
        drawerInactiveBackgroundColor: '#343434',
        drawerInactiveTintColor: '#Ffffff',
        drawerItemStyle: {
          borderRadius: 15
        },
        
      }}
    >
      <Drawer.Screen 
        name="Home"
        component={Home}
      />
      <Drawer.Screen 
        name="Add Item"
        component={AddItem}
      />
    </Drawer.Navigator>
  )
}

export default AppRoutes