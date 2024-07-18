import { Group } from '@components/Group'
import { HomeHeader } from '@components/HomeHeader'
import { HStack, VStack } from '@gluestack-ui/themed'
import { useState } from 'react'

export function Home() {
  const [groupSelected, setGroupSelected] = useState('costas')

  return (
    <VStack flex={1}>
      <HomeHeader />

      <HStack>
        <Group
          name="Costas"
          isActive={groupSelected === 'costas'}
          onPress={() => setGroupSelected('costas')}
        />

        <Group
          name="Ombro"
          isActive={groupSelected === 'ombro'}
          onPress={() => setGroupSelected('ombro')}
        />
      </HStack>
    </VStack>
  )
}
