import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '@styles';
import { EventArticleItem } from '../types';
import { IconType } from '@components';
import ArticleLayout from '@components/layouts/articleLayout/ArticleLayout';
import { IconBtn44 } from '@components/buttons';
import TextColorFilledBtn from '@components/buttons/TextColorFilledBtn';
import { LocalizationContext } from '@localization/LocalizationContext';
import { dateTimeUtils } from '@utils';
import { Label } from '@components/typography/Label';

interface Props {
    item: EventArticleItem;
    onFavourite: () => void;
    onShare: () => void;
    onBack: () => void;
    loading: boolean;
    goToMap: () => void;
    buyTicket: () => void;
}

const EventArticleComponent: React.FC<Props> = ({
    item,
    onBack,
    onFavourite,
    onShare,
    loading,
    goToMap,
    buyTicket,
}) => {
    const { translations } = useContext(LocalizationContext);
    const { title, image, content, date, time } = item;
    const secondaryTitle = item.locationTitle;

    return (
        <ArticleLayout {...{ onBack, loading, title, image, content, secondaryTitle }}>
            <View style={[styles.row, styles.labels]}>
                <Label title={dateTimeUtils.formatDate(date)} iconType={IconType.Calendar} />
                <Label title={time} iconType={IconType.Clock} />
            </View>

            <View style={styles.row}>
                <IconBtn44
                    onPress={onShare}
                    style={styles.roundedButton}
                    icon={IconType.Share}
                    color={colors.white}
                    bgColor={colors.blue}
                />

                <IconBtn44
                    onPress={onFavourite}
                    style={styles.roundedButton}
                    icon={item.isFavourite ? IconType.Heart : IconType.HeartFilled}
                    color={colors.white}
                    bgColor={colors.orange}
                />

                <IconBtn44
                    onPress={goToMap}
                    style={styles.roundedButton}
                    icon={IconType.Navigation}
                    color={colors.white}
                    bgColor={colors.green}
                />

                {buyTicket && (
                    <TextColorFilledBtn style={styles.buyTicket} onPress={buyTicket}>
                        {translations.getString('BUY_TICKET')}
                    </TextColorFilledBtn>
                )}
            </View>
        </ArticleLayout>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    labels: {
        marginBottom: 12,
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
        backgroundColor: colors.yellow,
    },
});

export default EventArticleComponent;
