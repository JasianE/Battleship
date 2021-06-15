import Player from '../Components/Factories/Player.js'
import Gameboard from '../Components/Factories/Gameboard.js'

describe('Player Factory Works Properly', () => {
    let player;
    let boardGame;
    beforeEach(() => {
        player = new Player('Derek')
        boardGame = new Gameboard()
        boardGame.place('Derek JEtere', [1,2,3,4,5])
    })
    it('Has Correct Player Name', () => {
        expect(player.playerName).toBe('Derek')
    })
    it('Should Return Correct Info When Miss', () => {
        let key = {
            number: 12,
            placed: false,
            hit: false
        }
        expect(player.attack(boardGame, key)).toBeTruthy()
    })
    it('Should Return Correct Info When Hit :))S)S)S)S)S)S)S)S)', () => {
        let key = {
            number: 21,
            placed: true,
            hit: false
        }
        expect(player.attack(boardGame, key)).toBeTruthy()
    })
})