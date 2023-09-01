import { Button, Text, TextInput, Title } from '@mantine/core'
import { IconLogout, IconMap2 } from '@tabler/icons-react'

import {
  DashboardContainer,
  DataContainer,
  Form,
  HeaderContainer,
} from './styles'
import { useDashboard } from './useDashboard'

export default function Dashboard() {
  const { form, dadosCep, handleClearCep, handleSearchCep, handleLogout } =
    useDashboard()

  return (
    <DashboardContainer>
      <HeaderContainer>
        <IconMap2 size={100} />
        <Title order={1}>Buscador de CEP</Title>
        <Text>
          Consulte o CEP de qualquer lugar do Brasil de forma rápida e fácil.
        </Text>
        <Button
          variant="light"
          size="sm"
          sx={{ position: 'absolute', top: 16, right: 16 }}
          onClick={handleLogout}
        >
          <IconLogout style={{ marginRight: 4 }} size={16} />
          Sair
        </Button>
      </HeaderContainer>
      <Form onSubmit={form.onSubmit(handleSearchCep)}>
        {dadosCep === null ? (
          <>
            <TextInput
              withAsterisk
              placeholder="95360000"
              label="Informe o CEP"
              size="lg"
              maxLength={8}
              styles={{
                root: { width: '100%', maxWidth: 300 },
              }}
              {...form.getInputProps('cep')}
            />
            <Button type="submit" size="lg" fullWidth maw={300}>
              Buscar
            </Button>
          </>
        ) : (
          <DataContainer>
            <Title order={2}>Resultado da busca:</Title>
            <Text>
              <strong>CEP:</strong> {dadosCep.cep}
            </Text>
            <Text>
              <strong>Cidade:</strong> {dadosCep.cidade}
            </Text>
            <Text>
              <strong>Estado:</strong> {dadosCep.estado}
            </Text>
            <Text>
              <strong>Rua:</strong> {dadosCep.rua || 'Não informado'}
            </Text>
            <Button
              type="submit"
              variant="light"
              size="sm"
              onClick={handleClearCep}
            >
              Fazer nova consulta
            </Button>
          </DataContainer>
        )}
      </Form>
    </DashboardContainer>
  )
}
