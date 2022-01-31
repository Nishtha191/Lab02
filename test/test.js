const chai = require('chai')
const expect = chai.expect
const calculator = require('../calculator')

describe('Calculator', () => {
    describe('Add', () => {
        it('add(5,2) expected result 7 PASS', () => {
                expect(calculator.add(5, 2)).to.equal(7)
        })
        it('add(5,2) expected result 8 FAIL', () => {
                expect(calculator.add(5, 2)).to.equal(8)
                expect(calculator.add(456, 455)).to.equal(911)
        })
    })

    describe('Sub', () => {
        it('Sub(5,2) expected result 3 PASS', () => {
            expect(calculator.sub(5, 2)).to.equal(3)
        })
        it('Sub(5,2) expected result 5 FAIL', () => {
            expect(calculator.sub(5, 2)).to.equal(5)
            expect(calculator.sub(678, 890)).to.equal(-212)
        })
    })

    describe('Mul', () => {
        it('Mul(5,2) expected result 10 PASS', () => {
            expect(calculator.mul(5, 2)).to.equal(10)
        })
        it('Mul(5,2) expected result 12 FAIL', () => {
            expect(calculator.mul(5, 2)).to.equal(12)
            expect(calculator.mul(5, 0)).to.equal(0)
        })
    })

    describe('Div', () => {
        it('Div(10,2) expected result 5 PASS', () => {
            expect(calculator.div(10, 2)).to.equal(5)
        })
        it('Div(10,2) expected result 2 FAIL', () => {
            expect(calculator.div(10, 2)).to.equal(2)
            expect(calculator.div(66, 11)).to.equal(6)
        })
    })
})
