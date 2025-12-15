/****************************************************
 *
 * DO NOT CHANGE THIS FILE
 *
 * This is meant to be an API serve that is not under your
 * teams control.
 *
 * **************************************************/

import { faker } from "@faker-js/faker";
import { BidItemResponse } from "@/src/types";
import { sleep } from "@/src/utils/sleep";

const ITEM_COUNT = 10;
const LATENCY = 750;

const createItem = () => ({
  id: faker.string.uuid(),
  title: faker.commerce.product(),
  description: faker.commerce.productDescription(),
  createdAt: faker.date.past().toISOString(),
  updatedAt: faker.date.recent().toISOString(),
  bidValue: faker.number.int({ min: 10, max: 500 }),
  bidCount: 0,
  leader: "",
});

let items = faker.helpers.multiple(createItem, { count: ITEM_COUNT });

export const getBidItems = async (): Promise<BidItemResponse> => {
  await sleep(LATENCY);
  const shuffledItems = faker.helpers.shuffle(items);

  return { data: shuffledItems };
};

export const putIncreaseBid = async (
  itemId: string,
  increaseAmt: number,
  user: string,
) => {
  await sleep(LATENCY);

  items = items.map((item) => {
    if (item.id === itemId) {
      return {
        ...item,
        bidValue: item.bidValue + increaseAmt,
        bidCount: item.bidCount + 1,
        leader: user,
      };
    }
    return { ...item };
  });
  return { success: true };
};
