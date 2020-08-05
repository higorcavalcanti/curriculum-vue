export enum CONTATO_TIPOS {
    phone,
    link,
    whatsapp,
    linkedin,
    github,
    custom
}

export interface Contato {
    type: CONTATO_TIPOS;

    message?: string;
    url?: string;

    phone?: string;
    linkedin?: string;
    github?: string;
}
