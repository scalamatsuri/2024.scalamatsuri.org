/**
 * 既存のyamlに合わせたDataContainer
 * yaml→json変換時に、これと合わない = yamlミスっている
 * と判断する
 *
 * 意味合い的にはEnumにしたり、もっとClassわけしたり…とかは考えられるが、一旦動作させることを優先する
 */
export class ValidationError implements Error {
    constructor(public message: string) {
    }

    name: string = "ValidationError";

    toString() {
        return this.name + ":" + this.message;
    }
}

export interface Candidate {
    name: string;
    twitter: string;
    github: string;
    icon: string;
    organization: string[];
    contributes: string[];
    speaker_experience: string[];
}

export interface Program {
    title: string;
    length: number;
    audience: string;
    language: string;
    tags: string[];
    suggestions: string[];
    detail: string;
}

export interface Content {
    candidate: Candidate;
    program: Program;
}


export interface CandidateModel {
    id: string;
    ja: Content;
    en: Content;
}


function validateCandidate(arg: any): arg is Candidate {

    if (arg.name === null || arg.name === undefined) {
        throw new ValidationError("name is null or undefined");
    }
    if (arg.twitter === null || arg.twitter === undefined) {
        throw new ValidationError("twitter is null or undefined");
    }
    if (arg.github === null || arg.github === undefined) {
        throw new ValidationError("github is null or undefined");
    }
    if (arg.icon === null || arg.icon === undefined) {
        throw new ValidationError("icon is null or undefined");
    }
    if (arg.organization === null || arg.organization === undefined) {
        throw new ValidationError("organization is null or undefined");
    }
    if (arg.contributes === null || arg.contributes === undefined) {
        throw new ValidationError("contributes is null or undefined");
    }
    if (arg.speaker_experience === null || arg.speaker_experience === undefined) {
        throw new ValidationError("speaker_experience is null or undefined");
    }

    return true
}

function validateProgram(arg: any): arg is Program {
    if (arg.title === null || arg.title === undefined) {
        throw new ValidationError("title is null or undefined");
    }
    if (arg.length === null || arg.length === undefined) {
        throw new ValidationError("length is null or undefined");
    }
    if (arg.audience === null || arg.audience === undefined) {
        throw new ValidationError("audience is null or undefined");
    }
    if (arg.language === null || arg.language === undefined) {
        throw new ValidationError("language is null or undefined");
    }
    if (arg.tags === null || arg.tags === undefined) {
        throw new ValidationError("tags is null or undefined");
    }
    if (arg.suggestions === null || arg.suggestions === undefined) {
        throw new ValidationError("suggestions is null or undefined");
    }
    if (arg.detail === null || arg.detail === undefined) {
        throw new ValidationError("detail is null or undefined");
    }
    return true
}

function validateContent(arg: any): arg is Content {
    if (arg.candidate === null || arg.candidate === undefined) {
        throw new ValidationError("candidate is null or undefined");
    }
    if (arg.program === null || arg.program === undefined) {
        throw new ValidationError("program is null or undefined");
    }
    validateCandidate(arg.candidate);
    validateProgram(arg.program);
    return true;
}

export function validate(arg: any): arg is CandidateModel {
    if (arg.id === null || arg.id === undefined) {
        throw new ValidationError("id is null or undefined");
    }
    if (arg.ja === null || arg.ja === undefined) {
        throw new ValidationError("ja is null or undefined");
    }
    if (arg.en === null || arg.en === undefined) {
        throw new ValidationError("en is null or undefined");
    }
    validateContent(arg.ja);
    validateContent(arg.en);
    return true;
}
