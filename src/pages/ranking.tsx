import { Box, Circle, Flex, Spacer, Text } from '@chakra-ui/react';
import { rankingMockData } from 'mock/ranking';

const RankingPage = () => {
  return (
    <Box>
      {rankingMockData.map(userData => {
        return (
          <Flex key={userData.id}>
            <Circle bg='#6370EB' size='50px' color='white'>
              <Text as='b' fontSize={'3xl'}>
                {userData.rank}
              </Text>
            </Circle>
            <Box>
              <Text as='b' fontSize={'3xl'}>
                {userData.name}
              </Text>
            </Box>
            <Spacer />
            <Box>
              <Text as='b' fontSize={'3xl'}>
                {userData.rate}
              </Text>
            </Box>
          </Flex>
        );
      })}
    </Box>
  );
};
export default RankingPage;
