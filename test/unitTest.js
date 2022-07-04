/* eslint-disable */
const chai = require('chai');
const expect = chai.expect;
const getSumValues = require('../controller/userController');

describe('getSumValues', function () {
    it("should return correct value",  () => {
        let getData = getSumValues.sumValue(6)
        expect(getData).to.deep.equal(12);
    })
})
