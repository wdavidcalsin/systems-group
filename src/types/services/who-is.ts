export interface IWhoIs {
  WhoisRecord: WhoisRecord;
}

export interface WhoisRecord {
  administrativeContact: AdministrativeContact;
  audit: Audit;
  contactEmail: string;
  createdDate: string;
  createdDateNormalized: string;
  domainName: string;
  domainNameExt: string;
  estimatedDomainAge: number;
  expiresDate: string;
  expiresDateNormalized: string;
  footer: string;
  header: string;
  nameServers: NameServers;
  parseCode: number;
  rawText: string;
  registrant: AdministrativeContact;
  registrarIANAID: string;
  registrarName: string;
  registryData: RegistryData;
  status: string;
  strippedText: string;
  technicalContact: AdministrativeContact;
  updatedDate: Date;
  updatedDateNormalized: string;
}

export interface AdministrativeContact {
  city: string;
  country: string;
  countryCode: string;
  email: string;
  fax: string;
  name: string;
  organization: string;
  postalCode: string;
  rawText: string;
  state: string;
  street1: string;
  telephone: string;
}

export interface Audit {
  createdDate: string;
  updatedDate: string;
}

export interface NameServers {
  hostNames: string[];
  ips: any[];
  rawText: string;
}

export interface RegistryData {
  audit: Audit;
  createdDate: Date;
  createdDateNormalized: string;
  domainName: string;
  expiresDate: Date;
  expiresDateNormalized: string;
  footer: string;
  header: string;
  nameServers: NameServers;
  parseCode: number;
  rawText: string;
  registrarIANAID: string;
  registrarName: string;
  status: string;
  strippedText: string;
  updatedDate: Date;
  updatedDateNormalized: string;
  whoisServer: string;
}
