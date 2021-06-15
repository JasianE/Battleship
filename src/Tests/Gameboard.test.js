import Gameboard from '../Components/Factories/Gameboard'

describe('GameBoards Functions Properly', () => {
    let Boards;
    beforeEach(() => {
        Boards = new Gameboard()
    })
    it('Has correct number of elements in array', () => {
        expect(Boards.elements.length).toBe(64)
    })
    it('Should Check Which Tiles Are Empty', () => {
        expect(Boards.occupied).toStrictEqual([])
    })
    it('Should Check Which Tiles Are Occupied', () => {
        Boards.place('Speedboat', [0,1])
        expect(Boards.occupied).toStrictEqual([0,1])
    })
    it('Should Throw Error If more title is already occupied', () => {
        Boards.place('Speedboat', [0,1])
        expect(Boards.place('Jim', [0,1])).toBeFalsy()
    })
    it('Should Not Allow Ships to cross border', () => {
        expect(Boards.place('bruh', [7,8,9])).toBeFalsy()
    })
    it('Should validte hits', () => {
        Boards.place('Sped', [0,1])
        expect(Boards.receiveAttack(0)).toBeTruthy()
    })
    it('Should not validate incorrect hits', () => {
        Boards.place('Sped', [0,1])
        expect(Boards.receiveAttack(2)).toBeFalsy()
    })
    it('Should send hit info to correct ship', () => {
        Boards.place('Speed', [0,1])
        Boards.place('Sped', [3,4])
        Boards.receiveAttack(0)
        Boards.receiveAttack(3)
        expect(Boards.hits).toStrictEqual([
            {
                Speed: [0]
            },
            {
                Sped: [3]
            }
        ])
    })
    it('Should Keep Track Of Missed Attacks', () => {
        Boards.receiveAttack(21)
        Boards.receiveAttack(23)
        expect(Boards.misses).toStrictEqual([21, 23])
    })
    it('Should Say If All Ships Are Sunk', () => {
        Boards.place('Speed', [0,1])
        Boards.receiveAttack(0)
        Boards.receiveAttack(1)
        expect(Boards.isDone()).toBeTruthy()
    })
    it('Should not say yes', () => {
        Boards.place('Speed', [0,1])
        Boards.receiveAttack(0)
        expect(Boards.isDone()).toBeFalsy()
    })
})