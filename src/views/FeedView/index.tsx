import React from 'react'
import { View, Text } from 'react-native'
import { SharedStackNavList } from '@navigation/stacks/SharedStack'


const index: React.FC<SharedStackNavList<'Feed'>> = ({ route, navigation }) => {


   return (
      <View>
         <Text>Hello</Text>
      </View>
   )
}

export default index