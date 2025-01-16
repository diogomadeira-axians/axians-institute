export type Training = {
    title: string;
    modality: Modality;
    defaultLanguage: string;
    duration: number;
    concernedFunction: string;
    institute: {
        name: string;
    };
    uri: string;
}

export type Modality = "Remote" | "Classroom";