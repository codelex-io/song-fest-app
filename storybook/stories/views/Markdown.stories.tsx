import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { MarkdownEvent } from '../../../src/views';
import _ from 'lodash';

const data = [
    {
        id: _.uniqueId(),
        title: 'Mūsdienu deju lieluzveduma modelēšanas koncerts „Augstāk par zemi” un finālkonkurss',
        location: 'Rēzeknes novada Bērzgales pagasta Kultūras nams',
        date: '30.04.',
        time: '12.30 - 18.00',
        content: `XII Latvijas Skolu jaunatnes dziesmu un deju svētku ieskaņas pasākums Krāslavā 

        “Ierakstām sevi Svētkos”
        
        Rūtoj saule, rūtoj bite, rūtoj vysa Latveja! 
        
        Ar šodienas rotāšanos Krāslavā – dziesmās, dejās, instrumentu skaņās un mūsdienīgās horeogrāfijās turpināsim radošo ceļu savos deju, mūzikas un mākslas kolektīvos līdzīgi saules ceļam Latviešu gadskārtās uz visaugstāko – rotāšanos XII Latvijas Skolu jaunatnes dziesmu un deju svētkos Rīgā nākamvasar.
        
        Mūsu ir daudz un mēs mācīsimies pazīt, saprast un izjust latvisko caur latviešu gada svētkiem. Izdejosim, izdziedāsim un izspēlēsim daļu no kuplā XII Latvijas Skolu jaunatnes dziesmu un deju svētku repertuāra. 
        
        PIEDALĀS: PASTALIŅAS, RAITA, KRĀSLAVIŅA, ZIĶERI, RAKARI DRAISKUĻI, VARAVĪKSNĪTE, RITENĪTIS, JUMIS DZIRKSTĪTE, AUSTRIŅA, INDRIŅA, CITS HORIZONTS
        
        Ieeja pasākumā bez maksas.
        
        Rīko: Krāslavas Bērnu un jauniešu centrs sadarbībā ar izglītības iestādēm un Krāslavas kultūras namu.`,
    },
    {

        id: _.uniqueId(),
        title: 'Mūsdienu deju lieluzveduma modelēšanas koncerts „Augstāk par zemi” un finālkonkurss',
        location: 'Rēzeknes novada Bērzgales pagasta Kultūras nams',
        date: '30.04.',
        time: '12.30 - 18.00',
        content: `XII Latvijas Skolu jaunatnes dziesmu un deju svētku ieskaņas pasākums Krāslavā 

        “Ierakstām sevi Svētkos”
        
        Rūtoj saule, rūtoj bite, rūtoj vysa Latveja! 
        
        Ar šodienas rotāšanos Krāslavā – dziesmās, dejās, instrumentu skaņās un mūsdienīgās horeogrāfijās turpināsim radošo ceļu savos deju, mūzikas un mākslas kolektīvos līdzīgi saules ceļam Latviešu gadskārtās uz visaugstāko – rotāšanos XII Latvijas Skolu jaunatnes dziesmu un deju svētkos Rīgā nākamvasar.
        
        Mūsu ir daudz un mēs mācīsimies pazīt, saprast un izjust latvisko caur latviešu gada svētkiem. Izdejosim, izdziedāsim un izspēlēsim daļu no kuplā XII Latvijas Skolu jaunatnes dziesmu un deju svētku repertuāra. 
        
        PIEDALĀS: PASTALIŅAS, RAITA, KRĀSLAVIŅA, ZIĶERI, RAKARI DRAISKUĻI, VARAVĪKSNĪTE, RITENĪTIS, JUMIS DZIRKSTĪTE, AUSTRIŅA, INDRIŅA, CITS HORIZONTS
        
        Ieeja pasākumā bez maksas.
        
        Rīko: Krāslavas Bērnu un jauniešu centrs sadarbībā ar izglītības iestādēm un Krāslavas kultūras namu.`,
    },
];

storiesOf('MarkdownEvent', module).add('list', () => <MarkdownEvent data={data} />);
