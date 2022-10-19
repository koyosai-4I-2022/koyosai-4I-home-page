import { Box, Circle, Flex, Spacer, Text, Button,} from '@chakra-ui/react';
import { Input, InputGroup,InputRightElement} from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons'
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
      <InputGroup size='lg' width='95%' bg='white' ml='2.5%' mt='2.5%' borderRadius='50%'>
        <Input
          placeholder='名前を入力してください'
        />
        <InputRightElement width='4.5rem' children={<Button h='1.75rem' bg='white' size='lg'  onClick={()=>{return}}>
          <SearchIcon color='#6370EB'/></Button>}/>
      </InputGroup>
      {data.map(userData => {
        return (
          <Flex key={userData.id} alignItems='center'>
            <Circle bg='#6370EB' size='50px' color='white' m='2%'>
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
            <Box mr='1%'>
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
