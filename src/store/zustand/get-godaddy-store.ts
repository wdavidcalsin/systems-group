import { serviceGetDomainGodaddy } from "@/services";
import { IGodDaddy } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface GetDomainState {
  domain: IGodDaddy;
  isLoading: boolean;
  inputDomain: string;

  setDomain: () => void;
  setIsLoading: (isLoading: boolean) => void;
  handleChangeInputDomain: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useGetDomain = create<GetDomainState>()(
  persist(
    (set, get) => ({
      domain: {
        available: false,
        currency: "",
        definitive: false,
        domain: "",
        period: 0,
        price: 0,
      },
      isLoading: false,
      inputDomain: "",

      async setDomain() {
        // console.log("Hello");
        get().setIsLoading(true);

        const fetchDomain = await serviceGetDomainGodaddy(get().inputDomain);
        console.log(fetchDomain);

        set((state) => ({
          ...state,
          domain: fetchDomain,
        }));

        get().setIsLoading(false);
      },
      setIsLoading(isLoading) {
        set((state) => ({
          ...state,
          isLoading,
        }));
      },
      handleChangeInputDomain(event: React.ChangeEvent<HTMLInputElement>) {
        const input = event.target.value;

        set((state) => ({
          ...state,
          inputDomain: input,
        }));
      },
    }),
    {
      name: "get-domain ",
      version: 1,
    }
  )
);
