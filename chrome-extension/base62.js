
var Base62 = (function (my) {
  my.chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  my.encode = function(hex) {
    var value = BigInteger.parse(hex, 16);
    console.log(value);
    var result = '';
    while (value.toString() != "0") {
        var rem = value.remainder(62);
        value = value.divide(62)
        result += this.chars[rem.toJSValue()]
    }
    return result.split("").reverse().join("");
  };

  return my;
}({}));
