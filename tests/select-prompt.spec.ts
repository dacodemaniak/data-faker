import { NoChoiceError } from './../src/cli/prompts/errors/no-choices.error'
import { Prompt } from './../src/cli/prompts/prompt'
import { SelectPrompt } from './../src/cli/prompts/select.prompt'
import { ChoicesType } from './../src/cli/prompts/types/choices.type'

describe(`SelectPrompt class`, () => {
    let choices: Array<ChoicesType> = [
        {
            name: 'SQL',
            value: 'SQL'
        },
        {
            name: 'JSON',
            value: 'JSON'
        }
    ]

    it(`Should instanciate a SelectPrompt class`, () => {
        const selectPrompt = new SelectPrompt()
        expect(selectPrompt).toBeInstanceOf(SelectPrompt)
        expect(selectPrompt).toBeInstanceOf(Prompt)
    })

    it(`Should raised a NoChoicesError if prompt without Choices`, () => {
        const selectPrompt = new SelectPrompt()
        expect(() => selectPrompt.doPrompt()).toThrow()
    })
})