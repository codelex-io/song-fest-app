import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '@styles';
import { EventArticleItem } from '../types';
import { IconType } from '@components';
import ArticleLayout from '@components/layers/articleLayout/ArticleLayout';
import { IconBtn44 } from '@components/buttons';

interface Props {
   item: EventArticleItem;
   onFavourite: () => void;
   onShare: () => void;
   onBack: () => void;
   loading: boolean;
   goToMap: () => void;
}

const EventArticleComponent: React.FC<Props> = ({ item, onBack, onFavourite, onShare, loading, goToMap }) => {

   const { title, image, content } = item
   const secondaryTitle = item.locationTitle

   return (
      <ArticleLayout
         {...{ onBack, loading, title, image, content, secondaryTitle }}
      >
         <IconBtn44 onPress={onShare}
            style={styles.roundedButton}
            icon={IconType.Share}
            color={colors.white}
            bgColor={colors.blue} />

         <IconBtn44 onPress={onFavourite}
            style={styles.roundedButton}
            icon={item.isFavourite ? IconType.Heart : IconType.HeartFilled}
            color={colors.white}
            bgColor={colors.orange} />

         <IconBtn44 onPress={goToMap}
            style={styles.roundedButton}
            icon={IconType.Map}
            color={colors.white}
            bgColor={colors.green} />

      </ArticleLayout>
   );
};

const styles = StyleSheet.create({
   roundedButton: {
      borderRadius: 3,
      overflow: 'hidden',
      marginRight: 16,
   }
})



export default EventArticleComponent;
