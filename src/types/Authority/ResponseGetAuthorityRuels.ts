interface Option {
    id: number;
    title: string;
    field_key: string;
    field_type: string;
    type: string;
    is_form: boolean;
    process_time: string;
}

interface FormObject {
    id: number;
    options: Option[];
    title: string;
    sequence: number;
}

export interface ResponseGetAuthorityRuels {
    result: string;
    object: FormObject;
}