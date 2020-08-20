import { Contato, CONTATO_TIPOS } from "@/Models/contato";
import { FormacaoAcademica } from "@/Models/formacao-academica";
import { Experiencia } from "@/Models/experiencia";
import { Competencia } from "@/Models/competencia";
import { Conquista } from "@/Models/conquista";
import { Atividade } from "@/Models/atividade";

export interface Curriculum {
    nome: string;
    contatos: Contato[];
    apresentacao: string;
    formacaoAcademica: FormacaoAcademica[];
    experiencia: Experiencia[];
    competencias: Competencia[];
    conquistas: Conquista[];
    atividades: Atividade[];
}

export function getCurriculum(): Curriculum {
    return {
        nome: 'Higor Cavalcanti',
        contatos: [
            { type: CONTATO_TIPOS.whatsapp, phone: 38991327995 },
            { type: CONTATO_TIPOS.email, email: 'higordaniell@live.com' },
            { type: CONTATO_TIPOS.linkedin, linkedin: 'higor-cavalcanti' },
            { type: CONTATO_TIPOS.github, github: 'higorcavalcanti' },
        ],
        apresentacao: 'Desenvolvedor Web em Angular, por mais de 6 anos além de .NET Core e aplicativos híbridos com Ionic. Participante de 2 \'Maratona Mineira de Programação\' e 1 \'Maratona de Programação\' (nacional). ',
        competencias: [
            { nome: 'Javascript (Angular / Ionic)' },
            { nome: 'Inglês avançado' },
            { nome: 'C# (.NET Core)' },
            { nome: 'Rápido aprendizado' },
            { nome: 'Espírito de equipe' },
            { nome: 'Desejo por desafios' },
        ],
        formacaoAcademica: [{
            universidade: 'Universidade Federal de Viçosa',
            curso: 'Bacharelado em Sistemas de Informação',
            entrada: '2014',
            saida: '2017',
        }],
        conquistas: [
            { nome: 'Competidor da Maratona de Programação (Nacional)' },
            { nome: '2º Lugar Seletiva da Maratona de Programação (Nacional)' },
            { nome: '1º Lugar Maratona de Programação IX SACSIS (UFV-CRP)' },
            { nome: 'Competidor de duas Maratona Mineira de Programação' },
            { nome: 'Competidor no Hackathon da Up Brasil' },
            { nome: 'Padronizou o desenvolvimento de projetos na InfoAlto' },
            { nome: 'Implementou a utilização de GIT para projetos na InfoAlto' },
        ],
        atividades: [
            { nome: 'Realização de intercâmbio em Malta para aprimorar o Inglês' },
            { nome: 'Desenvolvedor do Lista Paranaíba' },
            { nome: 'Desenvolvedor de bot para verificação de notas no sistema da faculdade' },
            { nome: 'Desenvolvedor de aplicativo para acesso a notas no sistema da faculdade' },
            { nome: 'Desenvolvedor de sistema para gerar este curriculo'},
        ],
        experiencia: [
            {
                empresa: 'Cedro Technologies',
                cargos: [
                    {
                        nome: 'Desenvolvedor Front-end Senior',
                        entrada: '2019',
                        saida: 'Atual',
                        atribuicoes: [
                            'Projetos internos da Esfera Energia',
                            'Atuação como líder técnico dos projetos',
                            'Desenvolvedor da arquitetura do ERP da Esfera Energia',
                            'Utilização de TDD para o front-end',
                        ],
                    },
                    {
                        nome: 'Desenvolvedor Front-end Pleno',
                        entrada: '2018',
                        saida: '2019',
                        atribuicoes: [
                            'Desenvolvedor do HUD by Esfera Energia (https://esferaenergia.com.br/conheca-hud/)',
                            'Testes unitários com Jasmine',
                            'Desenvolvedor Angular',
                        ],
                    },
                    {
                        nome: 'Desenvolvedor Front-end Junior',
                        entrada: '2018',
                        atribuicoes: [
                            'Projetos de Corretoras de Títulos e Valores Monetários (RBCapital, Lerosa Investimentos, Azimut Wealth)',
                            'Desenvolvedor Angular / C# .NET Core',
                        ],
                    }
                ],
            },
            {
                empresa: 'Prime Team Tecnologia',
                entrada: '2018',
                cargos: [{
                    nome: 'Analista de Sistemas',
                    atribuicoes: [
                        'Projetos internos do Grupo Martins',
                        'Desenvolvedor Angular / C# .NET',
                        'Desenvolvedor Ionic do aplicativo Faculdade do Trabalho',
                    ]
                }],
            },
            {
                empresa: 'IPSoft Brasil',
                entrada: '2017',
                cargos: [{
                    nome: 'Programador Front-end',
                    atribuicoes: [
                        'Desenvolvedor do aplicativo VidaLeve com Ionic (Angular) e manutenção no backend em Java',
                        'Desenvolvedor do aplicativo Nota10 com Ionic (Angular) e manutenção no backend PHP/Laravel'
                    ]
                }]
            },
            {
                empresa: 'InfoAlto',
                entrada: '2014',
                saida: '2017',
                cargos: [{
                    nome: 'Diretor de Desenvolvimento',
                    atribuicoes: [
                        'Desenvolvimento de sistemas web (Angular / PHP)',
                        'Desenvolvimento de sistema de gerenciamento de eventos',
                        'Desenvolvimento de aplicativo para presença no sistema de eventos',
                        'Relacionamento com clientes',
                        'Definição de cronogramas/prazos',
                        'Utilização de metodologias ágeis (SCRUM)',
                        'Gerenciamento de equipes',
                    ]
                }]
            }
        ],
    };
}
