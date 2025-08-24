import {NavigationContainer} from '@react-navigation/native'
import { StackRoutes } from './stack.routes'
import { BottomTabsRoutes } from './bottomTabsRoutes'

export function Routes() {
    return(
    <NavigationContainer>
        <BottomTabsRoutes/>
    </NavigationContainer>
    )
}