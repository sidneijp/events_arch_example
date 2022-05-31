import redis from "redis"
export const publisher = redis.createClient({
    url: 'redis://redis:6379'
  });

(async () => {
  await publisher.connect();
})();