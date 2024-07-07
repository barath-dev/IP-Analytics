/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8yp0xpxtzpv43h6")

  collection.name = "IP_Details"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8yp0xpxtzpv43h6")

  collection.name = "IP_Analytics"

  return dao.saveCollection(collection)
})
