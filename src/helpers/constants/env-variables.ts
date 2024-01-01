let inDevEnvironment = false;

if (import.meta.env) {
    if (import.meta.env.NODE_ENV === "development") {
        inDevEnvironment = true;
    }
}

const mainUrl = "http://82.115.18.227:8000/api/v1";

export { inDevEnvironment, mainUrl };
