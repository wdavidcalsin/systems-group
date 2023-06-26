import { initialMyWhoIs, initialWhoIs } from "@/model";
import { serviceGetMyWhoIs, serviceGetWhoIs } from "@/services";

import { IGodDaddy, IMyWhoIs, IWhoIs } from "@/types";
import { proxy, useSnapshot } from "valtio";
import { devtools } from "valtio/utils";

interface GetWhoIsState {
  // whoIs: IWhoIs;
  whoIs: IMyWhoIs;
  isLoading: boolean;
}

const getWhoIsState = proxy<GetWhoIsState>({
  // whoIs: initialWhoIs,
  whoIs: initialMyWhoIs,
  isLoading: false,
});

const getWhoIsStateDevTools = devtools(getWhoIsState, {
  name: "getWhoIsState",
  enabled: true,
});

const setWhoIs = async (domain: string) => {
  getWhoIsState.isLoading = true;

  // const fetchWhoIs = await serviceGetWhoIs(domain);
  const fetchWhoIs = await serviceGetMyWhoIs(domain);
  // console.log(fetchWhoIs);

  getWhoIsState.whoIs = fetchWhoIs;
  getWhoIsState.isLoading = false;
};

const setIsLoading = (isLoading: boolean) => {
  getWhoIsState.isLoading = isLoading;
};

export const useGetWhoIs = () => {
  const snapshot = useSnapshot(getWhoIsState);

  return {
    whoIs: snapshot.whoIs,
    isLoading: snapshot.isLoading,
    setWhoIs,
    setIsLoading,
  };
};
