import { API_URL_GODADDY } from "@/config";
import { IGodDaddy } from "@/types";
import { serviceGetMyWhoIs } from "./my-who-is";

const checkPe = (domain: string) => {
  const extension = ".pe";
  return domain.endsWith(extension);
};

export const serviceGetDomainGodaddy = async (domain: string) => {
  if (checkPe(domain)) {
    const whoIs = await serviceGetMyWhoIs(domain);
    if (!whoIs["Domain Name"] || whoIs["Domain Status"] === "No Object Found") {
      return {
        code: "",
        available: true,
        currency: "SOL",
        definitive: false,
        domain: domain,
        period: 0,
        price: 110,
        message: "",
      };
    } else {
      return {
        code: "",
        available: false,
        currency: "",
        definitive: false,
        domain: domain,
        period: 0,
        price: 0,
        message: "",
      };
    }
  }
  const response = await fetch(`${API_URL_GODADDY}${domain}`);
  const propertiesDomain = (await response.json()) as IGodDaddy;
  console.log(propertiesDomain);

  return propertiesDomain;
};
