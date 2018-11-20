var Mock = require('mockjs');
var lodash = require('lodash');

module.exports = function () {
  return {
    people: lodash.times(100, function (n) {
      return {
        did     : n,
        dname   : Mock.Random.cname(),
        dpwd    : Mock.Random.character(),
        Sex     : Mock.Random.natural(0, 1),
        Age     : Mock.Random.natural(20, 60),
        Level   : Mock.Random.csentence(2, 2),
        Special : Mock.Random.csentence(2, 4),
        Section : Mock.Random.csentence(2, 6),
        dimg    : Mock.Random.image('120x120', Mock.Random.color()),
        hospital: Mock.Random.csentence(4, 10),
        Phone   : Mock.Random.string('number', 11, 11),
        Email   : Mock.Random.string('number', 11, 11),
        local   : Mock.Random.csentence(4, 10),
        dtype   : Mock.Random.csentence(2, 3),
        is_hot  : Mock.Random.boolean()
      };
    })
  };
};