module.exports = {
  errorGeneral: {
    required: 'Requerido',
    verySmallField: 'El campo es muy pequeño',
    code: 'El código postal debe de ser de 5 dígitos'
  },
  errorFormLogin: {
    email: 'Correo electrónico no valido',
    password:
        'La contraseña debe tener 8 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un carácter (-_$!@#%^&*?/.) no alfanumérico.',
    passwordNotMatch: 'Las contraseña no coinciden',
    registeredMail: 'El correo no esta registrado',
    emailNotConfirmed: 'Aun no se confirma el correo electrónico',
    phoneNotConfirmed: 'Aun no se confirma el Teléfono',
    errorPassword: 'El correo electrónico o la contraseña están mal escritos.'
  },
  errorFormRegister: {
    phone: 'El número telefónico debe de tener 10 números',
    zipCode: 'Código postal no valido',
    birthDayLimit: 'La edad minima debe de ser 12 años'
  },
  errorFormCompanies: {
    number: 'Este campo debe contener solo números'
  }
}
