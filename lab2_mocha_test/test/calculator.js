var assert = require("assert")
const Calculator = require("../app/calculator")

describe("Calculator", function() {
    it("should return 7 when value is 5 + 2", function() {
        assert.equal(Calculator.add(5, 2), 7)
    })
    it("should return 7 when value is 5 + 2", function() {
        assert.equal(Calculator.add(5, 2), 8)
    })
    it("should return 3 when value is 5 - 2", function() {
        assert.equal(Calculator.sub(5, 2), 3)
    })
    it("should return 3 when value is 5 - 2", function() {
        assert.equal(Calculator.sub(5, 2), 5)
    })
    it("should return 10 when value is 5 * 2", function() {
        assert.equal(Calculator.mul(5, 2), 10)
    })
    it("should return 10 when value is 5 * 2", function() {
        assert.equal(Calculator.mul(5, 2), 12)
    })
    it("should return 5 when value is 10 / 2", function() {
        assert.equal(Calculator.div(10, 2), 5)
    })
    it("should return 5 when value is 10 / 2", function() {
        assert.equal(Calculator.div(10, 2), 2)
    })
})