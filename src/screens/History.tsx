import { HistoryCard } from '@components/HistoryCard'
import { ScreenHeader } from '@components/ScreenHeader'
import { VStack } from '@gluestack-ui/themed'

export function History() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico" />
      <HistoryCard />
    </VStack>
  )
}
