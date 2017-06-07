const events = require('../../src/services/events.json');

module.exports = {

  getAllEvents: async function getAllEvents (ctx) {
    const allEvents = await events.sportEvents;
    ctx.body = allEvents;
  },

  getEvent: async function getEvent (ctx) {
    const eventId = ctx.params.id;
    const event = await events[eventId];
    ctx.body = event;
  }
  
}
