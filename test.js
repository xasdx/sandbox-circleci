let test = require("ava")
let underTest = require(".")

test("operates with database", t => {
  let results = underTest.operate()
  t.is(results[1].name, "doge")
})
