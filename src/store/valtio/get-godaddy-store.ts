import { serviceGetDomainGodaddy } from "@/services";
import { IGodDaddy } from "@/types";
import { proxy, useSnapshot } from "valtio";
import { devtools } from "valtio/utils";

interface GetDomainState {
  domain: IGodDaddy;
  isLoading: boolean;
  inputDomain: string;
}

const getDomainState = proxy<GetDomainState>({
  domain: {
    code: "",
    available: false,
    currency: "",
    definitive: false,
    domain: "",
    period: 0,
    price: 0,
    message: "",
  },
  isLoading: false,
  inputDomain: "",
});

const getDomainStateDevTools = devtools(getDomainState, {
  name: "getDomainState",
  enabled: true,
});

const setDomain = async () => {
  getDomainState.isLoading = true;
  let domainToFetch = getDomainState.inputDomain;

  if (!/\.[A-Za-z]+$/.test(domainToFetch)) {
    domainToFetch += ".com";
  }

  const fetchDomain = await serviceGetDomainGodaddy(domainToFetch);
  // console.log(fetchDomain);

  getDomainState.domain = fetchDomain;
  getDomainState.isLoading = false;
};

const setIsLoading = (isLoading: boolean) => {
  getDomainState.isLoading = isLoading;
};

const handleChangeInputDomain = (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  const input = event.target.value;

  getDomainState.inputDomain = input;
};

export const useGetDomain = () => {
  const snapshot = useSnapshot(getDomainState);

  return {
    domain: snapshot.domain,
    isLoading: snapshot.isLoading,
    inputDomain: snapshot.inputDomain,
    setDomain,
    setIsLoading,
    handleChangeInputDomain,
  };
};
