//neste package instanciamos const's com os elementos de cada página da aplicação

//aqui informamos ao cypress que iremos exportar esses elementos para qua possam ser usados em outras files (no caso usamos na index)
export const elemenRegistration={

    mrRadioButtonMale:'input[type="radio"][value="1"]',
    mrRadioButtonFemale:'input[type="radio"][value="2"]',
    firstNameField:('#customer_firstname'),
    passwordField:('#passwd'),
    lastNameField:('#customer_lastname'),
    dayOfBirthField:('#days'),
    mounthOfBirthField:('#months'),
    yearOfBirthField:('#years'),
    companyField:('#company'),
    addressField:('#address1'),
    cityField:('#city'),
    stateField:('#id_state'),
    zipField:('#postcode'),
    additionalInformationField:('#other'),
    homePhoneField:('#phone'),
    mobilePhoneField:('#phone_mobile'),
    registerButton:('#submitAccount > span')

}
