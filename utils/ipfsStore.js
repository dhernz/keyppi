import { NFTStorage, File, Blob, CIDString } from "nft.storage";
const client = new NFTStorage({ token: process.env.NFT_STORAGE_KEY });

const storeData = async (data) => {
  let blob = new Blob(data);
  const cid = await client.storeBlob(blob);
  return cid;
};

const getInfo = async (cid) => {
  const url = cid.replace("ipfs://", "https://api.nft.storage/");
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NFT_STORAGE_KEY}`,
    },
  });
  return response.json();
};

const getJson = async (cid) => {
    let data = ls.getItem(cid, false)
    if (data) return data

    const url = `${cid.replace('ipfs://', 'https://')}.ipfs.nftstorage.link/`
    const response = await fetch(url)
   
    data = await response.json()
    ls.setItem(cid, data)
    return data
  }

export {storeData, getInfo, getJson};
