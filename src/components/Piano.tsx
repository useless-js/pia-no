import { Flex } from '@chakra-ui/react';
import * as Tone from 'tone';
import Note from './Note';

const Piano = () => {
  const piano = new Tone.PolySynth().toDestination();
  return (
    <Flex>
      <Note 
        piano={piano}
        note="C4"
      />
      <Note 
        piano={piano}
        note="D4"
      />
      <Note 
        piano={piano}
        note="E4"
      />
    </Flex>
  )
}

export default Piano