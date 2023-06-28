export interface PxMandant {
  password: string;
  database: string;
  url: string;
  module: Array<string>;
  vollicence: boolean;
  version?: string,
  pxuser?: PxUser;
  pxSessionId: string;
}

export interface PxWebViewLogin {
  token?: string;
  database: string;
  url: string;
  module: Array<string>;
  vollicence: boolean;
  version?: string;
  pxuser?: string;
}


export interface PxUser {
  Mitarbeiter: PxMitarbeiter;
  Kurzzeichen: string
}


export interface PxErrorField {
    Reason: string;
    Name: string;
    Message: string;
}

export interface PxErrorMessage {
  Fields: PxErrorField[];
  Type: string;
  Message: string;
}

export interface PxAdresse {
  AdressNr: number
  Name: string
  Vorname: string
  Ort: string
  Plz: string

}

export interface PxKontakt {
  KontaktNr: number
  Adresse: PxAdresse
  Name: string
  Vorname: string
  Ort: string
  Plz: string

}

export interface PxSettings {
  Modul: string;
  Section: string;
  Einstellung: string
}


export interface PxAuftrag {
  AuftragNr: string;
  Bezeichnung: string;
  Kunde?: PxAdresse;
}

export interface PxMitarbeiter {
  MitarbeiterNr: number;
  Name: string;
  Kurzzeichen: string;
}



