import { Heading, HStack, Text, VStack } from '@gluestack-ui/themed'

export function HomeHeader() {
  return (
    <HStack>
      <VStack>
        <Text color="$gray100" fontSize="$sm">
          Olá
        </Text>
        <Heading color="$gray100" fontSize="$md">
          Arthur Rios
        </Heading>
      </VStack>
    </HStack>
  )
}
