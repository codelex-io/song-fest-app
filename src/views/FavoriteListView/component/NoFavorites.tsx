import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon, IconType } from '@components'
import { colors } from '@styles'
import SimpleLayout from '@components/layouts/SimpleLayout'
import { LocalizationContext } from '@localization/LocalizationContext'

interface NoFavoritesProps {
   goBack: () => void
}
const NoFavorites: React.FC<NoFavoritesProps> = ({ goBack }) => {
   const { translations } = useContext(LocalizationContext);
   return (
      <SimpleLayout
         title={translations.getString('FAVORITE')}
         goBack={goBack}
         containerStyles={styles.containerStyles}
         headerStyles={styles.headerStyles}
      >
         < View style={styles.contentContainer} >
            <Icon style={styles.icon} size={44} type={IconType.HeartFilled} fill={colors.orange} />
            <Text style={styles.title}>{translations.getString('FAVORITES_HERE')}</Text>
            <Text style={styles.title2}>{translations.getString('FAVORITE_INFO')}</Text>
         </View >
      </SimpleLayout>
   )
}

const styles = StyleSheet.create({
   containerStyles: {
      flex: 1,
   },
   headerStyles: {
      position: 'absolute'
   },
   contentContainer: {
      flex: 1,
      paddingHorizontal: 16,
      alignItems: 'center',
      justifyContent: 'center',
   },
   icon: {
      marginBottom: 24,
   },
   title: {
      fontSize: 20,
      textAlign: 'center',
      lineHeight: 26,
      marginBottom: 12,
   },
   title2: {
      fontSize: 16,
      textAlign: 'center',
      paddingHorizontal: 24,
      lineHeight: 21,
   },
})

export default NoFavorites