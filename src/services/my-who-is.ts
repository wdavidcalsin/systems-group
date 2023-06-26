import { API_URL_GODADDY, API_URL_MYWHOIS } from "@/config";
import { IGodDaddy, IMyWhoIs, IWhoIs } from "@/types";

export const serviceGetMyWhoIs = async (domain: string) => {
  const response = await fetch(`${API_URL_MYWHOIS}${domain}`);
  const propertiesDomainWhoIs = (await response.json()) as IMyWhoIs;

  return propertiesDomainWhoIs;
};
