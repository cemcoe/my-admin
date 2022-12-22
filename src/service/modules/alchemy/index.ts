import { alchemy } from "@/alchemy";
function fetchTabData() {
  alchemy.nft
    .getNftsForOwner("0x2cEE06a96eB2f6fFEc80ad27Df274E0D196BFAB2", {
      pageSize: 10,
    })
    .then((res) => {
      console.log(res);
      tableData.value = res.ownedNfts;
    });
}
