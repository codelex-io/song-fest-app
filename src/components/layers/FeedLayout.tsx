import React, { ReactNode, useState } from 'react';
import { StyleSheet, StatusBar, LayoutChangeEvent } from 'react-native';
import Animated from 'react-native-reanimated';
import { Loading } from '@components';

interface FeedLayerProps {
   header: ReactNode;
   children: ReactNode | ReactNode[];
   animatedScrollOffset: Animated.Value<0>;
   loading: boolean;
}

const FeedLayout: React.FC<FeedLayerProps> = ({ header, children, animatedScrollOffset, loading }) => {
   const [headerHeight, setHeaderHeight] = useState<number | undefined>(undefined);

   const diffClampScrollY = Animated.diffClamp(animatedScrollOffset, 0, headerHeight ? headerHeight : 126);

   const headerInterpolation = Animated.interpolate(diffClampScrollY, {
      inputRange: [0, headerHeight ? headerHeight : 126],
      outputRange: [0, headerHeight ? -headerHeight : -126],
   });

   const contentInterpolation = Animated.interpolate(diffClampScrollY, {
      inputRange: [0, headerHeight ? headerHeight : 126],
      outputRange: [headerHeight ? headerHeight : 126, 0],
   });

   const animatedHeaderStyles = {
      transform: [{ translateY: headerInterpolation }],
   };

   const animatedContentStyles = {
      transform: [{ translateY: contentInterpolation }],
   };

   const measureHeader = (event: LayoutChangeEvent) => {
      const { height } = event.nativeEvent.layout;
      setHeaderHeight(height);
   };

   return (
      <Animated.View style={[styles.container]}>
         <StatusBar />

         <Animated.View onLayout={event => measureHeader(event)} style={[styles.header, animatedHeaderStyles]}>
            {header}
         </Animated.View>

         {loading ? (
            <Loading />
         ) : (
               <Animated.View style={[styles.content, animatedContentStyles]}>{children}</Animated.View>
            )}
      </Animated.View>
   );
};

export default FeedLayout;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      overflow: 'hidden',
   },
   header: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1,
      backgroundColor: '#fff',
   },
   content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
});
