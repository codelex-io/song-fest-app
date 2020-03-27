import React from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native'
import { SimpleHeader } from '@components'
import { TextTransform } from '@styles/typography'

interface SimpleLayoutProps {
   goBack: () => void,
   title: string;
   containerStyles?: ViewStyle
   headerStyles?: ViewStyle
   textTransform?: TextTransform,
}
const SimpleLayout: React.FC<SimpleLayoutProps> = ({
   goBack,
   children,
   title,
   containerStyles,
   headerStyles,
   textTransform,
}) => {

   return (
      <View style={[styles.container, containerStyles]}>
         <View style={[headerStyles]}>
            <SimpleHeader title={title} onBack={goBack} textTransform={textTransform} />
         </View>
         {children}
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
})

export default SimpleLayout