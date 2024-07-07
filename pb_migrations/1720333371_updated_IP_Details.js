/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8yp0xpxtzpv43h6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ruruj5tj",
    "name": "visit_count",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8yp0xpxtzpv43h6")

  // remove
  collection.schema.removeField("ruruj5tj")

  return dao.saveCollection(collection)
})
