import { createDeliveryClient } from "@kontent-ai/delivery-sdk";
const client = createDeliveryClient({
  projectId: import.meta.env.VITE_PROJECT_ID,
});

export default client;
