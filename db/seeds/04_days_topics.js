
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex("days_topics").insert({day_id: 1, topic_id: 1}),
    knex("days_topics").insert({day_id: 1, topic_id: 4}),
    knex("days_topics").insert({day_id: 2, topic_id: 1}),
    knex("days_topics").insert({day_id: 2, topic_id: 6}),
    knex("days_topics").insert({day_id: 3, topic_id: 1}),
    knex("days_topics").insert({day_id: 4, topic_id: 1}),
    knex("days_topics").insert({day_id: 5, topic_id: 7}),
    knex("days_topics").insert({day_id: 6, topic_id: 7}),
    knex("days_topics").insert({day_id: 6, topic_id: 8}),
    knex("days_topics").insert({day_id: 7, topic_id: 1}),
    knex("days_topics").insert({day_id: 7, topic_id: 9}),
    knex("days_topics").insert({day_id: 7, topic_id: 10}),
    knex("days_topics").insert({day_id: 7, topic_id: 8}),
    knex("days_topics").insert({day_id: 8, topic_id: 9}),
    knex("days_topics").insert({day_id: 8, topic_id: 8}),
    knex("days_topics").insert({day_id: 9, topic_id: 9}),
    knex("days_topics").insert({day_id: 9, topic_id: 8}),
    knex("days_topics").insert({day_id: 10, topic_id: 8}),
    knex("days_topics").insert({day_id: 11, topic_id: 2}),
    knex("days_topics").insert({day_id: 11, topic_id: 3}),
    knex("days_topics").insert({day_id: 12, topic_id: 1}),
    knex("days_topics").insert({day_id: 12, topic_id: 15}),
    knex("days_topics").insert({day_id: 13, topic_id: 1}),
    knex("days_topics").insert({day_id: 13, topic_id: 15}),
    knex("days_topics").insert({day_id: 14, topic_id: 16}),
    knex("days_topics").insert({day_id: 14, topic_id: 11}),
    knex("days_topics").insert({day_id: 14, topic_id: 7}),
    knex("days_topics").insert({day_id: 15, topic_id: 2}),
    knex("days_topics").insert({day_id: 15, topic_id: 3}),
    knex("days_topics").insert({day_id: 16, topic_id: 16}),
    knex("days_topics").insert({day_id: 16, topic_id: 13}),
    knex("days_topics").insert({day_id: 16, topic_id: 12}),
    knex("days_topics").insert({day_id: 17, topic_id: 1}),
    knex("days_topics").insert({day_id: 17, topic_id: 12}),
    knex("days_topics").insert({day_id: 17, topic_id: 13}),
    knex("days_topics").insert({day_id: 17, topic_id: 14}),
    knex("days_topics").insert({day_id: 18, topic_id: 13}),
    knex("days_topics").insert({day_id: 18, topic_id: 12}),
    knex("days_topics").insert({day_id: 18, topic_id: 4}),
    knex("days_topics").insert({day_id: 19, topic_id: 1}),
    knex("days_topics").insert({day_id: 20, topic_id: 1}),
    knex("days_topics").insert({day_id: 20, topic_id: 9})
  ]);
};
