import { Message } from "./models.js";
import { publisher } from "./publisher.js";

export async function publish(req, res) {
    const message = {
      id: 123,
      name: 'Lorem Ipsum',
    };
    await publisher.publish('event_topic', JSON.stringify(message));
    res.json(message)
}

export async function listMessages(req, res) {
  const messages = await Message.findAll()
  res.json(messages)
}