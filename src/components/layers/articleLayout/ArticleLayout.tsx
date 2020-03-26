import React, { ReactNode, useRef, useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import { SimpleHeader, Loading } from '@components';
import { colors, typography } from '@styles';
import Markdown from 'react-native-markdown-display';
import BackButton from './BackButton';

interface ArticleLayoutProps {
   onBack: () => void
   loading: boolean,
   children: ReactNode,
   content: string;
   image?: { url: string };
   title: string;
   secondaryTitle: string;
}

const ArticleLayout: React.FC<ArticleLayoutProps> = ({ children, onBack, loading, image, content, title, secondaryTitle }) => {
   const scroll = useRef<ScrollView>(null);
   const [scrollEnabled, setScrollEnabled] = useState(true);
   const [parentHeight, setParentHeight] = useState<number | undefined>(undefined);
   const [contentHeight, setContentHeight] = useState<number | undefined>(undefined);

   const [showButtonUp, setShowButtonUp] = useState(false);

   useEffect(() => {
      if (contentHeight && parentHeight) {
         if (parentHeight >= contentHeight) {
            setScrollEnabled(false);
         }
      }
   }, [parentHeight, contentHeight]);

   const handleOnScroll = (scrollYPosition: number) => {
      if (scrollYPosition >= 150) {
         setShowButtonUp(true);
      } else {
         setShowButtonUp(false);
      }
   };

   const scrollTop = () => {
      scroll.current?.scrollTo({ x: 0, y: 0, animated: true });
   };
   return (
      <View style={styles.container}>
         <View>
            <SimpleHeader title={''} onBack={onBack} />
         </View>
         {loading ? (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: colors.white }}>
               <Loading />
            </View>
         ) : (
               <View style={styles.parentContainer}>
                  <ScrollView
                     scrollEventThrottle={0}
                     style={styles.scrollContainer}
                     ref={scroll}
                     onLayout={event => setParentHeight(event.nativeEvent.layout.height)}
                     scrollEnabled={scrollEnabled}
                     onScroll={event => handleOnScroll(event.nativeEvent.contentOffset.y)}
                  >
                     <View style={styles.content} onLayout={event => setContentHeight(event.nativeEvent.layout.height)}>

                        {image &&
                           <View style={styles.imageContainer}>
                              <Image height={180} source={{ uri: image.url }} style={styles.image} />
                           </View>
                        }

                        {title &&
                           <View>
                              <Text style={styles.title}>{title}</Text>
                           </View>
                        }
                        {secondaryTitle &&
                           <View style={styles.dateContainer}>
                              <Text style={styles.date}>{secondaryTitle}</Text>
                           </View>
                        }

                        {children}

                        {content && (
                           <View>
                              <Markdown style={markdownstyles}>{content}</Markdown>
                           </View>
                        )}
                     </View>
                  </ScrollView>

                  <BackButton onPress={scrollTop} isVisible={showButtonUp} parentHeight={parentHeight} />
               </View>
            )
         }
      </View >
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   parentContainer: {
      flex: 1,
      width: '100%',
   },
   scrollContainer: {
      width: '100%',
   },
   content: {
      paddingBottom: 76,
      marginHorizontal: 16,
   },
   dateContainer: {
      paddingBottom: 12,
      paddingTop: 8,
   },
   title: {
      fontSize: 20,
      fontFamily: typography.bold,
      paddingTop: 16,
   },
   place: {
      color: colors.mediumGrey4D,
   },
   imageContainer: {
      height: 180,
   },
   image: {
      width: '100%',
      height: 180,
   },

   date: {
      fontSize: 14,
      color: colors.mediumGrey4D,
   },
});
const markdownstyles = StyleSheet.create({
   text: {
      fontFamily: typography.medium,
      fontSize: 16,
      lineHeight: 18,
   },
});
export default ArticleLayout