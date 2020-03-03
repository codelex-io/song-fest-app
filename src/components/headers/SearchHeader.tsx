import React, { useState } from 'react';
import { SafeAreaConsumer } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { TouchableOpacity, ScrollView, TextInput } from 'react-native-gesture-handler';
import { Icon, IconType } from '@components';
import { colors } from '@styles';
import { styles } from './styles';
import { SharedStackNavList } from 'src/navigation/stacks/SharedStack';

const SearchHeader: React.FC<SharedStackNavList<'Search'>> = ({ navigation }) => {
    const [input, setInput] = useState('');

    const handleSubmit = () => {
        setInput('');
        navigation.navigate('Feed', { payload: input });
    };

    const inputAccessoryViewID = 'searchHeaderInput';
    return (
        <SafeAreaConsumer>
            {insets => (
                <View style={{ paddingTop: insets?.top, backgroundColor: colors.white }}>
                    <ScrollView keyboardDismissMode="interactive">
                        <View style={styles.header}>
                            <TouchableOpacity style={styles.iconBox} onPress={() => navigation.goBack()}>
                                <Icon type={IconType.ChevronLeft} fill={colors.white} />
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
