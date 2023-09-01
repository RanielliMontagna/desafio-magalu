import {
  Button,
  Image,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core'

import { FormContainer, LeftSide, LoginContainer, RightSide } from './styles'
import { useLogin } from './useLogin'

import LogoLuizaLabs from 'assets/luizalabs-logo.png'
import { useAuthStore } from 'store/auth/auth'

export default function Login() {
  const { form } = useLogin()
  const { login } = useAuthStore()

  return (
    <LoginContainer>
      <LeftSide>
        <Stack maw={500}>
          <Title order={1}>
            Acesse o projeto técnico <br />
            feito para a <span>Luiza Labs</span>
          </Title>
          <Text>
            O projeto consiste em uma consulta de CEP, onde o usuário pode
            consultar um CEP e receber os dados de rua, bairro, cidade e estado.
          </Text>
        </Stack>
      </LeftSide>
      <RightSide>
        <FormContainer onSubmit={form.onSubmit(login)}>
          <Stack>
            <Image src={LogoLuizaLabs} alt="Login" maw={300} />
          </Stack>
          <TextInput
            withAsterisk
            label="Email"
            placeholder="seu@email.com"
            {...form.getInputProps('email')}
          />
          <PasswordInput
            withAsterisk
            label="Password"
            placeholder="********"
            {...form.getInputProps('password')}
          />
          <Button type="submit" fullWidth>
            Entrar
          </Button>
        </FormContainer>
      </RightSide>
    </LoginContainer>
  )
}
