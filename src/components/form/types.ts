export interface FormState {
  data: {
    name: FormDataEntryValue;
    email: FormDataEntryValue;
  } | null;
  error: string | null;
  fields?: {
    name: string;
    email: string;
  };
}

export interface FormData {
  get(name: string): FormDataEntryValue | null;
}
