import request = require("request");
import requestDebug = require("request-debug");
import { Configuration } from "./configuration";

export async function invokeApiMethod(requestOptions: request.Options, confguration: Configuration, notApplyAuthToRequest?: boolean): Promise<request.RequestResponse> {
    try {
        return await invokeApiMethodInternal(requestOptions, confguration, notApplyAuthToRequest);
    } catch (e) {
        if (e instanceof NeedRepeatException) {
            return await invokeApiMethodInternal(requestOptions, confguration, notApplyAuthToRequest);
        }

        throw e;
    }
}

async function invokeApiMethodInternal(requestOptions: request.Options, confguration: Configuration, notApplyAuthToRequest?: boolean): Promise<request.RequestResponse> {
    requestDebug(request, (type, data, r) => {
        if (r.writeDebugToConsole) {
            const toLog = {};
            toLog[type] = data;
            // tslint:disable-next-line:no-console
            console.log(JSON.stringify(toLog, undefined, 2));
        }
    });

    if (!requestOptions.headers) {
        requestOptions.headers = {};
    }

    requestOptions.headers["x-aspose-client"] = "nodejs sdk";
    requestOptions.headers["x-aspose-client-version"] = "18.1";

    const auth = confguration.authentication;
    if (!notApplyAuthToRequest) {
        await auth.applyToRequest(requestOptions, confguration);
    }

    return new Promise<request.RequestResponse>((resolve, reject) => {
        const r = request(requestOptions, async (error, response) => {
            // TODO: add server error hadling
            if (error) {
                reject(error);
            } else {
                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    resolve(response);
                } else if (response.statusCode === 401 && !notApplyAuthToRequest) {
                    await auth.handle401response(confguration);
                    reject(new NeedRepeatException());
                } else {
                    reject(response);
                }
            }
        });

        (r as any).writeDebugToConsole = confguration.debugMode;
    });
}

class NeedRepeatException extends Error {
}
