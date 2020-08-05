import { ExperienciaCargo } from "@/Models/experiencia-cargo";

export interface Experiencia {
    empresa: string;
    cargos: ExperienciaCargo[];

    entrada?: string;
    saida?: string;
}
