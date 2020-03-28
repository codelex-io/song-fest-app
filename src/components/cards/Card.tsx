import React, { ReactNode } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, opacity, typography } from '@styles';
import { Image } from '@components';
import { StyleType } from '@domain/AnyType';
import CardTitle from '@components/typography/CardTitle';

interface CardProps {
    image?: { url: string };
    dateBeforeTitle?: string;
    title?: string;
    secondaryTitle?: string;
    children?: ReactNode;
    backgroundColor: string;
    propStyles?: StyleType;
    goToArticle: () => void;
}

const Card: React.FC<CardProps> = ({
    image,
    dateBeforeTitle,
    title,
    secondaryTitle,
    children,
    backgroundColor,
    propStyles,
    goToArticle,
}) => {
    return (
        <TouchableOpacity style={[styles.container, propStyles]} onPress={goToArticle} activeOpacity={opacity.opacity8}>
            {image && image.url && (
                <View>
                    <Image height={180} source={{ uri: image?.url }} style={styles.image} />
                </View>
            )}

            <View style={[styles.lowerContainer, { backgroundColor }]}>
                {dateBeforeTitle && <Text style={styles.dateText}>{dateBeforeTitle}</Text>}

                {title && <CardTitle styleProps={{ marginBottom: 12 }}>{title}</CardTitle>}

                {secondaryTitle && (
                    <CardTitle fonts="regular" fontSize={14} styleProps={styles.secondaryTitle}>
                        {secondaryTitle}
                    </CardTitle>
                )}

                {children}
            </View>
        </TouchableOpacity>
    );
};

export default Card;

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
    secondaryTitle: {
        marginBottom: 16,
    },
});
