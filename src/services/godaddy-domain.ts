import { API_URL_GODADDY } from "@/config";
import { IGodDaddy } from "@/types";

export const serviceGetDomainGodaddy = async (domain: string) => {
  const response = await fetch(`${API_URL_GODADDY}${domain}`);
  const propertiesDomain = (await response.json()) as IGodDaddy;
  console.log(propertiesDomain);

  return propertiesDomain;
};
