import { object, string } from 'yup'

export const validationChangePassword = object({
  password: string()
    .required('La contraseña es requerida')
    .min(8, 'Mínimo 8 caracteres')
    .max(25, 'Máximo 25 caracteres')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[ !@#$%^&*(),.?":{}|<>])[A-Za-z\d !@#$%^&*(),.?":{}|<>]{8,}$/,
      'Su contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número, un carácter especial, máximo 25 caracteres y mínimo 8 caracteres'
    ),
  confirmPassword: string()
    .required('La contraseña es requerida')
    .min(8, 'Mínimo 8 caracteres')
    .max(25, 'Máximo 25 caracteres')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[ !@#$%^&*(),.?":{}|<>])[A-Za-z\d !@#$%^&*(),.?":{}|<>]{8,}$/,
      'Su contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número, un carácter especial, máximo 25 caracteres y mínimo 8 caracteres'
    )
    .test('confirm_password', 'Las contraseñas no coinciden', function (value) {
      return value === this.parent.password
    })
})

export const validationLogin = object({
  username: string().required('Campo obligatorio'),
  password: string().required('Campo obligatorio')
})
