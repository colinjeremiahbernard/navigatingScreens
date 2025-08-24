import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'

const{ Screen, Navigator }=createStackNavigator();


import GalleryScreen from '../screens/GalleryScreen'

export function StackRoutes() {
    return(
       <Navigator>
         <Screen
           name='home'
           component={HomeScreen}
           options={{
            title:'Main Menu',
            headerTintColor: 'brown',
            headerShown: true
           }}
         />
         <Screen
           name='gallery'
           component={GalleryScreen}
         />
       </Navigator> 
    )
}