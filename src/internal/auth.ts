import request = require("request");
import { Configuration } from "./configuration";
import { invokeApiMethod } from "./requestHelper";

export interface IAuthentication {
    /*
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: request.Options, configuration: Configuration): void;

    /*
    * Handle 401 response.
    */
    handle401response(configuration: Configuration);
}

export class OAuth implements IAuthentication {
    private accessToken: string;
    private refreshToken: string;

    public async applyToRequest(requestOptions: request.Options, configuration: Configuration): Promise<void> {
        if (this.accessToken == null) {
            await this._requestToken(configuration);
        }

        if (requestOptions && requestOptions.headers) {
            requestOptions.headers.Authorization = "Bearer " + this.accessToken;
        }

        return Promise.resolve();
    }

    public async handle401response(configuration: Configuration) {
        await this._refreshToken(configuration);
    }

    private async _requestToken(configuration: Configuration): Promise<void> {
        const requestOptions: request.Options = {
            method: "POST",
            json: true,
            uri: configuration.baseUrl + "/oauth2/token",
            form: {
                grant_type: "client_credentials",
                client_id: configuration.appSID,
                client_secret: configuration.appKey,
            },
        };

        const response = await invokeApiMethod(requestOptions, configuration, true);
        this.accessToken = response.body.access_token;
        this.refreshToken = response.body.refresh_token;
        return Promise.resolve();
    }

    private async _refreshToken(configuration: Configuration): Promise<void> {
        const requestOptions: request.Options = {
            method: "POST",
            json: true,
            uri: configuration.baseUrl + "/oauth2/token",
            form: {
                grant_type: "refresh_token",
                refresh_token: this.refreshToken,
            },
        };

        const response = await invokeApiMethod(requestOptions, configuration, true);
        this.accessToken = response.body.access_token;
        this.refreshToken = response.body.refresh_token;
        return Promise.resolve();
    }
}
