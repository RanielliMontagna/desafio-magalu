import { useState } from 'react'

import { useForm } from '@mantine/form'
import { notifications } from '@mantine/notifications'

import type { Cep } from 'api/cep/cep.types'

import { getCep } from 'api/cep/cep'
import { useAppStore } from 'store/app/app'
import { useAuthStore } from 'store/auth/auth'

export function useDashboard() {
  const { setLoading } = useAppStore()
  const { clearStore } = useAuthStore()

  const [dadosCep, setDadosCep] = useState<Cep | null>(null)

  const form = useForm({
    initialValues: {
      cep: '',
    },

    validate: {
      cep: (value) => {
        if (!value) return 'Campo obrigatório'
        if (value.length != 8) return 'CEP inválido'

        return null
      },
    },
  })

  type FormValues = typeof form.values

  async function handleSearchCep({ cep }: FormValues) {
    try {
      setLoading(true)

      const { data } = await getCep(cep)

      if (data) {
        setDadosCep(data)
      }
    } catch (err: any) {
      const message = err.response?.data?.message

      notifications.show({
        title: 'Ocorreu um erro ao buscar o CEP',
        message: message,
        color: 'red',
      })
    } finally {
      setLoading(false)
    }
  }

  function handleLogout() {
    clearStore()
  }

  function handleClearCep() {
    setDadosCep(null)
  }

  return {
    form,
    dadosCep,
    handleLogout,
    handleClearCep,
    handleSearchCep,
  }
}
