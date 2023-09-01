import { useForm } from '@mantine/form'
import { getLocal } from 'helpers/localStorage'

export function useLogin() {
  const form = useForm({
    initialValues: {
      email: getLocal('email') || '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email inválido'),
      password: (value) =>
        value.length >= 3 ? null : 'Senha deve conter pelo menos 3 caracteres',
    },
  })

  return { form }
}
