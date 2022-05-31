import { publisher } from "./publisher.js";

export async function publish(req, res) {
    const message = {
      id: '123',
      name: 'Lorem Ipsum',
    };
    await publisher.publish('event_topic', JSON.stringify(message));
    res.json(message)
}
