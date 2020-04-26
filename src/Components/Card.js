import Box from './Box';
import React from 'react';
import Text from './Text';
import { Fade, Placeholder, PlaceholderLine } from 'rn-placeholder';

export default function Card({ icon, number, subtitle, placeholder }) {
  return (
    <Box
      height={50}
      borderRadius={12}
      backgroundColor='danger'
      mb={26}
      flex={1}
      width='100%'
      flexDirection='row'
      paddingVertical={20}
      boxShadow='0px 7px 6px #00000008'
    >
      {!placeholder ? (
        <Box flex={1} flexDirection='row' justifyContent='space-around' alignItems='center'>

          <Box flexDirection='row' alignItems='center' alignContent='flex-start'>
            {icon}
            
            <Text fontSize={24} color='textdark'>
              {subtitle}
            </Text>
          </Box>
          
          <Box flexDirection='row' justifyContent='flex-end' alignItems='center'>
            <Text fontSize={24} color='textdark' fontWeight='bold'>
              {number}
            </Text>      
          </Box>    
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
  );
}
