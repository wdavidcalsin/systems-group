import { create } from "zustand";
import { persist } from "zustand/middleware";

import { covidWorldService } from "@/services";
import { IStateCovidWorld } from "@/types";

export interface IUseWeatherStore {
  covidWorldData: IStateCovidWorld[];
  isLoading: boolean;

  setCovidWorldData: () => void;
  setIsLoading: (isLoading: boolean) => void;
}

export const useCovidWorld = create<IUseWeatherStore>()(
  persist(
    (set, get) => ({
      covidWorldData: [],
      isLoading: false,

      async setCovidWorldData() {
        get().setIsLoading(true);

        const fetchCovid = await covidWorldService();

        set((state) => ({
          ...state,
          covidWorldData: fetchCovid,
        }));

        get().setIsLoading(false);
      },
      setIsLoading(isLoading) {
        set((state) => ({
          ...state,
          isLoading,
        }));
      },
    }),
    {
      name: "SYSTEM_GROUP_HOME",
      version: 1,
    }
  )
);
