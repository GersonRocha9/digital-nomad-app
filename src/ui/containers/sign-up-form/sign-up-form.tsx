import { Box } from '../../components/box'
import { Button } from '../../components/button'

interface SignUpFormProps {
  onSubmit: () => void
}

export function SignUpForm({ onSubmit }: SignUpFormProps) {
  return (
    <Box>
      <Button title="Criar conta" onPress={onSubmit} />
    </Box>
  )
}
