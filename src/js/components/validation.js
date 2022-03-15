// === VALIDATION ===
import inputmask from "inputmask"

const contactsForm = document.querySelector('.contacts-form')

const contactsEmail = contactsForm.querySelector('[name=email]')
const email = {
  'placeholder': 'nick@example.com',
  'mask': '*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]',
  'hasError': true,
}

const contactsPhone = contactsForm.querySelector('[name=phone]')
const phone = {
  'placeholder': '+44 (000) 000-0000',
  'mask': '+44 (999) 999-9999',
  'hasError': true,
}

const contactsMessage = contactsForm.querySelector('[name=message]')
const message = {
  'limit': 5,
  'hasError': true,
}

const contactsPolitics = contactsForm.querySelector('[name=politics]')
const politics = {
  'hasError': true,
}

const btn = contactsForm.lastElementChild // .contacts-form .btn
btn.disabled = true

const fieldError = 'error' // .form-field error
const fieldAlert = '.form-field__alert'
const fieldScore = '.form-field__score'

// --- masks ---
Inputmask({
  'mask': email.mask,
  'placeholder': email.placeholder,
}).mask(contactsEmail)

Inputmask({
  'mask': phone.mask,
  'placeholder': phone.placeholder,
}).mask(contactsPhone)

// --- alerts ---
const alert = {
  blank: 'Заполните поле',
  element: 'Выберите элемент',
  limit: 'Привышен лимит количества символов',
}

// --- inputs ---
const inputStates = ['blur', 'input']
inputStates.forEach((states) => {
  // --- blank ---
  contactsEmail.addEventListener(states, () => {
    if (validateBlank(contactsEmail.value)) {
      isAlert(contactsEmail, alert.blank)
      email.hasError = true
    } else {
      isSuccess(contactsEmail)
      email.hasError = false
    }
  })

  contactsPhone.addEventListener(states, () => {
    if (validateBlank(contactsPhone.value)) {
      isAlert(contactsPhone, alert.blank)
      phone.hasError = true
    } else {
      isSuccess(contactsPhone)
      phone.hasError = false
    }
  })

  contactsMessage.addEventListener(states, () => {
    if (validateBlank(contactsMessage.value)) {
      isAlert(contactsMessage, alert.blank)
      message.hasError = true
    } else {
      isSuccess(contactsMessage)
      message.hasError = false
    }
  })

  // --- limit ---
  contactsMessage.addEventListener(states, () => {
    addLimitCounter(contactsMessage, message.limit)

    if (contactsMessage.value.length !== 0) {
      if (validateLimit(contactsMessage.value, message.limit)) {
        isAlert(contactsMessage, alert.limit)
        message.hasError = true
      } else {
        isSuccess(contactsMessage)
        message.hasError = false
      }
    }
  })
})

// --- checkbox ---
const checkboxStates = ['load', 'change', 'blur']
checkboxStates.forEach((states) => {
  contactsPolitics.addEventListener(states, () => {
    !contactsPolitics.checked ? politics.hasError = true : politics.hasError = false
  })
})


// --- form ---
const formStates = ['input', 'change']
formStates.forEach((states) => {
  contactsForm.addEventListener(states, () => {
    if (email.hasError || phone.hasError || message.hasError || politics.hasError) {
      btn.disabled = true
    } else {
      btn.disabled = false
    }

    // console.log('email', email.hasError)
    // console.log('phone', phone.hasError)
    // console.log('message', message.hasError)
    // console.log('politics', politics.hasError)
    // console.log('--- --- ---')
  })
})

// --- states ---
function isAlert(el, alert) {
  el.parentElement.classList.add(fieldError)
  el.parentElement.querySelector(fieldAlert).innerText = alert
}

function isSuccess(el) {
  el.parentElement.classList.remove(fieldError)
  el.parentElement.querySelector(fieldAlert).innerText = ''
}

// --- validate ---
function validateBlank(el) {
  return el.length === 0 ? true : false
}

function validateLimit(el, limit) {
  return el.length > limit ? true : false
}

// --- add ---
function addLimitCounter(el, limit) {
  el.parentElement.querySelector(fieldScore).innerText = `${el.value.length} / ${limit}`
}
