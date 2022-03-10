// === VALIDATION ===
import IMask from 'imask'

const contactsForm = document.querySelector('.contacts-form')
const contactsEmail = document.querySelector('.contacts-form__email')
const contactsPhone = document.querySelector('.contacts-form__phone')
const contactsCountry = document.querySelector('.contacts-form__country')
const contactsGender = document.querySelector('.contacts-form__gender')
const contactsMessage = document.querySelector('.contacts-form__message')
const contactsPolitics = document.querySelector('.contacts-form__politics')
const fieldAlert = '.form-field__alert'
const fieldScore = '.form-field__score'

const inputs = {
  email: {
    name: 'input[name=email]',
  },
  phone: {
    name: 'input[name=phone]',
  },
  country: {
    name: 'select[name=country]',
  },
  gender: {
    name: 'input[name=gender]',
  },
  message: {
    name: 'textarea[name=message]',
  },
  politics: {
    name: 'input[name=politics]',
  },
}

const alert = {
  field: 'Заполните поле ввода',
  element: 'Выберите элемент',
  email: 'Проверьте правильность заполнения почты',
  phone: 'Проверьте правильность заполнения телефона',
  textarea: 'Привышен лимит символов'
}

contactsForm.addEventListener('submit', (event) => {
  event.preventDefault()

  validateField(contactsEmail, inputs.email, alert.field)
  validateField(contactsPhone, inputs.phone, alert.field)
  validateField(contactsMessage, inputs.message, alert.field)
  validateField(contactsCountry, inputs.country, alert.element)
  validateElem(contactsGender, inputs.gender, alert.element)
  validateElem(contactsPolitics, inputs.politics, alert.element)
})

validateEmail(contactsEmail, inputs.email, alert.email)
validatePhone(contactsPhone, inputs.phone, alert.phone)
phoneMask(contactsPhone, inputs.phone)
symbolsLimit(contactsMessage, inputs.message, 5, alert.textarea) // UI Kit limit: 140

// --- functions ---
function isError(el, input, error) {
  el.classList.add('error')
  el.querySelector(fieldAlert).textContent = error
  return input.status = 'error'
}

function noError(el, input) {
  el.classList.remove('error')
  el.querySelector(fieldAlert).textContent = ''
  return input.status = ''
}

function validateField(el, input, error) {
  if (el.querySelector(input.name).disabled === false) {
    if (el.querySelector(input.name).value === '') {
      isError(el, input, error)
    } else {
      noError(el, input)
    }
  }
}

function validateElem(el, input, error) {
  if (el.querySelector(input.name).disabled === false) {
    if (el.querySelector(input.name).checked === false) {
      isError(el, input, error)
    } else {
      noError(el, input)
    }
  }
}

function validateEmail(el, input, error) {
  const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  el.addEventListener('input', () => {
    if (el.querySelector(input.name).disabled === false && el.querySelector(input.name).value !== '') {
      if (!el.querySelector(input.name).value.match(regEx)) {
        isError(el, input, error)
      } else {
        noError(el, input)
      }
    }
  })
}

function validatePhone(el, input, error) {
  const regEx = /[^+\d]/g

  el.addEventListener('input', () => {
    if (el.querySelector(input.name).disabled === false && el.querySelector(input.name).value !== '') {
      if (el.querySelector(input.name).value.replace(regEx, '').length !== 13) {
        isError(el, input, error)
      } else {
        noError(el, input)
      }
    }
  })
}

function phoneMask(el, input) {
  el.addEventListener('input', () => {
    const element = el.querySelector(input.name)
    const options = { mask: '+{44} (000) 000-0000' }

    IMask(element, options)
  })
}

function symbolsLimit(el, input, limit = 140, error) {
  el.addEventListener('input', () => {
    const textarea = el.querySelector(input.name)
    const textareaSymbols = textarea.value.length
    const symbolsTable = el.querySelector(fieldScore)

    const colorMandy = '#e35450' // _variables.scss: $color-mandy
    const colorIron = '#e1e1e4' // _variables.scss: $color-iron
    const colorEbonyClay = '#25253e' // _variables.scss: $color-ebony-clay

    symbolsTable.textContent = `${textareaSymbols} / ${limit}`

    if (textareaSymbols > limit) {
      textarea.style.borderColor = colorMandy
      symbolsTable.style.color = colorMandy

      isError(el, input, error)
    } else {
      textarea.style.borderColor = colorIron
      symbolsTable.style.color = colorEbonyClay

      noError(el, input)
    }
  })
}
