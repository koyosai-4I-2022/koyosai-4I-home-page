import { Box, Circle, Flex, Spacer, Text, Button } from '@chakra-ui/react';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { ArrowUpIcon, SearchIcon } from '@chakra-ui/icons';
import { Ranking } from 'type/ranking';
import useSWR from 'swr';
import React, { useState, useRef, createRef, RefObject } from 'react';
import { Layout } from 'components/layouts/Layout';

import { Skeleton, SkeletonCircle } from '@chakra-ui/react';
import { fetcher } from 'fetcher';

const RankingPage = () => {
  const { data, error } = useSWR<Ranking[]>('ranking', fetcher);
  const [inputName, setInputName] = useState('');
  const [focusIndex, setFocusIndex] = useState<number | null>(null);
  const dataRefs = useRef<RefObject<HTMLInputElement>[]>([]);
  const [isButtonclick, setIsButtonclick] = useState(false);
  if (error) return 'error';
  if (!data) {
    return (
      <Layout>
        <Box>
          <InputGroup
            size='lg'
            width='95%'
            bg='white'
            ml='2.5%'
            mt='2.5%'
            borderRadius='50%'
          >
            <Input placeholder='名前を入力してください' />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' bg='white' size='lg'>
                <SearchIcon color='#6370EB' />
              </Button>
            </InputRightElement>
          </InputGroup>
          {[...Array(10)].map((_, i) => {
            return (
              <Flex key={i} alignItems='center'>
                <SkeletonCircle
                  size='50px'
                  m='2%'
                  startColor='white.500'
                  endColor='gray.500'
                >
                  <Circle size='50px' m='2%'>
                    <Text as='b' fontSize={'3xl'}>
                      1
                    </Text>
                  </Circle>
                </SkeletonCircle>
                <Box>
                  <Skeleton startColor='white.500' endColor='gray.500'>
                    <Text as='b' fontSize={'3xl'}>
                      PLMWA
                    </Text>
                  </Skeleton>
                </Box>
                <Spacer />
                <Box mr='1%'>
                  <Skeleton startColor='white.500' endColor='gray.500'>
                    <Text as='b' fontSize={'3xl'}>
                      100
                    </Text>
                  </Skeleton>
                </Box>
              </Flex>
            );
          })}
        </Box>
      </Layout>
    );
  }
  data.forEach((_, index) => {
    dataRefs.current[index] = createRef<HTMLInputElement>();
  });
  return (
    <Layout>
      <Box
        onClick={() => {
          if (isButtonclick == true) {
            setFocusIndex(null);
            setIsButtonclick(false);
          }
        }}
        position='relative'
      >
        <InputGroup
          size='lg'
          width='95%'
          bg='white'
          ml='2.5%'
          mt='2.5%'
          borderRadius='50%'
        >
          <Input
            placeholder='名前を入力してください'
            value={inputName}
            onChange={e => {
              setInputName(e.target.value);
            }}
            onKeyPress={e => {
              if (e.key == 'Enter') {
                const i = data.findIndex(r => inputName == r.name);
                if (i != -1) {
                  dataRefs.current[i].current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  });
                  setFocusIndex(i);
                  setIsButtonclick(true);
                }
              }
            }}
          />
          <InputRightElement width='4.5rem'>
            <Button
              h='1.75rem'
              bg='white'
              size='lg'
              onClick={() => {
                const i = data.findIndex(r => inputName == r.name);
                if (i != -1) {
                  dataRefs.current[i].current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  });
                  setFocusIndex(i);
                  setIsButtonclick(true);
                }
              }}
            >
              <SearchIcon color='#42B2DF' />
            </Button>
          </InputRightElement>
        </InputGroup>
        {data.map((userData, index) => {
          return (
            <Flex
              key={userData.id}
              alignItems='center'
              ref={dataRefs.current[index]}
              tabIndex={0}
              borderColor={
                focusIndex != null && focusIndex == index ? '#42B2DF' : 'black'
              }
              borderWidth={3}
            >
              <Circle bg='#42B2DF' size='50px' color='white' m='2%'>
                <Text as='b' fontSize={'3xl'}>
                  {userData.rank}
                </Text>
              </Circle>
              <Box
                overflow='hidden'
                whiteSpace={'nowrap'}
                textOverflow='ellipsis'
              >
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
        <Circle
          position={'fixed'}
          bg='#42B2DF'
          size='50'
          bottom={100}
          right={10}
          cursor='pointer'
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <ArrowUpIcon color='white' fontSize={30} />
        </Circle>
      </Box>
    </Layout>
  );
};
export default RankingPage;
