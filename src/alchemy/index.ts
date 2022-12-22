// Setup
import { Network, Alchemy } from "alchemy-sdk";

const settings = {
  apiKey: "94SDcrXwlfBVAApHgOkc1yABrzkQxcKi",
  network: Network.MATIC_MAINNET,
};

const alchemy = new Alchemy(settings);

export { alchemy };
