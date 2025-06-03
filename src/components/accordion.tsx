import { Box } from './box'
import { Text } from './text'

interface IAccordionProps {
  title: string
  description: string
}

export function Accordion({ title, description }: IAccordionProps) {
  return (
    <Box>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </Box>
  )
}
