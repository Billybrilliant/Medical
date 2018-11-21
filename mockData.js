var Mock = require('mockjs');
var lodash = require('lodash');

module.exports = function() {
  return {
    doctor: lodash.times(3, function(n) {
      return {
        did     : n,
        dname   : Mock.Random.cname(),
        dpwd    : Mock.Random.character(),
        Sex     : Mock.Random.natural(0, 1),
        Age     : Mock.Random.natural(20, 60),
        Level   : Mock.Random.csentence(2, 2),
        Special : Mock.Random.csentence(2, 4),
        section : Mock.Random.csentence(2, 6),
        dimg    : Mock.Random.image('120x120', Mock.Random.color()),
        hospital: Mock.Random.csentence(4, 10),
        Phone   : Mock.Random.string('number', 11, 11),
        Email   : Mock.Random.string('number', 11, 11),
        local   : Mock.Random.csentence(4, 10),
        dtype   : Mock.Random.csentence(2, 3)
      };
    }),
    news: lodash.times(10, function(n) {
      return {
        cid   : n,
        ctitle: Mock.Random.csentence(10, 50),
        cimge : Mock.Random.image('120x120', Mock.Random.color())
      };
    })
  };
};
