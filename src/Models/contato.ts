export enum CONTATO_TIPOS {
    phone,
    link,
    whatsapp,
    linkedin,
    github,
    email,
    custom
}

export interface Contato {
    type: CONTATO_TIPOS;

    message?: string;
    url?: string;

    phone?: number;
    linkedin?: string;
    github?: string;
    email?: string;
}
