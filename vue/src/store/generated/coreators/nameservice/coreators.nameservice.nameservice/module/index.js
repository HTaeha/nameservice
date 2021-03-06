// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteName } from "./types/nameservice/tx";
import { MsgSetName } from "./types/nameservice/tx";
import { MsgBuyName } from "./types/nameservice/tx";
const types = [
    ["/coreators.nameservice.nameservice.MsgDeleteName", MsgDeleteName],
    ["/coreators.nameservice.nameservice.MsgSetName", MsgSetName],
    ["/coreators.nameservice.nameservice.MsgBuyName", MsgBuyName],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgDeleteName: (data) => ({ typeUrl: "/coreators.nameservice.nameservice.MsgDeleteName", value: data }),
        msgSetName: (data) => ({ typeUrl: "/coreators.nameservice.nameservice.MsgSetName", value: data }),
        msgBuyName: (data) => ({ typeUrl: "/coreators.nameservice.nameservice.MsgBuyName", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
