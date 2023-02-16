import { createDeliveryClient } from "@kontent-ai/delivery-sdk";
const client = createDeliveryClient({
  projectId: process.env.PROJECT_ID,
});

export default client;
