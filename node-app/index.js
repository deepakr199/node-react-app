const logger = require('koa-logger');
const router = require('koa-router')();
const koa = require('koa');
const cors = require('kcors');
const app = new koa();

const events = require('./src/controllers/events');

// Logger
app.use(logger());
// CORS
app.use(cors());
// Define Routes
router.get('/events', events.getAllEvents)
      .get('/events/:id', events.getEvent);
// Use Routes
app.use(router.routes());

if (!module.parent) {
  app.listen(3000);
  console.log('listening on port 3000');
}
