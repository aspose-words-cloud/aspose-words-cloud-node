import { IAuthentication, OAuth  } from "../internal/auth";

const defaultBasePath = "http://api.aspose.cloud";

export class Configuration {
    /*
    * Authentication.
    */
    public authentication: IAuthentication;

    /*
    * App SID.
    */
    public appSID: string;

    /*
    * App key.
    */
    public appKey: string;

    /*
    * Base Url.
    */
    public baseUrl: string = defaultBasePath;

    /*
    *  Gets or sets a value indicating whether debug mode. In debug mode all requests and responses are logged to console.
    */
    public debugMode: boolean;

    constructor(appSID: string, appKey: string, baseUrl?: string, debugMode?: boolean) {
        if (baseUrl) {
            this.baseUrl = baseUrl;
        }

        this.appSID = appSID;
        this.appKey = appKey;
        this.debugMode = debugMode;

        this.authentication = new OAuth() as IAuthentication;
    }

    public getApiBaseUrl(): string {
        return this.baseUrl + "/v1.1";
    }
}
