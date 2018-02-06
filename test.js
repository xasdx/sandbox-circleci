let test = require("ava")
let underTest = require(".")

test.cb("operates with database", t => {
  underTest.operate((results) => {
    t.is(results[1].name, "doge")
    t.end()
  })
})
