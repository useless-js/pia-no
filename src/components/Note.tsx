import { Flex } from "@chakra-ui/react";
import * as Tone from 'tone';

interface INoteProps {
  note: string;
  color?: 'black' | 'white';
  piano: Tone.PolySynth<Tone.Synth<Tone.SynthOptions>>
}
const Note = ({
  note,
  piano,
  color = 'white'
}: INoteProps) => {
  const handleMouseDown = () => {
    piano.triggerAttack(note)
  }

  const handleMouseUp = () => {
    piano.triggerRelease(note)
  }

  return (
    <Flex
      h={'400px'}
      w={'75px'}
      border={'1px solid black'}
      borderBottomRadius={8}
      p='4'
      justifyContent={'center'}
      alignItems={'end'}
      bg={color}
      color={color === 'black' ? 'white' : 'black'}
      cursor={'pointer'}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {note}
    </Flex>
  )
}

export default Note;