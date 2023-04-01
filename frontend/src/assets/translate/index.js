import { messages as english } from './languages/en'
import { messages as french } from './languages/fr'
import { messages as portuguese } from './languages/pt'
import { messages as spanish } from './languages/es'

const messages = {
    ...english,
    ...french,
    ...portuguese,
    ...spanish
}
export { messages }