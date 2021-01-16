class Encryption {
  constructor(options, string) {
    if (options == "decode") {
      return this.decode(string);
    } else if (options == "encode") {
      return this.encode(string);
    }
  }
  decode(fileContents) {
    this.tokens = [];
    this.fileContents = fileContents.split("");
    for (let char = 0; char < this.fileContents.length; char++) {
      this.tok = this.fileContents[char];
      this.tok2 = this.fileContents[char + 1];
      //space
      if (
        this.tok == "ú" ||
        this.tok == "¼" ||
        this.tok == "±" ||
        this.tok == "≥" ||
        this.tok == "╤" ||
        this.tok == "←" ||
        this.tok == "Ø" ||
        this.tok == "¹" ||
        this.tok == "Ž" ||
        this.tok == "ð"
      ) {
        this.tokens.push(" ");
        this.tok = "";
      }
      //a
      if (
        (this.tok == "q" && this.tok2 == " ") ||
        this.tok == "=" ||
        this.tok == "[" ||
        this.tok == "Q"
      ) {
        this.tokens.push("a");
        this.tok = "";
      }
      //b
      else if (this.tok == "d" || this.tok == "W" || this.tok == "!") {
        this.tokens.push("b");
        this.tok = "";
      }
      //c
      else if (
        this.tok == "z" ||
        this.tok == "E" ||
        this.tok == "0" ||
        this.tok == "{"
      ) {
        this.tokens.push("c");
        this.tok = "";
      }
      //d
      else if (
        this.tok == "c" ||
        this.tok == "R" ||
        this.tok == "-" ||
        this.tok == "'"
      ) {
        this.tokens.push("d");
        this.tok = "";
      }
      //e
      else if (
        this.tok == "x" ||
        this.tok == "T" ||
        this.tok == ")" ||
        this.tok == ";"
      ) {
        this.tokens.push("e");
        this.tok = "";
      }
      //f
      else if (this.tok == "s" || this.tok == "U" || this.tok == "3") {
        this.tokens.push("f");
        this.tok = "";
      }
      //g
      else if (
        this.tok == "╒" ||
        this.tok == "╧" ||
        this.tok == "█" ||
        this.tok == "º"
      ) {
        this.tokens.push("g");
        this.tok = "";
      }
      //h
      else if (this.tok == "m" || this.tok == "I" || this.tok == "@") {
        this.tokens.push("h");
        this.tok = "";
      }
      //i
      else if (this.tok == "b" || this.tok == "p" || this.tok == "9") {
        this.tokens.push("i");
        this.tok = "";
      }
      //j
      else if (this.tok == "a" || this.tok == "Q" || this.tok == "(") {
        this.tokens.push("j");
        this.tok = "";
      }
      //k
      else if (this.tok == "w" || this.tok == "_" || this.tok == "]") {
        this.tokens.push("k");
        this.tok = "";
      }
      //l
      else if (this.tok == "§" || this.tok == "²" || this.tok == "↓") {
        this.tokens.push("l");
        this.tok = "";
      }
      //m
      else if (this.tok == "f" || this.tok == "#" || this.tok == ",") {
        this.tokens.push("m");
        this.tok = "";
      }
      //n
      else if (this.tok == "g" || this.tok == "8" || this.tok == "|") {
        this.tokens.push("n");
        this.tok = "";
      }
      //o
      else if (this.tok == "e" || this.tok == "+" || this.tok == ":") {
        this.tokens.push("o");
        this.tok = "";
      }
      //p
      else if (this.tok == "l" || this.tok == "%" || this.tok == "}") {
        this.tokens.push("p");
        this.tok = "";
      }
      //q
      else if (this.tok == "▒" || this.tok == "Ä") {
        this.tokens.push("q");
        this.tok = "";
      }
      //r
      else if (this.tok == "o" || this.tok == "7" || this.tok == ".") {
        this.tokens.push("r");
        this.tok = "";
      }
      //s
      else if (this.tok == "k" || this.tok == "$" || this.tok == "<") {
        this.tokens.push("s");
        this.tok = "";
      }
      //t
      else if (this.tok == "j" || this.tok == "N" || this.tok == "&") {
        this.tokens.push("t");
        this.tok = "";
      }
      //u
      else if (
        this.tok == "r" ||
        this.tok == "M" ||
        this.tok == "4" ||
        this.tok == "/"
      ) {
        this.tokens.push("u");
        this.tok = "";
      }
      //v
      else if (this.tok == "h" || this.tok == "V" || this.tok == "6") {
        this.tokens.push("v");
        this.tok = "";
      }
      //w
      else if (
        this.tok == "i" ||
        this.tok == "B" ||
        this.tok == "*" ||
        this.tok == ">"
      ) {
        this.tokens.push("w");
        this.tok = "";
      }
      //x
      else if (
        (this.tok == "t" && this.tok2 == " ") ||
        this.tok == "C" ||
        this.tok == "5" ||
        this.tok == "?"
      ) {
        this.tokens.push("x");
        this.tok = "";
        this.tok2 = "";
      }
      //y
      else if (this.tok == "u" || this.tok == "X" || this.tok == "^") {
        this.tokens.push("y");
        this.tok = "";
      }
      //z
      else if (this.tok == "y" || this.tok == "Z" || this.tok == "`") {
        this.tokens.push("z");
        this.tok = "";
      }
    }
    return this.tokens;
  }
  encode(b) {
    this.tokens = [];
    b = b.toLowerCase().split("");
    for (let i = 0; i < b.length; i++) {
      this.tok = b[i];
      if (this.tok == " ") {
        this.rand = this.random(10) + 1;
        if (this.rand == 1) this.tokens.push("ú");
        if (this.rand == 2) this.tokens.push("¼");
        if (this.rand == 3) this.tokens.push("±");
        if (this.rand == 4) this.tokens.push("≥");
        if (this.rand == 5) this.tokens.push("╤");
        if (this.rand == 6) this.tokens.push("←");
        if (this.rand == 7) this.tokens.push("Ø");
        if (this.rand == 8) this.tokens.push("¹");
        if (this.rand == 9) this.tokens.push("Ž");
        if (this.rand == 10) this.tokens.push("ð");
      }
      if (this.tok == "a") {
        this.rand = this.random(4) + 1;
        if (this.rand == 1) this.tokens.push("q ");
        if (this.rand == 2) this.tokens.push("=");
        if (this.rand == 3) this.tokens.push("[");
        if (this.rand == 4) this.tokens.push("Q");
        this.tok = "";
      }
      if (this.tok == "a") {
        this.rand = this.random(3) + 1;
        if (this.rand == 1) this.tokens.push("q");
        if (this.rand == 2) this.tokens.push("=");
        if (this.rand == 3) this.tokens.push("[");
        this.tok = "";
      }
      if (this.tok == "b") {
        this.rand = this.random(3) + 1;
        if (this.rand == 1) this.tokens.push("d");
        if (this.rand == 2) this.tokens.push("W");
        if (this.rand == 3) this.tokens.push("!");
        this.tok = "";
      }
      if (this.tok == "c") {
        this.rand = this.random(4) + 1;
        if (this.rand == 1) this.tokens.push("z");
        if (this.rand == 2) this.tokens.push("E");
        if (this.rand == 3) this.tokens.push("0");
        if (this.rand == 4) this.tokens.push("{");
        this.tok = "";
      }
      if (this.tok == "d") {
        this.rand = this.random(4) + 1;
        if (this.rand == 1) this.tokens.push("c");
        if (this.rand == 2) this.tokens.push("R");
        if (this.rand == 3) this.tokens.push("-");
        if (this.rand == 4) this.tokens.push("'");
        this.tok = "";
      }
      if (this.tok == "e") {
        this.rand = this.random(4) + 1;
        if (this.rand == 1) this.tokens.push("x ");
        if (this.rand == 2) this.tokens.push("T");
        if (this.rand == 3) this.tokens.push(")");
        if (this.rand == 4) this.tokens.push(";");
        this.tok = "";
      }
      if (this.tok == "f") {
        //this.tok == 's' || this.tok == 'U' || this.tok == '3'
        this.rand = this.random(3) + 1;
        if (this.rand == 1) this.tokens.push("s");
        if (this.rand == 2) this.tokens.push("U");
        if (this.rand == 3) this.tokens.push("3");
        this.tok = "";
      }
      if (this.tok == "g") {
        //this.tok == '╒' || this.tok == '╧' || this.tok == '█' || this.tok == 'º'
        this.rand = this.random(4) + 1;
        if (this.rand == 1) this.tokens.push("╒");
        if (this.rand == 2) this.tokens.push("╧");
        if (this.rand == 3) this.tokens.push("█");
        if (this.rand == 4) this.tokens.push("º");
        this.tok = "";
      }
      if (this.tok == "h") {
        this.rand = this.random(3) + 1;
        if (this.rand == 1) this.tokens.push("m");
        if (this.rand == 2) this.tokens.push("I");
        if (this.rand == 3) this.tokens.push("@");
        this.tok = "";
      }
      if (this.tok == "i") {
        this.rand = this.random(3) + 1;
        if (this.rand == 1) this.tokens.push("b");
        if (this.rand == 2) this.tokens.push("p");
        if (this.rand == 3) this.tokens.push("9");
        this.tok = "";
      }
      if (this.tok == "j") {
        this.rand = this.random(3) + 1;
        if (this.rand == 1) this.tokens.push("a");
        if (this.rand == 2) this.tokens.push("O");
        if (this.rand == 3) this.tokens.push("(");
        this.tok = "";
      }
      if (this.tok == "k") {
        this.rand = this.random(3) + 1;
        if (this.rand == 1) this.tokens.push("w");
        if (this.rand == 2) this.tokens.push("_");
        if (this.rand == 3) this.tokens.push("]");
        this.tok = "";
      }
      if (this.tok == "l") {
        this.rand = this.random(3) + 1;
        if (this.rand == 1) this.tokens.push("§");
        if (this.rand == 2) this.tokens.push("²");
        if (this.rand == 3) this.tokens.push("↓");
        this.tok = "";
      }
      if (this.tok == "m") {
        this.rand = this.random(3) + 1;
        if (this.rand == 1) this.tokens.push("f");
        if (this.rand == 2) this.tokens.push("#");
        if (this.rand == 3) this.tokens.push(",");
        this.tok = "";
      }
      if (this.tok == "n") {
        this.rand = this.random(3) + 1;
        if (this.rand == 1) this.tokens.push("g");
        if (this.rand == 2) this.tokens.push("8");
        if (this.rand == 3) this.tokens.push("|");
        this.tok = "";
      }
      if (this.tok == "o") {
        this.rand = this.random(3) + 1;
        if (this.rand == 1) this.tokens.push("e");
        if (this.rand == 2) this.tokens.push("+");
        if (this.rand == 3) this.tokens.push(":");
        this.tok = "";
      }
      if (this.tok == "p") {
        this.rand = this.random(3) + 1;
        if (this.rand == 1) this.tokens.push("l");
        if (this.rand == 2) this.tokens.push("%");
        if (this.rand == 3) this.tokens.push("}");
        this.tok = "";
      }
      if (this.tok == "q") {
        //this.tok == '▒' || this.tok == 'Ä'
        this.rand = this.random(2) + 1;
        if (this.rand == 1) this.tokens.push("▒");
        if (this.rand == 2) this.tokens.push("Ä");
        this.tok = "";
      }
      if (this.tok == "r") {
        this.rand = this.random(3) + 1;
        if (this.rand == 1) this.tokens.push("o");
        if (this.rand == 2) this.tokens.push("7");
        if (this.rand == 3) this.tokens.push(".");
        this.tok = "";
      }
      if (this.tok == "s") {
        this.rand = this.random(3) + 1;
        if (this.rand == 1) this.tokens.push("k");
        if (this.rand == 2) this.tokens.push("$");
        if (this.rand == 3) this.tokens.push("<");
        this.tok = "";
      }
      if (this.tok == "t") {
        this.rand = this.random(3) + 1;
        if (this.rand == 1) this.tokens.push("j");
        if (this.rand == 2) this.tokens.push("N");
        if (this.rand == 3) this.tokens.push("&");
        this.tok = "";
      }
      if (this.tok == "u") {
        this.rand = this.random(4) + 1;
        if (this.rand == 1) this.tokens.push("r");
        if (this.rand == 2) this.tokens.push("M");
        if (this.rand == 3) this.tokens.push("4");
        if (this.rand == 4) this.tokens.push("/");
        this.tok = "";
      }
      if (this.tok == "v") {
        this.rand = this.random(3) + 1;
        if (this.rand == 1) this.tokens.push("h");
        if (this.rand == 2) this.tokens.push("V");
        if (this.rand == 3) this.tokens.push("6");
        this.tok = "";
      }
      if (this.tok == "w") {
        this.rand = this.random(4) + 1;
        if (this.rand == 1) this.tokens.push("i");
        if (this.rand == 2) this.tokens.push("B");
        if (this.rand == 3) this.tokens.push("*");
        if (this.rand == 4) this.tokens.push(">");
        this.tok = "";
      }
      if (this.tok == "x") {
        this.rand = this.random(4) + 1;
        if (this.rand == 1) this.tokens.push("t ");
        if (this.rand == 2) this.tokens.push("C");
        if (this.rand == 3) this.tokens.push("5");
        if (this.rand == 4) this.tokens.push("?");
        this.tok = "";
      }
      if (this.tok == "y") {
        this.rand = this.random(3) + 1;
        if (this.rand == 1) this.tokens.push("u");
        if (this.rand == 2) this.tokens.push("X");
        if (this.rand == 3) this.tokens.push("^");
        this.tok = "";
      }
      if (this.tok == "z") {
        this.rand = this.random(3) + 1;
        if (this.rand == 1) this.tokens.push("y");
        if (this.rand == 2) this.tokens.push("Z");
        if (this.rand == 3) this.tokens.push("\\`");
        this.tok = "";
      }
    }
    this.final = this.tokens;
    return this.final;
  }
  random(input) {
    return ~~(Math.random() * input);
  }
}

module.exports = Encryption;
