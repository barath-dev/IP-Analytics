/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8yp0xpxtzpv43h6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z71fyqeq",
    "name": "postal",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z71fyqeq",
    "name": "postal_code",
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
})
