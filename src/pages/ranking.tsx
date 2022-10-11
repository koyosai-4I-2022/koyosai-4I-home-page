import { Box, Flex, Spacer } from '@chakra-ui/react';
import { rankingMockData } from 'mock/ranking';

const RankingPage = () => {
  return (
    <Box>
      {rankingMockData.map(userData => {
        return (
          <Flex>
            <Box>{userData.rank}</Box>
            <Box>{userData.name}</Box>
            <Spacer />
            <Box>{userData.rate}</Box>
          </Flex>
        );
      })}
    </Box>
  );
};
export default RankingPage;
