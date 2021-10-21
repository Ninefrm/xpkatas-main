const chai = require("chai");
const assert = chai.assert;
const berlin_clock = require('../berlin_clock.js');

// test('sumar 1 + 2 es igual a 3', () => {
//     expect(berlin_clock(1, 2)).toBe(3);
// });

describe("Tests", () => {
    it("First twelve hours and almost minutes", () => {
        assert.strictEqual(berlin_clock("12:56:01"),
            "O\nRROO\nRROO\nYYRYYRYYRYY\nYOOO");
    });
    it("midnight hours", () => {

        assert.strictEqual(berlin_clock("00:00:00"),
            "Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
    });
    it("pm hours, half minutes", () => {

        assert.strictEqual(berlin_clock("22:32:45"),
            "O\nRRRR\nRROO\nYYRYYROOOOO\nYYOO");
    });
    it("char in hour, half minutes", () => {

        assert.strictEqual(berlin_clock("2A:32:45"),
            false);
    });
    it("len hor", () => {

        assert.strictEqual(berlin_clock("32:45"),
            false);
    });
    it("26:60:60", () => {

        assert.strictEqual(berlin_clock("26:32:45"),
            false);
    });
    it("-23:60:60", () => {

        assert.strictEqual(berlin_clock("26:32:45"),
            false);
    });
});
