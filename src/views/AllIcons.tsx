import React, { useState, Fragment } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon, IconType } from '@components';
import { colors } from '@styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AllIcons: React.FC = () => {
    const [selected, setSelected] = useState<IconType>(IconType.Account);

    const handleClickIcon = (it: IconType) => {
        setSelected(it);
    };
    const fill = colors.darkGrey1A;
    return (
        <Fragment>
            <View style={styles.container}>
                {Object.keys(IconType).map(it => (
                    <TouchableOpacity key={it} onPress={() => handleClickIcon(it as IconType)}>
                        <Icon size={24} type={it as IconType} fill={fill} />
                    </TouchableOpacity>
                ))}
            </View>
            <Text>click icon to enlarge</Text>
            <View style={styles.largePreview}>
                <Text>{selected}</Text>
                <TouchableOpacity style={styles.iconContainer}>
                    <Icon size={300} type={selected as IconType} fill={fill} />
                </TouchableOpacity>
            </View>
        </Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    largePreview: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
    },
    iconContainer: {
        backgroundColor: '#eee',
        borderColor: 'blue',
        borderWidth: 1,
    },
});

export default AllIcons;
