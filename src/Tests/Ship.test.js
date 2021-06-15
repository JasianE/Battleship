import Ship from '../Components/Factories/Ship.js'

describe('Ship Functions Work Properly', () => {
    let ship;
    let sub;
    let scope;
    beforeEach(() => {
        ship = new Ship('Speedboat', [0, 1])
        sub = new Ship('Submarine', [2,3])
        scope = new Ship('Im worried about scope', [5,4])
    })
    it('Creates a ship with name and length', () => {
        expect(ship.name).toBe('Speedboat')
    })
    it('Acknowledges Correct Hits', () => {
        ship.hit(0)
        expect(ship.hits).toStrictEqual([0])
    })
    it('Does not register incorrect hits', () => {
        sub.hit(23)
        expect(sub.hits).toStrictEqual([])
    })
    it('Knows when its sunk', () => {
        scope.hit(5)
        scope.hit(4)
        expect(scope.isSunk()).toBeTruthy()
    })
    it('Knows when its not sunk', () => {
        expect(sub.isSunk()).toBeFalsy()
    })

})
