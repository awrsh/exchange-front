let inDevEnvironment = false;

if (import.meta.env) {
    if (import.meta.env.NODE_ENV === "development") {
        inDevEnvironment = true;
    }
}

const mainUrl = "https://bitasia.ir/api/v1";
const mainUrl_bitpin = "https://api.bitpin.ir/";

export { inDevEnvironment, mainUrl,mainUrl_bitpin };
