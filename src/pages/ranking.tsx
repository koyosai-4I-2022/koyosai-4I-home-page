import { Box, Circle, Flex, Spacer, Text } from '@chakra-ui/react';
import { rankingMockData } from 'mock/ranking';
import { Ranking } from 'type/ranking';
import useSWR from 'swr';

import { fetcher } from 'fetcher';

const RankingPage = () => {
  const { data, error } = useSWR<Ranking[]>('ranking', fetcher);
  if (error) return 'error';
  if (!data) return 'Loading...';
  return (
    <Box>
      {data.map(userData => {
        return (
          <Flex key={userData.id} alignItems='center'>
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
