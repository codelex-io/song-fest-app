import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, typography } from '@styles';
import { dateTimeUtils } from '@utils';
import { StyleType } from '@domain/AnyType';
import { Item } from '../types';
import Card from '@components/cards/Card';
import { IconBtn40 } from '@components/buttons';
import { IconType } from '@components';
import { Label } from '@components/typography/Label';

interface CardProps {
    item: Item;
    backgroundColor: string;
    goToArticle: () => void;
    onFavorite: () => void;
    onShare: () => void;
    goToMap: () => void;
    propStyles?: StyleType;
}

const SingleItem: React.FC<CardProps> = ({
    item,
    backgroundColor,
    goToArticle,
    onFavorite,
    onShare,
    propStyles,
    goToMap,
}) => {
    const { image, dateBeforeTitle, title, secondaryTitle } = item;
    return (
        <Card
            {...{
                image,
                title,
                secondaryTitle,
                backgroundColor,
                propStyles,
                goToArticle,
            }}
            dateBeforeTitle={dateBeforeTitle ? dateTimeUtils.formatDate(dateBeforeTitle) : undefined}
        >
            {item.dateLabel && (
                <Label
                    iconType={IconType.Calendar}
                    title={dateTimeUtils.formatDate(item.dateLabel)}
                    color={colors.white}
                    propStyles={styles.label}
                />
            )}
            {item.timeLabel && (
                <Label
                    iconType={IconType.Clock}
                    title={item.timeLabel}
                    color={colors.white}
                    propStyles={styles.bottomLabel}
                />
            )}
            <View style={styles.iconRow}>
                <IconBtn40
                    onPress={onShare}
                    icon={IconType.Share}
                    color={colors.blue}
                    bgColor={colors.white}
                    style={{ marginRight: 16 }}
                />
                <IconBtn40
                    onPress={onFavorite}
                    icon={item.isFavourite ? IconType.HeartFilled : IconType.Heart}
                    color={colors.orange}
                    bgColor={colors.white}
                    style={{ marginRight: 16 }}
                />
                {item.location && (
                    <IconBtn40
                        onPress={goToMap}
                        icon={IconType.Navigation}
                        color={colors.green}
                        bgColor={colors.white}
                        style={{ marginRight: 16 }}
                    />
                )}
            </View>
        </Card>
    );
};

export default SingleItem;

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        marginHorizontal: 16,
        backgroundColor: colors.white,
    },
    image: {
        height: 180,
    },
    lowerContainer: {
        padding: 16,
    },
    shareIconContainer: {
        height: 44,
        width: 44,
        backgroundColor: colors.orange,
        opacity: 0.15,
        marginRight: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dateText: {
        color: colors.white,
        fontFamily: typography.medium,
        fontSize: 14,
        marginBottom: 8,
    },
    label: {
        marginBottom: 6,
    },
    bottomLabel: {
        marginBottom: 12,
    },
    iconRow: {
        flexDirection: 'row',
    },
});
