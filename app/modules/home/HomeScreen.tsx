import React, { useState } from 'react';
import {SafeAreaView, View, Image} from 'react-native';
import styles from './HomeScreenStyles';

import {Discover} from './Discover';
import {UnavailableUsers} from './UnavailableUsers/UnavailableUsers';
import {Title} from '../../ui/Title/Title';


import { sampleData, iconset, constLogo } from './sampleData';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Header } from '../../components';


const HomeScreen = () => {
    const showSampleData = JSON.parse(JSON.stringify(sampleData));
    const [peopleToDiscover, setPeoplesToDiscover]: any = useState(showSampleData);

  const resetData = () => {
    setPeoplesToDiscover([]);
    setPeoplesToDiscover(JSON.parse(JSON.stringify(sampleData)));
  }

  const updateDiscoverList = (updatedList:any) => {
    setPeoplesToDiscover(updatedList);
  }

  return (
    <SafeAreaView>
      <Header title={<><Image source={constLogo} style={styles.appLogo} /></>} />
      
      <View style={[styles.discoverTitle]}>
          <Title text="Discover" level="h1" />
          <TouchableOpacity onPress={resetData}><Image source={iconset.reset} style={styles.resetIconStyles} /></TouchableOpacity>
      </View>

      <View style={[styles.discoverWrapper]}>

        <View style={[styles.discoverBody]}>
            {peopleToDiscover?.length ? (
            <Discover peopleToDiscover={peopleToDiscover} updateDiscoverList={updateDiscoverList} />
            ) : (
            <UnavailableUsers />
            )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;