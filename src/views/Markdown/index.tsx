import React from 'react';
import Markdown from 'react-native-markdown-display';
import { View, Text, StyleSheet } from 'react-native';
import { SimpleHeader } from '@components';

const title = 'Mūsdienu deju lieluzveduma modelēšanas koncerts „Augstāk par zemi” un finālkonkurss';
const place = 'Rēzeknes novada Bērzgales pagasta Kultūras nams';
const date = '30.04.';
const time = '12.30 - 18.00';
const content = `XII Latvijas Skolu jaunatnes dziesmu un deju svētku ieskaņas pasākums Krāslavā 

“Ierakstām sevi Svētkos”

Rūtoj saule, rūtoj bite, rūtoj vysa Latveja! 

Ar šodienas rotāšanos Krāslavā – dziesmās, dejās, instrumentu skaņās un mūsdienīgās horeogrāfijās turpināsim radošo ceļu savos deju, mūzikas un mākslas kolektīvos līdzīgi saules ceļam Latviešu gadskārtās uz visaugstāko – rotāšanos XII Latvijas Skolu jaunatnes dziesmu un deju svētkos Rīgā nākamvasar.

Mūsu ir daudz un mēs mācīsimies pazīt, saprast un izjust latvisko caur latviešu gada svētkiem. Izdejosim, izdziedāsim un izspēlēsim daļu no kuplā XII Latvijas Skolu jaunatnes dziesmu un deju svētku repertuāra. */

PIEDALĀS: PASTALIŅAS, RAITA, KRĀSLAVIŅA, ZIĶERI, RAKARI DRAISKUĻI, VARAVĪKSNĪTE, RITENĪTIS, JUMIS DZIRKSTĪTE, AUSTRIŅA, INDRIŅA, CITS HORIZONTS

Ieeja pasākumā bez maksas.

Rīko: Krāslavas Bērnu un jauniešu centrs sadarbībā ar izglītības iestādēm un Krāslavas kultūras namu.`
export default class MarkdownEvent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <SimpleHeader title={' '} />
                </View>

                <View>
                    <Text> {title}</Text>
                </View>
                <View>
                    <Text> {place}</Text>
                </View>
                <View style={styles.timeDate}>
                    <Text> {date}</Text>
                    <Text> {time}</Text>
                </View>
                <View>
                    <Markdown>{content}</Markdown>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 56,
        justifyContent: 'flex-start',
        textAlign: 'left',
        flexDirection: 'column',
        backgroundColor: 'yellow',
    },
    header: {
        height: 50,
        alignItems: 'stretch',
        backgroundColor: 'pink',
    },
    timeDate: {
        flexDirection: 'row',
    },
});