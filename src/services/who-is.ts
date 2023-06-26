import { API_URL_GODADDY } from "@/config";
import { IGodDaddy, IWhoIs } from "@/types";

export const serviceGetWhoIs = async (domain: string) => {
  // const url =
  //   "https://whoisapi-whois-v2-v1.p.rapidapi.com/whoisserver/WhoisService?domainName=whoisxmlapi.com&apiKey=at_LB9fEOIIxiQokcmHzeotsJGHT9AxU&outputFormat=JSON&da=0&ipwhois=0&thinWhois=0&_parse=0&preferfresh=0&checkproxydata=0&ip=0";
  const url = `https://whoisapi-whois-v2-v1.p.rapidapi.com/whoisserver/WhoisService?domainName=${domain}&apiKey=at_LB9fEOIIxiQokcmHzeotsJGHT9AxU&outputFormat=JSON&da=0&ipwhois=0&thinWhois=0&_parse=0&preferfresh=0&checkproxydata=0&ip=0`;
  // "https://whoisapi-whois-v2-v1.p.rapidapi.com/whoisserver/WhoisService?domainName=whoisxmlapi.com&apiKey=at_LB9fEOIIxiQokcmHzeotsJGHT9AxU&outputFormat=JSON&da=0&ipwhois=0&thinWhois=0&_parse=0&preferfresh=0&checkproxydata=0&ip=0";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7d5d2f8db3msh87582e4e1e9757fp172ffbjsn02a6194fed80",
      "X-RapidAPI-Host": "whoisapi-whois-v2-v1.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = (await response.json()) as IWhoIs;
  console.log(result);

  return result;
};
