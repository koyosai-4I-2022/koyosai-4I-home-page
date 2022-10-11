import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import { rankingMockData } from 'mock/ranking';

const RankingPage = () => {
  return (
    <Box>
      {rankingMockData.map(userData => {
        return (
          <Flex key={userData.id}>
            <Box>
              <Text>{userData.rank}</Text>
            </Box>
            <Box>
              <Text>{userData.name}</Text>
            </Box>
            <Spacer />
            <Box>
              <Text>{userData.rate}</Text>
            </Box>
          </Flex>
        );
      })}
    </Box>
  );
};
export default RankingPage;
