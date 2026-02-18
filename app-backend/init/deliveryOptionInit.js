import { sequelize } from "../models/index.js";
import { DeliveryOption } from "../models/DeliveryOption.js";


const defaultDeliveryOptions = [
  {
    id: "1",
    deliveryDays: 7,
    priceCents: 0
  },
  {
    id: "2",
    deliveryDays: 3,
    priceCents: 499
  },
  {
    id: "3",
    deliveryDays: 1,
    priceCents: 999
  }
];

async function createDeliveryOptions() {
  try{
    await sequelize.sync();
    const timestamp = Date.now();
  
    const deliveryOptionsWithTimestamps = defaultDeliveryOptions.map((option, index) => ({
      ...option,
      createdAt: new Date(timestamp + index),
      updatedAt: new Date(timestamp + index)
    }));
  
    await DeliveryOption.bulkCreate(deliveryOptionsWithTimestamps);

    console.log("Delivery Options Successfully initialised!")
  } catch(err){
    console.log('Failed: ', err)
  }
}

createDeliveryOptions();