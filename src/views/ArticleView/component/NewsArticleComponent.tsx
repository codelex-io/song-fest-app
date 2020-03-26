import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '@styles';
import { NewsArticleItem } from '../types';
import { dateTimeUtils } from '@utils';
import { IconType } from '@components';
import ArticleLayout from '@components/layers/articleLayout/ArticleLayout';
import { IconBtn44 } from '@components/buttons';

interface Props {
    item: NewsArticleItem;
    onFavourite: () => void;
    onShare: () => void;
    onBack: () => void;
    loading: boolean;
}

const NewsArticleComponent: React.FC<Props> = ({ item, onBack, onFavourite, onShare, loading }) => {

    const { title, image, content } = item
    const secondaryTitle = `Ievietots ${dateTimeUtils.formatDate(item.date)}`

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



export default NewsArticleComponent;
