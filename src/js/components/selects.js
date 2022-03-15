// === DROPDOWN ===
import Choices from 'choices.js'
import 'choices.js/public/assets/styles/choices.min.css'

// --- country ---
const country = document.querySelectorAll('[name=country]')

if (country) {
  country.forEach((el) => {
    const customSelectCountry = new Choices(el, {
      allowHTML: true,
      searchEnabled: false,
      itemSelectText: '',
      classNames: {
        containerOuter: 'custom-select',
        containerInner: 'custom-select__inner',
        input: 'custom-select__input',
        list: 'custom-select__list',
        listItems: 'custom-select__list--multiple',
        listSingle: 'custom-select__list--single',
        listDropdown: 'custom-select__list--dropdown',
        item: 'custom-select__item',
        itemSelectable: 'custom-select__item--selectable',
        itemDisabled: 'custom-select__item--disabled',
        itemChoice: 'custom-select__item--choice',
      },
      choices: [
        { id: 1, value: 'united_kingdom', label: 'United Kingdom' },
        { id: 2, value: 'united_states', label: 'United States' },
        { id: 3, value: 'russia', label: 'Russia' },
        { id: 4, value: 'ukraine', label: 'Ukraine' },
      ]
    })
  })
}

// --- language ---
const language = document.querySelector('[name=language]')

if (country) {
  const customSelectLanguage = new Choices(language, {
    allowHTML: true,
    searchEnabled: false,
    itemSelectText: '',
    classNames: {
      containerOuter: 'language',
      containerInner: 'language__inner',
      input: 'language__input',
      list: 'language__list',
      listItems: 'language__list--multiple',
      listSingle: 'language__list--single',
      listDropdown: 'language__list--dropdown',
      item: 'language__item',
      itemSelectable: 'language__item--selectable',
      itemDisabled: 'language__item--disabled',
      itemChoice: 'language__item--choice',
    },
    choices: [
      { id: 1, value: 'russian', label: 'Russian' },
      { id: 2, value: 'english', label: 'English' },
    ]
  })
}
