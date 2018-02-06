let MongoClient = require("mongodb").MongoClient

let url = "mongodb://127.0.0.1:27017"
let dbName = "test"

module.exports = {
  operate: (f) => {
    MongoClient.connect(url, (err, client) => {
      if (err) throw err
      let db = client.db(dbName)
      let items = db.collection("items")
      items.insertMany([{ name: "dog" }, { name: "doge" }], (err, res) => {
        if (err) throw err
        items.find({}).toArray((err, items) => {
          if (err) throw err
          f(items)
        })
      })
  
      client.close()
    })
  }
}
