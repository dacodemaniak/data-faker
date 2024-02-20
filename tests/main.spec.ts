import { Main } from "../src/main"

describe(`Main class`, () => {
    it('Should instantiate the main class', () => {
        let app = new Main()
        expect(app).toBeInstanceOf(Main)
    })
})