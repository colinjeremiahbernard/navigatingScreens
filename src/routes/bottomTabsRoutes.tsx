import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import GalleryScreen from '../screens/GalleryScreen'
import {MaterialCommunityIcons} from '@expo/vector-icons'

const { Navigator, Screen} = createBottomTabNavigator()

export function BottomTabsRoutes() {
   return(
      <Navigator>
         <Screen
            name='Home'
            component={HomeScreen}
            options={{
                tabBarIcon:({color, size}) => (
                    <MaterialCommunityIcons>
                        name='home',
                        color='blue',
                        size={size}
                       
                    </MaterialCommunityIcons>
                        
                    
                )
            }}
          />
          <Screen
            name='Gallery'
            component={GalleryScreen}
             options={{
                tabBarIcon:({color, size}) => (
                    <MaterialCommunityIcons>
                        name='view-gallery',
                        color='blue',
                        size=(24)
                       
                    </MaterialCommunityIcons>
                        
                    
                )
            }}
           />

      </Navigator>
   )
}