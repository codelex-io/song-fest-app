import React, { useState } from 'react';
import { SafeAreaConsumer } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { TouchableOpacity, ScrollView, TextInput } from 'react-native-gesture-handler';
import { Icon, IconType } from '@components';
import { colors } from '@styles';
import { RouteProp, useRoute } from '@react-navigation/native';
import { FavouriteGroupKey } from '@domain/favourites/types';
import { styles } from './styles';

type StackParamList = {
    SearchGroup: { group: FavouriteGroupKey };
};

type SearchRouteProp = RouteProp<StackParamList, 'SearchGroup'>;

interface Props {
    goBack: () => void;
    navigate: (route: string, payload: { [key: string]: string }) => void;
}

const SearchHeader: React.FC<Props> = ({ goBack, navigate }) => {
    const { group } = useRoute<SearchRouteProp>().params;

    const [input, setInput] = useState('');

    const handleSubmit = () => {
        setInput('');
        navigate(group, { payload: input });
    };

    const inputAccessoryViewID = 'searchHeaderInput';
    return (
        <SafeAreaConsumer>
            {insets => (
                <View style={{ paddingTop: insets?.top }}>
                    <ScrollView keyboardDismissMode="interactive">
                        <View style={styles.header}>
                            <TouchableOpacity style={styles.iconBox} onPress={goBack}>
                                <Icon type={IconType.ChevronLeft} fill={colors.darkGrey1A} />
                            </TouchableOpacity>

                            <TextInput
                                autoFocus
                                keyboardType="ascii-capable"
                                maxLength={200}
                                style={styles.text}
                                inputAccessoryViewID={inputAccessoryViewID}
                                onChangeText={text => setInput(text)}
                                value={input}
                                onSubmitEditing={handleSubmit}
                            />
                        </View>
                    </ScrollView>
                </View>
            )}
        </SafeAreaConsumer>
    );
};

export default SearchHeader;
