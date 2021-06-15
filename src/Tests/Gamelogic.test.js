import Gamelogic from '../Components/Gamelogic'
import Gameboard from '../Components/Factories/Gameboard'
describe('Gamelogic functions properly', () => {
    let mockGame;
    beforeEach(() => {
        mockGame = new Gameboard()
        mockGame.place('Derekship', [1,2])
    })
    it('Should accept accurate attacks', () => {
        expect(Gamelogic(mockGame, 'derekship', 1)).toBeTruthy()
    })
    it('Should not accept bad', () => {
        expect(Gamelogic(mockGame, 'dldldl', 2)).toBeFalsy()
    })
    it('Should iterate until it generates a proper attack', () => {
        for(let i = 3; i < 65; i++){
            mockGame.receiveAttack(i)
        }
        mockGame.receiveAttack(1)
        expect(Gamelogic(mockGame, 'dldldldld', 1)).toBeTruthy()
    })
    
})