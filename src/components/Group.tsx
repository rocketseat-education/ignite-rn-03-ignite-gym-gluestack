import { Button, Text } from '@gluestack-ui/themed'
import { ComponentProps } from 'react'

type Props = ComponentProps<typeof Button> & {
  name: string
  isActive: boolean
}

export function Group({ name, isActive, ...props }: Props) {
  return (
    <Button
      mr="$3"
      minWidth="$24"
      h="$10"
      bg="$gray600"
      rounded="$md"
      justifyContent="center"
      alignItems="center"
      borderColor="$green500"
      borderWidth={isActive ? 1 : 0}
      sx={{
        ':active': {
          borderWidth: 1,
        },
      }}
      {...props}
    >
      <Text
        color={isActive ? '$green500' : '$gray200'}
        textTransform="uppercase"
        fontSize="$xs"
        fontFamily="$heading"
      >
        {name}
      </Text>
    </Button>
  )
}
