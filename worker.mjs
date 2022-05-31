//const redis = require("redis")
import redis from "redis"

(async function() {
  const client = redis.createClient({
    url: 'redis://redis:6379'
  });
  const subscriber = client.duplicate();
  await subscriber.connect();
  await subscriber.subscribe('event_topic', (message) => {
    console.log(message);
  });

})();