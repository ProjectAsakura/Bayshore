import { Response } from "express";
import { Writer } from "protobufjs";
import { Config } from "../../config";
import Long from "long";


// sendResponse(message, res): Void
// Sends the server response to the client
export function sendResponse(message: Writer, res: Response, rawHeaders: string, rawHeaders2: string)
{
    // Get the end of the message
    let end = message.finish();

    // Built the response data
    let r = res
        .header('Server', 'v388 wangan')
        .header('Content-Type', 'application/x-protobuf; revision=8053')
        .header('Content-Length', end.length.toString())
        .status(200);

    // Revision Check
    let revisionCheck = Config.getConfig().gameOptions.revisionCheck || 1;

    // Revision Check is enabled
    if(revisionCheck === 1)
    {
        // Get the Revision
        let getProtobufRev;
        if(rawHeaders.includes('application/x-protobuf')) // application/x-protobuf; revision=number_here
        {
            getProtobufRev = rawHeaders.split('; ');
        }
        else
        {
            getProtobufRev = rawHeaders2.split('; ');
        }
        
        let protobufRev = getProtobufRev[1].split('='); // array 0 = content type, array 1 = protobuf revision

        // Connect to the server if the Revision is match
        if(protobufRev[1] === "8053")
        {
            // Send the response to the client
            r.send(Buffer.from(end));
        }
        // else{} Prevent connecting to the server
    }
    // Just send it
    else
    {
        // Send the response to the client
        r.send(Buffer.from(end));
    }
}


// getBigIntFromLong(n: Long): BigInt
// Given a Long data object, converts 
// it into a BigInt and returns it.
export function getBigIntFromLong(n: Long)
{
    // Create the default value
    let bigInt = BigInt(0);

    // If 'n' is a long data type
    if (n instanceof Long) 
    {
        // Perform the  bit-wise operations
        bigInt = bigInt | BigInt(n.high);
        bigInt = bigInt << BigInt(32);
        bigInt = bigInt | BigInt(n.low);
    }

    // Return the finished value
    return Number(bigInt);
}


// Undefined Input Sanitization
export function sanitizeInput(value: any)
{
    return (value == null || value == undefined) ? undefined : value;
}


// Undefined and Zero Input Sanitization
export function sanitizeInputNotZero(value: any)
{
    return (value !== null && value !== undefined && value !== 0) ? value : undefined;
}


// Get Time Stamp
export function getTimeStamp(date: Date = new Date())
{
    // Return a timestamp string for the current / provided time
    return String("[" + date.toLocaleString() + "]");
}


// Write Log
export async function writeLog(message: string)
{
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