import { Box, Circle, Flex, Spacer, Text, Button,} from '@chakra-ui/react';
import { Input, InputGroup,InputRightElement} from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons'
import { Ranking } from 'type/ranking';
import useSWR from 'swr';
import React, { useState, useRef } from 'react'

import { fetcher } from 'fetcher';

const RankingPage = () => {
  const { data, error } = useSWR<Ranking[]>('ranking', fetcher);
  const [inputName, setInputName] = useState('')
  const refs = useRef(new Array<HTMLDivElement>(data && data.length as number))
  if (error) return 'error';
  if (!data) return 'Loading...';
  return (
    <Box>
      <InputGroup size='lg' width='95%' bg='white' ml='2.5%' mt='2.5%' borderRadius='50%'>
        <Input
          placeholder='名前を入力してください'
          value={inputName}
          onChange={(e)=>{setInputName(e.target.value)}}
        />
        <InputRightElement width='4.5rem' >
          <Button h='1.75rem' bg='white' size='lg'  onClick={()=>{console.log(inputName)}}>
            <SearchIcon color='#6370EB'/>
          </Button>
        </InputRightElement>
      </InputGroup>
      {data.map((userData, index) => {
        return (
          <Flex key={userData.id} alignItems='center' ref={refs.current[index]}>
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
