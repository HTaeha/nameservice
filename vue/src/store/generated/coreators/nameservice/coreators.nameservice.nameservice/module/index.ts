// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgBuyName } from "./types/nameservice/tx";
import { MsgSetName } from "./types/nameservice/tx";
import { MsgDeleteName } from "./types/nameservice/tx";


const types = [
  ["/coreators.nameservice.nameservice.MsgBuyName", MsgBuyName],
  ["/coreators.nameservice.nameservice.MsgSetName", MsgSetName],
  ["/coreators.nameservice.nameservice.MsgDeleteName", MsgDeleteName],
  
];
export const MissingWalletError = new Error("wallet is required");

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgBuyName: (data: MsgBuyName): EncodeObject => ({ typeUrl: "/coreators.nameservice.nameservice.MsgBuyName", value: data }),
    msgSetName: (data: MsgSetName): EncodeObject => ({ typeUrl: "/coreators.nameservice.nameservice.MsgSetName", value: data }),
    msgDeleteName: (data: MsgDeleteName): EncodeObject => ({ typeUrl: "/coreators.nameservice.nameservice.MsgDeleteName", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
