import { Heading, HStack, Text, VStack } from '@gluestack-ui/themed'

export function HistoryCard() {
  return (
    <HStack
      w="$full"
      px="$5"
      py="$4"
      mb="$3"
      bg="$gray600"
      rounded="$md"
      alignItems="center"
      justifyContent="space-between"
    >
      <VStack flex={1} mr="$5">
        <Heading
          color="$white"
          fontSize="$md"
          fontFamily="$heading"
          textTransform="capitalize"
          numberOfLines={1}
        >
          Costas
        </Heading>

        <Text color="$gray100" fontSize="$lg" numberOfLines={1}>
          Puxada frontal
        </Text>
      </VStack>

      <Text color="$gray300" fontSize="$md">
        08:56
      </Text>
    </HStack>
  )
}
