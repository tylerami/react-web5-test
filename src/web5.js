import { Web5 } from "@tbd54566975/web5";

var userDid = "?";

export function getDid() {
  return userDid;
}

const { web5, did } = await Web5.connect();

userDid = did;
