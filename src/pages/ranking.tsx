import { Box, Circle, Flex, Spacer, Text, Button,} from '@chakra-ui/react';
import { Input, InputGroup,InputRightElement, useOutsideClick} from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons'
import { Ranking } from 'type/ranking';
import useSWR from 'swr';
import React, { useState, useRef, createRef, RefObject } from 'react'

import { fetcher } from 'fetcher';

const RankingPage = () => {
  const { data, error } = useSWR<Ranking[]>('ranking', fetcher);
  const [inputName, setInputName] = useState('')
  const [focusIndex, setFocusIndex] = useState<number | null>(null)
  const dataRefs = useRef<RefObject<HTMLInputElement>[]>([])
  const [isButtonclick, setIsButtonclick] = useState(false)
  if (error) return 'error';
  if (!data) return 'Loading...';
  data.forEach((_, index) => {
    dataRefs.current[index] = createRef<HTMLInputElement>()
  })
  return (
    <Box onClick={() => {
      if (isButtonclick == true) {
        setFocusIndex(null)
        setIsButtonclick(false)
      }}}>
      <InputGroup size='lg' width='95%' bg='white' ml='2.5%' mt='2.5%' borderRadius='50%'>
        <Input
          placeholder='名前を入力してください'
          value={inputName}
          onChange={(e)=>{setInputName(e.target.value)}}
        />
        <InputRightElement width='4.5rem' >
          <Button h='1.75rem' bg='white' size='lg'  onClick={()=>{
            for(var i=0;i<data.length;i++){
              if (inputName == data[i].name){
                dataRefs.current[i].current?.scrollIntoView({behavior:'smooth', block:'center'})
                setFocusIndex(i)
                setIsButtonclick(true)
              }
          }}}>
            <SearchIcon color='#6370EB'/>
          </Button>
        </InputRightElement>
      </InputGroup>
      {data.map((userData, index) => {
        return (
          <Flex key={userData.id} alignItems='center' ref={dataRefs.current[index]} tabIndex={0} borderColor={focusIndex != null && focusIndex == index ?'#6370EB':'black'} borderWidth={3}>
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
