let inDevEnvironment = false;

if (import.meta.env) {
    if (import.meta.env.NODE_ENV === "development") {
        inDevEnvironment = true;
    }
}

const mainUrl = "https://park.shabnamnikraftar.ir/";

export { inDevEnvironment, mainUrl };
