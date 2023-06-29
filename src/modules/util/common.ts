import { Response } from "express";
import { Writer } from "protobufjs";
import { Config } from "../../config";
import Long from "long";

// getProtobufRevision: Number
// Given the headers from a request, filters
// the 'application/x-protobuf' property from the
// request and returns the value. If not found, 
// returns null.
function getProtobufRevision(headers: string[]) {

    try {
        // Find protobuf revision headers
        const filtered = headers.filter(
            x => x.includes('application/x-protobuf')
        );

        // At least one header is found
        if (filtered.length > 0) {
            // These should be all the same, just take the first one
            const header = filtered.pop();

            // Header is not null
            if (header) {
                // Header includes a semicolon
                if (header.includes('=')) {
                    // Retrieves the protobuf revision from the header, 
                    // strips any trailing whitespace and converts to int
                    const value = Number(header.split('=')[1].trimEnd());

                    // Return the revision
                    return value;
                }
                else // No semicolon
                {
                    throw Error(`No revision found in protobuf header!`);
                }
            }
            else {
                throw Error(`Protobuf header is not defined!`);
            }
        }
        else // No headers found
        {
            throw Error("Protobuf revision not found!");
        }
    }
    catch (e) // Failed to get protobuf revision
    {
        writeLog(`Failed to get protobuf revision! ${String(e)}`);

        // No protobuf revision
        return null;
    }
}

// sendResponse(message, res): Void
// Sends the server response to the client
export function sendResponse(message: Writer, res: Response, headers: string[]) {
    try {

        // Get config
        const config = Config.getConfig();
        let revisionCheck = config.gameOptions.revisionCheck || 1;

        // Get the end of the message
        let end = message.finish();

        // Built the response data
        let r = res
            .header('Server', 'v388 wangan')
            .header('Content-Type', 'application/x-protobuf; revision=8053')
            .header('Content-Length', end.length.toString())
            .status(200);

        // If revision check is enabled
        if (revisionCheck == 1) {

            // Get the protobuf revision from the headers
            let revision = getProtobufRevision(headers);

            // Revision does not match
            if (revision !== 8053) {
                throw Error(`Protobuf revision does not match!`);
            }
        }

        // Send the response to the client
        r.send(Buffer.from(end));
    }
    catch (e) // Failed to send response
    {
        writeLog(`Failed to send response: ${String(e)}`);

        // Internal Server Error
        res.sendStatus(500);
    }
}


// getBigIntFromLong(n: Long): BigInt
// Given a Long data object, converts 
// it into a BigInt and returns it.
export function getBigIntFromLong(n: Long) {
    // Create the default value
    let bigInt = BigInt(0);

    // If 'n' is a long data type
    if (n instanceof Long) {
        // Perform the  bit-wise operations
        bigInt = bigInt | BigInt(n.high);
        bigInt = bigInt << BigInt(32);
        bigInt = bigInt | BigInt(n.low);
    }

    // Return the finished value
    return Number(bigInt);
}


// Undefined Input Sanitization
export function sanitizeInput(value: any) {
    return (value == null || value == undefined) ? undefined : value;
}


// Undefined and Zero Input Sanitization
export function sanitizeInputNotZero(value: any) {
    return (value !== null && value !== undefined && value !== 0) ? value : undefined;
}


// Get Time Stamp
export function getTimeStamp(date: Date = new Date()) {
    // Return a timestamp string for the current / provided time
    return String("[" + date.toLocaleString() + "]");
}


// Write Log
export async function writeLog(message: string) {
    try {
        // Get the current timestamp
        const timestamp: string = getTimeStamp();

        // Full message placeholder
        let fullMessage: string;

        // Generate the message content, write to console
        fullMessage = timestamp + ': ' + message;

        // Log
        console.log(fullMessage);
    }
    catch {
        // Failed
    }
}