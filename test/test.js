// Import modules
const assert = require('assert')


///////////////////////////basic test///////////////////////////////////////////////

let addition = (x, y) => x + y

let cutStr = (str, limit) => {
  return str.substring(0, limit);
}

let modulo = (x, y) => {
  return 100 * x/y
}

let limitStr = (str, limit) => str.substring(0, limit);

const obj = {
  name: "Bruno",
  users: ["Bruno", "Andre", "Philippe"],
  age :32
}

describe('Test de test', function () {
  it('Should do some cool stuff', function () {
    var a = 3;
    assert.equal(a * 2, 6)
  })

  it('Check if obj.name is String', function () {
    assert.equal(typeof obj.name, typeof "")
  })

  it('Test addition', function () {
    assert.equal(addition(3, 3), 6)
  })

  it('Test percentage', function () {
    assert.equal(modulo(25, 100), 25)
  })

  it('Test substring', function () {
    assert(cutStr('Bruno', 5).length <= 5)
  })
})

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
///////////////////////////////////////////////////////////////////////////////////
