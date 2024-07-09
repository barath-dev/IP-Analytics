/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8yp0xpxtzpv43h6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lwvefqmr",
    "name": "device",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8yp0xpxtzpv43h6")

  // remove
  collection.schema.removeField("lwvefqmr")

  return dao.saveCollection(collection)
})
