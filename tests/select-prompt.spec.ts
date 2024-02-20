import { NoChoiceError } from '../src/core/cli/prompts/errors/no-choices.error'
import { Prompt } from '../src/core/cli/prompts/prompt'
import { SelectPrompt } from '../src/core/cli/prompts/select.prompt'
import { ChoicesType } from '../src/core/cli/prompts/types/choices.type'

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
        expect(async () => await selectPrompt.doPrompt()).rejects.toThrow()
    })
})