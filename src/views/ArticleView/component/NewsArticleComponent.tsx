import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '@styles';
import { NewsArticleItem } from '../types';
import { dateTimeUtils } from '@utils';
import { IconType } from '@components';
import ArticleLayout from '@components/layers/articleLayout/ArticleLayout';
import { IconBtn44 } from '@components/buttons';
import TextColorFilledBtn from '@components/buttons/TextColorFilledBtn';
import translations from '@localization/translations';

interface Props {
    item: NewsArticleItem;
    onFavourite: () => void;
    onShare: () => void;
    onBack: () => void;
    loading: boolean;
    buyTicket: () => void;
}

const NewsArticleComponent: React.FC<Props> = ({ item, onBack, onFavourite, onShare, loading, buyTicket }) => {

    const { title, image, content } = item
    const secondaryTitle = `Ievietots ${dateTimeUtils.formatDate(item.date)}`

    return (
        <ArticleLayout
            {...{ onBack, loading, title, image, content, secondaryTitle }}
        >
            <View style={styles.row}>
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

                {buyTicket &&
                    <TextColorFilledBtn
                        style={styles.buyTicket}
                        onPress={buyTicket}
                    >
                        {translations.getString('BUY_TICKET')}
                    </TextColorFilledBtn>
                }
            </View>
        </ArticleLayout>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    roundedButton: {
        borderRadius: 3,
        overflow: 'hidden',
        marginRight: 16,
    },
    buyTicket: {
        borderRadius: 3,
        overflow: 'hidden',
        marginRight: 16,
        backgroundColor: colors.yellow
    }
})



export default NewsArticleComponent;
