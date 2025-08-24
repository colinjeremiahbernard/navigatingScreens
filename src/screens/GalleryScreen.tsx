import { StatusBar } from 'expo-status-bar'
import {View, Text, Button} from 'react-native'

export default function GalleryScreen() {
   return (
    <View style={{
        flex:1,
        backgroundColor:'purple',
        justifyContent:'center',
        alignItems:'center'
        }}>
        <Text>
            Gallery works pretty well!
        </Text>
        
           
    </View>
   )
}