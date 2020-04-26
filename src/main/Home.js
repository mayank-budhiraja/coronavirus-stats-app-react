import React from 'react';
import {    StatusBar, ScrollView, 
            RefreshControl, 
            SafeAreaView, Platform } 
            from 'react-native';
import { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Fade, Placeholder, PlaceholderLine } from 'rn-placeholder';
import Pie from 'react-native-pie';
import Snackbar from 'react-native-snackbar';

import Box from '../Components/Box';
import theme from '../Components/theme';
import Card from '../Components/Card';
import SvgCase from '../assets/Case';
import SvgDeath from '../assets/Death';
import SvgRecovered from '../assets/Recovered';
import Text from '../Components/Text';

function HomeStackScreen({ navigation }){
    const [summaryData, setSummaryData] = useState({});
    const [deathsPercent, setdeathsPercent] = useState(0);
    const [activePercent, setactivePercent] = useState(0);
    const [recoverPercent, setrecoverPercent] = useState(0);
    const [updated, setUpdated] = useState('');
    const [refreshing, setRefreshing] = useState(false);
  
    const getSummaryData = async () => {
      const response = await fetch('https://corona.lmao.ninja/v2/all');
      const data = await response.json();
      const deathP = Math.round((data.deaths / data.cases) * 100);
      const recoverP = Math.round((data.recovered / data.cases) * 100);
      const activeP = 100 - deathP - recoverP;
      const updatedDate = new Date(data.updated).toLocaleString();
  
      setSummaryData(data);
      setactivePercent(activeP);
      setdeathsPercent(deathP);
      setrecoverPercent(recoverP);
      setUpdated(updatedDate);
    };
  
    useEffect(() => {
      getSummaryData();
    }, []);
  
    useFocusEffect(
      React.useCallback(() => {
        StatusBar.setBarStyle('dark-content');
        Platform.OS === 'android' &&
          StatusBar.setBackgroundColor(theme.colors.bglight);
      }, []),
    );
    const onRefresh = () => {
      setRefreshing(true);
      getSummaryData();
      setRefreshing(false);
      Snackbar.show({
        text: 'Refreshed',
        textColor: 'white',
        backgroundColor: theme.colors.success,
        duration: Snackbar.LENGTH_SHORT,
      });
    };

    return(
    <Box as={SafeAreaView} backgroundColor='bglight' flex={1}>
        <Box
        flex={1}
        backgroundColor='main'
        paddingLeft={26}
        paddingRight={14}
        paddingTop={26}
        marginBottom={8}
        >
        <ScrollView
            paddingRight={12}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >

            {/* Hollow Chart */}
                <Box
                    backgroundColor='main'
                    marginBottom={26}
                    borderRadius={12}
                    flexDirection='row'
                    paddingHorizontal={26}
                    paddingVertical={24}
                    boxShadow='0px 7px 6px #00000008'
                >
                    {activePercent ? (
                    <Box flex={1} flexDirection='row' justifyContent='space-around'>
                        <Box paddingTop={20}>
                            <Pie
                                radius={140}
                                innerRadius={110}
                                sections={[
                                {
                                    percentage: recoverPercent,
                                    color: theme.colors.success,
                                },
                                {
                                    percentage: activePercent,
                                    color: theme.colors.warning,
                                },
                                {
                                    percentage: deathsPercent,
                                    color: theme.colors.danger,
                                },
                                ]}
                                dividerSize={6}
                                strokeCap={'butt'}
                                backgroundColor="#2C3355"
                            />
                        </Box>

                        <Text 
                            color='#FFFFFF'
                            position='absolute'
                            paddingLeft={0}
                            fontSize={24}
                            marginTop={270}
                        >
                            %{activePercent}
                        </Text>

                        <Text 
                            color='#FFFFFF'
                            position='absolute'
                            paddingLeft={250}
                            fontSize={24}
                            marginTop={30}
                        >
                            %{recoverPercent}
                        </Text>

                        <Text 
                            color='#FFFFFF'
                            position='absolute'
                            paddingLeft={100}
                            fontSize={24}
                            marginTop={-20}
                        >
                            %{deathsPercent}
                        </Text>

                        <Text 
                            color='#FFFFFF'
                            position='absolute'
                            paddingLeft={80}
                            fontSize={24}
                            marginTop={150}
                            fontWeight='bold'
                        >
                            Worldwide
                        </Text>


                    </Box>
                    ) : (
                    <Placeholder paddingLeft={20} paddingRight={20} Animation={Fade}>
                        <PlaceholderLine width={60} />
                        <PlaceholderLine />
                        <PlaceholderLine />
                        <PlaceholderLine width={30} />
                    </Placeholder>
                    )}
                </Box>

            {/* Worldwide Summary */}
                <Box
                    flexDirection='row'
                    width='100%'
                    flex={1}
                    justifyContent='space-between'
                >
                    <Card
                    icon={<SvgCase width={48} height={48} />}
                    number={summaryData.cases}
                    subtitle={'Total Cases'}
                    placeholder={!summaryData.cases}
                    />
                    
                </Box>
                
                <Box flexDirection='row' justifyContent='space-between'>
                    <Card
                    icon={<SvgRecovered width={48} height={48} />}
                    number={summaryData.recovered}
                    subtitle={'Recovered'}
                    placeholder={!summaryData.cases}
                    />
                </Box>  
                
                <Box flexDirection='row' justifyContent='space-between'>
                    <Card
                        icon={<SvgDeath width={48} height={48} />}
                        number={summaryData.deaths}
                        subtitle={'Death'}
                        placeholder={!summaryData.cases}
                        />       
                </Box>
                
          <Text fontSize={12} alignSelf='flex-start' color='textlight'>
            Last updated : {updated}
          </Text>

        </ScrollView>
        
        </Box>
    </Box>
        
    );
}

export default HomeStackScreen;