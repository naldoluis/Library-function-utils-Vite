import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { messages } from '../translate'

i18n.use(LanguageDetector)
    .init({
       debug: false,
       defaultNS: ['translations'],
       resources: messages
    })
export { i18n }