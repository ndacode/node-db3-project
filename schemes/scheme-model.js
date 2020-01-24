const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

// todo find():
// Calling find returns a promise that resolves to an array of all schemes in the database.
// No steps are included.
function find() {
  return db.select("*").from("schemes");
}
// todo findById(id):
// Expects a scheme id as its only parameter.
// Resolve to a single scheme object.
// On an invalid id, resolves to null.
function findById(id) {
  return db("schemes")
    .where({ id })
    .first();
}
// todo findSteps(id):
// Expects a scheme id.
// Resolves to an array of all correctly ordered steps for the given scheme:
[
  {
    id: 17,
    scheme_name: "Find the Holy Grail",
    step_number: 1,
    instructions: "quest"
  },
  {
    id: 18,
    scheme_name: "Find the Holy Grail",
    step_number: 2,
    instructions: "...and quest"
  }
];
// This array should include the scheme_name not the scheme_id.

function findSteps(scheme_id) {
  return db("steps as s")
    .join("schemes", "schemes.id", "schemes.scheme_id")
    .select("s.id", "s.instructions")
    .orderBy("steps.step_number");
}
// todo add(scheme):
// Expects a scheme object.
// Inserts scheme into the database.
// Resolves to the newly inserted scheme, including id.

function add(schemeData) {
  return db("schemes")
    .insert(schemeData)
    .then(ids => {
      return findById(ids[0]);
    });
}
// todo update(changes, id):
// Expects a changes object and an id.
// Updates the scheme with the given id.
// Resolves to the newly updated scheme object.

function update(id, newScheme) {
  console.log(newScheme);
  return db("schemes")
    .where({ id })
    .update(newScheme);
}

// todo remove(id):
// Removes the scheme object with the provided id.
// Resolves to the removed scheme
// Resolves to null on an invalid id.
// (Hint: Only worry about removing the scheme. The database is configured to automatically remove all associated steps.)
function remove(id) {
  return db("schemes")
    .where("id", id)
    .del();
}
