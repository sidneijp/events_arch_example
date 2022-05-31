import redis from "redis"
import db from "./db.js"
import {Message} from "./models.js"

db.sync(() => console.log(`Banco de dados conectado`));

(async function() {
  const client = redis.createClient({
    url: 'redis://redis:6379'
  });
  const subscriber = client.duplicate();
  await subscriber.connect();
  await subscriber.subscribe('event_topic', async function(message) {
    const parsedMessage = JSON.parse(message)
    await Message.create(parsedMessage)
  });

})();