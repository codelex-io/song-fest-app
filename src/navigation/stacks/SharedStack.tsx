import React from 'react'
import { StackNavigationOptions } from '@react-navigation/stack'
import { NewsStackParamsList } from './NewsStack'
import { SimpleHeader } from '@components'
import { FavoriteListView, MarkdownEvent, SearchView } from '@views'
import { TypedNavigator } from '@react-navigation/native'

const SharedStack = (Stack: TypedNavigator<NewsStackParamsList,
   StackNavigationOptions,
   any
>) => {
   return (
      <>
         <Stack.Screen
            name="Favorites"
            options={({ navigation }) => ({
               header: () => <SimpleHeader title={'MANI FAVORĪTI'} goBack={navigation.goBack} />,
            })}
            component={FavoriteListView}
         />
         <Stack.Screen
            name="Article"
            options={({ navigation }) => ({
               header: () => <SimpleHeader title={''} goBack={navigation.goBack} />,
            })}
            component={MarkdownEvent}
         />
         <Stack.Screen
            name="Search"
            options={({ navigation }) => ({
               header: () => <SimpleHeader title={''} goBack={navigation.goBack} />,
            })}
            component={SearchView}
         />
      </>
   )
}

export default SharedStack