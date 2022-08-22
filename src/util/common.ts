import { Response } from "express";
import Long from "long";
import { Writer } from "protobufjs";


// sendResponse(message, res): Void
// Sends the server response to the client
export function sendResponse(message: Writer, res: Response)
{
    // Get the end of the message
    let end = message.finish();

    // Built the response data
    let r = res
        .header('Server', 'v388 wangan')
        .header('Content-Type', 'application/x-protobuf; revision=8053')
        .header('Content-Length', end.length.toString())
        .status(200);

    // Send the response to the client
    r.send(Buffer.from(end));
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

export function sanitizeInput(value: any)
{
    return (value == null || value == undefined) ? undefined : value;
}

export function sanitizeInputNotZero(value: any){
    return (value !== null && value !== undefined && value !== 0) ? value : undefined;
}