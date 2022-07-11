import * as $protobuf from "protobufjs";
/** Namespace sys. */
export namespace sys {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Log. */
        interface ILog {

            /** Log errors */
            errors?: (sys.protobuf.Log.IError[]|null);
        }

        /** Represents a Log. */
        class Log implements ILog {

            /**
             * Constructs a new Log.
             * @param [properties] Properties to set
             */
            constructor(properties?: sys.protobuf.ILog);

            /** Log errors. */
            public errors: sys.protobuf.Log.IError[];

            /**
             * Creates a new Log instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Log instance
             */
            public static create(properties?: sys.protobuf.ILog): sys.protobuf.Log;

            /**
             * Encodes the specified Log message. Does not implicitly {@link sys.protobuf.Log.verify|verify} messages.
             * @param message Log message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sys.protobuf.ILog, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Log message, length delimited. Does not implicitly {@link sys.protobuf.Log.verify|verify} messages.
             * @param message Log message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sys.protobuf.ILog, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Log message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Log
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sys.protobuf.Log;

            /**
             * Decodes a Log message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Log
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sys.protobuf.Log;

            /**
             * Verifies a Log message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Log message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Log
             */
            public static fromObject(object: { [k: string]: any }): sys.protobuf.Log;

            /**
             * Creates a plain object from a Log message. Also converts values to other types if specified.
             * @param message Log
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sys.protobuf.Log, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Log to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Log
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace Log {

            /** Properties of an Error. */
            interface IError {

                /** Error timestamp */
                timestamp: number;

                /** Error code */
                code: number;
            }

            /** Represents an Error. */
            class Error implements IError {

                /**
                 * Constructs a new Error.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sys.protobuf.Log.IError);

                /** Error timestamp. */
                public timestamp: number;

                /** Error code. */
                public code: number;

                /**
                 * Creates a new Error instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Error instance
                 */
                public static create(properties?: sys.protobuf.Log.IError): sys.protobuf.Log.Error;

                /**
                 * Encodes the specified Error message. Does not implicitly {@link sys.protobuf.Log.Error.verify|verify} messages.
                 * @param message Error message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sys.protobuf.Log.IError, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Error message, length delimited. Does not implicitly {@link sys.protobuf.Log.Error.verify|verify} messages.
                 * @param message Error message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sys.protobuf.Log.IError, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Error message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Error
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sys.protobuf.Log.Error;

                /**
                 * Decodes an Error message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Error
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sys.protobuf.Log.Error;

                /**
                 * Verifies an Error message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Error message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Error
                 */
                public static fromObject(object: { [k: string]: any }): sys.protobuf.Log.Error;

                /**
                 * Creates a plain object from an Error message. Also converts values to other types if specified.
                 * @param message Error
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sys.protobuf.Log.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Error to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Error
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a BanaCoinPaymentLog. */
        interface IBanaCoinPaymentLog {

            /** BanaCoinPaymentLog payments */
            payments?: (sys.protobuf.BanaCoinPaymentLog.IPayment[]|null);
        }

        /** Represents a BanaCoinPaymentLog. */
        class BanaCoinPaymentLog implements IBanaCoinPaymentLog {

            /**
             * Constructs a new BanaCoinPaymentLog.
             * @param [properties] Properties to set
             */
            constructor(properties?: sys.protobuf.IBanaCoinPaymentLog);

            /** BanaCoinPaymentLog payments. */
            public payments: sys.protobuf.BanaCoinPaymentLog.IPayment[];

            /**
             * Creates a new BanaCoinPaymentLog instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BanaCoinPaymentLog instance
             */
            public static create(properties?: sys.protobuf.IBanaCoinPaymentLog): sys.protobuf.BanaCoinPaymentLog;

            /**
             * Encodes the specified BanaCoinPaymentLog message. Does not implicitly {@link sys.protobuf.BanaCoinPaymentLog.verify|verify} messages.
             * @param message BanaCoinPaymentLog message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sys.protobuf.IBanaCoinPaymentLog, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BanaCoinPaymentLog message, length delimited. Does not implicitly {@link sys.protobuf.BanaCoinPaymentLog.verify|verify} messages.
             * @param message BanaCoinPaymentLog message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sys.protobuf.IBanaCoinPaymentLog, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BanaCoinPaymentLog message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BanaCoinPaymentLog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sys.protobuf.BanaCoinPaymentLog;

            /**
             * Decodes a BanaCoinPaymentLog message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BanaCoinPaymentLog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sys.protobuf.BanaCoinPaymentLog;

            /**
             * Verifies a BanaCoinPaymentLog message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BanaCoinPaymentLog message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BanaCoinPaymentLog
             */
            public static fromObject(object: { [k: string]: any }): sys.protobuf.BanaCoinPaymentLog;

            /**
             * Creates a plain object from a BanaCoinPaymentLog message. Also converts values to other types if specified.
             * @param message BanaCoinPaymentLog
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sys.protobuf.BanaCoinPaymentLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BanaCoinPaymentLog to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BanaCoinPaymentLog
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace BanaCoinPaymentLog {

            /** Properties of a Payment. */
            interface IPayment {

                /** Payment date */
                date: number;

                /** Payment contactNumber */
                contactNumber?: (string|null);

                /** Payment state */
                state: sys.protobuf.BanaCoinPaymentState;

                /** Payment cost */
                cost?: (number|null);

                /** Payment accessCode */
                accessCode: string;

                /** Payment personId */
                personId: string;
            }

            /** Represents a Payment. */
            class Payment implements IPayment {

                /**
                 * Constructs a new Payment.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sys.protobuf.BanaCoinPaymentLog.IPayment);

                /** Payment date. */
                public date: number;

                /** Payment contactNumber. */
                public contactNumber: string;

                /** Payment state. */
                public state: sys.protobuf.BanaCoinPaymentState;

                /** Payment cost. */
                public cost: number;

                /** Payment accessCode. */
                public accessCode: string;

                /** Payment personId. */
                public personId: string;

                /**
                 * Creates a new Payment instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payment instance
                 */
                public static create(properties?: sys.protobuf.BanaCoinPaymentLog.IPayment): sys.protobuf.BanaCoinPaymentLog.Payment;

                /**
                 * Encodes the specified Payment message. Does not implicitly {@link sys.protobuf.BanaCoinPaymentLog.Payment.verify|verify} messages.
                 * @param message Payment message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sys.protobuf.BanaCoinPaymentLog.IPayment, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payment message, length delimited. Does not implicitly {@link sys.protobuf.BanaCoinPaymentLog.Payment.verify|verify} messages.
                 * @param message Payment message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sys.protobuf.BanaCoinPaymentLog.IPayment, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payment message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payment
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sys.protobuf.BanaCoinPaymentLog.Payment;

                /**
                 * Decodes a Payment message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payment
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sys.protobuf.BanaCoinPaymentLog.Payment;

                /**
                 * Verifies a Payment message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Payment message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Payment
                 */
                public static fromObject(object: { [k: string]: any }): sys.protobuf.BanaCoinPaymentLog.Payment;

                /**
                 * Creates a plain object from a Payment message. Also converts values to other types if specified.
                 * @param message Payment
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sys.protobuf.BanaCoinPaymentLog.Payment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payment to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Payment
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an Operation. */
        interface IOperation {

            /** Operation authorizationAt */
            authorizationAt?: (number|null);

            /** Operation featureVersion */
            featureVersion?: (wm.protobuf.IGameFeatureVersion|null);
        }

        /** Represents an Operation. */
        class Operation implements IOperation {

            /**
             * Constructs a new Operation.
             * @param [properties] Properties to set
             */
            constructor(properties?: sys.protobuf.IOperation);

            /** Operation authorizationAt. */
            public authorizationAt: number;

            /** Operation featureVersion. */
            public featureVersion?: (wm.protobuf.IGameFeatureVersion|null);

            /**
             * Creates a new Operation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Operation instance
             */
            public static create(properties?: sys.protobuf.IOperation): sys.protobuf.Operation;

            /**
             * Encodes the specified Operation message. Does not implicitly {@link sys.protobuf.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sys.protobuf.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Operation message, length delimited. Does not implicitly {@link sys.protobuf.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sys.protobuf.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Operation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sys.protobuf.Operation;

            /**
             * Decodes an Operation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sys.protobuf.Operation;

            /**
             * Verifies an Operation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Operation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Operation
             */
            public static fromObject(object: { [k: string]: any }): sys.protobuf.Operation;

            /**
             * Creates a plain object from an Operation message. Also converts values to other types if specified.
             * @param message Operation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sys.protobuf.Operation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Operation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Operation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Status. */
        interface IStatus {

            /** Status state */
            state: sys.protobuf.State;

            /** Status name */
            name?: (string|null);

            /** Status address */
            address?: (number|null);

            /** Status value */
            value?: (number|null);

            /** Status value2 */
            value2?: (number|null);
        }

        /** Represents a Status. */
        class Status implements IStatus {

            /**
             * Constructs a new Status.
             * @param [properties] Properties to set
             */
            constructor(properties?: sys.protobuf.IStatus);

            /** Status state. */
            public state: sys.protobuf.State;

            /** Status name. */
            public name: string;

            /** Status address. */
            public address: number;

            /** Status value. */
            public value: number;

            /** Status value2. */
            public value2: number;

            /**
             * Creates a new Status instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Status instance
             */
            public static create(properties?: sys.protobuf.IStatus): sys.protobuf.Status;

            /**
             * Encodes the specified Status message. Does not implicitly {@link sys.protobuf.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sys.protobuf.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link sys.protobuf.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sys.protobuf.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sys.protobuf.Status;

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sys.protobuf.Status;

            /**
             * Verifies a Status message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Status
             */
            public static fromObject(object: { [k: string]: any }): sys.protobuf.Status;

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @param message Status
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sys.protobuf.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Status to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Status
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Command. */
        interface ICommand {

            /** Command sequence */
            sequence?: (number|null);

            /** Command ntp */
            ntp?: (string|null);

            /** Command checkCable */
            checkCable?: (string|null);

            /** Command renewDhcp */
            renewDhcp?: (string|null);

            /** Command setDate */
            setDate?: (number|null);

            /** Command syncDate */
            syncDate?: (string|null);

            /** Command ping */
            ping?: (number[]|null);

            /** Command traceRoute */
            traceRoute?: (number|null);

            /** Command checkPacket */
            checkPacket?: (string|null);

            /** Command reboot */
            reboot?: (string|null);

            /** Command checkPkg */
            checkPkg?: (string|null);
        }

        /** Represents a Command. */
        class Command implements ICommand {

            /**
             * Constructs a new Command.
             * @param [properties] Properties to set
             */
            constructor(properties?: sys.protobuf.ICommand);

            /** Command sequence. */
            public sequence: number;

            /** Command ntp. */
            public ntp: string;

            /** Command checkCable. */
            public checkCable: string;

            /** Command renewDhcp. */
            public renewDhcp: string;

            /** Command setDate. */
            public setDate: number;

            /** Command syncDate. */
            public syncDate: string;

            /** Command ping. */
            public ping: number[];

            /** Command traceRoute. */
            public traceRoute: number;

            /** Command checkPacket. */
            public checkPacket: string;

            /** Command reboot. */
            public reboot: string;

            /** Command checkPkg. */
            public checkPkg: string;

            /**
             * Creates a new Command instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Command instance
             */
            public static create(properties?: sys.protobuf.ICommand): sys.protobuf.Command;

            /**
             * Encodes the specified Command message. Does not implicitly {@link sys.protobuf.Command.verify|verify} messages.
             * @param message Command message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sys.protobuf.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Command message, length delimited. Does not implicitly {@link sys.protobuf.Command.verify|verify} messages.
             * @param message Command message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sys.protobuf.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Command message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Command
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sys.protobuf.Command;

            /**
             * Decodes a Command message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Command
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sys.protobuf.Command;

            /**
             * Verifies a Command message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Command message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Command
             */
            public static fromObject(object: { [k: string]: any }): sys.protobuf.Command;

            /**
             * Creates a plain object from a Command message. Also converts values to other types if specified.
             * @param message Command
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sys.protobuf.Command, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Command to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Command
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Reply. */
        interface IReply {

            /** Reply sequence */
            sequence?: (number|null);

            /** Reply ntp */
            ntp?: (sys.protobuf.IStatus|null);

            /** Reply checkCable */
            checkCable?: (sys.protobuf.IStatus|null);

            /** Reply renewDhcp */
            renewDhcp?: (sys.protobuf.IStatus|null);

            /** Reply setDate */
            setDate?: (sys.protobuf.IStatus|null);

            /** Reply syncDate */
            syncDate?: (sys.protobuf.IStatus|null);

            /** Reply ping */
            ping?: (sys.protobuf.IStatus[]|null);

            /** Reply traceRoute */
            traceRoute?: (sys.protobuf.IStatus|null);

            /** Reply checkPacket */
            checkPacket?: (sys.protobuf.IStatus|null);

            /** Reply reboot */
            reboot?: (sys.protobuf.IStatus|null);

            /** Reply checkPkg */
            checkPkg?: (sys.protobuf.IStatus|null);
        }

        /** Represents a Reply. */
        class Reply implements IReply {

            /**
             * Constructs a new Reply.
             * @param [properties] Properties to set
             */
            constructor(properties?: sys.protobuf.IReply);

            /** Reply sequence. */
            public sequence: number;

            /** Reply ntp. */
            public ntp?: (sys.protobuf.IStatus|null);

            /** Reply checkCable. */
            public checkCable?: (sys.protobuf.IStatus|null);

            /** Reply renewDhcp. */
            public renewDhcp?: (sys.protobuf.IStatus|null);

            /** Reply setDate. */
            public setDate?: (sys.protobuf.IStatus|null);

            /** Reply syncDate. */
            public syncDate?: (sys.protobuf.IStatus|null);

            /** Reply ping. */
            public ping: sys.protobuf.IStatus[];

            /** Reply traceRoute. */
            public traceRoute?: (sys.protobuf.IStatus|null);

            /** Reply checkPacket. */
            public checkPacket?: (sys.protobuf.IStatus|null);

            /** Reply reboot. */
            public reboot?: (sys.protobuf.IStatus|null);

            /** Reply checkPkg. */
            public checkPkg?: (sys.protobuf.IStatus|null);

            /**
             * Creates a new Reply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Reply instance
             */
            public static create(properties?: sys.protobuf.IReply): sys.protobuf.Reply;

            /**
             * Encodes the specified Reply message. Does not implicitly {@link sys.protobuf.Reply.verify|verify} messages.
             * @param message Reply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sys.protobuf.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Reply message, length delimited. Does not implicitly {@link sys.protobuf.Reply.verify|verify} messages.
             * @param message Reply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sys.protobuf.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Reply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Reply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sys.protobuf.Reply;

            /**
             * Decodes a Reply message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Reply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sys.protobuf.Reply;

            /**
             * Verifies a Reply message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Reply message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Reply
             */
            public static fromObject(object: { [k: string]: any }): sys.protobuf.Reply;

            /**
             * Creates a plain object from a Reply message. Also converts values to other types if specified.
             * @param message Reply
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sys.protobuf.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Reply to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Reply
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** State enum. */
        enum State {
            State_None = 0,
            State_Checking = 1,
            State_NG = 2,
            State_OK = 3
        }

        /** BanaCoinPaymentState enum. */
        enum BanaCoinPaymentState {
            BC_SUCCESS = 0,
            BC_SHORTAGE = 1,
            BC_BNID_MEMBER_ERROR = 2,
            BC_UNKNOWN_ERROR = 3,
            BC_BNID_SYSTEM_ERROR = 4,
            BC_BNID_VERIFY_ERROR = 5,
            BC_BNID_EXECUTE_ERROR = 6,
            BC_BNID_SERVER_UNAVAILABLE = 99
        }
    }
}

/** Namespace wm. */
export namespace wm {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a RegisterSystemInfoRequest. */
        interface IRegisterSystemInfoRequest {

            /** RegisterSystemInfoRequest pcbSerial */
            pcbSerial: string;

            /** RegisterSystemInfoRequest terminalType */
            terminalType: wm.protobuf.TerminalType;

            /** RegisterSystemInfoRequest romVersion */
            romVersion: number;

            /** RegisterSystemInfoRequest country */
            country: string;

            /** RegisterSystemInfoRequest lineType */
            lineType: wm.protobuf.LineType;

            /** RegisterSystemInfoRequest shopName */
            shopName: string;

            /** RegisterSystemInfoRequest shopNickname */
            shopNickname: string;

            /** RegisterSystemInfoRequest allnetPlaceId */
            allnetPlaceId?: (number|null);

            /** RegisterSystemInfoRequest allnetRegion0 */
            allnetRegion0?: (number|null);

            /** RegisterSystemInfoRequest muchaPlaceId */
            muchaPlaceId?: (string|null);

            /** RegisterSystemInfoRequest muchaPrefectureId */
            muchaPrefectureId?: (number|null);

            /** RegisterSystemInfoRequest regionName0 */
            regionName0: string;

            /** RegisterSystemInfoRequest regionName1 */
            regionName1: string;

            /** RegisterSystemInfoRequest regionName2 */
            regionName2: string;

            /** RegisterSystemInfoRequest regionName3 */
            regionName3: string;

            /** RegisterSystemInfoRequest timezoneOffset */
            timezoneOffset: number;

            /** RegisterSystemInfoRequest systemSetting */
            systemSetting: wm.protobuf.ISystemSetting;

            /** RegisterSystemInfoRequest errorLogs */
            errorLogs?: (wm.protobuf.RegisterSystemInfoRequest.IErrorLogEntry[]|null);
        }

        /** Represents a RegisterSystemInfoRequest. */
        class RegisterSystemInfoRequest implements IRegisterSystemInfoRequest {

            /**
             * Constructs a new RegisterSystemInfoRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IRegisterSystemInfoRequest);

            /** RegisterSystemInfoRequest pcbSerial. */
            public pcbSerial: string;

            /** RegisterSystemInfoRequest terminalType. */
            public terminalType: wm.protobuf.TerminalType;

            /** RegisterSystemInfoRequest romVersion. */
            public romVersion: number;

            /** RegisterSystemInfoRequest country. */
            public country: string;

            /** RegisterSystemInfoRequest lineType. */
            public lineType: wm.protobuf.LineType;

            /** RegisterSystemInfoRequest shopName. */
            public shopName: string;

            /** RegisterSystemInfoRequest shopNickname. */
            public shopNickname: string;

            /** RegisterSystemInfoRequest allnetPlaceId. */
            public allnetPlaceId: number;

            /** RegisterSystemInfoRequest allnetRegion0. */
            public allnetRegion0: number;

            /** RegisterSystemInfoRequest muchaPlaceId. */
            public muchaPlaceId: string;

            /** RegisterSystemInfoRequest muchaPrefectureId. */
            public muchaPrefectureId: number;

            /** RegisterSystemInfoRequest regionName0. */
            public regionName0: string;

            /** RegisterSystemInfoRequest regionName1. */
            public regionName1: string;

            /** RegisterSystemInfoRequest regionName2. */
            public regionName2: string;

            /** RegisterSystemInfoRequest regionName3. */
            public regionName3: string;

            /** RegisterSystemInfoRequest timezoneOffset. */
            public timezoneOffset: number;

            /** RegisterSystemInfoRequest systemSetting. */
            public systemSetting: wm.protobuf.ISystemSetting;

            /** RegisterSystemInfoRequest errorLogs. */
            public errorLogs: wm.protobuf.RegisterSystemInfoRequest.IErrorLogEntry[];

            /**
             * Creates a new RegisterSystemInfoRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RegisterSystemInfoRequest instance
             */
            public static create(properties?: wm.protobuf.IRegisterSystemInfoRequest): wm.protobuf.RegisterSystemInfoRequest;

            /**
             * Encodes the specified RegisterSystemInfoRequest message. Does not implicitly {@link wm.protobuf.RegisterSystemInfoRequest.verify|verify} messages.
             * @param message RegisterSystemInfoRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IRegisterSystemInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RegisterSystemInfoRequest message, length delimited. Does not implicitly {@link wm.protobuf.RegisterSystemInfoRequest.verify|verify} messages.
             * @param message RegisterSystemInfoRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IRegisterSystemInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RegisterSystemInfoRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RegisterSystemInfoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.RegisterSystemInfoRequest;

            /**
             * Decodes a RegisterSystemInfoRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RegisterSystemInfoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.RegisterSystemInfoRequest;

            /**
             * Verifies a RegisterSystemInfoRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RegisterSystemInfoRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RegisterSystemInfoRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.RegisterSystemInfoRequest;

            /**
             * Creates a plain object from a RegisterSystemInfoRequest message. Also converts values to other types if specified.
             * @param message RegisterSystemInfoRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.RegisterSystemInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RegisterSystemInfoRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RegisterSystemInfoRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace RegisterSystemInfoRequest {

            /** Properties of an ErrorLogEntry. */
            interface IErrorLogEntry {

                /** ErrorLogEntry datetime */
                datetime: number;

                /** ErrorLogEntry message */
                message: string;
            }

            /** Represents an ErrorLogEntry. */
            class ErrorLogEntry implements IErrorLogEntry {

                /**
                 * Constructs a new ErrorLogEntry.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm.protobuf.RegisterSystemInfoRequest.IErrorLogEntry);

                /** ErrorLogEntry datetime. */
                public datetime: number;

                /** ErrorLogEntry message. */
                public message: string;

                /**
                 * Creates a new ErrorLogEntry instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ErrorLogEntry instance
                 */
                public static create(properties?: wm.protobuf.RegisterSystemInfoRequest.IErrorLogEntry): wm.protobuf.RegisterSystemInfoRequest.ErrorLogEntry;

                /**
                 * Encodes the specified ErrorLogEntry message. Does not implicitly {@link wm.protobuf.RegisterSystemInfoRequest.ErrorLogEntry.verify|verify} messages.
                 * @param message ErrorLogEntry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm.protobuf.RegisterSystemInfoRequest.IErrorLogEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ErrorLogEntry message, length delimited. Does not implicitly {@link wm.protobuf.RegisterSystemInfoRequest.ErrorLogEntry.verify|verify} messages.
                 * @param message ErrorLogEntry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm.protobuf.RegisterSystemInfoRequest.IErrorLogEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ErrorLogEntry message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ErrorLogEntry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.RegisterSystemInfoRequest.ErrorLogEntry;

                /**
                 * Decodes an ErrorLogEntry message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ErrorLogEntry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.RegisterSystemInfoRequest.ErrorLogEntry;

                /**
                 * Verifies an ErrorLogEntry message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ErrorLogEntry message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ErrorLogEntry
                 */
                public static fromObject(object: { [k: string]: any }): wm.protobuf.RegisterSystemInfoRequest.ErrorLogEntry;

                /**
                 * Creates a plain object from an ErrorLogEntry message. Also converts values to other types if specified.
                 * @param message ErrorLogEntry
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm.protobuf.RegisterSystemInfoRequest.ErrorLogEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ErrorLogEntry to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ErrorLogEntry
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a RegisterSystemInfoResponse. */
        interface IRegisterSystemInfoResponse {

            /** RegisterSystemInfoResponse error */
            error: wm.protobuf.ErrorCode;

            /** RegisterSystemInfoResponse regionId */
            regionId: number;

            /** RegisterSystemInfoResponse placeId */
            placeId: string;

            /** RegisterSystemInfoResponse allowedClientLogTypes */
            allowedClientLogTypes?: (wm.protobuf.ClientLogType[]|null);

            /** RegisterSystemInfoResponse featureVersion */
            featureVersion: wm.protobuf.IGameFeatureVersion;

            /** RegisterSystemInfoResponse latestCompetitionId */
            latestCompetitionId?: (number|null);

            /** RegisterSystemInfoResponse competitionSchedule */
            competitionSchedule?: (wm.protobuf.IGhostCompetitionSchedule|null);

            /** RegisterSystemInfoResponse scratchNotes */
            scratchNotes?: (string|null);

            /** RegisterSystemInfoResponse inviteFriendCampaignSchedule */
            inviteFriendCampaignSchedule?: (wm.protobuf.IInviteFriendCampaignSchedule|null);

            /** RegisterSystemInfoResponse ghostSelectionMinRedoWait */
            ghostSelectionMinRedoWait: number;

            /** RegisterSystemInfoResponse ghostSelectionMaxRedoWait */
            ghostSelectionMaxRedoWait: number;
        }

        /** Represents a RegisterSystemInfoResponse. */
        class RegisterSystemInfoResponse implements IRegisterSystemInfoResponse {

            /**
             * Constructs a new RegisterSystemInfoResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IRegisterSystemInfoResponse);

            /** RegisterSystemInfoResponse error. */
            public error: wm.protobuf.ErrorCode;

            /** RegisterSystemInfoResponse regionId. */
            public regionId: number;

            /** RegisterSystemInfoResponse placeId. */
            public placeId: string;

            /** RegisterSystemInfoResponse allowedClientLogTypes. */
            public allowedClientLogTypes: wm.protobuf.ClientLogType[];

            /** RegisterSystemInfoResponse featureVersion. */
            public featureVersion: wm.protobuf.IGameFeatureVersion;

            /** RegisterSystemInfoResponse latestCompetitionId. */
            public latestCompetitionId: number;

            /** RegisterSystemInfoResponse competitionSchedule. */
            public competitionSchedule?: (wm.protobuf.IGhostCompetitionSchedule|null);

            /** RegisterSystemInfoResponse scratchNotes. */
            public scratchNotes: string;

            /** RegisterSystemInfoResponse inviteFriendCampaignSchedule. */
            public inviteFriendCampaignSchedule?: (wm.protobuf.IInviteFriendCampaignSchedule|null);

            /** RegisterSystemInfoResponse ghostSelectionMinRedoWait. */
            public ghostSelectionMinRedoWait: number;

            /** RegisterSystemInfoResponse ghostSelectionMaxRedoWait. */
            public ghostSelectionMaxRedoWait: number;

            /**
             * Creates a new RegisterSystemInfoResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RegisterSystemInfoResponse instance
             */
            public static create(properties?: wm.protobuf.IRegisterSystemInfoResponse): wm.protobuf.RegisterSystemInfoResponse;

            /**
             * Encodes the specified RegisterSystemInfoResponse message. Does not implicitly {@link wm.protobuf.RegisterSystemInfoResponse.verify|verify} messages.
             * @param message RegisterSystemInfoResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IRegisterSystemInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RegisterSystemInfoResponse message, length delimited. Does not implicitly {@link wm.protobuf.RegisterSystemInfoResponse.verify|verify} messages.
             * @param message RegisterSystemInfoResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IRegisterSystemInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RegisterSystemInfoResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RegisterSystemInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.RegisterSystemInfoResponse;

            /**
             * Decodes a RegisterSystemInfoResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RegisterSystemInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.RegisterSystemInfoResponse;

            /**
             * Verifies a RegisterSystemInfoResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RegisterSystemInfoResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RegisterSystemInfoResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.RegisterSystemInfoResponse;

            /**
             * Creates a plain object from a RegisterSystemInfoResponse message. Also converts values to other types if specified.
             * @param message RegisterSystemInfoResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.RegisterSystemInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RegisterSystemInfoResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RegisterSystemInfoResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RegisterSystemStatsRequest. */
        interface IRegisterSystemStatsRequest {

            /** RegisterSystemStatsRequest pcbSerial */
            pcbSerial: string;

            /** RegisterSystemStatsRequest driveStats */
            driveStats?: (wm.protobuf.RegisterSystemStatsRequest.IDriveStats|null);

            /** RegisterSystemStatsRequest terminalStats */
            terminalStats?: (wm.protobuf.RegisterSystemStatsRequest.ITerminalStats|null);
        }

        /** Represents a RegisterSystemStatsRequest. */
        class RegisterSystemStatsRequest implements IRegisterSystemStatsRequest {

            /**
             * Constructs a new RegisterSystemStatsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IRegisterSystemStatsRequest);

            /** RegisterSystemStatsRequest pcbSerial. */
            public pcbSerial: string;

            /** RegisterSystemStatsRequest driveStats. */
            public driveStats?: (wm.protobuf.RegisterSystemStatsRequest.IDriveStats|null);

            /** RegisterSystemStatsRequest terminalStats. */
            public terminalStats?: (wm.protobuf.RegisterSystemStatsRequest.ITerminalStats|null);

            /**
             * Creates a new RegisterSystemStatsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RegisterSystemStatsRequest instance
             */
            public static create(properties?: wm.protobuf.IRegisterSystemStatsRequest): wm.protobuf.RegisterSystemStatsRequest;

            /**
             * Encodes the specified RegisterSystemStatsRequest message. Does not implicitly {@link wm.protobuf.RegisterSystemStatsRequest.verify|verify} messages.
             * @param message RegisterSystemStatsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IRegisterSystemStatsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RegisterSystemStatsRequest message, length delimited. Does not implicitly {@link wm.protobuf.RegisterSystemStatsRequest.verify|verify} messages.
             * @param message RegisterSystemStatsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IRegisterSystemStatsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RegisterSystemStatsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RegisterSystemStatsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.RegisterSystemStatsRequest;

            /**
             * Decodes a RegisterSystemStatsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RegisterSystemStatsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.RegisterSystemStatsRequest;

            /**
             * Verifies a RegisterSystemStatsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RegisterSystemStatsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RegisterSystemStatsRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.RegisterSystemStatsRequest;

            /**
             * Creates a plain object from a RegisterSystemStatsRequest message. Also converts values to other types if specified.
             * @param message RegisterSystemStatsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.RegisterSystemStatsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RegisterSystemStatsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RegisterSystemStatsRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace RegisterSystemStatsRequest {

            /** Properties of a DriveStats. */
            interface IDriveStats {

                /** DriveStats operation */
                operation?: (number[]|null);

                /** DriveStats story */
                story?: (number[]|null);

                /** DriveStats versus */
                versus?: (number[]|null);

                /** DriveStats ghost */
                ghost?: (number[]|null);

                /** DriveStats timeAttack */
                timeAttack?: (number[]|null);

                /** DriveStats event */
                event?: (number[]|null);
            }

            /** Represents a DriveStats. */
            class DriveStats implements IDriveStats {

                /**
                 * Constructs a new DriveStats.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm.protobuf.RegisterSystemStatsRequest.IDriveStats);

                /** DriveStats operation. */
                public operation: number[];

                /** DriveStats story. */
                public story: number[];

                /** DriveStats versus. */
                public versus: number[];

                /** DriveStats ghost. */
                public ghost: number[];

                /** DriveStats timeAttack. */
                public timeAttack: number[];

                /** DriveStats event. */
                public event: number[];

                /**
                 * Creates a new DriveStats instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DriveStats instance
                 */
                public static create(properties?: wm.protobuf.RegisterSystemStatsRequest.IDriveStats): wm.protobuf.RegisterSystemStatsRequest.DriveStats;

                /**
                 * Encodes the specified DriveStats message. Does not implicitly {@link wm.protobuf.RegisterSystemStatsRequest.DriveStats.verify|verify} messages.
                 * @param message DriveStats message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm.protobuf.RegisterSystemStatsRequest.IDriveStats, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DriveStats message, length delimited. Does not implicitly {@link wm.protobuf.RegisterSystemStatsRequest.DriveStats.verify|verify} messages.
                 * @param message DriveStats message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm.protobuf.RegisterSystemStatsRequest.IDriveStats, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DriveStats message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DriveStats
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.RegisterSystemStatsRequest.DriveStats;

                /**
                 * Decodes a DriveStats message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DriveStats
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.RegisterSystemStatsRequest.DriveStats;

                /**
                 * Verifies a DriveStats message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DriveStats message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DriveStats
                 */
                public static fromObject(object: { [k: string]: any }): wm.protobuf.RegisterSystemStatsRequest.DriveStats;

                /**
                 * Creates a plain object from a DriveStats message. Also converts values to other types if specified.
                 * @param message DriveStats
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm.protobuf.RegisterSystemStatsRequest.DriveStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DriveStats to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DriveStats
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TerminalStats. */
            interface ITerminalStats {

                /** TerminalStats operation */
                operation?: (number[]|null);
            }

            /** Represents a TerminalStats. */
            class TerminalStats implements ITerminalStats {

                /**
                 * Constructs a new TerminalStats.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm.protobuf.RegisterSystemStatsRequest.ITerminalStats);

                /** TerminalStats operation. */
                public operation: number[];

                /**
                 * Creates a new TerminalStats instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TerminalStats instance
                 */
                public static create(properties?: wm.protobuf.RegisterSystemStatsRequest.ITerminalStats): wm.protobuf.RegisterSystemStatsRequest.TerminalStats;

                /**
                 * Encodes the specified TerminalStats message. Does not implicitly {@link wm.protobuf.RegisterSystemStatsRequest.TerminalStats.verify|verify} messages.
                 * @param message TerminalStats message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm.protobuf.RegisterSystemStatsRequest.ITerminalStats, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TerminalStats message, length delimited. Does not implicitly {@link wm.protobuf.RegisterSystemStatsRequest.TerminalStats.verify|verify} messages.
                 * @param message TerminalStats message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm.protobuf.RegisterSystemStatsRequest.ITerminalStats, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TerminalStats message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TerminalStats
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.RegisterSystemStatsRequest.TerminalStats;

                /**
                 * Decodes a TerminalStats message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TerminalStats
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.RegisterSystemStatsRequest.TerminalStats;

                /**
                 * Verifies a TerminalStats message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TerminalStats message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TerminalStats
                 */
                public static fromObject(object: { [k: string]: any }): wm.protobuf.RegisterSystemStatsRequest.TerminalStats;

                /**
                 * Creates a plain object from a TerminalStats message. Also converts values to other types if specified.
                 * @param message TerminalStats
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm.protobuf.RegisterSystemStatsRequest.TerminalStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TerminalStats to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TerminalStats
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a RegisterSystemStatsResponse. */
        interface IRegisterSystemStatsResponse {

            /** RegisterSystemStatsResponse error */
            error: wm.protobuf.ErrorCode;
        }

        /** Represents a RegisterSystemStatsResponse. */
        class RegisterSystemStatsResponse implements IRegisterSystemStatsResponse {

            /**
             * Constructs a new RegisterSystemStatsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IRegisterSystemStatsResponse);

            /** RegisterSystemStatsResponse error. */
            public error: wm.protobuf.ErrorCode;

            /**
             * Creates a new RegisterSystemStatsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RegisterSystemStatsResponse instance
             */
            public static create(properties?: wm.protobuf.IRegisterSystemStatsResponse): wm.protobuf.RegisterSystemStatsResponse;

            /**
             * Encodes the specified RegisterSystemStatsResponse message. Does not implicitly {@link wm.protobuf.RegisterSystemStatsResponse.verify|verify} messages.
             * @param message RegisterSystemStatsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IRegisterSystemStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RegisterSystemStatsResponse message, length delimited. Does not implicitly {@link wm.protobuf.RegisterSystemStatsResponse.verify|verify} messages.
             * @param message RegisterSystemStatsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IRegisterSystemStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RegisterSystemStatsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RegisterSystemStatsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.RegisterSystemStatsResponse;

            /**
             * Decodes a RegisterSystemStatsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RegisterSystemStatsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.RegisterSystemStatsResponse;

            /**
             * Verifies a RegisterSystemStatsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RegisterSystemStatsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RegisterSystemStatsResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.RegisterSystemStatsResponse;

            /**
             * Creates a plain object from a RegisterSystemStatsResponse message. Also converts values to other types if specified.
             * @param message RegisterSystemStatsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.RegisterSystemStatsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RegisterSystemStatsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RegisterSystemStatsResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RegisterGhostTrailRequest. */
        interface IRegisterGhostTrailRequest {

            /** RegisterGhostTrailRequest ghostSessionId */
            ghostSessionId: (number|Long);

            /** RegisterGhostTrailRequest ghost */
            ghost: wm.protobuf.IGhostCar;

            /** RegisterGhostTrailRequest trail */
            trail: Uint8Array;

            /** RegisterGhostTrailRequest time */
            time?: (number|null);

            /** RegisterGhostTrailRequest driveData */
            driveData?: (wm.protobuf.IBinaryData|null);

            /** RegisterGhostTrailRequest trendBinaryByArea */
            trendBinaryByArea?: (wm.protobuf.IBinaryData|null);

            /** RegisterGhostTrailRequest trendBinaryByCar */
            trendBinaryByCar?: (wm.protobuf.IBinaryData|null);

            /** RegisterGhostTrailRequest trendBinaryByUser */
            trendBinaryByUser?: (wm.protobuf.IBinaryData|null);
        }

        /** Represents a RegisterGhostTrailRequest. */
        class RegisterGhostTrailRequest implements IRegisterGhostTrailRequest {

            /**
             * Constructs a new RegisterGhostTrailRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IRegisterGhostTrailRequest);

            /** RegisterGhostTrailRequest ghostSessionId. */
            public ghostSessionId: (number|Long);

            /** RegisterGhostTrailRequest ghost. */
            public ghost: wm.protobuf.IGhostCar;

            /** RegisterGhostTrailRequest trail. */
            public trail: Uint8Array;

            /** RegisterGhostTrailRequest time. */
            public time: number;

            /** RegisterGhostTrailRequest driveData. */
            public driveData?: (wm.protobuf.IBinaryData|null);

            /** RegisterGhostTrailRequest trendBinaryByArea. */
            public trendBinaryByArea?: (wm.protobuf.IBinaryData|null);

            /** RegisterGhostTrailRequest trendBinaryByCar. */
            public trendBinaryByCar?: (wm.protobuf.IBinaryData|null);

            /** RegisterGhostTrailRequest trendBinaryByUser. */
            public trendBinaryByUser?: (wm.protobuf.IBinaryData|null);

            /**
             * Creates a new RegisterGhostTrailRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RegisterGhostTrailRequest instance
             */
            public static create(properties?: wm.protobuf.IRegisterGhostTrailRequest): wm.protobuf.RegisterGhostTrailRequest;

            /**
             * Encodes the specified RegisterGhostTrailRequest message. Does not implicitly {@link wm.protobuf.RegisterGhostTrailRequest.verify|verify} messages.
             * @param message RegisterGhostTrailRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IRegisterGhostTrailRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RegisterGhostTrailRequest message, length delimited. Does not implicitly {@link wm.protobuf.RegisterGhostTrailRequest.verify|verify} messages.
             * @param message RegisterGhostTrailRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IRegisterGhostTrailRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RegisterGhostTrailRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RegisterGhostTrailRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.RegisterGhostTrailRequest;

            /**
             * Decodes a RegisterGhostTrailRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RegisterGhostTrailRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.RegisterGhostTrailRequest;

            /**
             * Verifies a RegisterGhostTrailRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RegisterGhostTrailRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RegisterGhostTrailRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.RegisterGhostTrailRequest;

            /**
             * Creates a plain object from a RegisterGhostTrailRequest message. Also converts values to other types if specified.
             * @param message RegisterGhostTrailRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.RegisterGhostTrailRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RegisterGhostTrailRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RegisterGhostTrailRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RegisterGhostTrailResponse. */
        interface IRegisterGhostTrailResponse {

            /** RegisterGhostTrailResponse error */
            error: wm.protobuf.ErrorCode;
        }

        /** Represents a RegisterGhostTrailResponse. */
        class RegisterGhostTrailResponse implements IRegisterGhostTrailResponse {

            /**
             * Constructs a new RegisterGhostTrailResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IRegisterGhostTrailResponse);

            /** RegisterGhostTrailResponse error. */
            public error: wm.protobuf.ErrorCode;

            /**
             * Creates a new RegisterGhostTrailResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RegisterGhostTrailResponse instance
             */
            public static create(properties?: wm.protobuf.IRegisterGhostTrailResponse): wm.protobuf.RegisterGhostTrailResponse;

            /**
             * Encodes the specified RegisterGhostTrailResponse message. Does not implicitly {@link wm.protobuf.RegisterGhostTrailResponse.verify|verify} messages.
             * @param message RegisterGhostTrailResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IRegisterGhostTrailResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RegisterGhostTrailResponse message, length delimited. Does not implicitly {@link wm.protobuf.RegisterGhostTrailResponse.verify|verify} messages.
             * @param message RegisterGhostTrailResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IRegisterGhostTrailResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RegisterGhostTrailResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RegisterGhostTrailResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.RegisterGhostTrailResponse;

            /**
             * Decodes a RegisterGhostTrailResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RegisterGhostTrailResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.RegisterGhostTrailResponse;

            /**
             * Verifies a RegisterGhostTrailResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RegisterGhostTrailResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RegisterGhostTrailResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.RegisterGhostTrailResponse;

            /**
             * Creates a plain object from a RegisterGhostTrailResponse message. Also converts values to other types if specified.
             * @param message RegisterGhostTrailResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.RegisterGhostTrailResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RegisterGhostTrailResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RegisterGhostTrailResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadUserRequest. */
        interface ILoadUserRequest {

            /** LoadUserRequest cardChipId */
            cardChipId?: (string|null);

            /** LoadUserRequest accessCode */
            accessCode?: (string|null);

            /** LoadUserRequest cardTypeCode */
            cardTypeCode?: (number|null);

            /** LoadUserRequest cardRegionCode */
            cardRegionCode?: (number|null);

            /** LoadUserRequest device */
            device?: (wm.protobuf.DeviceType|null);

            /** LoadUserRequest userId */
            userId?: (number|null);

            /** LoadUserRequest romVersion */
            romVersion: number;

            /** LoadUserRequest maxCars */
            maxCars: number;

            /** LoadUserRequest createUser */
            createUser?: (boolean|null);
        }

        /** Represents a LoadUserRequest. */
        class LoadUserRequest implements ILoadUserRequest {

            /**
             * Constructs a new LoadUserRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ILoadUserRequest);

            /** LoadUserRequest cardChipId. */
            public cardChipId: string;

            /** LoadUserRequest accessCode. */
            public accessCode: string;

            /** LoadUserRequest cardTypeCode. */
            public cardTypeCode: number;

            /** LoadUserRequest cardRegionCode. */
            public cardRegionCode: number;

            /** LoadUserRequest device. */
            public device: wm.protobuf.DeviceType;

            /** LoadUserRequest userId. */
            public userId: number;

            /** LoadUserRequest romVersion. */
            public romVersion: number;

            /** LoadUserRequest maxCars. */
            public maxCars: number;

            /** LoadUserRequest createUser. */
            public createUser: boolean;

            /**
             * Creates a new LoadUserRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadUserRequest instance
             */
            public static create(properties?: wm.protobuf.ILoadUserRequest): wm.protobuf.LoadUserRequest;

            /**
             * Encodes the specified LoadUserRequest message. Does not implicitly {@link wm.protobuf.LoadUserRequest.verify|verify} messages.
             * @param message LoadUserRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ILoadUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadUserRequest message, length delimited. Does not implicitly {@link wm.protobuf.LoadUserRequest.verify|verify} messages.
             * @param message LoadUserRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ILoadUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadUserRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadUserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadUserRequest;

            /**
             * Decodes a LoadUserRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadUserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadUserRequest;

            /**
             * Verifies a LoadUserRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadUserRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadUserRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadUserRequest;

            /**
             * Creates a plain object from a LoadUserRequest message. Also converts values to other types if specified.
             * @param message LoadUserRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.LoadUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadUserRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadUserRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadUserResponse. */
        interface ILoadUserResponse {

            /** LoadUserResponse error */
            error: wm.protobuf.ErrorCode;

            /** LoadUserResponse unlockAt */
            unlockAt?: (number|null);

            /** LoadUserResponse accessCode */
            accessCode?: (string|null);

            /** LoadUserResponse banapassportAmId */
            banapassportAmId?: (number|null);

            /** LoadUserResponse mbid */
            mbid?: (number|null);

            /** LoadUserResponse userId */
            userId?: (number|null);

            /** LoadUserResponse numOfOwnedCars */
            numOfOwnedCars: number;

            /** LoadUserResponse cars */
            cars?: (wm.protobuf.ICar[]|null);

            /** LoadUserResponse carStates */
            carStates?: (wm.protobuf.LoadUserResponse.ICarState[]|null);

            /** LoadUserResponse unusedCarTickets */
            unusedCarTickets?: (wm.protobuf.IUserItem[]|null);

            /** LoadUserResponse tutorials */
            tutorials?: (boolean[]|null);

            /** LoadUserResponse competitionUserState */
            competitionUserState?: (wm.protobuf.GhostCompetitionParticipantState|null);

            /** LoadUserResponse windowStickerString */
            windowStickerString?: (string|null);

            /** LoadUserResponse windowStickerFont */
            windowStickerFont?: (number|null);

            /** LoadUserResponse spappState */
            spappState: wm.protobuf.SmartphoneAppState;

            /** LoadUserResponse transferState */
            transferState: wm.protobuf.TransferState;

            /** LoadUserResponse totalVsStarCount */
            totalVsStarCount?: (number|null);

            /** LoadUserResponse totalVsMedalPoint */
            totalVsMedalPoint?: (number|null);

            /** LoadUserResponse copiedCar */
            copiedCar?: (wm.protobuf.ICopiedCar|null);

            /** LoadUserResponse wasCreatedToday */
            wasCreatedToday?: (boolean|null);

            /** LoadUserResponse participatedInInviteFriendCampaign */
            participatedInInviteFriendCampaign?: (boolean|null);
        }

        /** Represents a LoadUserResponse. */
        class LoadUserResponse implements ILoadUserResponse {

            /**
             * Constructs a new LoadUserResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ILoadUserResponse);

            /** LoadUserResponse error. */
            public error: wm.protobuf.ErrorCode;

            /** LoadUserResponse unlockAt. */
            public unlockAt: number;

            /** LoadUserResponse accessCode. */
            public accessCode: string;

            /** LoadUserResponse banapassportAmId. */
            public banapassportAmId: number;

            /** LoadUserResponse mbid. */
            public mbid: number;

            /** LoadUserResponse userId. */
            public userId: number;

            /** LoadUserResponse numOfOwnedCars. */
            public numOfOwnedCars: number;

            /** LoadUserResponse cars. */
            public cars: wm.protobuf.ICar[];

            /** LoadUserResponse carStates. */
            public carStates: wm.protobuf.LoadUserResponse.ICarState[];

            /** LoadUserResponse unusedCarTickets. */
            public unusedCarTickets: wm.protobuf.IUserItem[];

            /** LoadUserResponse tutorials. */
            public tutorials: boolean[];

            /** LoadUserResponse competitionUserState. */
            public competitionUserState: wm.protobuf.GhostCompetitionParticipantState;

            /** LoadUserResponse windowStickerString. */
            public windowStickerString: string;

            /** LoadUserResponse windowStickerFont. */
            public windowStickerFont: number;

            /** LoadUserResponse spappState. */
            public spappState: wm.protobuf.SmartphoneAppState;

            /** LoadUserResponse transferState. */
            public transferState: wm.protobuf.TransferState;

            /** LoadUserResponse totalVsStarCount. */
            public totalVsStarCount: number;

            /** LoadUserResponse totalVsMedalPoint. */
            public totalVsMedalPoint: number;

            /** LoadUserResponse copiedCar. */
            public copiedCar?: (wm.protobuf.ICopiedCar|null);

            /** LoadUserResponse wasCreatedToday. */
            public wasCreatedToday: boolean;

            /** LoadUserResponse participatedInInviteFriendCampaign. */
            public participatedInInviteFriendCampaign: boolean;

            /**
             * Creates a new LoadUserResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadUserResponse instance
             */
            public static create(properties?: wm.protobuf.ILoadUserResponse): wm.protobuf.LoadUserResponse;

            /**
             * Encodes the specified LoadUserResponse message. Does not implicitly {@link wm.protobuf.LoadUserResponse.verify|verify} messages.
             * @param message LoadUserResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ILoadUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadUserResponse message, length delimited. Does not implicitly {@link wm.protobuf.LoadUserResponse.verify|verify} messages.
             * @param message LoadUserResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ILoadUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadUserResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadUserResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadUserResponse;

            /**
             * Decodes a LoadUserResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadUserResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadUserResponse;

            /**
             * Verifies a LoadUserResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadUserResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadUserResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadUserResponse;

            /**
             * Creates a plain object from a LoadUserResponse message. Also converts values to other types if specified.
             * @param message LoadUserResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.LoadUserResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadUserResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadUserResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace LoadUserResponse {

            /** Properties of a CarState. */
            interface ICarState {

                /** CarState hasOpponentGhost */
                hasOpponentGhost: boolean;

                /** CarState competitionState */
                competitionState?: (wm.protobuf.GhostCompetitionParticipantState|null);

                /** CarState toBeDeleted */
                toBeDeleted: boolean;

                /** CarState eventJoined */
                eventJoined: boolean;

                /** CarState transferred */
                transferred: boolean;

                /** CarState driveLastPlayedAt */
                driveLastPlayedAt?: (number|null);
            }

            /** Represents a CarState. */
            class CarState implements ICarState {

                /**
                 * Constructs a new CarState.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm.protobuf.LoadUserResponse.ICarState);

                /** CarState hasOpponentGhost. */
                public hasOpponentGhost: boolean;

                /** CarState competitionState. */
                public competitionState: wm.protobuf.GhostCompetitionParticipantState;

                /** CarState toBeDeleted. */
                public toBeDeleted: boolean;

                /** CarState eventJoined. */
                public eventJoined: boolean;

                /** CarState transferred. */
                public transferred: boolean;

                /** CarState driveLastPlayedAt. */
                public driveLastPlayedAt: number;

                /**
                 * Creates a new CarState instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CarState instance
                 */
                public static create(properties?: wm.protobuf.LoadUserResponse.ICarState): wm.protobuf.LoadUserResponse.CarState;

                /**
                 * Encodes the specified CarState message. Does not implicitly {@link wm.protobuf.LoadUserResponse.CarState.verify|verify} messages.
                 * @param message CarState message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm.protobuf.LoadUserResponse.ICarState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CarState message, length delimited. Does not implicitly {@link wm.protobuf.LoadUserResponse.CarState.verify|verify} messages.
                 * @param message CarState message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm.protobuf.LoadUserResponse.ICarState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CarState message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CarState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadUserResponse.CarState;

                /**
                 * Decodes a CarState message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CarState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadUserResponse.CarState;

                /**
                 * Verifies a CarState message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CarState message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CarState
                 */
                public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadUserResponse.CarState;

                /**
                 * Creates a plain object from a CarState message. Also converts values to other types if specified.
                 * @param message CarState
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm.protobuf.LoadUserResponse.CarState, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CarState to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CarState
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an UpdateUserSessionRequest. */
        interface IUpdateUserSessionRequest {

            /** UpdateUserSessionRequest userId */
            userId?: (number|null);

            /** UpdateUserSessionRequest cardChipId */
            cardChipId?: (string|null);

            /** UpdateUserSessionRequest accessCode */
            accessCode?: (string|null);

            /** UpdateUserSessionRequest cardTypeCode */
            cardTypeCode?: (number|null);

            /** UpdateUserSessionRequest cardRegionCode */
            cardRegionCode?: (number|null);

            /** UpdateUserSessionRequest device */
            device?: (wm.protobuf.DeviceType|null);

            /** UpdateUserSessionRequest unlockAt */
            unlockAt: number;

            /** UpdateUserSessionRequest acceptVs */
            acceptVs?: (boolean|null);
        }

        /** Represents an UpdateUserSessionRequest. */
        class UpdateUserSessionRequest implements IUpdateUserSessionRequest {

            /**
             * Constructs a new UpdateUserSessionRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IUpdateUserSessionRequest);

            /** UpdateUserSessionRequest userId. */
            public userId: number;

            /** UpdateUserSessionRequest cardChipId. */
            public cardChipId: string;

            /** UpdateUserSessionRequest accessCode. */
            public accessCode: string;

            /** UpdateUserSessionRequest cardTypeCode. */
            public cardTypeCode: number;

            /** UpdateUserSessionRequest cardRegionCode. */
            public cardRegionCode: number;

            /** UpdateUserSessionRequest device. */
            public device: wm.protobuf.DeviceType;

            /** UpdateUserSessionRequest unlockAt. */
            public unlockAt: number;

            /** UpdateUserSessionRequest acceptVs. */
            public acceptVs: boolean;

            /**
             * Creates a new UpdateUserSessionRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateUserSessionRequest instance
             */
            public static create(properties?: wm.protobuf.IUpdateUserSessionRequest): wm.protobuf.UpdateUserSessionRequest;

            /**
             * Encodes the specified UpdateUserSessionRequest message. Does not implicitly {@link wm.protobuf.UpdateUserSessionRequest.verify|verify} messages.
             * @param message UpdateUserSessionRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IUpdateUserSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateUserSessionRequest message, length delimited. Does not implicitly {@link wm.protobuf.UpdateUserSessionRequest.verify|verify} messages.
             * @param message UpdateUserSessionRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IUpdateUserSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateUserSessionRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateUserSessionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.UpdateUserSessionRequest;

            /**
             * Decodes an UpdateUserSessionRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateUserSessionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.UpdateUserSessionRequest;

            /**
             * Verifies an UpdateUserSessionRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateUserSessionRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateUserSessionRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.UpdateUserSessionRequest;

            /**
             * Creates a plain object from an UpdateUserSessionRequest message. Also converts values to other types if specified.
             * @param message UpdateUserSessionRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.UpdateUserSessionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateUserSessionRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UpdateUserSessionRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an UpdateUserSessionResponse. */
        interface IUpdateUserSessionResponse {

            /** UpdateUserSessionResponse error */
            error: wm.protobuf.ErrorCode;
        }

        /** Represents an UpdateUserSessionResponse. */
        class UpdateUserSessionResponse implements IUpdateUserSessionResponse {

            /**
             * Constructs a new UpdateUserSessionResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IUpdateUserSessionResponse);

            /** UpdateUserSessionResponse error. */
            public error: wm.protobuf.ErrorCode;

            /**
             * Creates a new UpdateUserSessionResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateUserSessionResponse instance
             */
            public static create(properties?: wm.protobuf.IUpdateUserSessionResponse): wm.protobuf.UpdateUserSessionResponse;

            /**
             * Encodes the specified UpdateUserSessionResponse message. Does not implicitly {@link wm.protobuf.UpdateUserSessionResponse.verify|verify} messages.
             * @param message UpdateUserSessionResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IUpdateUserSessionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateUserSessionResponse message, length delimited. Does not implicitly {@link wm.protobuf.UpdateUserSessionResponse.verify|verify} messages.
             * @param message UpdateUserSessionResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IUpdateUserSessionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateUserSessionResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateUserSessionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.UpdateUserSessionResponse;

            /**
             * Decodes an UpdateUserSessionResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateUserSessionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.UpdateUserSessionResponse;

            /**
             * Verifies an UpdateUserSessionResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateUserSessionResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateUserSessionResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.UpdateUserSessionResponse;

            /**
             * Creates a plain object from an UpdateUserSessionResponse message. Also converts values to other types if specified.
             * @param message UpdateUserSessionResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.UpdateUserSessionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateUserSessionResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UpdateUserSessionResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadDriveInformationRequest. */
        interface ILoadDriveInformationRequest {

            /** LoadDriveInformationRequest userId */
            userId?: (number|null);
        }

        /** Represents a LoadDriveInformationRequest. */
        class LoadDriveInformationRequest implements ILoadDriveInformationRequest {

            /**
             * Constructs a new LoadDriveInformationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ILoadDriveInformationRequest);

            /** LoadDriveInformationRequest userId. */
            public userId: number;

            /**
             * Creates a new LoadDriveInformationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadDriveInformationRequest instance
             */
            public static create(properties?: wm.protobuf.ILoadDriveInformationRequest): wm.protobuf.LoadDriveInformationRequest;

            /**
             * Encodes the specified LoadDriveInformationRequest message. Does not implicitly {@link wm.protobuf.LoadDriveInformationRequest.verify|verify} messages.
             * @param message LoadDriveInformationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ILoadDriveInformationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadDriveInformationRequest message, length delimited. Does not implicitly {@link wm.protobuf.LoadDriveInformationRequest.verify|verify} messages.
             * @param message LoadDriveInformationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ILoadDriveInformationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadDriveInformationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadDriveInformationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadDriveInformationRequest;

            /**
             * Decodes a LoadDriveInformationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadDriveInformationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadDriveInformationRequest;

            /**
             * Verifies a LoadDriveInformationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadDriveInformationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadDriveInformationRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadDriveInformationRequest;

            /**
             * Creates a plain object from a LoadDriveInformationRequest message. Also converts values to other types if specified.
             * @param message LoadDriveInformationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.LoadDriveInformationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadDriveInformationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadDriveInformationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadDriveInformationResponse. */
        interface ILoadDriveInformationResponse {

            /** LoadDriveInformationResponse error */
            error: wm.protobuf.ErrorCode;

            /** LoadDriveInformationResponse noticeWindow */
            noticeWindow?: (wm.protobuf.NoticeEntry[]|null);

            /** LoadDriveInformationResponse noticeWindowMessage */
            noticeWindowMessage?: (string[]|null);

            /** LoadDriveInformationResponse transferNotice */
            transferNotice?: (wm.protobuf.ITransferNotice|null);

            /** LoadDriveInformationResponse restrictedModels */
            restrictedModels?: (number[]|null);

            /** LoadDriveInformationResponse announceFeature */
            announceFeature?: (boolean|null);

            /** LoadDriveInformationResponse announceMobile */
            announceMobile?: (boolean|null);

            /** LoadDriveInformationResponse availableTickets */
            availableTickets?: (wm.protobuf.IUserItem[]|null);
        }

        /** Represents a LoadDriveInformationResponse. */
        class LoadDriveInformationResponse implements ILoadDriveInformationResponse {

            /**
             * Constructs a new LoadDriveInformationResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ILoadDriveInformationResponse);

            /** LoadDriveInformationResponse error. */
            public error: wm.protobuf.ErrorCode;

            /** LoadDriveInformationResponse noticeWindow. */
            public noticeWindow: wm.protobuf.NoticeEntry[];

            /** LoadDriveInformationResponse noticeWindowMessage. */
            public noticeWindowMessage: string[];

            /** LoadDriveInformationResponse transferNotice. */
            public transferNotice?: (wm.protobuf.ITransferNotice|null);

            /** LoadDriveInformationResponse restrictedModels. */
            public restrictedModels: number[];

            /** LoadDriveInformationResponse announceFeature. */
            public announceFeature: boolean;

            /** LoadDriveInformationResponse announceMobile. */
            public announceMobile: boolean;

            /** LoadDriveInformationResponse availableTickets. */
            public availableTickets: wm.protobuf.IUserItem[];

            /**
             * Creates a new LoadDriveInformationResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadDriveInformationResponse instance
             */
            public static create(properties?: wm.protobuf.ILoadDriveInformationResponse): wm.protobuf.LoadDriveInformationResponse;

            /**
             * Encodes the specified LoadDriveInformationResponse message. Does not implicitly {@link wm.protobuf.LoadDriveInformationResponse.verify|verify} messages.
             * @param message LoadDriveInformationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ILoadDriveInformationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadDriveInformationResponse message, length delimited. Does not implicitly {@link wm.protobuf.LoadDriveInformationResponse.verify|verify} messages.
             * @param message LoadDriveInformationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ILoadDriveInformationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadDriveInformationResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadDriveInformationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadDriveInformationResponse;

            /**
             * Decodes a LoadDriveInformationResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadDriveInformationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadDriveInformationResponse;

            /**
             * Verifies a LoadDriveInformationResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadDriveInformationResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadDriveInformationResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadDriveInformationResponse;

            /**
             * Creates a plain object from a LoadDriveInformationResponse message. Also converts values to other types if specified.
             * @param message LoadDriveInformationResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.LoadDriveInformationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadDriveInformationResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadDriveInformationResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadCarRequest. */
        interface ILoadCarRequest {

            /** LoadCarRequest carId */
            carId: number;

            /** LoadCarRequest eventMode */
            eventMode?: (boolean|null);

            /** LoadCarRequest eventModeSerial */
            eventModeSerial?: (string|null);
        }

        /** Represents a LoadCarRequest. */
        class LoadCarRequest implements ILoadCarRequest {

            /**
             * Constructs a new LoadCarRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ILoadCarRequest);

            /** LoadCarRequest carId. */
            public carId: number;

            /** LoadCarRequest eventMode. */
            public eventMode: boolean;

            /** LoadCarRequest eventModeSerial. */
            public eventModeSerial: string;

            /**
             * Creates a new LoadCarRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadCarRequest instance
             */
            public static create(properties?: wm.protobuf.ILoadCarRequest): wm.protobuf.LoadCarRequest;

            /**
             * Encodes the specified LoadCarRequest message. Does not implicitly {@link wm.protobuf.LoadCarRequest.verify|verify} messages.
             * @param message LoadCarRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ILoadCarRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadCarRequest message, length delimited. Does not implicitly {@link wm.protobuf.LoadCarRequest.verify|verify} messages.
             * @param message LoadCarRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ILoadCarRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadCarRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadCarRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadCarRequest;

            /**
             * Decodes a LoadCarRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadCarRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadCarRequest;

            /**
             * Verifies a LoadCarRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadCarRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadCarRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadCarRequest;

            /**
             * Creates a plain object from a LoadCarRequest message. Also converts values to other types if specified.
             * @param message LoadCarRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.LoadCarRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadCarRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadCarRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadCarResponse. */
        interface ILoadCarResponse {

            /** LoadCarResponse error */
            error: wm.protobuf.ErrorCode;

            /** LoadCarResponse car */
            car: wm.protobuf.ICar;

            /** LoadCarResponse tuningPoint */
            tuningPoint: number;

            /** LoadCarResponse odometer */
            odometer: number;

            /** LoadCarResponse playCount */
            playCount: number;

            /** LoadCarResponse earnedCustomColor */
            earnedCustomColor: boolean;

            /** LoadCarResponse setting */
            setting: wm.protobuf.ICarSetting;

            /** LoadCarResponse vsPlayCount */
            vsPlayCount: number;

            /** LoadCarResponse vsBurstCount */
            vsBurstCount: number;

            /** LoadCarResponse vsStarCount */
            vsStarCount: number;

            /** LoadCarResponse vsStarCountMax */
            vsStarCountMax: number;

            /** LoadCarResponse vsCoolOrWild */
            vsCoolOrWild: number;

            /** LoadCarResponse vsSmoothOrRough */
            vsSmoothOrRough: number;

            /** LoadCarResponse vsTripleStarMedals */
            vsTripleStarMedals: number;

            /** LoadCarResponse vsDoubleStarMedals */
            vsDoubleStarMedals: number;

            /** LoadCarResponse vsSingleStarMedals */
            vsSingleStarMedals: number;

            /** LoadCarResponse vsPlainMedals */
            vsPlainMedals: number;

            /** LoadCarResponse rgPlayCount */
            rgPlayCount: number;

            /** LoadCarResponse rgWinCount */
            rgWinCount: number;

            /** LoadCarResponse rgTrophy */
            rgTrophy: number;

            /** LoadCarResponse rgPreviousVersionPlayCount */
            rgPreviousVersionPlayCount: number;

            /** LoadCarResponse rgScore */
            rgScore: number;

            /** LoadCarResponse rgRegionMapScore */
            rgRegionMapScore?: (number[]|null);

            /** LoadCarResponse rgRegions */
            rgRegions?: (number[]|null);

            /** LoadCarResponse rgStamp */
            rgStamp: number;

            /** LoadCarResponse rgAcquireAllCrowns */
            rgAcquireAllCrowns: boolean;

            /** LoadCarResponse dressupLevel */
            dressupLevel: number;

            /** LoadCarResponse dressupPoint */
            dressupPoint: number;

            /** LoadCarResponse stPlayCount */
            stPlayCount: number;

            /** LoadCarResponse stClearBits */
            stClearBits: number;

            /** LoadCarResponse stClearDivCount */
            stClearDivCount: number;

            /** LoadCarResponse stClearCount */
            stClearCount: number;

            /** LoadCarResponse stLoseBits */
            stLoseBits: (number|Long);

            /** LoadCarResponse stConsecutiveWins */
            stConsecutiveWins: number;

            /** LoadCarResponse stConsecutiveWinsMax */
            stConsecutiveWinsMax: number;

            /** LoadCarResponse stCompleted_100Episodes */
            stCompleted_100Episodes: boolean;

            /** LoadCarResponse challenger */
            challenger?: (wm.protobuf.IChallengerCar|null);

            /** LoadCarResponse challengerReturnCount */
            challengerReturnCount?: (number|null);

            /** LoadCarResponse numOfChallengers */
            numOfChallengers?: (number|null);

            /** LoadCarResponse opponentGhost */
            opponentGhost?: (wm.protobuf.IGhostCar|null);

            /** LoadCarResponse opponentTrailId */
            opponentTrailId?: (number|Long|null);

            /** LoadCarResponse opponentCompetitionId */
            opponentCompetitionId?: (number|null);

            /** LoadCarResponse competitionParameter */
            competitionParameter?: (wm.protobuf.IGhostCompetitionParameter|null);

            /** LoadCarResponse specialTitles */
            specialTitles?: (string[]|null);

            /** LoadCarResponse earnedTitles */
            earnedTitles?: (string[]|null);

            /** LoadCarResponse ownedItems */
            ownedItems?: (wm.protobuf.ICarItem[]|null);

            /** LoadCarResponse auraMotifAutoChange */
            auraMotifAutoChange: boolean;

            /** LoadCarResponse screenshotCount */
            screenshotCount: number;

            /** LoadCarResponse announceEventModePrize */
            announceEventModePrize?: (boolean|null);

            /** LoadCarResponse transferred */
            transferred: boolean;

            /** LoadCarResponse driveLastPlayedAt */
            driveLastPlayedAt?: (number|null);

            /** LoadCarResponse insurance */
            insurance?: (wm.protobuf.LoadCarResponse.IStoryInsurance|null);
        }

        /** Represents a LoadCarResponse. */
        class LoadCarResponse implements ILoadCarResponse {

            /**
             * Constructs a new LoadCarResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ILoadCarResponse);

            /** LoadCarResponse error. */
            public error: wm.protobuf.ErrorCode;

            /** LoadCarResponse car. */
            public car: wm.protobuf.ICar;

            /** LoadCarResponse tuningPoint. */
            public tuningPoint: number;

            /** LoadCarResponse odometer. */
            public odometer: number;

            /** LoadCarResponse playCount. */
            public playCount: number;

            /** LoadCarResponse earnedCustomColor. */
            public earnedCustomColor: boolean;

            /** LoadCarResponse setting. */
            public setting: wm.protobuf.ICarSetting;

            /** LoadCarResponse vsPlayCount. */
            public vsPlayCount: number;

            /** LoadCarResponse vsBurstCount. */
            public vsBurstCount: number;

            /** LoadCarResponse vsStarCount. */
            public vsStarCount: number;

            /** LoadCarResponse vsStarCountMax. */
            public vsStarCountMax: number;

            /** LoadCarResponse vsCoolOrWild. */
            public vsCoolOrWild: number;

            /** LoadCarResponse vsSmoothOrRough. */
            public vsSmoothOrRough: number;

            /** LoadCarResponse vsTripleStarMedals. */
            public vsTripleStarMedals: number;

            /** LoadCarResponse vsDoubleStarMedals. */
            public vsDoubleStarMedals: number;

            /** LoadCarResponse vsSingleStarMedals. */
            public vsSingleStarMedals: number;

            /** LoadCarResponse vsPlainMedals. */
            public vsPlainMedals: number;

            /** LoadCarResponse rgPlayCount. */
            public rgPlayCount: number;

            /** LoadCarResponse rgWinCount. */
            public rgWinCount: number;

            /** LoadCarResponse rgTrophy. */
            public rgTrophy: number;

            /** LoadCarResponse rgPreviousVersionPlayCount. */
            public rgPreviousVersionPlayCount: number;

            /** LoadCarResponse rgScore. */
            public rgScore: number;

            /** LoadCarResponse rgRegionMapScore. */
            public rgRegionMapScore: number[];

            /** LoadCarResponse rgRegions. */
            public rgRegions: number[];

            /** LoadCarResponse rgStamp. */
            public rgStamp: number;

            /** LoadCarResponse rgAcquireAllCrowns. */
            public rgAcquireAllCrowns: boolean;

            /** LoadCarResponse dressupLevel. */
            public dressupLevel: number;

            /** LoadCarResponse dressupPoint. */
            public dressupPoint: number;

            /** LoadCarResponse stPlayCount. */
            public stPlayCount: number;

            /** LoadCarResponse stClearBits. */
            public stClearBits: number;

            /** LoadCarResponse stClearDivCount. */
            public stClearDivCount: number;

            /** LoadCarResponse stClearCount. */
            public stClearCount: number;

            /** LoadCarResponse stLoseBits. */
            public stLoseBits: (number|Long);

            /** LoadCarResponse stConsecutiveWins. */
            public stConsecutiveWins: number;

            /** LoadCarResponse stConsecutiveWinsMax. */
            public stConsecutiveWinsMax: number;

            /** LoadCarResponse stCompleted_100Episodes. */
            public stCompleted_100Episodes: boolean;

            /** LoadCarResponse challenger. */
            public challenger?: (wm.protobuf.IChallengerCar|null);

            /** LoadCarResponse challengerReturnCount. */
            public challengerReturnCount: number;

            /** LoadCarResponse numOfChallengers. */
            public numOfChallengers: number;

            /** LoadCarResponse opponentGhost. */
            public opponentGhost?: (wm.protobuf.IGhostCar|null);

            /** LoadCarResponse opponentTrailId. */
            public opponentTrailId: (number|Long);

            /** LoadCarResponse opponentCompetitionId. */
            public opponentCompetitionId: number;

            /** LoadCarResponse competitionParameter. */
            public competitionParameter?: (wm.protobuf.IGhostCompetitionParameter|null);

            /** LoadCarResponse specialTitles. */
            public specialTitles: string[];

            /** LoadCarResponse earnedTitles. */
            public earnedTitles: string[];

            /** LoadCarResponse ownedItems. */
            public ownedItems: wm.protobuf.ICarItem[];

            /** LoadCarResponse auraMotifAutoChange. */
            public auraMotifAutoChange: boolean;

            /** LoadCarResponse screenshotCount. */
            public screenshotCount: number;

            /** LoadCarResponse announceEventModePrize. */
            public announceEventModePrize: boolean;

            /** LoadCarResponse transferred. */
            public transferred: boolean;

            /** LoadCarResponse driveLastPlayedAt. */
            public driveLastPlayedAt: number;

            /** LoadCarResponse insurance. */
            public insurance?: (wm.protobuf.LoadCarResponse.IStoryInsurance|null);

            /**
             * Creates a new LoadCarResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadCarResponse instance
             */
            public static create(properties?: wm.protobuf.ILoadCarResponse): wm.protobuf.LoadCarResponse;

            /**
             * Encodes the specified LoadCarResponse message. Does not implicitly {@link wm.protobuf.LoadCarResponse.verify|verify} messages.
             * @param message LoadCarResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ILoadCarResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadCarResponse message, length delimited. Does not implicitly {@link wm.protobuf.LoadCarResponse.verify|verify} messages.
             * @param message LoadCarResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ILoadCarResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadCarResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadCarResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadCarResponse;

            /**
             * Decodes a LoadCarResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadCarResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadCarResponse;

            /**
             * Verifies a LoadCarResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadCarResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadCarResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadCarResponse;

            /**
             * Creates a plain object from a LoadCarResponse message. Also converts values to other types if specified.
             * @param message LoadCarResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.LoadCarResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadCarResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadCarResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace LoadCarResponse {

            /** Properties of a StoryInsurance. */
            interface IStoryInsurance {

                /** StoryInsurance numOfRemains */
                numOfRemains: number;
            }

            /** Represents a StoryInsurance. */
            class StoryInsurance implements IStoryInsurance {

                /**
                 * Constructs a new StoryInsurance.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm.protobuf.LoadCarResponse.IStoryInsurance);

                /** StoryInsurance numOfRemains. */
                public numOfRemains: number;

                /**
                 * Creates a new StoryInsurance instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StoryInsurance instance
                 */
                public static create(properties?: wm.protobuf.LoadCarResponse.IStoryInsurance): wm.protobuf.LoadCarResponse.StoryInsurance;

                /**
                 * Encodes the specified StoryInsurance message. Does not implicitly {@link wm.protobuf.LoadCarResponse.StoryInsurance.verify|verify} messages.
                 * @param message StoryInsurance message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm.protobuf.LoadCarResponse.IStoryInsurance, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StoryInsurance message, length delimited. Does not implicitly {@link wm.protobuf.LoadCarResponse.StoryInsurance.verify|verify} messages.
                 * @param message StoryInsurance message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm.protobuf.LoadCarResponse.IStoryInsurance, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StoryInsurance message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StoryInsurance
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadCarResponse.StoryInsurance;

                /**
                 * Decodes a StoryInsurance message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StoryInsurance
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadCarResponse.StoryInsurance;

                /**
                 * Verifies a StoryInsurance message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StoryInsurance message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StoryInsurance
                 */
                public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadCarResponse.StoryInsurance;

                /**
                 * Creates a plain object from a StoryInsurance message. Also converts values to other types if specified.
                 * @param message StoryInsurance
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm.protobuf.LoadCarResponse.StoryInsurance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StoryInsurance to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for StoryInsurance
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a CreateCarRequest. */
        interface ICreateCarRequest {

            /** CreateCarRequest userId */
            userId?: (number|null);

            /** CreateCarRequest banapassportAmId */
            banapassportAmId?: (number|null);

            /** CreateCarRequest cardChipId */
            cardChipId?: (string|null);

            /** CreateCarRequest accessCode */
            accessCode?: (string|null);

            /** CreateCarRequest cardTypeCode */
            cardTypeCode?: (number|null);

            /** CreateCarRequest cardRegionCode */
            cardRegionCode?: (number|null);

            /** CreateCarRequest device */
            device?: (wm.protobuf.DeviceType|null);

            /** CreateCarRequest car */
            car: wm.protobuf.ICar;

            /** CreateCarRequest transmission */
            transmission: boolean;

            /** CreateCarRequest timestamp */
            timestamp: number;

            /** CreateCarRequest userItemId */
            userItemId?: (number|null);

            /** CreateCarRequest deletedCarId */
            deletedCarId?: (number|null);
        }

        /** Represents a CreateCarRequest. */
        class CreateCarRequest implements ICreateCarRequest {

            /**
             * Constructs a new CreateCarRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ICreateCarRequest);

            /** CreateCarRequest userId. */
            public userId: number;

            /** CreateCarRequest banapassportAmId. */
            public banapassportAmId: number;

            /** CreateCarRequest cardChipId. */
            public cardChipId: string;

            /** CreateCarRequest accessCode. */
            public accessCode: string;

            /** CreateCarRequest cardTypeCode. */
            public cardTypeCode: number;

            /** CreateCarRequest cardRegionCode. */
            public cardRegionCode: number;

            /** CreateCarRequest device. */
            public device: wm.protobuf.DeviceType;

            /** CreateCarRequest car. */
            public car: wm.protobuf.ICar;

            /** CreateCarRequest transmission. */
            public transmission: boolean;

            /** CreateCarRequest timestamp. */
            public timestamp: number;

            /** CreateCarRequest userItemId. */
            public userItemId: number;

            /** CreateCarRequest deletedCarId. */
            public deletedCarId: number;

            /**
             * Creates a new CreateCarRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateCarRequest instance
             */
            public static create(properties?: wm.protobuf.ICreateCarRequest): wm.protobuf.CreateCarRequest;

            /**
             * Encodes the specified CreateCarRequest message. Does not implicitly {@link wm.protobuf.CreateCarRequest.verify|verify} messages.
             * @param message CreateCarRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ICreateCarRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateCarRequest message, length delimited. Does not implicitly {@link wm.protobuf.CreateCarRequest.verify|verify} messages.
             * @param message CreateCarRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ICreateCarRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateCarRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateCarRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.CreateCarRequest;

            /**
             * Decodes a CreateCarRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateCarRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.CreateCarRequest;

            /**
             * Verifies a CreateCarRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateCarRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateCarRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.CreateCarRequest;

            /**
             * Creates a plain object from a CreateCarRequest message. Also converts values to other types if specified.
             * @param message CreateCarRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.CreateCarRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateCarRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CreateCarRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CreateCarResponse. */
        interface ICreateCarResponse {

            /** CreateCarResponse error */
            error: wm.protobuf.ErrorCode;

            /** CreateCarResponse accessCode */
            accessCode?: (string|null);

            /** CreateCarResponse banapassportAmId */
            banapassportAmId?: (number|null);

            /** CreateCarResponse mbid */
            mbid?: (number|null);

            /** CreateCarResponse userId */
            userId: number;

            /** CreateCarResponse carId */
            carId: number;

            /** CreateCarResponse stClearBits */
            stClearBits?: (number|null);

            /** CreateCarResponse stClearDivCount */
            stClearDivCount?: (number|null);

            /** CreateCarResponse stClearCount */
            stClearCount?: (number|null);

            /** CreateCarResponse stLoseBits */
            stLoseBits?: (number|Long|null);

            /** CreateCarResponse stConsecutiveWins */
            stConsecutiveWins?: (number|null);

            /** CreateCarResponse stConsecutiveWinsMax */
            stConsecutiveWinsMax?: (number|null);

            /** CreateCarResponse fullTunedCarCouponUnreceivableAt */
            fullTunedCarCouponUnreceivableAt?: (number|null);
        }

        /** Represents a CreateCarResponse. */
        class CreateCarResponse implements ICreateCarResponse {

            /**
             * Constructs a new CreateCarResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ICreateCarResponse);

            /** CreateCarResponse error. */
            public error: wm.protobuf.ErrorCode;

            /** CreateCarResponse accessCode. */
            public accessCode: string;

            /** CreateCarResponse banapassportAmId. */
            public banapassportAmId: number;

            /** CreateCarResponse mbid. */
            public mbid: number;

            /** CreateCarResponse userId. */
            public userId: number;

            /** CreateCarResponse carId. */
            public carId: number;

            /** CreateCarResponse stClearBits. */
            public stClearBits: number;

            /** CreateCarResponse stClearDivCount. */
            public stClearDivCount: number;

            /** CreateCarResponse stClearCount. */
            public stClearCount: number;

            /** CreateCarResponse stLoseBits. */
            public stLoseBits: (number|Long);

            /** CreateCarResponse stConsecutiveWins. */
            public stConsecutiveWins: number;

            /** CreateCarResponse stConsecutiveWinsMax. */
            public stConsecutiveWinsMax: number;

            /** CreateCarResponse fullTunedCarCouponUnreceivableAt. */
            public fullTunedCarCouponUnreceivableAt: number;

            /**
             * Creates a new CreateCarResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateCarResponse instance
             */
            public static create(properties?: wm.protobuf.ICreateCarResponse): wm.protobuf.CreateCarResponse;

            /**
             * Encodes the specified CreateCarResponse message. Does not implicitly {@link wm.protobuf.CreateCarResponse.verify|verify} messages.
             * @param message CreateCarResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ICreateCarResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateCarResponse message, length delimited. Does not implicitly {@link wm.protobuf.CreateCarResponse.verify|verify} messages.
             * @param message CreateCarResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ICreateCarResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateCarResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateCarResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.CreateCarResponse;

            /**
             * Decodes a CreateCarResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateCarResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.CreateCarResponse;

            /**
             * Verifies a CreateCarResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateCarResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateCarResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.CreateCarResponse;

            /**
             * Creates a plain object from a CreateCarResponse message. Also converts values to other types if specified.
             * @param message CreateCarResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.CreateCarResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateCarResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CreateCarResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadGameHistoryRequest. */
        interface ILoadGameHistoryRequest {

            /** LoadGameHistoryRequest carId */
            carId: number;
        }

        /** Represents a LoadGameHistoryRequest. */
        class LoadGameHistoryRequest implements ILoadGameHistoryRequest {

            /**
             * Constructs a new LoadGameHistoryRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ILoadGameHistoryRequest);

            /** LoadGameHistoryRequest carId. */
            public carId: number;

            /**
             * Creates a new LoadGameHistoryRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadGameHistoryRequest instance
             */
            public static create(properties?: wm.protobuf.ILoadGameHistoryRequest): wm.protobuf.LoadGameHistoryRequest;

            /**
             * Encodes the specified LoadGameHistoryRequest message. Does not implicitly {@link wm.protobuf.LoadGameHistoryRequest.verify|verify} messages.
             * @param message LoadGameHistoryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ILoadGameHistoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadGameHistoryRequest message, length delimited. Does not implicitly {@link wm.protobuf.LoadGameHistoryRequest.verify|verify} messages.
             * @param message LoadGameHistoryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ILoadGameHistoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadGameHistoryRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadGameHistoryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadGameHistoryRequest;

            /**
             * Decodes a LoadGameHistoryRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadGameHistoryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadGameHistoryRequest;

            /**
             * Verifies a LoadGameHistoryRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadGameHistoryRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadGameHistoryRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadGameHistoryRequest;

            /**
             * Creates a plain object from a LoadGameHistoryRequest message. Also converts values to other types if specified.
             * @param message LoadGameHistoryRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.LoadGameHistoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadGameHistoryRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadGameHistoryRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadGameHistoryResponse. */
        interface ILoadGameHistoryResponse {

            /** LoadGameHistoryResponse error */
            error: wm.protobuf.ErrorCode;

            /** LoadGameHistoryResponse taRecords */
            taRecords?: (wm.protobuf.LoadGameHistoryResponse.ITimeAttackRecord[]|null);

            /** LoadGameHistoryResponse taRankingUpdatedAt */
            taRankingUpdatedAt: number;

            /** LoadGameHistoryResponse ghostHistory */
            ghostHistory?: (wm.protobuf.LoadGameHistoryResponse.IGhostBattleRecord[]|null);

            /** LoadGameHistoryResponse ghostBattleCount */
            ghostBattleCount: number;

            /** LoadGameHistoryResponse ghostBattleWinCount */
            ghostBattleWinCount: number;

            /** LoadGameHistoryResponse stampSheetCount */
            stampSheetCount: number;

            /** LoadGameHistoryResponse stampSheet */
            stampSheet?: (number[]|null);
        }

        /** Represents a LoadGameHistoryResponse. */
        class LoadGameHistoryResponse implements ILoadGameHistoryResponse {

            /**
             * Constructs a new LoadGameHistoryResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ILoadGameHistoryResponse);

            /** LoadGameHistoryResponse error. */
            public error: wm.protobuf.ErrorCode;

            /** LoadGameHistoryResponse taRecords. */
            public taRecords: wm.protobuf.LoadGameHistoryResponse.ITimeAttackRecord[];

            /** LoadGameHistoryResponse taRankingUpdatedAt. */
            public taRankingUpdatedAt: number;

            /** LoadGameHistoryResponse ghostHistory. */
            public ghostHistory: wm.protobuf.LoadGameHistoryResponse.IGhostBattleRecord[];

            /** LoadGameHistoryResponse ghostBattleCount. */
            public ghostBattleCount: number;

            /** LoadGameHistoryResponse ghostBattleWinCount. */
            public ghostBattleWinCount: number;

            /** LoadGameHistoryResponse stampSheetCount. */
            public stampSheetCount: number;

            /** LoadGameHistoryResponse stampSheet. */
            public stampSheet: number[];

            /**
             * Creates a new LoadGameHistoryResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadGameHistoryResponse instance
             */
            public static create(properties?: wm.protobuf.ILoadGameHistoryResponse): wm.protobuf.LoadGameHistoryResponse;

            /**
             * Encodes the specified LoadGameHistoryResponse message. Does not implicitly {@link wm.protobuf.LoadGameHistoryResponse.verify|verify} messages.
             * @param message LoadGameHistoryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ILoadGameHistoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadGameHistoryResponse message, length delimited. Does not implicitly {@link wm.protobuf.LoadGameHistoryResponse.verify|verify} messages.
             * @param message LoadGameHistoryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ILoadGameHistoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadGameHistoryResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadGameHistoryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadGameHistoryResponse;

            /**
             * Decodes a LoadGameHistoryResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadGameHistoryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadGameHistoryResponse;

            /**
             * Verifies a LoadGameHistoryResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadGameHistoryResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadGameHistoryResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadGameHistoryResponse;

            /**
             * Creates a plain object from a LoadGameHistoryResponse message. Also converts values to other types if specified.
             * @param message LoadGameHistoryResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.LoadGameHistoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadGameHistoryResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadGameHistoryResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace LoadGameHistoryResponse {

            /** Properties of a TimeAttackRecord. */
            interface ITimeAttackRecord {

                /** TimeAttackRecord course */
                course: number;

                /** TimeAttackRecord time */
                time?: (number|null);

                /** TimeAttackRecord tunePower */
                tunePower?: (number|null);

                /** TimeAttackRecord tuneHandling */
                tuneHandling?: (number|null);

                /** TimeAttackRecord wholeRank */
                wholeRank?: (number|null);

                /** TimeAttackRecord wholeParticipants */
                wholeParticipants: number;

                /** TimeAttackRecord modelRank */
                modelRank?: (number|null);

                /** TimeAttackRecord modelParticipants */
                modelParticipants: number;
            }

            /** Represents a TimeAttackRecord. */
            class TimeAttackRecord implements ITimeAttackRecord {

                /**
                 * Constructs a new TimeAttackRecord.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm.protobuf.LoadGameHistoryResponse.ITimeAttackRecord);

                /** TimeAttackRecord course. */
                public course: number;

                /** TimeAttackRecord time. */
                public time: number;

                /** TimeAttackRecord tunePower. */
                public tunePower: number;

                /** TimeAttackRecord tuneHandling. */
                public tuneHandling: number;

                /** TimeAttackRecord wholeRank. */
                public wholeRank: number;

                /** TimeAttackRecord wholeParticipants. */
                public wholeParticipants: number;

                /** TimeAttackRecord modelRank. */
                public modelRank: number;

                /** TimeAttackRecord modelParticipants. */
                public modelParticipants: number;

                /**
                 * Creates a new TimeAttackRecord instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TimeAttackRecord instance
                 */
                public static create(properties?: wm.protobuf.LoadGameHistoryResponse.ITimeAttackRecord): wm.protobuf.LoadGameHistoryResponse.TimeAttackRecord;

                /**
                 * Encodes the specified TimeAttackRecord message. Does not implicitly {@link wm.protobuf.LoadGameHistoryResponse.TimeAttackRecord.verify|verify} messages.
                 * @param message TimeAttackRecord message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm.protobuf.LoadGameHistoryResponse.ITimeAttackRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TimeAttackRecord message, length delimited. Does not implicitly {@link wm.protobuf.LoadGameHistoryResponse.TimeAttackRecord.verify|verify} messages.
                 * @param message TimeAttackRecord message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm.protobuf.LoadGameHistoryResponse.ITimeAttackRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TimeAttackRecord message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TimeAttackRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadGameHistoryResponse.TimeAttackRecord;

                /**
                 * Decodes a TimeAttackRecord message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TimeAttackRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadGameHistoryResponse.TimeAttackRecord;

                /**
                 * Verifies a TimeAttackRecord message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TimeAttackRecord message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TimeAttackRecord
                 */
                public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadGameHistoryResponse.TimeAttackRecord;

                /**
                 * Creates a plain object from a TimeAttackRecord message. Also converts values to other types if specified.
                 * @param message TimeAttackRecord
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm.protobuf.LoadGameHistoryResponse.TimeAttackRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TimeAttackRecord to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TimeAttackRecord
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GhostBattleRecord. */
            interface IGhostBattleRecord {

                /** GhostBattleRecord carSetting */
                carSetting: wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.IGhostCarSetting;

                /** GhostBattleRecord opponent */
                opponent: wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.IGhostBattleRecordCar;

                /** GhostBattleRecord mobs */
                mobs?: (wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.IGhostBattleRecordCar[]|null);

                /** GhostBattleRecord area */
                area: number;

                /** GhostBattleRecord playedAt */
                playedAt: number;

                /** GhostBattleRecord playedShopName */
                playedShopName: string;
            }

            /** Represents a GhostBattleRecord. */
            class GhostBattleRecord implements IGhostBattleRecord {

                /**
                 * Constructs a new GhostBattleRecord.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm.protobuf.LoadGameHistoryResponse.IGhostBattleRecord);

                /** GhostBattleRecord carSetting. */
                public carSetting: wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.IGhostCarSetting;

                /** GhostBattleRecord opponent. */
                public opponent: wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.IGhostBattleRecordCar;

                /** GhostBattleRecord mobs. */
                public mobs: wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.IGhostBattleRecordCar[];

                /** GhostBattleRecord area. */
                public area: number;

                /** GhostBattleRecord playedAt. */
                public playedAt: number;

                /** GhostBattleRecord playedShopName. */
                public playedShopName: string;

                /**
                 * Creates a new GhostBattleRecord instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GhostBattleRecord instance
                 */
                public static create(properties?: wm.protobuf.LoadGameHistoryResponse.IGhostBattleRecord): wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord;

                /**
                 * Encodes the specified GhostBattleRecord message. Does not implicitly {@link wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.verify|verify} messages.
                 * @param message GhostBattleRecord message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm.protobuf.LoadGameHistoryResponse.IGhostBattleRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GhostBattleRecord message, length delimited. Does not implicitly {@link wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.verify|verify} messages.
                 * @param message GhostBattleRecord message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm.protobuf.LoadGameHistoryResponse.IGhostBattleRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GhostBattleRecord message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GhostBattleRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord;

                /**
                 * Decodes a GhostBattleRecord message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GhostBattleRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord;

                /**
                 * Verifies a GhostBattleRecord message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GhostBattleRecord message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GhostBattleRecord
                 */
                public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord;

                /**
                 * Creates a plain object from a GhostBattleRecord message. Also converts values to other types if specified.
                 * @param message GhostBattleRecord
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GhostBattleRecord to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GhostBattleRecord
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace GhostBattleRecord {

                /** Properties of a GhostCarSetting. */
                interface IGhostCarSetting {

                    /** GhostCarSetting tunePower */
                    tunePower: number;

                    /** GhostCarSetting tuneHandling */
                    tuneHandling: number;
                }

                /** Represents a GhostCarSetting. */
                class GhostCarSetting implements IGhostCarSetting {

                    /**
                     * Constructs a new GhostCarSetting.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.IGhostCarSetting);

                    /** GhostCarSetting tunePower. */
                    public tunePower: number;

                    /** GhostCarSetting tuneHandling. */
                    public tuneHandling: number;

                    /**
                     * Creates a new GhostCarSetting instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GhostCarSetting instance
                     */
                    public static create(properties?: wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.IGhostCarSetting): wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.GhostCarSetting;

                    /**
                     * Encodes the specified GhostCarSetting message. Does not implicitly {@link wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.GhostCarSetting.verify|verify} messages.
                     * @param message GhostCarSetting message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.IGhostCarSetting, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GhostCarSetting message, length delimited. Does not implicitly {@link wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.GhostCarSetting.verify|verify} messages.
                     * @param message GhostCarSetting message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.IGhostCarSetting, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GhostCarSetting message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GhostCarSetting
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.GhostCarSetting;

                    /**
                     * Decodes a GhostCarSetting message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GhostCarSetting
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.GhostCarSetting;

                    /**
                     * Verifies a GhostCarSetting message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GhostCarSetting message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GhostCarSetting
                     */
                    public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.GhostCarSetting;

                    /**
                     * Creates a plain object from a GhostCarSetting message. Also converts values to other types if specified.
                     * @param message GhostCarSetting
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.GhostCarSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GhostCarSetting to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GhostCarSetting
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GhostBattleRecordCar. */
                interface IGhostBattleRecordCar {

                    /** GhostBattleRecordCar car */
                    car: wm.protobuf.ICar;

                    /** GhostBattleRecordCar result */
                    result: number;
                }

                /** Represents a GhostBattleRecordCar. */
                class GhostBattleRecordCar implements IGhostBattleRecordCar {

                    /**
                     * Constructs a new GhostBattleRecordCar.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.IGhostBattleRecordCar);

                    /** GhostBattleRecordCar car. */
                    public car: wm.protobuf.ICar;

                    /** GhostBattleRecordCar result. */
                    public result: number;

                    /**
                     * Creates a new GhostBattleRecordCar instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GhostBattleRecordCar instance
                     */
                    public static create(properties?: wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.IGhostBattleRecordCar): wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.GhostBattleRecordCar;

                    /**
                     * Encodes the specified GhostBattleRecordCar message. Does not implicitly {@link wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.GhostBattleRecordCar.verify|verify} messages.
                     * @param message GhostBattleRecordCar message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.IGhostBattleRecordCar, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GhostBattleRecordCar message, length delimited. Does not implicitly {@link wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.GhostBattleRecordCar.verify|verify} messages.
                     * @param message GhostBattleRecordCar message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.IGhostBattleRecordCar, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GhostBattleRecordCar message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GhostBattleRecordCar
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.GhostBattleRecordCar;

                    /**
                     * Decodes a GhostBattleRecordCar message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GhostBattleRecordCar
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.GhostBattleRecordCar;

                    /**
                     * Verifies a GhostBattleRecordCar message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GhostBattleRecordCar message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GhostBattleRecordCar
                     */
                    public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.GhostBattleRecordCar;

                    /**
                     * Creates a plain object from a GhostBattleRecordCar message. Also converts values to other types if specified.
                     * @param message GhostBattleRecordCar
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: wm.protobuf.LoadGameHistoryResponse.GhostBattleRecord.GhostBattleRecordCar, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GhostBattleRecordCar to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GhostBattleRecordCar
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }
        }

        /** Properties of an UpdateCarRequest. */
        interface IUpdateCarRequest {

            /** UpdateCarRequest carId */
            carId: number;

            /** UpdateCarRequest car */
            car?: (wm.protobuf.ICar|null);

            /** UpdateCarRequest earnedItems */
            earnedItems?: (wm.protobuf.ICarItem[]|null);

            /** UpdateCarRequest setting */
            setting?: (wm.protobuf.ICarSetting|null);

            /** UpdateCarRequest toBeDeleted */
            toBeDeleted?: (boolean|null);

            /** UpdateCarRequest auraMotifAutoChange */
            auraMotifAutoChange?: (boolean|null);

            /** UpdateCarRequest rgStamp */
            rgStamp?: (number|null);

            /** UpdateCarRequest timestamp */
            timestamp: number;
        }

        /** Represents an UpdateCarRequest. */
        class UpdateCarRequest implements IUpdateCarRequest {

            /**
             * Constructs a new UpdateCarRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IUpdateCarRequest);

            /** UpdateCarRequest carId. */
            public carId: number;

            /** UpdateCarRequest car. */
            public car?: (wm.protobuf.ICar|null);

            /** UpdateCarRequest earnedItems. */
            public earnedItems: wm.protobuf.ICarItem[];

            /** UpdateCarRequest setting. */
            public setting?: (wm.protobuf.ICarSetting|null);

            /** UpdateCarRequest toBeDeleted. */
            public toBeDeleted: boolean;

            /** UpdateCarRequest auraMotifAutoChange. */
            public auraMotifAutoChange: boolean;

            /** UpdateCarRequest rgStamp. */
            public rgStamp: number;

            /** UpdateCarRequest timestamp. */
            public timestamp: number;

            /**
             * Creates a new UpdateCarRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateCarRequest instance
             */
            public static create(properties?: wm.protobuf.IUpdateCarRequest): wm.protobuf.UpdateCarRequest;

            /**
             * Encodes the specified UpdateCarRequest message. Does not implicitly {@link wm.protobuf.UpdateCarRequest.verify|verify} messages.
             * @param message UpdateCarRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IUpdateCarRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateCarRequest message, length delimited. Does not implicitly {@link wm.protobuf.UpdateCarRequest.verify|verify} messages.
             * @param message UpdateCarRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IUpdateCarRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateCarRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateCarRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.UpdateCarRequest;

            /**
             * Decodes an UpdateCarRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateCarRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.UpdateCarRequest;

            /**
             * Verifies an UpdateCarRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateCarRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateCarRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.UpdateCarRequest;

            /**
             * Creates a plain object from an UpdateCarRequest message. Also converts values to other types if specified.
             * @param message UpdateCarRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.UpdateCarRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateCarRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UpdateCarRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an UpdateCarResponse. */
        interface IUpdateCarResponse {

            /** UpdateCarResponse error */
            error: wm.protobuf.ErrorCode;
        }

        /** Represents an UpdateCarResponse. */
        class UpdateCarResponse implements IUpdateCarResponse {

            /**
             * Constructs a new UpdateCarResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IUpdateCarResponse);

            /** UpdateCarResponse error. */
            public error: wm.protobuf.ErrorCode;

            /**
             * Creates a new UpdateCarResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateCarResponse instance
             */
            public static create(properties?: wm.protobuf.IUpdateCarResponse): wm.protobuf.UpdateCarResponse;

            /**
             * Encodes the specified UpdateCarResponse message. Does not implicitly {@link wm.protobuf.UpdateCarResponse.verify|verify} messages.
             * @param message UpdateCarResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IUpdateCarResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateCarResponse message, length delimited. Does not implicitly {@link wm.protobuf.UpdateCarResponse.verify|verify} messages.
             * @param message UpdateCarResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IUpdateCarResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateCarResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateCarResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.UpdateCarResponse;

            /**
             * Decodes an UpdateCarResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateCarResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.UpdateCarResponse;

            /**
             * Verifies an UpdateCarResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateCarResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateCarResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.UpdateCarResponse;

            /**
             * Creates a plain object from an UpdateCarResponse message. Also converts values to other types if specified.
             * @param message UpdateCarResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.UpdateCarResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateCarResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UpdateCarResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SaveGameResultRequest. */
        interface ISaveGameResultRequest {

            /** SaveGameResultRequest carId */
            carId: number;

            /** SaveGameResultRequest gameMode */
            gameMode: wm.protobuf.GameMode;

            /** SaveGameResultRequest playedAt */
            playedAt: number;

            /** SaveGameResultRequest playCount */
            playCount: number;

            /** SaveGameResultRequest retired */
            retired: boolean;

            /** SaveGameResultRequest timeup */
            timeup: boolean;

            /** SaveGameResultRequest car */
            car?: (wm.protobuf.ICar|null);

            /** SaveGameResultRequest setting */
            setting?: (wm.protobuf.ICarSetting|null);

            /** SaveGameResultRequest odometer */
            odometer?: (number|null);

            /** SaveGameResultRequest earnedCustomColor */
            earnedCustomColor?: (boolean|null);

            /** SaveGameResultRequest confirmedTutorials */
            confirmedTutorials?: (wm.protobuf.TutorialType[]|null);

            /** SaveGameResultRequest earnedItems */
            earnedItems?: (wm.protobuf.ICarItem[]|null);

            /** SaveGameResultRequest earnedUserItems */
            earnedUserItems?: (wm.protobuf.IUserItem[]|null);

            /** SaveGameResultRequest preservedTitles */
            preservedTitles?: (string[]|null);

            /** SaveGameResultRequest neighborCars */
            neighborCars?: (number[]|null);

            /** SaveGameResultRequest stResult */
            stResult?: (wm.protobuf.SaveGameResultRequest.IStoryResult|null);

            /** SaveGameResultRequest taResult */
            taResult?: (wm.protobuf.SaveGameResultRequest.ITimeAttackResult|null);

            /** SaveGameResultRequest vsResult */
            vsResult?: (wm.protobuf.SaveGameResultRequest.IVersusBattleResult|null);

            /** SaveGameResultRequest rgResult */
            rgResult?: (wm.protobuf.SaveGameResultRequest.IGhostBattleResult|null);
        }

        /** Represents a SaveGameResultRequest. */
        class SaveGameResultRequest implements ISaveGameResultRequest {

            /**
             * Constructs a new SaveGameResultRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ISaveGameResultRequest);

            /** SaveGameResultRequest carId. */
            public carId: number;

            /** SaveGameResultRequest gameMode. */
            public gameMode: wm.protobuf.GameMode;

            /** SaveGameResultRequest playedAt. */
            public playedAt: number;

            /** SaveGameResultRequest playCount. */
            public playCount: number;

            /** SaveGameResultRequest retired. */
            public retired: boolean;

            /** SaveGameResultRequest timeup. */
            public timeup: boolean;

            /** SaveGameResultRequest car. */
            public car?: (wm.protobuf.ICar|null);

            /** SaveGameResultRequest setting. */
            public setting?: (wm.protobuf.ICarSetting|null);

            /** SaveGameResultRequest odometer. */
            public odometer: number;

            /** SaveGameResultRequest earnedCustomColor. */
            public earnedCustomColor: boolean;

            /** SaveGameResultRequest confirmedTutorials. */
            public confirmedTutorials: wm.protobuf.TutorialType[];

            /** SaveGameResultRequest earnedItems. */
            public earnedItems: wm.protobuf.ICarItem[];

            /** SaveGameResultRequest earnedUserItems. */
            public earnedUserItems: wm.protobuf.IUserItem[];

            /** SaveGameResultRequest preservedTitles. */
            public preservedTitles: string[];

            /** SaveGameResultRequest neighborCars. */
            public neighborCars: number[];

            /** SaveGameResultRequest stResult. */
            public stResult?: (wm.protobuf.SaveGameResultRequest.IStoryResult|null);

            /** SaveGameResultRequest taResult. */
            public taResult?: (wm.protobuf.SaveGameResultRequest.ITimeAttackResult|null);

            /** SaveGameResultRequest vsResult. */
            public vsResult?: (wm.protobuf.SaveGameResultRequest.IVersusBattleResult|null);

            /** SaveGameResultRequest rgResult. */
            public rgResult?: (wm.protobuf.SaveGameResultRequest.IGhostBattleResult|null);

            /**
             * Creates a new SaveGameResultRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveGameResultRequest instance
             */
            public static create(properties?: wm.protobuf.ISaveGameResultRequest): wm.protobuf.SaveGameResultRequest;

            /**
             * Encodes the specified SaveGameResultRequest message. Does not implicitly {@link wm.protobuf.SaveGameResultRequest.verify|verify} messages.
             * @param message SaveGameResultRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ISaveGameResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveGameResultRequest message, length delimited. Does not implicitly {@link wm.protobuf.SaveGameResultRequest.verify|verify} messages.
             * @param message SaveGameResultRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ISaveGameResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveGameResultRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveGameResultRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SaveGameResultRequest;

            /**
             * Decodes a SaveGameResultRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveGameResultRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SaveGameResultRequest;

            /**
             * Verifies a SaveGameResultRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveGameResultRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveGameResultRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.SaveGameResultRequest;

            /**
             * Creates a plain object from a SaveGameResultRequest message. Also converts values to other types if specified.
             * @param message SaveGameResultRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.SaveGameResultRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveGameResultRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveGameResultRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SaveGameResultRequest {

            /** Properties of a StoryResult. */
            interface IStoryResult {

                /** StoryResult stPlayCount */
                stPlayCount: number;

                /** StoryResult stPlayedStory */
                stPlayedStory: number;

                /** StoryResult tuningPoint */
                tuningPoint?: (number|null);

                /** StoryResult stClearBits */
                stClearBits?: (number|null);

                /** StoryResult stClearDivCount */
                stClearDivCount?: (number|null);

                /** StoryResult stClearCount */
                stClearCount?: (number|null);

                /** StoryResult stLoseBits */
                stLoseBits?: (number|Long|null);

                /** StoryResult stConsecutiveWins */
                stConsecutiveWins?: (number|null);

                /** StoryResult stCompleted_100Episodes */
                stCompleted_100Episodes?: (boolean|null);

                /** StoryResult isInsuranceUsed */
                isInsuranceUsed?: (boolean|null);
            }

            /** Represents a StoryResult. */
            class StoryResult implements IStoryResult {

                /**
                 * Constructs a new StoryResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm.protobuf.SaveGameResultRequest.IStoryResult);

                /** StoryResult stPlayCount. */
                public stPlayCount: number;

                /** StoryResult stPlayedStory. */
                public stPlayedStory: number;

                /** StoryResult tuningPoint. */
                public tuningPoint: number;

                /** StoryResult stClearBits. */
                public stClearBits: number;

                /** StoryResult stClearDivCount. */
                public stClearDivCount: number;

                /** StoryResult stClearCount. */
                public stClearCount: number;

                /** StoryResult stLoseBits. */
                public stLoseBits: (number|Long);

                /** StoryResult stConsecutiveWins. */
                public stConsecutiveWins: number;

                /** StoryResult stCompleted_100Episodes. */
                public stCompleted_100Episodes: boolean;

                /** StoryResult isInsuranceUsed. */
                public isInsuranceUsed: boolean;

                /**
                 * Creates a new StoryResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StoryResult instance
                 */
                public static create(properties?: wm.protobuf.SaveGameResultRequest.IStoryResult): wm.protobuf.SaveGameResultRequest.StoryResult;

                /**
                 * Encodes the specified StoryResult message. Does not implicitly {@link wm.protobuf.SaveGameResultRequest.StoryResult.verify|verify} messages.
                 * @param message StoryResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm.protobuf.SaveGameResultRequest.IStoryResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StoryResult message, length delimited. Does not implicitly {@link wm.protobuf.SaveGameResultRequest.StoryResult.verify|verify} messages.
                 * @param message StoryResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm.protobuf.SaveGameResultRequest.IStoryResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StoryResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StoryResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SaveGameResultRequest.StoryResult;

                /**
                 * Decodes a StoryResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StoryResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SaveGameResultRequest.StoryResult;

                /**
                 * Verifies a StoryResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StoryResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StoryResult
                 */
                public static fromObject(object: { [k: string]: any }): wm.protobuf.SaveGameResultRequest.StoryResult;

                /**
                 * Creates a plain object from a StoryResult message. Also converts values to other types if specified.
                 * @param message StoryResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm.protobuf.SaveGameResultRequest.StoryResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StoryResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for StoryResult
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TimeAttackResult. */
            interface ITimeAttackResult {

                /** TimeAttackResult time */
                time: number;

                /** TimeAttackResult course */
                course: number;

                /** TimeAttackResult isMorning */
                isMorning: boolean;

                /** TimeAttackResult section_1Time */
                section_1Time: number;

                /** TimeAttackResult section_2Time */
                section_2Time: number;

                /** TimeAttackResult section_3Time */
                section_3Time: number;

                /** TimeAttackResult section_4Time */
                section_4Time: number;

                /** TimeAttackResult section_5Time */
                section_5Time?: (number|null);

                /** TimeAttackResult section_6Time */
                section_6Time?: (number|null);

                /** TimeAttackResult section_7Time */
                section_7Time?: (number|null);

                /** TimeAttackResult wholeRank */
                wholeRank?: (number|null);

                /** TimeAttackResult modelRank */
                modelRank?: (number|null);
            }

            /** Represents a TimeAttackResult. */
            class TimeAttackResult implements ITimeAttackResult {

                /**
                 * Constructs a new TimeAttackResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm.protobuf.SaveGameResultRequest.ITimeAttackResult);

                /** TimeAttackResult time. */
                public time: number;

                /** TimeAttackResult course. */
                public course: number;

                /** TimeAttackResult isMorning. */
                public isMorning: boolean;

                /** TimeAttackResult section_1Time. */
                public section_1Time: number;

                /** TimeAttackResult section_2Time. */
                public section_2Time: number;

                /** TimeAttackResult section_3Time. */
                public section_3Time: number;

                /** TimeAttackResult section_4Time. */
                public section_4Time: number;

                /** TimeAttackResult section_5Time. */
                public section_5Time: number;

                /** TimeAttackResult section_6Time. */
                public section_6Time: number;

                /** TimeAttackResult section_7Time. */
                public section_7Time: number;

                /** TimeAttackResult wholeRank. */
                public wholeRank: number;

                /** TimeAttackResult modelRank. */
                public modelRank: number;

                /**
                 * Creates a new TimeAttackResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TimeAttackResult instance
                 */
                public static create(properties?: wm.protobuf.SaveGameResultRequest.ITimeAttackResult): wm.protobuf.SaveGameResultRequest.TimeAttackResult;

                /**
                 * Encodes the specified TimeAttackResult message. Does not implicitly {@link wm.protobuf.SaveGameResultRequest.TimeAttackResult.verify|verify} messages.
                 * @param message TimeAttackResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm.protobuf.SaveGameResultRequest.ITimeAttackResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TimeAttackResult message, length delimited. Does not implicitly {@link wm.protobuf.SaveGameResultRequest.TimeAttackResult.verify|verify} messages.
                 * @param message TimeAttackResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm.protobuf.SaveGameResultRequest.ITimeAttackResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TimeAttackResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TimeAttackResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SaveGameResultRequest.TimeAttackResult;

                /**
                 * Decodes a TimeAttackResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TimeAttackResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SaveGameResultRequest.TimeAttackResult;

                /**
                 * Verifies a TimeAttackResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TimeAttackResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TimeAttackResult
                 */
                public static fromObject(object: { [k: string]: any }): wm.protobuf.SaveGameResultRequest.TimeAttackResult;

                /**
                 * Creates a plain object from a TimeAttackResult message. Also converts values to other types if specified.
                 * @param message TimeAttackResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm.protobuf.SaveGameResultRequest.TimeAttackResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TimeAttackResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TimeAttackResult
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a VersusBattleResult. */
            interface IVersusBattleResult {

                /** VersusBattleResult result */
                result: number;

                /** VersusBattleResult survived */
                survived: boolean;

                /** VersusBattleResult opponentCarId */
                opponentCarId?: (number[]|null);

                /** VersusBattleResult numOfPlayers */
                numOfPlayers: number;

                /** VersusBattleResult area */
                area: number;

                /** VersusBattleResult isMorning */
                isMorning: boolean;

                /** VersusBattleResult vsPlayCount */
                vsPlayCount: number;

                /** VersusBattleResult vsBurstCount */
                vsBurstCount?: (number|null);

                /** VersusBattleResult vsStarCount */
                vsStarCount?: (number|null);

                /** VersusBattleResult vsCoolOrWild */
                vsCoolOrWild?: (number|null);

                /** VersusBattleResult vsSmoothOrRough */
                vsSmoothOrRough?: (number|null);

                /** VersusBattleResult vsTripleStarMedals */
                vsTripleStarMedals?: (number|null);

                /** VersusBattleResult vsDoubleStarMedals */
                vsDoubleStarMedals?: (number|null);

                /** VersusBattleResult vsSingleStarMedals */
                vsSingleStarMedals?: (number|null);

                /** VersusBattleResult vsPlainMedals */
                vsPlainMedals?: (number|null);
            }

            /** Represents a VersusBattleResult. */
            class VersusBattleResult implements IVersusBattleResult {

                /**
                 * Constructs a new VersusBattleResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm.protobuf.SaveGameResultRequest.IVersusBattleResult);

                /** VersusBattleResult result. */
                public result: number;

                /** VersusBattleResult survived. */
                public survived: boolean;

                /** VersusBattleResult opponentCarId. */
                public opponentCarId: number[];

                /** VersusBattleResult numOfPlayers. */
                public numOfPlayers: number;

                /** VersusBattleResult area. */
                public area: number;

                /** VersusBattleResult isMorning. */
                public isMorning: boolean;

                /** VersusBattleResult vsPlayCount. */
                public vsPlayCount: number;

                /** VersusBattleResult vsBurstCount. */
                public vsBurstCount: number;

                /** VersusBattleResult vsStarCount. */
                public vsStarCount: number;

                /** VersusBattleResult vsCoolOrWild. */
                public vsCoolOrWild: number;

                /** VersusBattleResult vsSmoothOrRough. */
                public vsSmoothOrRough: number;

                /** VersusBattleResult vsTripleStarMedals. */
                public vsTripleStarMedals: number;

                /** VersusBattleResult vsDoubleStarMedals. */
                public vsDoubleStarMedals: number;

                /** VersusBattleResult vsSingleStarMedals. */
                public vsSingleStarMedals: number;

                /** VersusBattleResult vsPlainMedals. */
                public vsPlainMedals: number;

                /**
                 * Creates a new VersusBattleResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VersusBattleResult instance
                 */
                public static create(properties?: wm.protobuf.SaveGameResultRequest.IVersusBattleResult): wm.protobuf.SaveGameResultRequest.VersusBattleResult;

                /**
                 * Encodes the specified VersusBattleResult message. Does not implicitly {@link wm.protobuf.SaveGameResultRequest.VersusBattleResult.verify|verify} messages.
                 * @param message VersusBattleResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm.protobuf.SaveGameResultRequest.IVersusBattleResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified VersusBattleResult message, length delimited. Does not implicitly {@link wm.protobuf.SaveGameResultRequest.VersusBattleResult.verify|verify} messages.
                 * @param message VersusBattleResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm.protobuf.SaveGameResultRequest.IVersusBattleResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VersusBattleResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns VersusBattleResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SaveGameResultRequest.VersusBattleResult;

                /**
                 * Decodes a VersusBattleResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns VersusBattleResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SaveGameResultRequest.VersusBattleResult;

                /**
                 * Verifies a VersusBattleResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a VersusBattleResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns VersusBattleResult
                 */
                public static fromObject(object: { [k: string]: any }): wm.protobuf.SaveGameResultRequest.VersusBattleResult;

                /**
                 * Creates a plain object from a VersusBattleResult message. Also converts values to other types if specified.
                 * @param message VersusBattleResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm.protobuf.SaveGameResultRequest.VersusBattleResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this VersusBattleResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for VersusBattleResult
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GhostBattleResult. */
            interface IGhostBattleResult {

                /** GhostBattleResult opponents */
                opponents?: (wm.protobuf.SaveGameResultRequest.GhostBattleResult.IGhostBattleOpponent[]|null);

                /** GhostBattleResult path */
                path: number;

                /** GhostBattleResult isMorning */
                isMorning: boolean;

                /** GhostBattleResult selectionMethod */
                selectionMethod: wm.protobuf.GhostSelectionMethod;

                /** GhostBattleResult stampSheetCount */
                stampSheetCount?: (number|null);

                /** GhostBattleResult stampSheet */
                stampSheet?: (number[]|null);

                /** GhostBattleResult rgStamp */
                rgStamp?: (number|null);

                /** GhostBattleResult confirmedTransferredStampTargetCarIds */
                confirmedTransferredStampTargetCarIds?: (number[]|null);

                /** GhostBattleResult rgPlayCount */
                rgPlayCount: number;

                /** GhostBattleResult dressupLevel */
                dressupLevel?: (number|null);

                /** GhostBattleResult dressupPoint */
                dressupPoint?: (number|null);

                /** GhostBattleResult rgRegionMapScore */
                rgRegionMapScore?: (number[]|null);

                /** GhostBattleResult competitionId */
                competitionId?: (number|null);

                /** GhostBattleResult periodId */
                periodId?: (number|null);

                /** GhostBattleResult brakingPoint */
                brakingPoint?: (number|null);

                /** GhostBattleResult acquireCrown */
                acquireCrown?: (boolean|null);

                /** GhostBattleResult acquireAllCrowns */
                acquireAllCrowns?: (boolean|null);
            }

            /** Represents a GhostBattleResult. */
            class GhostBattleResult implements IGhostBattleResult {

                /**
                 * Constructs a new GhostBattleResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm.protobuf.SaveGameResultRequest.IGhostBattleResult);

                /** GhostBattleResult opponents. */
                public opponents: wm.protobuf.SaveGameResultRequest.GhostBattleResult.IGhostBattleOpponent[];

                /** GhostBattleResult path. */
                public path: number;

                /** GhostBattleResult isMorning. */
                public isMorning: boolean;

                /** GhostBattleResult selectionMethod. */
                public selectionMethod: wm.protobuf.GhostSelectionMethod;

                /** GhostBattleResult stampSheetCount. */
                public stampSheetCount: number;

                /** GhostBattleResult stampSheet. */
                public stampSheet: number[];

                /** GhostBattleResult rgStamp. */
                public rgStamp: number;

                /** GhostBattleResult confirmedTransferredStampTargetCarIds. */
                public confirmedTransferredStampTargetCarIds: number[];

                /** GhostBattleResult rgPlayCount. */
                public rgPlayCount: number;

                /** GhostBattleResult dressupLevel. */
                public dressupLevel: number;

                /** GhostBattleResult dressupPoint. */
                public dressupPoint: number;

                /** GhostBattleResult rgRegionMapScore. */
                public rgRegionMapScore: number[];

                /** GhostBattleResult competitionId. */
                public competitionId: number;

                /** GhostBattleResult periodId. */
                public periodId: number;

                /** GhostBattleResult brakingPoint. */
                public brakingPoint: number;

                /** GhostBattleResult acquireCrown. */
                public acquireCrown: boolean;

                /** GhostBattleResult acquireAllCrowns. */
                public acquireAllCrowns: boolean;

                /**
                 * Creates a new GhostBattleResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GhostBattleResult instance
                 */
                public static create(properties?: wm.protobuf.SaveGameResultRequest.IGhostBattleResult): wm.protobuf.SaveGameResultRequest.GhostBattleResult;

                /**
                 * Encodes the specified GhostBattleResult message. Does not implicitly {@link wm.protobuf.SaveGameResultRequest.GhostBattleResult.verify|verify} messages.
                 * @param message GhostBattleResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm.protobuf.SaveGameResultRequest.IGhostBattleResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GhostBattleResult message, length delimited. Does not implicitly {@link wm.protobuf.SaveGameResultRequest.GhostBattleResult.verify|verify} messages.
                 * @param message GhostBattleResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm.protobuf.SaveGameResultRequest.IGhostBattleResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GhostBattleResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GhostBattleResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SaveGameResultRequest.GhostBattleResult;

                /**
                 * Decodes a GhostBattleResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GhostBattleResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SaveGameResultRequest.GhostBattleResult;

                /**
                 * Verifies a GhostBattleResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GhostBattleResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GhostBattleResult
                 */
                public static fromObject(object: { [k: string]: any }): wm.protobuf.SaveGameResultRequest.GhostBattleResult;

                /**
                 * Creates a plain object from a GhostBattleResult message. Also converts values to other types if specified.
                 * @param message GhostBattleResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm.protobuf.SaveGameResultRequest.GhostBattleResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GhostBattleResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GhostBattleResult
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace GhostBattleResult {

                /** Properties of a GhostBattleOpponent. */
                interface IGhostBattleOpponent {

                    /** GhostBattleOpponent result */
                    result: number;

                    /** GhostBattleOpponent carId */
                    carId: number;

                    /** GhostBattleOpponent tunePower */
                    tunePower: number;

                    /** GhostBattleOpponent tuneHandling */
                    tuneHandling: number;

                    /** GhostBattleOpponent receiveStamp */
                    receiveStamp?: (boolean|null);
                }

                /** Represents a GhostBattleOpponent. */
                class GhostBattleOpponent implements IGhostBattleOpponent {

                    /**
                     * Constructs a new GhostBattleOpponent.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: wm.protobuf.SaveGameResultRequest.GhostBattleResult.IGhostBattleOpponent);

                    /** GhostBattleOpponent result. */
                    public result: number;

                    /** GhostBattleOpponent carId. */
                    public carId: number;

                    /** GhostBattleOpponent tunePower. */
                    public tunePower: number;

                    /** GhostBattleOpponent tuneHandling. */
                    public tuneHandling: number;

                    /** GhostBattleOpponent receiveStamp. */
                    public receiveStamp: boolean;

                    /**
                     * Creates a new GhostBattleOpponent instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GhostBattleOpponent instance
                     */
                    public static create(properties?: wm.protobuf.SaveGameResultRequest.GhostBattleResult.IGhostBattleOpponent): wm.protobuf.SaveGameResultRequest.GhostBattleResult.GhostBattleOpponent;

                    /**
                     * Encodes the specified GhostBattleOpponent message. Does not implicitly {@link wm.protobuf.SaveGameResultRequest.GhostBattleResult.GhostBattleOpponent.verify|verify} messages.
                     * @param message GhostBattleOpponent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: wm.protobuf.SaveGameResultRequest.GhostBattleResult.IGhostBattleOpponent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GhostBattleOpponent message, length delimited. Does not implicitly {@link wm.protobuf.SaveGameResultRequest.GhostBattleResult.GhostBattleOpponent.verify|verify} messages.
                     * @param message GhostBattleOpponent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: wm.protobuf.SaveGameResultRequest.GhostBattleResult.IGhostBattleOpponent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GhostBattleOpponent message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GhostBattleOpponent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SaveGameResultRequest.GhostBattleResult.GhostBattleOpponent;

                    /**
                     * Decodes a GhostBattleOpponent message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GhostBattleOpponent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SaveGameResultRequest.GhostBattleResult.GhostBattleOpponent;

                    /**
                     * Verifies a GhostBattleOpponent message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GhostBattleOpponent message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GhostBattleOpponent
                     */
                    public static fromObject(object: { [k: string]: any }): wm.protobuf.SaveGameResultRequest.GhostBattleResult.GhostBattleOpponent;

                    /**
                     * Creates a plain object from a GhostBattleOpponent message. Also converts values to other types if specified.
                     * @param message GhostBattleOpponent
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: wm.protobuf.SaveGameResultRequest.GhostBattleResult.GhostBattleOpponent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GhostBattleOpponent to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GhostBattleOpponent
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }
        }

        /** Properties of a SaveGameResultResponse. */
        interface ISaveGameResultResponse {

            /** SaveGameResultResponse error */
            error: wm.protobuf.ErrorCode;

            /** SaveGameResultResponse ghostSessionId */
            ghostSessionId?: (number|Long|null);

            /** SaveGameResultResponse availableTickets */
            availableTickets?: (wm.protobuf.IUserItem[]|null);
        }

        /** Represents a SaveGameResultResponse. */
        class SaveGameResultResponse implements ISaveGameResultResponse {

            /**
             * Constructs a new SaveGameResultResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ISaveGameResultResponse);

            /** SaveGameResultResponse error. */
            public error: wm.protobuf.ErrorCode;

            /** SaveGameResultResponse ghostSessionId. */
            public ghostSessionId: (number|Long);

            /** SaveGameResultResponse availableTickets. */
            public availableTickets: wm.protobuf.IUserItem[];

            /**
             * Creates a new SaveGameResultResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveGameResultResponse instance
             */
            public static create(properties?: wm.protobuf.ISaveGameResultResponse): wm.protobuf.SaveGameResultResponse;

            /**
             * Encodes the specified SaveGameResultResponse message. Does not implicitly {@link wm.protobuf.SaveGameResultResponse.verify|verify} messages.
             * @param message SaveGameResultResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ISaveGameResultResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveGameResultResponse message, length delimited. Does not implicitly {@link wm.protobuf.SaveGameResultResponse.verify|verify} messages.
             * @param message SaveGameResultResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ISaveGameResultResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveGameResultResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveGameResultResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SaveGameResultResponse;

            /**
             * Decodes a SaveGameResultResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveGameResultResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SaveGameResultResponse;

            /**
             * Verifies a SaveGameResultResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveGameResultResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveGameResultResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.SaveGameResultResponse;

            /**
             * Creates a plain object from a SaveGameResultResponse message. Also converts values to other types if specified.
             * @param message SaveGameResultResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.SaveGameResultResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveGameResultResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveGameResultResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SaveChargeRequest. */
        interface ISaveChargeRequest {

            /** SaveChargeRequest chargeLogs */
            chargeLogs?: (wm.protobuf.SaveChargeRequest.IChargeLog[]|null);
        }

        /** Represents a SaveChargeRequest. */
        class SaveChargeRequest implements ISaveChargeRequest {

            /**
             * Constructs a new SaveChargeRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ISaveChargeRequest);

            /** SaveChargeRequest chargeLogs. */
            public chargeLogs: wm.protobuf.SaveChargeRequest.IChargeLog[];

            /**
             * Creates a new SaveChargeRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveChargeRequest instance
             */
            public static create(properties?: wm.protobuf.ISaveChargeRequest): wm.protobuf.SaveChargeRequest;

            /**
             * Encodes the specified SaveChargeRequest message. Does not implicitly {@link wm.protobuf.SaveChargeRequest.verify|verify} messages.
             * @param message SaveChargeRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ISaveChargeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveChargeRequest message, length delimited. Does not implicitly {@link wm.protobuf.SaveChargeRequest.verify|verify} messages.
             * @param message SaveChargeRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ISaveChargeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveChargeRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveChargeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SaveChargeRequest;

            /**
             * Decodes a SaveChargeRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveChargeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SaveChargeRequest;

            /**
             * Verifies a SaveChargeRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveChargeRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveChargeRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.SaveChargeRequest;

            /**
             * Creates a plain object from a SaveChargeRequest message. Also converts values to other types if specified.
             * @param message SaveChargeRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.SaveChargeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveChargeRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveChargeRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SaveChargeRequest {

            /** Properties of a ChargeLog. */
            interface IChargeLog {

                /** ChargeLog datetime */
                datetime: number;

                /** ChargeLog pcbSerial */
                pcbSerial: string;

                /** ChargeLog placeId */
                placeId: string;

                /** ChargeLog userId */
                userId?: (number|null);
            }

            /** Represents a ChargeLog. */
            class ChargeLog implements IChargeLog {

                /**
                 * Constructs a new ChargeLog.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm.protobuf.SaveChargeRequest.IChargeLog);

                /** ChargeLog datetime. */
                public datetime: number;

                /** ChargeLog pcbSerial. */
                public pcbSerial: string;

                /** ChargeLog placeId. */
                public placeId: string;

                /** ChargeLog userId. */
                public userId: number;

                /**
                 * Creates a new ChargeLog instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ChargeLog instance
                 */
                public static create(properties?: wm.protobuf.SaveChargeRequest.IChargeLog): wm.protobuf.SaveChargeRequest.ChargeLog;

                /**
                 * Encodes the specified ChargeLog message. Does not implicitly {@link wm.protobuf.SaveChargeRequest.ChargeLog.verify|verify} messages.
                 * @param message ChargeLog message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm.protobuf.SaveChargeRequest.IChargeLog, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ChargeLog message, length delimited. Does not implicitly {@link wm.protobuf.SaveChargeRequest.ChargeLog.verify|verify} messages.
                 * @param message ChargeLog message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm.protobuf.SaveChargeRequest.IChargeLog, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ChargeLog message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ChargeLog
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SaveChargeRequest.ChargeLog;

                /**
                 * Decodes a ChargeLog message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ChargeLog
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SaveChargeRequest.ChargeLog;

                /**
                 * Verifies a ChargeLog message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ChargeLog message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ChargeLog
                 */
                public static fromObject(object: { [k: string]: any }): wm.protobuf.SaveChargeRequest.ChargeLog;

                /**
                 * Creates a plain object from a ChargeLog message. Also converts values to other types if specified.
                 * @param message ChargeLog
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm.protobuf.SaveChargeRequest.ChargeLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ChargeLog to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ChargeLog
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a SaveChargeResponse. */
        interface ISaveChargeResponse {

            /** SaveChargeResponse error */
            error: wm.protobuf.ErrorCode;
        }

        /** Represents a SaveChargeResponse. */
        class SaveChargeResponse implements ISaveChargeResponse {

            /**
             * Constructs a new SaveChargeResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ISaveChargeResponse);

            /** SaveChargeResponse error. */
            public error: wm.protobuf.ErrorCode;

            /**
             * Creates a new SaveChargeResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveChargeResponse instance
             */
            public static create(properties?: wm.protobuf.ISaveChargeResponse): wm.protobuf.SaveChargeResponse;

            /**
             * Encodes the specified SaveChargeResponse message. Does not implicitly {@link wm.protobuf.SaveChargeResponse.verify|verify} messages.
             * @param message SaveChargeResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ISaveChargeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveChargeResponse message, length delimited. Does not implicitly {@link wm.protobuf.SaveChargeResponse.verify|verify} messages.
             * @param message SaveChargeResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ISaveChargeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveChargeResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveChargeResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SaveChargeResponse;

            /**
             * Decodes a SaveChargeResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveChargeResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SaveChargeResponse;

            /**
             * Verifies a SaveChargeResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveChargeResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveChargeResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.SaveChargeResponse;

            /**
             * Creates a plain object from a SaveChargeResponse message. Also converts values to other types if specified.
             * @param message SaveChargeResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.SaveChargeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveChargeResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveChargeResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadGhostBattleInfoRequest. */
        interface ILoadGhostBattleInfoRequest {

            /** LoadGhostBattleInfoRequest carId */
            carId: number;
        }

        /** Represents a LoadGhostBattleInfoRequest. */
        class LoadGhostBattleInfoRequest implements ILoadGhostBattleInfoRequest {

            /**
             * Constructs a new LoadGhostBattleInfoRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ILoadGhostBattleInfoRequest);

            /** LoadGhostBattleInfoRequest carId. */
            public carId: number;

            /**
             * Creates a new LoadGhostBattleInfoRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadGhostBattleInfoRequest instance
             */
            public static create(properties?: wm.protobuf.ILoadGhostBattleInfoRequest): wm.protobuf.LoadGhostBattleInfoRequest;

            /**
             * Encodes the specified LoadGhostBattleInfoRequest message. Does not implicitly {@link wm.protobuf.LoadGhostBattleInfoRequest.verify|verify} messages.
             * @param message LoadGhostBattleInfoRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ILoadGhostBattleInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadGhostBattleInfoRequest message, length delimited. Does not implicitly {@link wm.protobuf.LoadGhostBattleInfoRequest.verify|verify} messages.
             * @param message LoadGhostBattleInfoRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ILoadGhostBattleInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadGhostBattleInfoRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadGhostBattleInfoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadGhostBattleInfoRequest;

            /**
             * Decodes a LoadGhostBattleInfoRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadGhostBattleInfoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadGhostBattleInfoRequest;

            /**
             * Verifies a LoadGhostBattleInfoRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadGhostBattleInfoRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadGhostBattleInfoRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadGhostBattleInfoRequest;

            /**
             * Creates a plain object from a LoadGhostBattleInfoRequest message. Also converts values to other types if specified.
             * @param message LoadGhostBattleInfoRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.LoadGhostBattleInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadGhostBattleInfoRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadGhostBattleInfoRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadGhostBattleInfoResponse. */
        interface ILoadGhostBattleInfoResponse {

            /** LoadGhostBattleInfoResponse error */
            error: wm.protobuf.ErrorCode;

            /** LoadGhostBattleInfoResponse friendCars */
            friendCars?: (wm.protobuf.IFriendCar[]|null);

            /** LoadGhostBattleInfoResponse challengers */
            challengers?: (wm.protobuf.IChallengerCar[]|null);

            /** LoadGhostBattleInfoResponse stampTargetCars */
            stampTargetCars?: (wm.protobuf.IStampTargetCar[]|null);

            /** LoadGhostBattleInfoResponse previousVersionStampTargetCars */
            previousVersionStampTargetCars?: (wm.protobuf.IPreviousVersionStampTargetCar[]|null);

            /** LoadGhostBattleInfoResponse bookmarkedCars */
            bookmarkedCars?: (wm.protobuf.IBookmarkedCar[]|null);

            /** LoadGhostBattleInfoResponse history */
            history?: (wm.protobuf.ICar[]|null);

            /** LoadGhostBattleInfoResponse weakenedCars */
            weakenedCars?: (wm.protobuf.LoadGhostBattleInfoResponse.IWeakenedCar[]|null);

            /** LoadGhostBattleInfoResponse stampSheetCount */
            stampSheetCount: number;

            /** LoadGhostBattleInfoResponse stampSheet */
            stampSheet?: (number[]|null);

            /** LoadGhostBattleInfoResponse stampReturnStats */
            stampReturnStats?: (number[]|null);
        }

        /** Represents a LoadGhostBattleInfoResponse. */
        class LoadGhostBattleInfoResponse implements ILoadGhostBattleInfoResponse {

            /**
             * Constructs a new LoadGhostBattleInfoResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ILoadGhostBattleInfoResponse);

            /** LoadGhostBattleInfoResponse error. */
            public error: wm.protobuf.ErrorCode;

            /** LoadGhostBattleInfoResponse friendCars. */
            public friendCars: wm.protobuf.IFriendCar[];

            /** LoadGhostBattleInfoResponse challengers. */
            public challengers: wm.protobuf.IChallengerCar[];

            /** LoadGhostBattleInfoResponse stampTargetCars. */
            public stampTargetCars: wm.protobuf.IStampTargetCar[];

            /** LoadGhostBattleInfoResponse previousVersionStampTargetCars. */
            public previousVersionStampTargetCars: wm.protobuf.IPreviousVersionStampTargetCar[];

            /** LoadGhostBattleInfoResponse bookmarkedCars. */
            public bookmarkedCars: wm.protobuf.IBookmarkedCar[];

            /** LoadGhostBattleInfoResponse history. */
            public history: wm.protobuf.ICar[];

            /** LoadGhostBattleInfoResponse weakenedCars. */
            public weakenedCars: wm.protobuf.LoadGhostBattleInfoResponse.IWeakenedCar[];

            /** LoadGhostBattleInfoResponse stampSheetCount. */
            public stampSheetCount: number;

            /** LoadGhostBattleInfoResponse stampSheet. */
            public stampSheet: number[];

            /** LoadGhostBattleInfoResponse stampReturnStats. */
            public stampReturnStats: number[];

            /**
             * Creates a new LoadGhostBattleInfoResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadGhostBattleInfoResponse instance
             */
            public static create(properties?: wm.protobuf.ILoadGhostBattleInfoResponse): wm.protobuf.LoadGhostBattleInfoResponse;

            /**
             * Encodes the specified LoadGhostBattleInfoResponse message. Does not implicitly {@link wm.protobuf.LoadGhostBattleInfoResponse.verify|verify} messages.
             * @param message LoadGhostBattleInfoResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ILoadGhostBattleInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadGhostBattleInfoResponse message, length delimited. Does not implicitly {@link wm.protobuf.LoadGhostBattleInfoResponse.verify|verify} messages.
             * @param message LoadGhostBattleInfoResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ILoadGhostBattleInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadGhostBattleInfoResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadGhostBattleInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadGhostBattleInfoResponse;

            /**
             * Decodes a LoadGhostBattleInfoResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadGhostBattleInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadGhostBattleInfoResponse;

            /**
             * Verifies a LoadGhostBattleInfoResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadGhostBattleInfoResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadGhostBattleInfoResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadGhostBattleInfoResponse;

            /**
             * Creates a plain object from a LoadGhostBattleInfoResponse message. Also converts values to other types if specified.
             * @param message LoadGhostBattleInfoResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.LoadGhostBattleInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadGhostBattleInfoResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadGhostBattleInfoResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace LoadGhostBattleInfoResponse {

            /** Properties of a WeakenedCar. */
            interface IWeakenedCar {

                /** WeakenedCar carId */
                carId: number;

                /** WeakenedCar consecutiveLosses */
                consecutiveLosses: number;
            }

            /** Represents a WeakenedCar. */
            class WeakenedCar implements IWeakenedCar {

                /**
                 * Constructs a new WeakenedCar.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm.protobuf.LoadGhostBattleInfoResponse.IWeakenedCar);

                /** WeakenedCar carId. */
                public carId: number;

                /** WeakenedCar consecutiveLosses. */
                public consecutiveLosses: number;

                /**
                 * Creates a new WeakenedCar instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WeakenedCar instance
                 */
                public static create(properties?: wm.protobuf.LoadGhostBattleInfoResponse.IWeakenedCar): wm.protobuf.LoadGhostBattleInfoResponse.WeakenedCar;

                /**
                 * Encodes the specified WeakenedCar message. Does not implicitly {@link wm.protobuf.LoadGhostBattleInfoResponse.WeakenedCar.verify|verify} messages.
                 * @param message WeakenedCar message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm.protobuf.LoadGhostBattleInfoResponse.IWeakenedCar, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified WeakenedCar message, length delimited. Does not implicitly {@link wm.protobuf.LoadGhostBattleInfoResponse.WeakenedCar.verify|verify} messages.
                 * @param message WeakenedCar message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm.protobuf.LoadGhostBattleInfoResponse.IWeakenedCar, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WeakenedCar message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns WeakenedCar
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadGhostBattleInfoResponse.WeakenedCar;

                /**
                 * Decodes a WeakenedCar message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns WeakenedCar
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadGhostBattleInfoResponse.WeakenedCar;

                /**
                 * Verifies a WeakenedCar message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a WeakenedCar message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns WeakenedCar
                 */
                public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadGhostBattleInfoResponse.WeakenedCar;

                /**
                 * Creates a plain object from a WeakenedCar message. Also converts values to other types if specified.
                 * @param message WeakenedCar
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm.protobuf.LoadGhostBattleInfoResponse.WeakenedCar, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this WeakenedCar to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for WeakenedCar
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a LoadStampTargetRequest. */
        interface ILoadStampTargetRequest {

            /** LoadStampTargetRequest carId */
            carId: number;

            /** LoadStampTargetRequest needToPromote */
            needToPromote: boolean;
        }

        /** Represents a LoadStampTargetRequest. */
        class LoadStampTargetRequest implements ILoadStampTargetRequest {

            /**
             * Constructs a new LoadStampTargetRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ILoadStampTargetRequest);

            /** LoadStampTargetRequest carId. */
            public carId: number;

            /** LoadStampTargetRequest needToPromote. */
            public needToPromote: boolean;

            /**
             * Creates a new LoadStampTargetRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadStampTargetRequest instance
             */
            public static create(properties?: wm.protobuf.ILoadStampTargetRequest): wm.protobuf.LoadStampTargetRequest;

            /**
             * Encodes the specified LoadStampTargetRequest message. Does not implicitly {@link wm.protobuf.LoadStampTargetRequest.verify|verify} messages.
             * @param message LoadStampTargetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ILoadStampTargetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadStampTargetRequest message, length delimited. Does not implicitly {@link wm.protobuf.LoadStampTargetRequest.verify|verify} messages.
             * @param message LoadStampTargetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ILoadStampTargetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadStampTargetRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadStampTargetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadStampTargetRequest;

            /**
             * Decodes a LoadStampTargetRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadStampTargetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadStampTargetRequest;

            /**
             * Verifies a LoadStampTargetRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadStampTargetRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadStampTargetRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadStampTargetRequest;

            /**
             * Creates a plain object from a LoadStampTargetRequest message. Also converts values to other types if specified.
             * @param message LoadStampTargetRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.LoadStampTargetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadStampTargetRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadStampTargetRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadStampTargetResponse. */
        interface ILoadStampTargetResponse {

            /** LoadStampTargetResponse error */
            error: wm.protobuf.ErrorCode;

            /** LoadStampTargetResponse cars */
            cars?: (wm.protobuf.IStampTargetCar[]|null);

            /** LoadStampTargetResponse challengers */
            challengers?: (wm.protobuf.IChallengerCar[]|null);
        }

        /** Represents a LoadStampTargetResponse. */
        class LoadStampTargetResponse implements ILoadStampTargetResponse {

            /**
             * Constructs a new LoadStampTargetResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ILoadStampTargetResponse);

            /** LoadStampTargetResponse error. */
            public error: wm.protobuf.ErrorCode;

            /** LoadStampTargetResponse cars. */
            public cars: wm.protobuf.IStampTargetCar[];

            /** LoadStampTargetResponse challengers. */
            public challengers: wm.protobuf.IChallengerCar[];

            /**
             * Creates a new LoadStampTargetResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadStampTargetResponse instance
             */
            public static create(properties?: wm.protobuf.ILoadStampTargetResponse): wm.protobuf.LoadStampTargetResponse;

            /**
             * Encodes the specified LoadStampTargetResponse message. Does not implicitly {@link wm.protobuf.LoadStampTargetResponse.verify|verify} messages.
             * @param message LoadStampTargetResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ILoadStampTargetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadStampTargetResponse message, length delimited. Does not implicitly {@link wm.protobuf.LoadStampTargetResponse.verify|verify} messages.
             * @param message LoadStampTargetResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ILoadStampTargetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadStampTargetResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadStampTargetResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadStampTargetResponse;

            /**
             * Decodes a LoadStampTargetResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadStampTargetResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadStampTargetResponse;

            /**
             * Verifies a LoadStampTargetResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadStampTargetResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadStampTargetResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadStampTargetResponse;

            /**
             * Creates a plain object from a LoadStampTargetResponse message. Also converts values to other types if specified.
             * @param message LoadStampTargetResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.LoadStampTargetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadStampTargetResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadStampTargetResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LockStampTargetRequest. */
        interface ILockStampTargetRequest {

            /** LockStampTargetRequest carId */
            carId: number;

            /** LockStampTargetRequest targetCars */
            targetCars?: (number[]|null);
        }

        /** Represents a LockStampTargetRequest. */
        class LockStampTargetRequest implements ILockStampTargetRequest {

            /**
             * Constructs a new LockStampTargetRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ILockStampTargetRequest);

            /** LockStampTargetRequest carId. */
            public carId: number;

            /** LockStampTargetRequest targetCars. */
            public targetCars: number[];

            /**
             * Creates a new LockStampTargetRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LockStampTargetRequest instance
             */
            public static create(properties?: wm.protobuf.ILockStampTargetRequest): wm.protobuf.LockStampTargetRequest;

            /**
             * Encodes the specified LockStampTargetRequest message. Does not implicitly {@link wm.protobuf.LockStampTargetRequest.verify|verify} messages.
             * @param message LockStampTargetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ILockStampTargetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LockStampTargetRequest message, length delimited. Does not implicitly {@link wm.protobuf.LockStampTargetRequest.verify|verify} messages.
             * @param message LockStampTargetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ILockStampTargetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LockStampTargetRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LockStampTargetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LockStampTargetRequest;

            /**
             * Decodes a LockStampTargetRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LockStampTargetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LockStampTargetRequest;

            /**
             * Verifies a LockStampTargetRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LockStampTargetRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LockStampTargetRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.LockStampTargetRequest;

            /**
             * Creates a plain object from a LockStampTargetRequest message. Also converts values to other types if specified.
             * @param message LockStampTargetRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.LockStampTargetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LockStampTargetRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LockStampTargetRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LockStampTargetResponse. */
        interface ILockStampTargetResponse {

            /** LockStampTargetResponse error */
            error: wm.protobuf.ErrorCode;
        }

        /** Represents a LockStampTargetResponse. */
        class LockStampTargetResponse implements ILockStampTargetResponse {

            /**
             * Constructs a new LockStampTargetResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ILockStampTargetResponse);

            /** LockStampTargetResponse error. */
            public error: wm.protobuf.ErrorCode;

            /**
             * Creates a new LockStampTargetResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LockStampTargetResponse instance
             */
            public static create(properties?: wm.protobuf.ILockStampTargetResponse): wm.protobuf.LockStampTargetResponse;

            /**
             * Encodes the specified LockStampTargetResponse message. Does not implicitly {@link wm.protobuf.LockStampTargetResponse.verify|verify} messages.
             * @param message LockStampTargetResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ILockStampTargetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LockStampTargetResponse message, length delimited. Does not implicitly {@link wm.protobuf.LockStampTargetResponse.verify|verify} messages.
             * @param message LockStampTargetResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ILockStampTargetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LockStampTargetResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LockStampTargetResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LockStampTargetResponse;

            /**
             * Decodes a LockStampTargetResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LockStampTargetResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LockStampTargetResponse;

            /**
             * Verifies a LockStampTargetResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LockStampTargetResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LockStampTargetResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.LockStampTargetResponse;

            /**
             * Creates a plain object from a LockStampTargetResponse message. Also converts values to other types if specified.
             * @param message LockStampTargetResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.LockStampTargetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LockStampTargetResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LockStampTargetResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadGhostCompetitionInfoRequest. */
        interface ILoadGhostCompetitionInfoRequest {

            /** LoadGhostCompetitionInfoRequest carId */
            carId: number;

            /** LoadGhostCompetitionInfoRequest competitionId */
            competitionId: number;
        }

        /** Represents a LoadGhostCompetitionInfoRequest. */
        class LoadGhostCompetitionInfoRequest implements ILoadGhostCompetitionInfoRequest {

            /**
             * Constructs a new LoadGhostCompetitionInfoRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ILoadGhostCompetitionInfoRequest);

            /** LoadGhostCompetitionInfoRequest carId. */
            public carId: number;

            /** LoadGhostCompetitionInfoRequest competitionId. */
            public competitionId: number;

            /**
             * Creates a new LoadGhostCompetitionInfoRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadGhostCompetitionInfoRequest instance
             */
            public static create(properties?: wm.protobuf.ILoadGhostCompetitionInfoRequest): wm.protobuf.LoadGhostCompetitionInfoRequest;

            /**
             * Encodes the specified LoadGhostCompetitionInfoRequest message. Does not implicitly {@link wm.protobuf.LoadGhostCompetitionInfoRequest.verify|verify} messages.
             * @param message LoadGhostCompetitionInfoRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ILoadGhostCompetitionInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadGhostCompetitionInfoRequest message, length delimited. Does not implicitly {@link wm.protobuf.LoadGhostCompetitionInfoRequest.verify|verify} messages.
             * @param message LoadGhostCompetitionInfoRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ILoadGhostCompetitionInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadGhostCompetitionInfoRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadGhostCompetitionInfoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadGhostCompetitionInfoRequest;

            /**
             * Decodes a LoadGhostCompetitionInfoRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadGhostCompetitionInfoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadGhostCompetitionInfoRequest;

            /**
             * Verifies a LoadGhostCompetitionInfoRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadGhostCompetitionInfoRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadGhostCompetitionInfoRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadGhostCompetitionInfoRequest;

            /**
             * Creates a plain object from a LoadGhostCompetitionInfoRequest message. Also converts values to other types if specified.
             * @param message LoadGhostCompetitionInfoRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.LoadGhostCompetitionInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadGhostCompetitionInfoRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadGhostCompetitionInfoRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadGhostCompetitionInfoResponse. */
        interface ILoadGhostCompetitionInfoResponse {

            /** LoadGhostCompetitionInfoResponse error */
            error: wm.protobuf.ErrorCode;

            /** LoadGhostCompetitionInfoResponse periodId */
            periodId?: (number|null);

            /** LoadGhostCompetitionInfoResponse closed */
            closed: boolean;

            /** LoadGhostCompetitionInfoResponse brakingPoint */
            brakingPoint?: (number|null);

            /** LoadGhostCompetitionInfoResponse qualified */
            qualified?: (boolean|null);

            /** LoadGhostCompetitionInfoResponse topResults */
            topResults?: (number[]|null);

            /** LoadGhostCompetitionInfoResponse result */
            result?: (number|null);

            /** LoadGhostCompetitionInfoResponse rank */
            rank?: (number|null);

            /** LoadGhostCompetitionInfoResponse parameters1 */
            parameters1?: (number[]|null);

            /** LoadGhostCompetitionInfoResponse parameters2 */
            parameters2?: (boolean|null);
        }

        /** Represents a LoadGhostCompetitionInfoResponse. */
        class LoadGhostCompetitionInfoResponse implements ILoadGhostCompetitionInfoResponse {

            /**
             * Constructs a new LoadGhostCompetitionInfoResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ILoadGhostCompetitionInfoResponse);

            /** LoadGhostCompetitionInfoResponse error. */
            public error: wm.protobuf.ErrorCode;

            /** LoadGhostCompetitionInfoResponse periodId. */
            public periodId: number;

            /** LoadGhostCompetitionInfoResponse closed. */
            public closed: boolean;

            /** LoadGhostCompetitionInfoResponse brakingPoint. */
            public brakingPoint: number;

            /** LoadGhostCompetitionInfoResponse qualified. */
            public qualified: boolean;

            /** LoadGhostCompetitionInfoResponse topResults. */
            public topResults: number[];

            /** LoadGhostCompetitionInfoResponse result. */
            public result: number;

            /** LoadGhostCompetitionInfoResponse rank. */
            public rank: number;

            /** LoadGhostCompetitionInfoResponse parameters1. */
            public parameters1: number[];

            /** LoadGhostCompetitionInfoResponse parameters2. */
            public parameters2: boolean;

            /**
             * Creates a new LoadGhostCompetitionInfoResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadGhostCompetitionInfoResponse instance
             */
            public static create(properties?: wm.protobuf.ILoadGhostCompetitionInfoResponse): wm.protobuf.LoadGhostCompetitionInfoResponse;

            /**
             * Encodes the specified LoadGhostCompetitionInfoResponse message. Does not implicitly {@link wm.protobuf.LoadGhostCompetitionInfoResponse.verify|verify} messages.
             * @param message LoadGhostCompetitionInfoResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ILoadGhostCompetitionInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadGhostCompetitionInfoResponse message, length delimited. Does not implicitly {@link wm.protobuf.LoadGhostCompetitionInfoResponse.verify|verify} messages.
             * @param message LoadGhostCompetitionInfoResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ILoadGhostCompetitionInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadGhostCompetitionInfoResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadGhostCompetitionInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadGhostCompetitionInfoResponse;

            /**
             * Decodes a LoadGhostCompetitionInfoResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadGhostCompetitionInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadGhostCompetitionInfoResponse;

            /**
             * Verifies a LoadGhostCompetitionInfoResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadGhostCompetitionInfoResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadGhostCompetitionInfoResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadGhostCompetitionInfoResponse;

            /**
             * Creates a plain object from a LoadGhostCompetitionInfoResponse message. Also converts values to other types if specified.
             * @param message LoadGhostCompetitionInfoResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.LoadGhostCompetitionInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadGhostCompetitionInfoResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadGhostCompetitionInfoResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadTimeAttackRecordRequest. */
        interface ILoadTimeAttackRecordRequest {

            /** LoadTimeAttackRecordRequest carId */
            carId?: (number|null);

            /** LoadTimeAttackRecordRequest model */
            model: number;

            /** LoadTimeAttackRecordRequest course */
            course: number;
        }

        /** Represents a LoadTimeAttackRecordRequest. */
        class LoadTimeAttackRecordRequest implements ILoadTimeAttackRecordRequest {

            /**
             * Constructs a new LoadTimeAttackRecordRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ILoadTimeAttackRecordRequest);

            /** LoadTimeAttackRecordRequest carId. */
            public carId: number;

            /** LoadTimeAttackRecordRequest model. */
            public model: number;

            /** LoadTimeAttackRecordRequest course. */
            public course: number;

            /**
             * Creates a new LoadTimeAttackRecordRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadTimeAttackRecordRequest instance
             */
            public static create(properties?: wm.protobuf.ILoadTimeAttackRecordRequest): wm.protobuf.LoadTimeAttackRecordRequest;

            /**
             * Encodes the specified LoadTimeAttackRecordRequest message. Does not implicitly {@link wm.protobuf.LoadTimeAttackRecordRequest.verify|verify} messages.
             * @param message LoadTimeAttackRecordRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ILoadTimeAttackRecordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadTimeAttackRecordRequest message, length delimited. Does not implicitly {@link wm.protobuf.LoadTimeAttackRecordRequest.verify|verify} messages.
             * @param message LoadTimeAttackRecordRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ILoadTimeAttackRecordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadTimeAttackRecordRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadTimeAttackRecordRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadTimeAttackRecordRequest;

            /**
             * Decodes a LoadTimeAttackRecordRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadTimeAttackRecordRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadTimeAttackRecordRequest;

            /**
             * Verifies a LoadTimeAttackRecordRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadTimeAttackRecordRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadTimeAttackRecordRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadTimeAttackRecordRequest;

            /**
             * Creates a plain object from a LoadTimeAttackRecordRequest message. Also converts values to other types if specified.
             * @param message LoadTimeAttackRecordRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.LoadTimeAttackRecordRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadTimeAttackRecordRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadTimeAttackRecordRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadTimeAttackRecordResponse. */
        interface ILoadTimeAttackRecordResponse {

            /** LoadTimeAttackRecordResponse error */
            error: wm.protobuf.ErrorCode;

            /** LoadTimeAttackRecordResponse wholeRanking */
            wholeRanking?: (number[]|null);

            /** LoadTimeAttackRecordResponse modelRanking */
            modelRanking?: (number[]|null);

            /** LoadTimeAttackRecordResponse personalBestTime */
            personalBestTime?: (number|null);

            /** LoadTimeAttackRecordResponse pbSection_1Time */
            pbSection_1Time?: (number|null);

            /** LoadTimeAttackRecordResponse pbSection_2Time */
            pbSection_2Time?: (number|null);

            /** LoadTimeAttackRecordResponse pbSection_3Time */
            pbSection_3Time?: (number|null);

            /** LoadTimeAttackRecordResponse pbSection_4Time */
            pbSection_4Time?: (number|null);

            /** LoadTimeAttackRecordResponse pbSection_5Time */
            pbSection_5Time?: (number|null);

            /** LoadTimeAttackRecordResponse pbSection_6Time */
            pbSection_6Time?: (number|null);

            /** LoadTimeAttackRecordResponse pbSection_7Time */
            pbSection_7Time?: (number|null);
        }

        /** Represents a LoadTimeAttackRecordResponse. */
        class LoadTimeAttackRecordResponse implements ILoadTimeAttackRecordResponse {

            /**
             * Constructs a new LoadTimeAttackRecordResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ILoadTimeAttackRecordResponse);

            /** LoadTimeAttackRecordResponse error. */
            public error: wm.protobuf.ErrorCode;

            /** LoadTimeAttackRecordResponse wholeRanking. */
            public wholeRanking: number[];

            /** LoadTimeAttackRecordResponse modelRanking. */
            public modelRanking: number[];

            /** LoadTimeAttackRecordResponse personalBestTime. */
            public personalBestTime: number;

            /** LoadTimeAttackRecordResponse pbSection_1Time. */
            public pbSection_1Time: number;

            /** LoadTimeAttackRecordResponse pbSection_2Time. */
            public pbSection_2Time: number;

            /** LoadTimeAttackRecordResponse pbSection_3Time. */
            public pbSection_3Time: number;

            /** LoadTimeAttackRecordResponse pbSection_4Time. */
            public pbSection_4Time: number;

            /** LoadTimeAttackRecordResponse pbSection_5Time. */
            public pbSection_5Time: number;

            /** LoadTimeAttackRecordResponse pbSection_6Time. */
            public pbSection_6Time: number;

            /** LoadTimeAttackRecordResponse pbSection_7Time. */
            public pbSection_7Time: number;

            /**
             * Creates a new LoadTimeAttackRecordResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadTimeAttackRecordResponse instance
             */
            public static create(properties?: wm.protobuf.ILoadTimeAttackRecordResponse): wm.protobuf.LoadTimeAttackRecordResponse;

            /**
             * Encodes the specified LoadTimeAttackRecordResponse message. Does not implicitly {@link wm.protobuf.LoadTimeAttackRecordResponse.verify|verify} messages.
             * @param message LoadTimeAttackRecordResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ILoadTimeAttackRecordResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadTimeAttackRecordResponse message, length delimited. Does not implicitly {@link wm.protobuf.LoadTimeAttackRecordResponse.verify|verify} messages.
             * @param message LoadTimeAttackRecordResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ILoadTimeAttackRecordResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadTimeAttackRecordResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadTimeAttackRecordResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadTimeAttackRecordResponse;

            /**
             * Decodes a LoadTimeAttackRecordResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadTimeAttackRecordResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadTimeAttackRecordResponse;

            /**
             * Verifies a LoadTimeAttackRecordResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadTimeAttackRecordResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadTimeAttackRecordResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadTimeAttackRecordResponse;

            /**
             * Creates a plain object from a LoadTimeAttackRecordResponse message. Also converts values to other types if specified.
             * @param message LoadTimeAttackRecordResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.LoadTimeAttackRecordResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadTimeAttackRecordResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadTimeAttackRecordResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SaveTerminalResultRequest. */
        interface ISaveTerminalResultRequest {

            /** SaveTerminalResultRequest userId */
            userId: number;

            /** SaveTerminalResultRequest timestamp */
            timestamp: number;

            /** SaveTerminalResultRequest carOrder */
            carOrder?: (number[]|null);

            /** SaveTerminalResultRequest confirmedTutorials */
            confirmedTutorials?: (wm.protobuf.TutorialType[]|null);

            /** SaveTerminalResultRequest garageMenuEntered */
            garageMenuEntered?: (boolean|null);
        }

        /** Represents a SaveTerminalResultRequest. */
        class SaveTerminalResultRequest implements ISaveTerminalResultRequest {

            /**
             * Constructs a new SaveTerminalResultRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ISaveTerminalResultRequest);

            /** SaveTerminalResultRequest userId. */
            public userId: number;

            /** SaveTerminalResultRequest timestamp. */
            public timestamp: number;

            /** SaveTerminalResultRequest carOrder. */
            public carOrder: number[];

            /** SaveTerminalResultRequest confirmedTutorials. */
            public confirmedTutorials: wm.protobuf.TutorialType[];

            /** SaveTerminalResultRequest garageMenuEntered. */
            public garageMenuEntered: boolean;

            /**
             * Creates a new SaveTerminalResultRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveTerminalResultRequest instance
             */
            public static create(properties?: wm.protobuf.ISaveTerminalResultRequest): wm.protobuf.SaveTerminalResultRequest;

            /**
             * Encodes the specified SaveTerminalResultRequest message. Does not implicitly {@link wm.protobuf.SaveTerminalResultRequest.verify|verify} messages.
             * @param message SaveTerminalResultRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ISaveTerminalResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveTerminalResultRequest message, length delimited. Does not implicitly {@link wm.protobuf.SaveTerminalResultRequest.verify|verify} messages.
             * @param message SaveTerminalResultRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ISaveTerminalResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveTerminalResultRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveTerminalResultRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SaveTerminalResultRequest;

            /**
             * Decodes a SaveTerminalResultRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveTerminalResultRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SaveTerminalResultRequest;

            /**
             * Verifies a SaveTerminalResultRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveTerminalResultRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveTerminalResultRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.SaveTerminalResultRequest;

            /**
             * Creates a plain object from a SaveTerminalResultRequest message. Also converts values to other types if specified.
             * @param message SaveTerminalResultRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.SaveTerminalResultRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveTerminalResultRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveTerminalResultRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SaveTerminalResultResponse. */
        interface ISaveTerminalResultResponse {

            /** SaveTerminalResultResponse error */
            error: wm.protobuf.ErrorCode;
        }

        /** Represents a SaveTerminalResultResponse. */
        class SaveTerminalResultResponse implements ISaveTerminalResultResponse {

            /**
             * Constructs a new SaveTerminalResultResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ISaveTerminalResultResponse);

            /** SaveTerminalResultResponse error. */
            public error: wm.protobuf.ErrorCode;

            /**
             * Creates a new SaveTerminalResultResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveTerminalResultResponse instance
             */
            public static create(properties?: wm.protobuf.ISaveTerminalResultResponse): wm.protobuf.SaveTerminalResultResponse;

            /**
             * Encodes the specified SaveTerminalResultResponse message. Does not implicitly {@link wm.protobuf.SaveTerminalResultResponse.verify|verify} messages.
             * @param message SaveTerminalResultResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ISaveTerminalResultResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveTerminalResultResponse message, length delimited. Does not implicitly {@link wm.protobuf.SaveTerminalResultResponse.verify|verify} messages.
             * @param message SaveTerminalResultResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ISaveTerminalResultResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveTerminalResultResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveTerminalResultResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SaveTerminalResultResponse;

            /**
             * Decodes a SaveTerminalResultResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveTerminalResultResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SaveTerminalResultResponse;

            /**
             * Verifies a SaveTerminalResultResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveTerminalResultResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveTerminalResultResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.SaveTerminalResultResponse;

            /**
             * Creates a plain object from a SaveTerminalResultResponse message. Also converts values to other types if specified.
             * @param message SaveTerminalResultResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.SaveTerminalResultResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveTerminalResultResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveTerminalResultResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PingRequest. */
        interface IPingRequest {

            /** PingRequest ping */
            ping?: (number|null);
        }

        /** Represents a PingRequest. */
        class PingRequest implements IPingRequest {

            /**
             * Constructs a new PingRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IPingRequest);

            /** PingRequest ping. */
            public ping: number;

            /**
             * Creates a new PingRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PingRequest instance
             */
            public static create(properties?: wm.protobuf.IPingRequest): wm.protobuf.PingRequest;

            /**
             * Encodes the specified PingRequest message. Does not implicitly {@link wm.protobuf.PingRequest.verify|verify} messages.
             * @param message PingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IPingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PingRequest message, length delimited. Does not implicitly {@link wm.protobuf.PingRequest.verify|verify} messages.
             * @param message PingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IPingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PingRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.PingRequest;

            /**
             * Decodes a PingRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.PingRequest;

            /**
             * Verifies a PingRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PingRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PingRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.PingRequest;

            /**
             * Creates a plain object from a PingRequest message. Also converts values to other types if specified.
             * @param message PingRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.PingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PingRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PingRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PingResponse. */
        interface IPingResponse {

            /** PingResponse error */
            error: wm.protobuf.ErrorCode;

            /** PingResponse pong */
            pong: number;
        }

        /** Represents a PingResponse. */
        class PingResponse implements IPingResponse {

            /**
             * Constructs a new PingResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IPingResponse);

            /** PingResponse error. */
            public error: wm.protobuf.ErrorCode;

            /** PingResponse pong. */
            public pong: number;

            /**
             * Creates a new PingResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PingResponse instance
             */
            public static create(properties?: wm.protobuf.IPingResponse): wm.protobuf.PingResponse;

            /**
             * Encodes the specified PingResponse message. Does not implicitly {@link wm.protobuf.PingResponse.verify|verify} messages.
             * @param message PingResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IPingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PingResponse message, length delimited. Does not implicitly {@link wm.protobuf.PingResponse.verify|verify} messages.
             * @param message PingResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IPingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PingResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PingResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.PingResponse;

            /**
             * Decodes a PingResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PingResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.PingResponse;

            /**
             * Verifies a PingResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PingResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PingResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.PingResponse;

            /**
             * Creates a plain object from a PingResponse message. Also converts values to other types if specified.
             * @param message PingResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.PingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PingResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PingResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadTerminalInformationRequest. */
        interface ILoadTerminalInformationRequest {

            /** LoadTerminalInformationRequest userId */
            userId: number;
        }

        /** Represents a LoadTerminalInformationRequest. */
        class LoadTerminalInformationRequest implements ILoadTerminalInformationRequest {

            /**
             * Constructs a new LoadTerminalInformationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ILoadTerminalInformationRequest);

            /** LoadTerminalInformationRequest userId. */
            public userId: number;

            /**
             * Creates a new LoadTerminalInformationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadTerminalInformationRequest instance
             */
            public static create(properties?: wm.protobuf.ILoadTerminalInformationRequest): wm.protobuf.LoadTerminalInformationRequest;

            /**
             * Encodes the specified LoadTerminalInformationRequest message. Does not implicitly {@link wm.protobuf.LoadTerminalInformationRequest.verify|verify} messages.
             * @param message LoadTerminalInformationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ILoadTerminalInformationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadTerminalInformationRequest message, length delimited. Does not implicitly {@link wm.protobuf.LoadTerminalInformationRequest.verify|verify} messages.
             * @param message LoadTerminalInformationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ILoadTerminalInformationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadTerminalInformationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadTerminalInformationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadTerminalInformationRequest;

            /**
             * Decodes a LoadTerminalInformationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadTerminalInformationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadTerminalInformationRequest;

            /**
             * Verifies a LoadTerminalInformationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadTerminalInformationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadTerminalInformationRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadTerminalInformationRequest;

            /**
             * Creates a plain object from a LoadTerminalInformationRequest message. Also converts values to other types if specified.
             * @param message LoadTerminalInformationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.LoadTerminalInformationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadTerminalInformationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadTerminalInformationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadTerminalInformationResponse. */
        interface ILoadTerminalInformationResponse {

            /** LoadTerminalInformationResponse error */
            error: wm.protobuf.ErrorCode;

            /** LoadTerminalInformationResponse prizeReceivable */
            prizeReceivable: boolean;

            /** LoadTerminalInformationResponse noticeEntries */
            noticeEntries?: (wm.protobuf.LoadTerminalInformationResponse.ITerminalNotice[]|null);

            /** LoadTerminalInformationResponse noticeMessage */
            noticeMessage?: (string[]|null);

            /** LoadTerminalInformationResponse noticeWindow */
            noticeWindow?: (wm.protobuf.NoticeEntry[]|null);

            /** LoadTerminalInformationResponse noticeWindowMessage */
            noticeWindowMessage?: (string[]|null);

            /** LoadTerminalInformationResponse transferNotice */
            transferNotice: wm.protobuf.ITransferNotice;

            /** LoadTerminalInformationResponse announceFeature */
            announceFeature: boolean;

            /** LoadTerminalInformationResponse freeScratched */
            freeScratched: boolean;

            /** LoadTerminalInformationResponse restrictedModels */
            restrictedModels?: (number[]|null);
        }

        /** Represents a LoadTerminalInformationResponse. */
        class LoadTerminalInformationResponse implements ILoadTerminalInformationResponse {

            /**
             * Constructs a new LoadTerminalInformationResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ILoadTerminalInformationResponse);

            /** LoadTerminalInformationResponse error. */
            public error: wm.protobuf.ErrorCode;

            /** LoadTerminalInformationResponse prizeReceivable. */
            public prizeReceivable: boolean;

            /** LoadTerminalInformationResponse noticeEntries. */
            public noticeEntries: wm.protobuf.LoadTerminalInformationResponse.ITerminalNotice[];

            /** LoadTerminalInformationResponse noticeMessage. */
            public noticeMessage: string[];

            /** LoadTerminalInformationResponse noticeWindow. */
            public noticeWindow: wm.protobuf.NoticeEntry[];

            /** LoadTerminalInformationResponse noticeWindowMessage. */
            public noticeWindowMessage: string[];

            /** LoadTerminalInformationResponse transferNotice. */
            public transferNotice: wm.protobuf.ITransferNotice;

            /** LoadTerminalInformationResponse announceFeature. */
            public announceFeature: boolean;

            /** LoadTerminalInformationResponse freeScratched. */
            public freeScratched: boolean;

            /** LoadTerminalInformationResponse restrictedModels. */
            public restrictedModels: number[];

            /**
             * Creates a new LoadTerminalInformationResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadTerminalInformationResponse instance
             */
            public static create(properties?: wm.protobuf.ILoadTerminalInformationResponse): wm.protobuf.LoadTerminalInformationResponse;

            /**
             * Encodes the specified LoadTerminalInformationResponse message. Does not implicitly {@link wm.protobuf.LoadTerminalInformationResponse.verify|verify} messages.
             * @param message LoadTerminalInformationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ILoadTerminalInformationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadTerminalInformationResponse message, length delimited. Does not implicitly {@link wm.protobuf.LoadTerminalInformationResponse.verify|verify} messages.
             * @param message LoadTerminalInformationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ILoadTerminalInformationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadTerminalInformationResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadTerminalInformationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadTerminalInformationResponse;

            /**
             * Decodes a LoadTerminalInformationResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadTerminalInformationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadTerminalInformationResponse;

            /**
             * Verifies a LoadTerminalInformationResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadTerminalInformationResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadTerminalInformationResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadTerminalInformationResponse;

            /**
             * Creates a plain object from a LoadTerminalInformationResponse message. Also converts values to other types if specified.
             * @param message LoadTerminalInformationResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.LoadTerminalInformationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadTerminalInformationResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadTerminalInformationResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace LoadTerminalInformationResponse {

            /** Properties of a TerminalNotice. */
            interface ITerminalNotice {

                /** TerminalNotice noticeType */
                noticeType: wm.protobuf.NoticeEntry;

                /** TerminalNotice field_1 */
                field_1?: (string|null);

                /** TerminalNotice field_2 */
                field_2?: (number|null);

                /** TerminalNotice field_3 */
                field_3?: (number|null);
            }

            /** Represents a TerminalNotice. */
            class TerminalNotice implements ITerminalNotice {

                /**
                 * Constructs a new TerminalNotice.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm.protobuf.LoadTerminalInformationResponse.ITerminalNotice);

                /** TerminalNotice noticeType. */
                public noticeType: wm.protobuf.NoticeEntry;

                /** TerminalNotice field_1. */
                public field_1: string;

                /** TerminalNotice field_2. */
                public field_2: number;

                /** TerminalNotice field_3. */
                public field_3: number;

                /**
                 * Creates a new TerminalNotice instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TerminalNotice instance
                 */
                public static create(properties?: wm.protobuf.LoadTerminalInformationResponse.ITerminalNotice): wm.protobuf.LoadTerminalInformationResponse.TerminalNotice;

                /**
                 * Encodes the specified TerminalNotice message. Does not implicitly {@link wm.protobuf.LoadTerminalInformationResponse.TerminalNotice.verify|verify} messages.
                 * @param message TerminalNotice message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm.protobuf.LoadTerminalInformationResponse.ITerminalNotice, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TerminalNotice message, length delimited. Does not implicitly {@link wm.protobuf.LoadTerminalInformationResponse.TerminalNotice.verify|verify} messages.
                 * @param message TerminalNotice message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm.protobuf.LoadTerminalInformationResponse.ITerminalNotice, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TerminalNotice message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TerminalNotice
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadTerminalInformationResponse.TerminalNotice;

                /**
                 * Decodes a TerminalNotice message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TerminalNotice
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadTerminalInformationResponse.TerminalNotice;

                /**
                 * Verifies a TerminalNotice message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TerminalNotice message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TerminalNotice
                 */
                public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadTerminalInformationResponse.TerminalNotice;

                /**
                 * Creates a plain object from a TerminalNotice message. Also converts values to other types if specified.
                 * @param message TerminalNotice
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm.protobuf.LoadTerminalInformationResponse.TerminalNotice, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TerminalNotice to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TerminalNotice
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a CreateUserRequest. */
        interface ICreateUserRequest {

            /** CreateUserRequest banapassportAmId */
            banapassportAmId?: (number|null);

            /** CreateUserRequest cardChipId */
            cardChipId?: (string|null);

            /** CreateUserRequest accessCode */
            accessCode?: (string|null);

            /** CreateUserRequest cardTypeCode */
            cardTypeCode?: (number|null);

            /** CreateUserRequest cardRegionCode */
            cardRegionCode?: (number|null);

            /** CreateUserRequest device */
            device?: (wm.protobuf.DeviceType|null);

            /** CreateUserRequest timestamp */
            timestamp: number;
        }

        /** Represents a CreateUserRequest. */
        class CreateUserRequest implements ICreateUserRequest {

            /**
             * Constructs a new CreateUserRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ICreateUserRequest);

            /** CreateUserRequest banapassportAmId. */
            public banapassportAmId: number;

            /** CreateUserRequest cardChipId. */
            public cardChipId: string;

            /** CreateUserRequest accessCode. */
            public accessCode: string;

            /** CreateUserRequest cardTypeCode. */
            public cardTypeCode: number;

            /** CreateUserRequest cardRegionCode. */
            public cardRegionCode: number;

            /** CreateUserRequest device. */
            public device: wm.protobuf.DeviceType;

            /** CreateUserRequest timestamp. */
            public timestamp: number;

            /**
             * Creates a new CreateUserRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateUserRequest instance
             */
            public static create(properties?: wm.protobuf.ICreateUserRequest): wm.protobuf.CreateUserRequest;

            /**
             * Encodes the specified CreateUserRequest message. Does not implicitly {@link wm.protobuf.CreateUserRequest.verify|verify} messages.
             * @param message CreateUserRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ICreateUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateUserRequest message, length delimited. Does not implicitly {@link wm.protobuf.CreateUserRequest.verify|verify} messages.
             * @param message CreateUserRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ICreateUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateUserRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateUserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.CreateUserRequest;

            /**
             * Decodes a CreateUserRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateUserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.CreateUserRequest;

            /**
             * Verifies a CreateUserRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateUserRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateUserRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.CreateUserRequest;

            /**
             * Creates a plain object from a CreateUserRequest message. Also converts values to other types if specified.
             * @param message CreateUserRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.CreateUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateUserRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CreateUserRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CreateUserResponse. */
        interface ICreateUserResponse {

            /** CreateUserResponse error */
            error: wm.protobuf.ErrorCode;

            /** CreateUserResponse accessCode */
            accessCode?: (string|null);

            /** CreateUserResponse banapassportAmId */
            banapassportAmId?: (number|null);

            /** CreateUserResponse mbid */
            mbid?: (number|null);

            /** CreateUserResponse userId */
            userId: number;
        }

        /** Represents a CreateUserResponse. */
        class CreateUserResponse implements ICreateUserResponse {

            /**
             * Constructs a new CreateUserResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ICreateUserResponse);

            /** CreateUserResponse error. */
            public error: wm.protobuf.ErrorCode;

            /** CreateUserResponse accessCode. */
            public accessCode: string;

            /** CreateUserResponse banapassportAmId. */
            public banapassportAmId: number;

            /** CreateUserResponse mbid. */
            public mbid: number;

            /** CreateUserResponse userId. */
            public userId: number;

            /**
             * Creates a new CreateUserResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateUserResponse instance
             */
            public static create(properties?: wm.protobuf.ICreateUserResponse): wm.protobuf.CreateUserResponse;

            /**
             * Encodes the specified CreateUserResponse message. Does not implicitly {@link wm.protobuf.CreateUserResponse.verify|verify} messages.
             * @param message CreateUserResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ICreateUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateUserResponse message, length delimited. Does not implicitly {@link wm.protobuf.CreateUserResponse.verify|verify} messages.
             * @param message CreateUserResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ICreateUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateUserResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateUserResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.CreateUserResponse;

            /**
             * Decodes a CreateUserResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateUserResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.CreateUserResponse;

            /**
             * Verifies a CreateUserResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateUserResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateUserResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.CreateUserResponse;

            /**
             * Creates a plain object from a CreateUserResponse message. Also converts values to other types if specified.
             * @param message CreateUserResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.CreateUserResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateUserResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CreateUserResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AskAccessCodeRequest. */
        interface IAskAccessCodeRequest {

            /** AskAccessCodeRequest cardChipId */
            cardChipId: string;
        }

        /** Represents an AskAccessCodeRequest. */
        class AskAccessCodeRequest implements IAskAccessCodeRequest {

            /**
             * Constructs a new AskAccessCodeRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IAskAccessCodeRequest);

            /** AskAccessCodeRequest cardChipId. */
            public cardChipId: string;

            /**
             * Creates a new AskAccessCodeRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AskAccessCodeRequest instance
             */
            public static create(properties?: wm.protobuf.IAskAccessCodeRequest): wm.protobuf.AskAccessCodeRequest;

            /**
             * Encodes the specified AskAccessCodeRequest message. Does not implicitly {@link wm.protobuf.AskAccessCodeRequest.verify|verify} messages.
             * @param message AskAccessCodeRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IAskAccessCodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AskAccessCodeRequest message, length delimited. Does not implicitly {@link wm.protobuf.AskAccessCodeRequest.verify|verify} messages.
             * @param message AskAccessCodeRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IAskAccessCodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AskAccessCodeRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AskAccessCodeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.AskAccessCodeRequest;

            /**
             * Decodes an AskAccessCodeRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AskAccessCodeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.AskAccessCodeRequest;

            /**
             * Verifies an AskAccessCodeRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AskAccessCodeRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AskAccessCodeRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.AskAccessCodeRequest;

            /**
             * Creates a plain object from an AskAccessCodeRequest message. Also converts values to other types if specified.
             * @param message AskAccessCodeRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.AskAccessCodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AskAccessCodeRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AskAccessCodeRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AskAccessCodeResponse. */
        interface IAskAccessCodeResponse {

            /** AskAccessCodeResponse error */
            error: wm.protobuf.ErrorCode;

            /** AskAccessCodeResponse accessCode */
            accessCode: string;
        }

        /** Represents an AskAccessCodeResponse. */
        class AskAccessCodeResponse implements IAskAccessCodeResponse {

            /**
             * Constructs a new AskAccessCodeResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IAskAccessCodeResponse);

            /** AskAccessCodeResponse error. */
            public error: wm.protobuf.ErrorCode;

            /** AskAccessCodeResponse accessCode. */
            public accessCode: string;

            /**
             * Creates a new AskAccessCodeResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AskAccessCodeResponse instance
             */
            public static create(properties?: wm.protobuf.IAskAccessCodeResponse): wm.protobuf.AskAccessCodeResponse;

            /**
             * Encodes the specified AskAccessCodeResponse message. Does not implicitly {@link wm.protobuf.AskAccessCodeResponse.verify|verify} messages.
             * @param message AskAccessCodeResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IAskAccessCodeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AskAccessCodeResponse message, length delimited. Does not implicitly {@link wm.protobuf.AskAccessCodeResponse.verify|verify} messages.
             * @param message AskAccessCodeResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IAskAccessCodeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AskAccessCodeResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AskAccessCodeResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.AskAccessCodeResponse;

            /**
             * Decodes an AskAccessCodeResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AskAccessCodeResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.AskAccessCodeResponse;

            /**
             * Verifies an AskAccessCodeResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AskAccessCodeResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AskAccessCodeResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.AskAccessCodeResponse;

            /**
             * Creates a plain object from an AskAccessCodeResponse message. Also converts values to other types if specified.
             * @param message AskAccessCodeResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.AskAccessCodeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AskAccessCodeResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AskAccessCodeResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RegisterOpponentGhostRequest. */
        interface IRegisterOpponentGhostRequest {

            /** RegisterOpponentGhostRequest carId */
            carId: number;

            /** RegisterOpponentGhostRequest specialGhostId */
            specialGhostId: number;
        }

        /** Represents a RegisterOpponentGhostRequest. */
        class RegisterOpponentGhostRequest implements IRegisterOpponentGhostRequest {

            /**
             * Constructs a new RegisterOpponentGhostRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IRegisterOpponentGhostRequest);

            /** RegisterOpponentGhostRequest carId. */
            public carId: number;

            /** RegisterOpponentGhostRequest specialGhostId. */
            public specialGhostId: number;

            /**
             * Creates a new RegisterOpponentGhostRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RegisterOpponentGhostRequest instance
             */
            public static create(properties?: wm.protobuf.IRegisterOpponentGhostRequest): wm.protobuf.RegisterOpponentGhostRequest;

            /**
             * Encodes the specified RegisterOpponentGhostRequest message. Does not implicitly {@link wm.protobuf.RegisterOpponentGhostRequest.verify|verify} messages.
             * @param message RegisterOpponentGhostRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IRegisterOpponentGhostRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RegisterOpponentGhostRequest message, length delimited. Does not implicitly {@link wm.protobuf.RegisterOpponentGhostRequest.verify|verify} messages.
             * @param message RegisterOpponentGhostRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IRegisterOpponentGhostRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RegisterOpponentGhostRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RegisterOpponentGhostRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.RegisterOpponentGhostRequest;

            /**
             * Decodes a RegisterOpponentGhostRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RegisterOpponentGhostRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.RegisterOpponentGhostRequest;

            /**
             * Verifies a RegisterOpponentGhostRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RegisterOpponentGhostRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RegisterOpponentGhostRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.RegisterOpponentGhostRequest;

            /**
             * Creates a plain object from a RegisterOpponentGhostRequest message. Also converts values to other types if specified.
             * @param message RegisterOpponentGhostRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.RegisterOpponentGhostRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RegisterOpponentGhostRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RegisterOpponentGhostRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RegisterOpponentGhostResponse. */
        interface IRegisterOpponentGhostResponse {

            /** RegisterOpponentGhostResponse error */
            error: wm.protobuf.ErrorCode;
        }

        /** Represents a RegisterOpponentGhostResponse. */
        class RegisterOpponentGhostResponse implements IRegisterOpponentGhostResponse {

            /**
             * Constructs a new RegisterOpponentGhostResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IRegisterOpponentGhostResponse);

            /** RegisterOpponentGhostResponse error. */
            public error: wm.protobuf.ErrorCode;

            /**
             * Creates a new RegisterOpponentGhostResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RegisterOpponentGhostResponse instance
             */
            public static create(properties?: wm.protobuf.IRegisterOpponentGhostResponse): wm.protobuf.RegisterOpponentGhostResponse;

            /**
             * Encodes the specified RegisterOpponentGhostResponse message. Does not implicitly {@link wm.protobuf.RegisterOpponentGhostResponse.verify|verify} messages.
             * @param message RegisterOpponentGhostResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IRegisterOpponentGhostResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RegisterOpponentGhostResponse message, length delimited. Does not implicitly {@link wm.protobuf.RegisterOpponentGhostResponse.verify|verify} messages.
             * @param message RegisterOpponentGhostResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IRegisterOpponentGhostResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RegisterOpponentGhostResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RegisterOpponentGhostResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.RegisterOpponentGhostResponse;

            /**
             * Decodes a RegisterOpponentGhostResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RegisterOpponentGhostResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.RegisterOpponentGhostResponse;

            /**
             * Verifies a RegisterOpponentGhostResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RegisterOpponentGhostResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RegisterOpponentGhostResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.RegisterOpponentGhostResponse;

            /**
             * Creates a plain object from a RegisterOpponentGhostResponse message. Also converts values to other types if specified.
             * @param message RegisterOpponentGhostResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.RegisterOpponentGhostResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RegisterOpponentGhostResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RegisterOpponentGhostResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GrantCarRightRequest. */
        interface IGrantCarRightRequest {

            /** GrantCarRightRequest userId */
            userId: number;

            /** GrantCarRightRequest targetUserId */
            targetUserId: number;

            /** GrantCarRightRequest timestamp */
            timestamp: number;
        }

        /** Represents a GrantCarRightRequest. */
        class GrantCarRightRequest implements IGrantCarRightRequest {

            /**
             * Constructs a new GrantCarRightRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IGrantCarRightRequest);

            /** GrantCarRightRequest userId. */
            public userId: number;

            /** GrantCarRightRequest targetUserId. */
            public targetUserId: number;

            /** GrantCarRightRequest timestamp. */
            public timestamp: number;

            /**
             * Creates a new GrantCarRightRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GrantCarRightRequest instance
             */
            public static create(properties?: wm.protobuf.IGrantCarRightRequest): wm.protobuf.GrantCarRightRequest;

            /**
             * Encodes the specified GrantCarRightRequest message. Does not implicitly {@link wm.protobuf.GrantCarRightRequest.verify|verify} messages.
             * @param message GrantCarRightRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IGrantCarRightRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GrantCarRightRequest message, length delimited. Does not implicitly {@link wm.protobuf.GrantCarRightRequest.verify|verify} messages.
             * @param message GrantCarRightRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IGrantCarRightRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GrantCarRightRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GrantCarRightRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.GrantCarRightRequest;

            /**
             * Decodes a GrantCarRightRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GrantCarRightRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.GrantCarRightRequest;

            /**
             * Verifies a GrantCarRightRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GrantCarRightRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GrantCarRightRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.GrantCarRightRequest;

            /**
             * Creates a plain object from a GrantCarRightRequest message. Also converts values to other types if specified.
             * @param message GrantCarRightRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.GrantCarRightRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GrantCarRightRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GrantCarRightRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GrantCarRightResponse. */
        interface IGrantCarRightResponse {

            /** GrantCarRightResponse error */
            error: wm.protobuf.ErrorCode;
        }

        /** Represents a GrantCarRightResponse. */
        class GrantCarRightResponse implements IGrantCarRightResponse {

            /**
             * Constructs a new GrantCarRightResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IGrantCarRightResponse);

            /** GrantCarRightResponse error. */
            public error: wm.protobuf.ErrorCode;

            /**
             * Creates a new GrantCarRightResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GrantCarRightResponse instance
             */
            public static create(properties?: wm.protobuf.IGrantCarRightResponse): wm.protobuf.GrantCarRightResponse;

            /**
             * Encodes the specified GrantCarRightResponse message. Does not implicitly {@link wm.protobuf.GrantCarRightResponse.verify|verify} messages.
             * @param message GrantCarRightResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IGrantCarRightResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GrantCarRightResponse message, length delimited. Does not implicitly {@link wm.protobuf.GrantCarRightResponse.verify|verify} messages.
             * @param message GrantCarRightResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IGrantCarRightResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GrantCarRightResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GrantCarRightResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.GrantCarRightResponse;

            /**
             * Decodes a GrantCarRightResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GrantCarRightResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.GrantCarRightResponse;

            /**
             * Verifies a GrantCarRightResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GrantCarRightResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GrantCarRightResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.GrantCarRightResponse;

            /**
             * Creates a plain object from a GrantCarRightResponse message. Also converts values to other types if specified.
             * @param message GrantCarRightResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.GrantCarRightResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GrantCarRightResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GrantCarRightResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadGhostCompetitionRankingRequest. */
        interface ILoadGhostCompetitionRankingRequest {

            /** LoadGhostCompetitionRankingRequest carId */
            carId: number;

            /** LoadGhostCompetitionRankingRequest competitionId */
            competitionId: number;
        }

        /** Represents a LoadGhostCompetitionRankingRequest. */
        class LoadGhostCompetitionRankingRequest implements ILoadGhostCompetitionRankingRequest {

            /**
             * Constructs a new LoadGhostCompetitionRankingRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ILoadGhostCompetitionRankingRequest);

            /** LoadGhostCompetitionRankingRequest carId. */
            public carId: number;

            /** LoadGhostCompetitionRankingRequest competitionId. */
            public competitionId: number;

            /**
             * Creates a new LoadGhostCompetitionRankingRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadGhostCompetitionRankingRequest instance
             */
            public static create(properties?: wm.protobuf.ILoadGhostCompetitionRankingRequest): wm.protobuf.LoadGhostCompetitionRankingRequest;

            /**
             * Encodes the specified LoadGhostCompetitionRankingRequest message. Does not implicitly {@link wm.protobuf.LoadGhostCompetitionRankingRequest.verify|verify} messages.
             * @param message LoadGhostCompetitionRankingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ILoadGhostCompetitionRankingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadGhostCompetitionRankingRequest message, length delimited. Does not implicitly {@link wm.protobuf.LoadGhostCompetitionRankingRequest.verify|verify} messages.
             * @param message LoadGhostCompetitionRankingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ILoadGhostCompetitionRankingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadGhostCompetitionRankingRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadGhostCompetitionRankingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadGhostCompetitionRankingRequest;

            /**
             * Decodes a LoadGhostCompetitionRankingRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadGhostCompetitionRankingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadGhostCompetitionRankingRequest;

            /**
             * Verifies a LoadGhostCompetitionRankingRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadGhostCompetitionRankingRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadGhostCompetitionRankingRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadGhostCompetitionRankingRequest;

            /**
             * Creates a plain object from a LoadGhostCompetitionRankingRequest message. Also converts values to other types if specified.
             * @param message LoadGhostCompetitionRankingRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.LoadGhostCompetitionRankingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadGhostCompetitionRankingRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadGhostCompetitionRankingRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadGhostCompetitionRankingResponse. */
        interface ILoadGhostCompetitionRankingResponse {

            /** LoadGhostCompetitionRankingResponse error */
            error: wm.protobuf.ErrorCode;

            /** LoadGhostCompetitionRankingResponse periodId */
            periodId?: (number|null);

            /** LoadGhostCompetitionRankingResponse numOfParticipants */
            numOfParticipants: number;

            /** LoadGhostCompetitionRankingResponse competitionSchedule */
            competitionSchedule?: (wm.protobuf.IGhostCompetitionSchedule|null);

            /** LoadGhostCompetitionRankingResponse ownRecord */
            ownRecord?: (wm.protobuf.LoadGhostCompetitionRankingResponse.IEntry|null);

            /** LoadGhostCompetitionRankingResponse topRecords */
            topRecords?: (wm.protobuf.LoadGhostCompetitionRankingResponse.IEntry[]|null);
        }

        /** Represents a LoadGhostCompetitionRankingResponse. */
        class LoadGhostCompetitionRankingResponse implements ILoadGhostCompetitionRankingResponse {

            /**
             * Constructs a new LoadGhostCompetitionRankingResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ILoadGhostCompetitionRankingResponse);

            /** LoadGhostCompetitionRankingResponse error. */
            public error: wm.protobuf.ErrorCode;

            /** LoadGhostCompetitionRankingResponse periodId. */
            public periodId: number;

            /** LoadGhostCompetitionRankingResponse numOfParticipants. */
            public numOfParticipants: number;

            /** LoadGhostCompetitionRankingResponse competitionSchedule. */
            public competitionSchedule?: (wm.protobuf.IGhostCompetitionSchedule|null);

            /** LoadGhostCompetitionRankingResponse ownRecord. */
            public ownRecord?: (wm.protobuf.LoadGhostCompetitionRankingResponse.IEntry|null);

            /** LoadGhostCompetitionRankingResponse topRecords. */
            public topRecords: wm.protobuf.LoadGhostCompetitionRankingResponse.IEntry[];

            /**
             * Creates a new LoadGhostCompetitionRankingResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadGhostCompetitionRankingResponse instance
             */
            public static create(properties?: wm.protobuf.ILoadGhostCompetitionRankingResponse): wm.protobuf.LoadGhostCompetitionRankingResponse;

            /**
             * Encodes the specified LoadGhostCompetitionRankingResponse message. Does not implicitly {@link wm.protobuf.LoadGhostCompetitionRankingResponse.verify|verify} messages.
             * @param message LoadGhostCompetitionRankingResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ILoadGhostCompetitionRankingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadGhostCompetitionRankingResponse message, length delimited. Does not implicitly {@link wm.protobuf.LoadGhostCompetitionRankingResponse.verify|verify} messages.
             * @param message LoadGhostCompetitionRankingResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ILoadGhostCompetitionRankingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadGhostCompetitionRankingResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadGhostCompetitionRankingResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadGhostCompetitionRankingResponse;

            /**
             * Decodes a LoadGhostCompetitionRankingResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadGhostCompetitionRankingResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadGhostCompetitionRankingResponse;

            /**
             * Verifies a LoadGhostCompetitionRankingResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadGhostCompetitionRankingResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadGhostCompetitionRankingResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadGhostCompetitionRankingResponse;

            /**
             * Creates a plain object from a LoadGhostCompetitionRankingResponse message. Also converts values to other types if specified.
             * @param message LoadGhostCompetitionRankingResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.LoadGhostCompetitionRankingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadGhostCompetitionRankingResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadGhostCompetitionRankingResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace LoadGhostCompetitionRankingResponse {

            /** Properties of an Entry. */
            interface IEntry {

                /** Entry rank */
                rank: number;

                /** Entry result */
                result: number;

                /** Entry carId */
                carId: number;

                /** Entry name */
                name: string;

                /** Entry regionId */
                regionId: number;

                /** Entry model */
                model: number;

                /** Entry visualModel */
                visualModel: number;

                /** Entry defaultColor */
                defaultColor: number;

                /** Entry title */
                title: string;

                /** Entry level */
                level: number;

                /** Entry windowStickerString */
                windowStickerString?: (string|null);

                /** Entry playedShopName */
                playedShopName: string;

                /** Entry playedAt */
                playedAt: number;
            }

            /** Represents an Entry. */
            class Entry implements IEntry {

                /**
                 * Constructs a new Entry.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm.protobuf.LoadGhostCompetitionRankingResponse.IEntry);

                /** Entry rank. */
                public rank: number;

                /** Entry result. */
                public result: number;

                /** Entry carId. */
                public carId: number;

                /** Entry name. */
                public name: string;

                /** Entry regionId. */
                public regionId: number;

                /** Entry model. */
                public model: number;

                /** Entry visualModel. */
                public visualModel: number;

                /** Entry defaultColor. */
                public defaultColor: number;

                /** Entry title. */
                public title: string;

                /** Entry level. */
                public level: number;

                /** Entry windowStickerString. */
                public windowStickerString: string;

                /** Entry playedShopName. */
                public playedShopName: string;

                /** Entry playedAt. */
                public playedAt: number;

                /**
                 * Creates a new Entry instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Entry instance
                 */
                public static create(properties?: wm.protobuf.LoadGhostCompetitionRankingResponse.IEntry): wm.protobuf.LoadGhostCompetitionRankingResponse.Entry;

                /**
                 * Encodes the specified Entry message. Does not implicitly {@link wm.protobuf.LoadGhostCompetitionRankingResponse.Entry.verify|verify} messages.
                 * @param message Entry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm.protobuf.LoadGhostCompetitionRankingResponse.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Entry message, length delimited. Does not implicitly {@link wm.protobuf.LoadGhostCompetitionRankingResponse.Entry.verify|verify} messages.
                 * @param message Entry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm.protobuf.LoadGhostCompetitionRankingResponse.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Entry message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Entry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadGhostCompetitionRankingResponse.Entry;

                /**
                 * Decodes an Entry message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Entry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadGhostCompetitionRankingResponse.Entry;

                /**
                 * Verifies an Entry message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Entry message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Entry
                 */
                public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadGhostCompetitionRankingResponse.Entry;

                /**
                 * Creates a plain object from an Entry message. Also converts values to other types if specified.
                 * @param message Entry
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm.protobuf.LoadGhostCompetitionRankingResponse.Entry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Entry to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Entry
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a LoadUnreceivedUserItemsRequest. */
        interface ILoadUnreceivedUserItemsRequest {

            /** LoadUnreceivedUserItemsRequest userId */
            userId: number;
        }

        /** Represents a LoadUnreceivedUserItemsRequest. */
        class LoadUnreceivedUserItemsRequest implements ILoadUnreceivedUserItemsRequest {

            /**
             * Constructs a new LoadUnreceivedUserItemsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ILoadUnreceivedUserItemsRequest);

            /** LoadUnreceivedUserItemsRequest userId. */
            public userId: number;

            /**
             * Creates a new LoadUnreceivedUserItemsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadUnreceivedUserItemsRequest instance
             */
            public static create(properties?: wm.protobuf.ILoadUnreceivedUserItemsRequest): wm.protobuf.LoadUnreceivedUserItemsRequest;

            /**
             * Encodes the specified LoadUnreceivedUserItemsRequest message. Does not implicitly {@link wm.protobuf.LoadUnreceivedUserItemsRequest.verify|verify} messages.
             * @param message LoadUnreceivedUserItemsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ILoadUnreceivedUserItemsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadUnreceivedUserItemsRequest message, length delimited. Does not implicitly {@link wm.protobuf.LoadUnreceivedUserItemsRequest.verify|verify} messages.
             * @param message LoadUnreceivedUserItemsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ILoadUnreceivedUserItemsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadUnreceivedUserItemsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadUnreceivedUserItemsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadUnreceivedUserItemsRequest;

            /**
             * Decodes a LoadUnreceivedUserItemsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadUnreceivedUserItemsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadUnreceivedUserItemsRequest;

            /**
             * Verifies a LoadUnreceivedUserItemsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadUnreceivedUserItemsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadUnreceivedUserItemsRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadUnreceivedUserItemsRequest;

            /**
             * Creates a plain object from a LoadUnreceivedUserItemsRequest message. Also converts values to other types if specified.
             * @param message LoadUnreceivedUserItemsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.LoadUnreceivedUserItemsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadUnreceivedUserItemsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadUnreceivedUserItemsRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadUnreceivedUserItemsResponse. */
        interface ILoadUnreceivedUserItemsResponse {

            /** LoadUnreceivedUserItemsResponse error */
            error: wm.protobuf.ErrorCode;

            /** LoadUnreceivedUserItemsResponse ownedUserItems */
            ownedUserItems?: (wm.protobuf.IUserItem[]|null);
        }

        /** Represents a LoadUnreceivedUserItemsResponse. */
        class LoadUnreceivedUserItemsResponse implements ILoadUnreceivedUserItemsResponse {

            /**
             * Constructs a new LoadUnreceivedUserItemsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ILoadUnreceivedUserItemsResponse);

            /** LoadUnreceivedUserItemsResponse error. */
            public error: wm.protobuf.ErrorCode;

            /** LoadUnreceivedUserItemsResponse ownedUserItems. */
            public ownedUserItems: wm.protobuf.IUserItem[];

            /**
             * Creates a new LoadUnreceivedUserItemsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadUnreceivedUserItemsResponse instance
             */
            public static create(properties?: wm.protobuf.ILoadUnreceivedUserItemsResponse): wm.protobuf.LoadUnreceivedUserItemsResponse;

            /**
             * Encodes the specified LoadUnreceivedUserItemsResponse message. Does not implicitly {@link wm.protobuf.LoadUnreceivedUserItemsResponse.verify|verify} messages.
             * @param message LoadUnreceivedUserItemsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ILoadUnreceivedUserItemsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadUnreceivedUserItemsResponse message, length delimited. Does not implicitly {@link wm.protobuf.LoadUnreceivedUserItemsResponse.verify|verify} messages.
             * @param message LoadUnreceivedUserItemsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ILoadUnreceivedUserItemsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadUnreceivedUserItemsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadUnreceivedUserItemsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadUnreceivedUserItemsResponse;

            /**
             * Decodes a LoadUnreceivedUserItemsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadUnreceivedUserItemsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadUnreceivedUserItemsResponse;

            /**
             * Verifies a LoadUnreceivedUserItemsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadUnreceivedUserItemsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadUnreceivedUserItemsResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadUnreceivedUserItemsResponse;

            /**
             * Creates a plain object from a LoadUnreceivedUserItemsResponse message. Also converts values to other types if specified.
             * @param message LoadUnreceivedUserItemsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.LoadUnreceivedUserItemsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadUnreceivedUserItemsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadUnreceivedUserItemsResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadBookmarksRequest. */
        interface ILoadBookmarksRequest {

            /** LoadBookmarksRequest userId */
            userId: number;
        }

        /** Represents a LoadBookmarksRequest. */
        class LoadBookmarksRequest implements ILoadBookmarksRequest {

            /**
             * Constructs a new LoadBookmarksRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ILoadBookmarksRequest);

            /** LoadBookmarksRequest userId. */
            public userId: number;

            /**
             * Creates a new LoadBookmarksRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadBookmarksRequest instance
             */
            public static create(properties?: wm.protobuf.ILoadBookmarksRequest): wm.protobuf.LoadBookmarksRequest;

            /**
             * Encodes the specified LoadBookmarksRequest message. Does not implicitly {@link wm.protobuf.LoadBookmarksRequest.verify|verify} messages.
             * @param message LoadBookmarksRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ILoadBookmarksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadBookmarksRequest message, length delimited. Does not implicitly {@link wm.protobuf.LoadBookmarksRequest.verify|verify} messages.
             * @param message LoadBookmarksRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ILoadBookmarksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadBookmarksRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadBookmarksRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadBookmarksRequest;

            /**
             * Decodes a LoadBookmarksRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadBookmarksRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadBookmarksRequest;

            /**
             * Verifies a LoadBookmarksRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadBookmarksRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadBookmarksRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadBookmarksRequest;

            /**
             * Creates a plain object from a LoadBookmarksRequest message. Also converts values to other types if specified.
             * @param message LoadBookmarksRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.LoadBookmarksRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadBookmarksRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadBookmarksRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadBookmarksResponse. */
        interface ILoadBookmarksResponse {

            /** LoadBookmarksResponse error */
            error: wm.protobuf.ErrorCode;

            /** LoadBookmarksResponse cars */
            cars?: (wm.protobuf.ICar[]|null);
        }

        /** Represents a LoadBookmarksResponse. */
        class LoadBookmarksResponse implements ILoadBookmarksResponse {

            /**
             * Constructs a new LoadBookmarksResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ILoadBookmarksResponse);

            /** LoadBookmarksResponse error. */
            public error: wm.protobuf.ErrorCode;

            /** LoadBookmarksResponse cars. */
            public cars: wm.protobuf.ICar[];

            /**
             * Creates a new LoadBookmarksResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadBookmarksResponse instance
             */
            public static create(properties?: wm.protobuf.ILoadBookmarksResponse): wm.protobuf.LoadBookmarksResponse;

            /**
             * Encodes the specified LoadBookmarksResponse message. Does not implicitly {@link wm.protobuf.LoadBookmarksResponse.verify|verify} messages.
             * @param message LoadBookmarksResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ILoadBookmarksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadBookmarksResponse message, length delimited. Does not implicitly {@link wm.protobuf.LoadBookmarksResponse.verify|verify} messages.
             * @param message LoadBookmarksResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ILoadBookmarksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadBookmarksResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadBookmarksResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadBookmarksResponse;

            /**
             * Decodes a LoadBookmarksResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadBookmarksResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadBookmarksResponse;

            /**
             * Verifies a LoadBookmarksResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadBookmarksResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadBookmarksResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadBookmarksResponse;

            /**
             * Creates a plain object from a LoadBookmarksResponse message. Also converts values to other types if specified.
             * @param message LoadBookmarksResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.LoadBookmarksResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadBookmarksResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadBookmarksResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SaveBookmarksRequest. */
        interface ISaveBookmarksRequest {

            /** SaveBookmarksRequest userId */
            userId: number;

            /** SaveBookmarksRequest cars */
            cars?: (number[]|null);
        }

        /** Represents a SaveBookmarksRequest. */
        class SaveBookmarksRequest implements ISaveBookmarksRequest {

            /**
             * Constructs a new SaveBookmarksRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ISaveBookmarksRequest);

            /** SaveBookmarksRequest userId. */
            public userId: number;

            /** SaveBookmarksRequest cars. */
            public cars: number[];

            /**
             * Creates a new SaveBookmarksRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveBookmarksRequest instance
             */
            public static create(properties?: wm.protobuf.ISaveBookmarksRequest): wm.protobuf.SaveBookmarksRequest;

            /**
             * Encodes the specified SaveBookmarksRequest message. Does not implicitly {@link wm.protobuf.SaveBookmarksRequest.verify|verify} messages.
             * @param message SaveBookmarksRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ISaveBookmarksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveBookmarksRequest message, length delimited. Does not implicitly {@link wm.protobuf.SaveBookmarksRequest.verify|verify} messages.
             * @param message SaveBookmarksRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ISaveBookmarksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveBookmarksRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveBookmarksRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SaveBookmarksRequest;

            /**
             * Decodes a SaveBookmarksRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveBookmarksRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SaveBookmarksRequest;

            /**
             * Verifies a SaveBookmarksRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveBookmarksRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveBookmarksRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.SaveBookmarksRequest;

            /**
             * Creates a plain object from a SaveBookmarksRequest message. Also converts values to other types if specified.
             * @param message SaveBookmarksRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.SaveBookmarksRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveBookmarksRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveBookmarksRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SaveBookmarksResponse. */
        interface ISaveBookmarksResponse {

            /** SaveBookmarksResponse error */
            error: wm.protobuf.ErrorCode;
        }

        /** Represents a SaveBookmarksResponse. */
        class SaveBookmarksResponse implements ISaveBookmarksResponse {

            /**
             * Constructs a new SaveBookmarksResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ISaveBookmarksResponse);

            /** SaveBookmarksResponse error. */
            public error: wm.protobuf.ErrorCode;

            /**
             * Creates a new SaveBookmarksResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveBookmarksResponse instance
             */
            public static create(properties?: wm.protobuf.ISaveBookmarksResponse): wm.protobuf.SaveBookmarksResponse;

            /**
             * Encodes the specified SaveBookmarksResponse message. Does not implicitly {@link wm.protobuf.SaveBookmarksResponse.verify|verify} messages.
             * @param message SaveBookmarksResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ISaveBookmarksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveBookmarksResponse message, length delimited. Does not implicitly {@link wm.protobuf.SaveBookmarksResponse.verify|verify} messages.
             * @param message SaveBookmarksResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ISaveBookmarksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveBookmarksResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveBookmarksResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SaveBookmarksResponse;

            /**
             * Decodes a SaveBookmarksResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveBookmarksResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SaveBookmarksResponse;

            /**
             * Verifies a SaveBookmarksResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveBookmarksResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveBookmarksResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.SaveBookmarksResponse;

            /**
             * Creates a plain object from a SaveBookmarksResponse message. Also converts values to other types if specified.
             * @param message SaveBookmarksResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.SaveBookmarksResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveBookmarksResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveBookmarksResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a StartTransferRequest. */
        interface IStartTransferRequest {

            /** StartTransferRequest banapassportAmId */
            banapassportAmId: number;
        }

        /** Represents a StartTransferRequest. */
        class StartTransferRequest implements IStartTransferRequest {

            /**
             * Constructs a new StartTransferRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IStartTransferRequest);

            /** StartTransferRequest banapassportAmId. */
            public banapassportAmId: number;

            /**
             * Creates a new StartTransferRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StartTransferRequest instance
             */
            public static create(properties?: wm.protobuf.IStartTransferRequest): wm.protobuf.StartTransferRequest;

            /**
             * Encodes the specified StartTransferRequest message. Does not implicitly {@link wm.protobuf.StartTransferRequest.verify|verify} messages.
             * @param message StartTransferRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IStartTransferRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StartTransferRequest message, length delimited. Does not implicitly {@link wm.protobuf.StartTransferRequest.verify|verify} messages.
             * @param message StartTransferRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IStartTransferRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StartTransferRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StartTransferRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.StartTransferRequest;

            /**
             * Decodes a StartTransferRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StartTransferRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.StartTransferRequest;

            /**
             * Verifies a StartTransferRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StartTransferRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StartTransferRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.StartTransferRequest;

            /**
             * Creates a plain object from a StartTransferRequest message. Also converts values to other types if specified.
             * @param message StartTransferRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.StartTransferRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StartTransferRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StartTransferRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a StartTransferResponse. */
        interface IStartTransferResponse {

            /** StartTransferResponse error */
            error: wm.protobuf.ErrorCode;

            /** StartTransferResponse userId */
            userId: number;

            /** StartTransferResponse pollingInterval */
            pollingInterval?: (number|null);
        }

        /** Represents a StartTransferResponse. */
        class StartTransferResponse implements IStartTransferResponse {

            /**
             * Constructs a new StartTransferResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IStartTransferResponse);

            /** StartTransferResponse error. */
            public error: wm.protobuf.ErrorCode;

            /** StartTransferResponse userId. */
            public userId: number;

            /** StartTransferResponse pollingInterval. */
            public pollingInterval: number;

            /**
             * Creates a new StartTransferResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StartTransferResponse instance
             */
            public static create(properties?: wm.protobuf.IStartTransferResponse): wm.protobuf.StartTransferResponse;

            /**
             * Encodes the specified StartTransferResponse message. Does not implicitly {@link wm.protobuf.StartTransferResponse.verify|verify} messages.
             * @param message StartTransferResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IStartTransferResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StartTransferResponse message, length delimited. Does not implicitly {@link wm.protobuf.StartTransferResponse.verify|verify} messages.
             * @param message StartTransferResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IStartTransferResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StartTransferResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StartTransferResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.StartTransferResponse;

            /**
             * Decodes a StartTransferResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StartTransferResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.StartTransferResponse;

            /**
             * Verifies a StartTransferResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StartTransferResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StartTransferResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.StartTransferResponse;

            /**
             * Creates a plain object from a StartTransferResponse message. Also converts values to other types if specified.
             * @param message StartTransferResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.StartTransferResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StartTransferResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StartTransferResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SaveScreenshotRequest. */
        interface ISaveScreenshotRequest {

            /** SaveScreenshotRequest carId */
            carId: number;

            /** SaveScreenshotRequest timestamp */
            timestamp: number;

            /** SaveScreenshotRequest playedAt */
            playedAt?: (number|null);

            /** SaveScreenshotRequest transparent */
            transparent?: (boolean|null);

            /** SaveScreenshotRequest imageType */
            imageType: wm.protobuf.ScreenshotType;

            /** SaveScreenshotRequest image */
            image?: (Uint8Array|null);

            /** SaveScreenshotRequest ghostMetadata */
            ghostMetadata?: (wm.protobuf.SaveScreenshotRequest.IGhostBattleMetadata|null);

            /** SaveScreenshotRequest versusMetadata */
            versusMetadata?: (wm.protobuf.SaveScreenshotRequest.IVersusBattleMetadata|null);

            /** SaveScreenshotRequest terminalMetadata */
            terminalMetadata?: (wm.protobuf.SaveScreenshotRequest.ITerminalMetadata|null);

            /** SaveScreenshotRequest acquiringVsStarMetadata */
            acquiringVsStarMetadata?: (wm.protobuf.SaveScreenshotRequest.IAcquiringVersusStarMetadata|null);

            /** SaveScreenshotRequest acquiringAuraMotifMetadata */
            acquiringAuraMotifMetadata?: (wm.protobuf.SaveScreenshotRequest.IAcquiringAuraMotifMetadata|null);

            /** SaveScreenshotRequest ghostRegionMapMetadata */
            ghostRegionMapMetadata?: (wm.protobuf.SaveScreenshotRequest.IGhostRegionMapMetadata|null);

            /** SaveScreenshotRequest acquiringCrownMetadata */
            acquiringCrownMetadata?: (wm.protobuf.SaveScreenshotRequest.IAcquiringCrownMetadata|null);

            /** SaveScreenshotRequest competitionResultMetadata */
            competitionResultMetadata?: (wm.protobuf.SaveScreenshotRequest.IGhostCompetitionResultMetadata|null);

            /** SaveScreenshotRequest timeAttackResultMetadata */
            timeAttackResultMetadata?: (wm.protobuf.SaveScreenshotRequest.ITimeAttackResultMetadata|null);

            /** SaveScreenshotRequest levelUpMetadata */
            levelUpMetadata?: (wm.protobuf.SaveScreenshotRequest.ILevelUpMetadata|null);
        }

        /** Represents a SaveScreenshotRequest. */
        class SaveScreenshotRequest implements ISaveScreenshotRequest {

            /**
             * Constructs a new SaveScreenshotRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ISaveScreenshotRequest);

            /** SaveScreenshotRequest carId. */
            public carId: number;

            /** SaveScreenshotRequest timestamp. */
            public timestamp: number;

            /** SaveScreenshotRequest playedAt. */
            public playedAt: number;

            /** SaveScreenshotRequest transparent. */
            public transparent: boolean;

            /** SaveScreenshotRequest imageType. */
            public imageType: wm.protobuf.ScreenshotType;

            /** SaveScreenshotRequest image. */
            public image: Uint8Array;

            /** SaveScreenshotRequest ghostMetadata. */
            public ghostMetadata?: (wm.protobuf.SaveScreenshotRequest.IGhostBattleMetadata|null);

            /** SaveScreenshotRequest versusMetadata. */
            public versusMetadata?: (wm.protobuf.SaveScreenshotRequest.IVersusBattleMetadata|null);

            /** SaveScreenshotRequest terminalMetadata. */
            public terminalMetadata?: (wm.protobuf.SaveScreenshotRequest.ITerminalMetadata|null);

            /** SaveScreenshotRequest acquiringVsStarMetadata. */
            public acquiringVsStarMetadata?: (wm.protobuf.SaveScreenshotRequest.IAcquiringVersusStarMetadata|null);

            /** SaveScreenshotRequest acquiringAuraMotifMetadata. */
            public acquiringAuraMotifMetadata?: (wm.protobuf.SaveScreenshotRequest.IAcquiringAuraMotifMetadata|null);

            /** SaveScreenshotRequest ghostRegionMapMetadata. */
            public ghostRegionMapMetadata?: (wm.protobuf.SaveScreenshotRequest.IGhostRegionMapMetadata|null);

            /** SaveScreenshotRequest acquiringCrownMetadata. */
            public acquiringCrownMetadata?: (wm.protobuf.SaveScreenshotRequest.IAcquiringCrownMetadata|null);

            /** SaveScreenshotRequest competitionResultMetadata. */
            public competitionResultMetadata?: (wm.protobuf.SaveScreenshotRequest.IGhostCompetitionResultMetadata|null);

            /** SaveScreenshotRequest timeAttackResultMetadata. */
            public timeAttackResultMetadata?: (wm.protobuf.SaveScreenshotRequest.ITimeAttackResultMetadata|null);

            /** SaveScreenshotRequest levelUpMetadata. */
            public levelUpMetadata?: (wm.protobuf.SaveScreenshotRequest.ILevelUpMetadata|null);

            /**
             * Creates a new SaveScreenshotRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveScreenshotRequest instance
             */
            public static create(properties?: wm.protobuf.ISaveScreenshotRequest): wm.protobuf.SaveScreenshotRequest;

            /**
             * Encodes the specified SaveScreenshotRequest message. Does not implicitly {@link wm.protobuf.SaveScreenshotRequest.verify|verify} messages.
             * @param message SaveScreenshotRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ISaveScreenshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveScreenshotRequest message, length delimited. Does not implicitly {@link wm.protobuf.SaveScreenshotRequest.verify|verify} messages.
             * @param message SaveScreenshotRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ISaveScreenshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveScreenshotRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveScreenshotRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SaveScreenshotRequest;

            /**
             * Decodes a SaveScreenshotRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveScreenshotRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SaveScreenshotRequest;

            /**
             * Verifies a SaveScreenshotRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveScreenshotRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveScreenshotRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.SaveScreenshotRequest;

            /**
             * Creates a plain object from a SaveScreenshotRequest message. Also converts values to other types if specified.
             * @param message SaveScreenshotRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.SaveScreenshotRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveScreenshotRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveScreenshotRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SaveScreenshotRequest {

            /** Properties of a GhostBattleMetadata. */
            interface IGhostBattleMetadata {

                /** GhostBattleMetadata tunePower */
                tunePower: number;

                /** GhostBattleMetadata tuneHandling */
                tuneHandling: number;

                /** GhostBattleMetadata area */
                area: number;

                /** GhostBattleMetadata stampReturnCount */
                stampReturnCount: number;

                /** GhostBattleMetadata opponents */
                opponents?: (wm.protobuf.SaveScreenshotRequest.IOpponentCar[]|null);
            }

            /** Represents a GhostBattleMetadata. */
            class GhostBattleMetadata implements IGhostBattleMetadata {

                /**
                 * Constructs a new GhostBattleMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm.protobuf.SaveScreenshotRequest.IGhostBattleMetadata);

                /** GhostBattleMetadata tunePower. */
                public tunePower: number;

                /** GhostBattleMetadata tuneHandling. */
                public tuneHandling: number;

                /** GhostBattleMetadata area. */
                public area: number;

                /** GhostBattleMetadata stampReturnCount. */
                public stampReturnCount: number;

                /** GhostBattleMetadata opponents. */
                public opponents: wm.protobuf.SaveScreenshotRequest.IOpponentCar[];

                /**
                 * Creates a new GhostBattleMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GhostBattleMetadata instance
                 */
                public static create(properties?: wm.protobuf.SaveScreenshotRequest.IGhostBattleMetadata): wm.protobuf.SaveScreenshotRequest.GhostBattleMetadata;

                /**
                 * Encodes the specified GhostBattleMetadata message. Does not implicitly {@link wm.protobuf.SaveScreenshotRequest.GhostBattleMetadata.verify|verify} messages.
                 * @param message GhostBattleMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm.protobuf.SaveScreenshotRequest.IGhostBattleMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GhostBattleMetadata message, length delimited. Does not implicitly {@link wm.protobuf.SaveScreenshotRequest.GhostBattleMetadata.verify|verify} messages.
                 * @param message GhostBattleMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm.protobuf.SaveScreenshotRequest.IGhostBattleMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GhostBattleMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GhostBattleMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SaveScreenshotRequest.GhostBattleMetadata;

                /**
                 * Decodes a GhostBattleMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GhostBattleMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SaveScreenshotRequest.GhostBattleMetadata;

                /**
                 * Verifies a GhostBattleMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GhostBattleMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GhostBattleMetadata
                 */
                public static fromObject(object: { [k: string]: any }): wm.protobuf.SaveScreenshotRequest.GhostBattleMetadata;

                /**
                 * Creates a plain object from a GhostBattleMetadata message. Also converts values to other types if specified.
                 * @param message GhostBattleMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm.protobuf.SaveScreenshotRequest.GhostBattleMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GhostBattleMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GhostBattleMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a VersusBattleMetadata. */
            interface IVersusBattleMetadata {

                /** VersusBattleMetadata tunePower */
                tunePower: number;

                /** VersusBattleMetadata tuneHandling */
                tuneHandling: number;

                /** VersusBattleMetadata area */
                area: number;

                /** VersusBattleMetadata opponents */
                opponents?: (wm.protobuf.SaveScreenshotRequest.IOpponentCar[]|null);
            }

            /** Represents a VersusBattleMetadata. */
            class VersusBattleMetadata implements IVersusBattleMetadata {

                /**
                 * Constructs a new VersusBattleMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm.protobuf.SaveScreenshotRequest.IVersusBattleMetadata);

                /** VersusBattleMetadata tunePower. */
                public tunePower: number;

                /** VersusBattleMetadata tuneHandling. */
                public tuneHandling: number;

                /** VersusBattleMetadata area. */
                public area: number;

                /** VersusBattleMetadata opponents. */
                public opponents: wm.protobuf.SaveScreenshotRequest.IOpponentCar[];

                /**
                 * Creates a new VersusBattleMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VersusBattleMetadata instance
                 */
                public static create(properties?: wm.protobuf.SaveScreenshotRequest.IVersusBattleMetadata): wm.protobuf.SaveScreenshotRequest.VersusBattleMetadata;

                /**
                 * Encodes the specified VersusBattleMetadata message. Does not implicitly {@link wm.protobuf.SaveScreenshotRequest.VersusBattleMetadata.verify|verify} messages.
                 * @param message VersusBattleMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm.protobuf.SaveScreenshotRequest.IVersusBattleMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified VersusBattleMetadata message, length delimited. Does not implicitly {@link wm.protobuf.SaveScreenshotRequest.VersusBattleMetadata.verify|verify} messages.
                 * @param message VersusBattleMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm.protobuf.SaveScreenshotRequest.IVersusBattleMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VersusBattleMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns VersusBattleMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SaveScreenshotRequest.VersusBattleMetadata;

                /**
                 * Decodes a VersusBattleMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns VersusBattleMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SaveScreenshotRequest.VersusBattleMetadata;

                /**
                 * Verifies a VersusBattleMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a VersusBattleMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns VersusBattleMetadata
                 */
                public static fromObject(object: { [k: string]: any }): wm.protobuf.SaveScreenshotRequest.VersusBattleMetadata;

                /**
                 * Creates a plain object from a VersusBattleMetadata message. Also converts values to other types if specified.
                 * @param message VersusBattleMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm.protobuf.SaveScreenshotRequest.VersusBattleMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this VersusBattleMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for VersusBattleMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TerminalMetadata. */
            interface ITerminalMetadata {

                /** TerminalMetadata tunePower */
                tunePower: number;

                /** TerminalMetadata tuneHandling */
                tuneHandling: number;

                /** TerminalMetadata name */
                name: string;

                /** TerminalMetadata title */
                title: string;

                /** TerminalMetadata level */
                level: number;
            }

            /** Represents a TerminalMetadata. */
            class TerminalMetadata implements ITerminalMetadata {

                /**
                 * Constructs a new TerminalMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm.protobuf.SaveScreenshotRequest.ITerminalMetadata);

                /** TerminalMetadata tunePower. */
                public tunePower: number;

                /** TerminalMetadata tuneHandling. */
                public tuneHandling: number;

                /** TerminalMetadata name. */
                public name: string;

                /** TerminalMetadata title. */
                public title: string;

                /** TerminalMetadata level. */
                public level: number;

                /**
                 * Creates a new TerminalMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TerminalMetadata instance
                 */
                public static create(properties?: wm.protobuf.SaveScreenshotRequest.ITerminalMetadata): wm.protobuf.SaveScreenshotRequest.TerminalMetadata;

                /**
                 * Encodes the specified TerminalMetadata message. Does not implicitly {@link wm.protobuf.SaveScreenshotRequest.TerminalMetadata.verify|verify} messages.
                 * @param message TerminalMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm.protobuf.SaveScreenshotRequest.ITerminalMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TerminalMetadata message, length delimited. Does not implicitly {@link wm.protobuf.SaveScreenshotRequest.TerminalMetadata.verify|verify} messages.
                 * @param message TerminalMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm.protobuf.SaveScreenshotRequest.ITerminalMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TerminalMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TerminalMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SaveScreenshotRequest.TerminalMetadata;

                /**
                 * Decodes a TerminalMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TerminalMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SaveScreenshotRequest.TerminalMetadata;

                /**
                 * Verifies a TerminalMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TerminalMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TerminalMetadata
                 */
                public static fromObject(object: { [k: string]: any }): wm.protobuf.SaveScreenshotRequest.TerminalMetadata;

                /**
                 * Creates a plain object from a TerminalMetadata message. Also converts values to other types if specified.
                 * @param message TerminalMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm.protobuf.SaveScreenshotRequest.TerminalMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TerminalMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TerminalMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AcquiringVersusStarMetadata. */
            interface IAcquiringVersusStarMetadata {

                /** AcquiringVersusStarMetadata tunePower */
                tunePower: number;

                /** AcquiringVersusStarMetadata tuneHandling */
                tuneHandling: number;

                /** AcquiringVersusStarMetadata vsStarCount */
                vsStarCount: number;
            }

            /** Represents an AcquiringVersusStarMetadata. */
            class AcquiringVersusStarMetadata implements IAcquiringVersusStarMetadata {

                /**
                 * Constructs a new AcquiringVersusStarMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm.protobuf.SaveScreenshotRequest.IAcquiringVersusStarMetadata);

                /** AcquiringVersusStarMetadata tunePower. */
                public tunePower: number;

                /** AcquiringVersusStarMetadata tuneHandling. */
                public tuneHandling: number;

                /** AcquiringVersusStarMetadata vsStarCount. */
                public vsStarCount: number;

                /**
                 * Creates a new AcquiringVersusStarMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AcquiringVersusStarMetadata instance
                 */
                public static create(properties?: wm.protobuf.SaveScreenshotRequest.IAcquiringVersusStarMetadata): wm.protobuf.SaveScreenshotRequest.AcquiringVersusStarMetadata;

                /**
                 * Encodes the specified AcquiringVersusStarMetadata message. Does not implicitly {@link wm.protobuf.SaveScreenshotRequest.AcquiringVersusStarMetadata.verify|verify} messages.
                 * @param message AcquiringVersusStarMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm.protobuf.SaveScreenshotRequest.IAcquiringVersusStarMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AcquiringVersusStarMetadata message, length delimited. Does not implicitly {@link wm.protobuf.SaveScreenshotRequest.AcquiringVersusStarMetadata.verify|verify} messages.
                 * @param message AcquiringVersusStarMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm.protobuf.SaveScreenshotRequest.IAcquiringVersusStarMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AcquiringVersusStarMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AcquiringVersusStarMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SaveScreenshotRequest.AcquiringVersusStarMetadata;

                /**
                 * Decodes an AcquiringVersusStarMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AcquiringVersusStarMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SaveScreenshotRequest.AcquiringVersusStarMetadata;

                /**
                 * Verifies an AcquiringVersusStarMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AcquiringVersusStarMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AcquiringVersusStarMetadata
                 */
                public static fromObject(object: { [k: string]: any }): wm.protobuf.SaveScreenshotRequest.AcquiringVersusStarMetadata;

                /**
                 * Creates a plain object from an AcquiringVersusStarMetadata message. Also converts values to other types if specified.
                 * @param message AcquiringVersusStarMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm.protobuf.SaveScreenshotRequest.AcquiringVersusStarMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AcquiringVersusStarMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AcquiringVersusStarMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AcquiringAuraMotifMetadata. */
            interface IAcquiringAuraMotifMetadata {

                /** AcquiringAuraMotifMetadata tunePower */
                tunePower: number;

                /** AcquiringAuraMotifMetadata tuneHandling */
                tuneHandling: number;

                /** AcquiringAuraMotifMetadata auraMotif */
                auraMotif: number;
            }

            /** Represents an AcquiringAuraMotifMetadata. */
            class AcquiringAuraMotifMetadata implements IAcquiringAuraMotifMetadata {

                /**
                 * Constructs a new AcquiringAuraMotifMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm.protobuf.SaveScreenshotRequest.IAcquiringAuraMotifMetadata);

                /** AcquiringAuraMotifMetadata tunePower. */
                public tunePower: number;

                /** AcquiringAuraMotifMetadata tuneHandling. */
                public tuneHandling: number;

                /** AcquiringAuraMotifMetadata auraMotif. */
                public auraMotif: number;

                /**
                 * Creates a new AcquiringAuraMotifMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AcquiringAuraMotifMetadata instance
                 */
                public static create(properties?: wm.protobuf.SaveScreenshotRequest.IAcquiringAuraMotifMetadata): wm.protobuf.SaveScreenshotRequest.AcquiringAuraMotifMetadata;

                /**
                 * Encodes the specified AcquiringAuraMotifMetadata message. Does not implicitly {@link wm.protobuf.SaveScreenshotRequest.AcquiringAuraMotifMetadata.verify|verify} messages.
                 * @param message AcquiringAuraMotifMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm.protobuf.SaveScreenshotRequest.IAcquiringAuraMotifMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AcquiringAuraMotifMetadata message, length delimited. Does not implicitly {@link wm.protobuf.SaveScreenshotRequest.AcquiringAuraMotifMetadata.verify|verify} messages.
                 * @param message AcquiringAuraMotifMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm.protobuf.SaveScreenshotRequest.IAcquiringAuraMotifMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AcquiringAuraMotifMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AcquiringAuraMotifMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SaveScreenshotRequest.AcquiringAuraMotifMetadata;

                /**
                 * Decodes an AcquiringAuraMotifMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AcquiringAuraMotifMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SaveScreenshotRequest.AcquiringAuraMotifMetadata;

                /**
                 * Verifies an AcquiringAuraMotifMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AcquiringAuraMotifMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AcquiringAuraMotifMetadata
                 */
                public static fromObject(object: { [k: string]: any }): wm.protobuf.SaveScreenshotRequest.AcquiringAuraMotifMetadata;

                /**
                 * Creates a plain object from an AcquiringAuraMotifMetadata message. Also converts values to other types if specified.
                 * @param message AcquiringAuraMotifMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm.protobuf.SaveScreenshotRequest.AcquiringAuraMotifMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AcquiringAuraMotifMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AcquiringAuraMotifMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GhostRegionMapMetadata. */
            interface IGhostRegionMapMetadata {

                /** GhostRegionMapMetadata tunePower */
                tunePower: number;

                /** GhostRegionMapMetadata tuneHandling */
                tuneHandling: number;

                /** GhostRegionMapMetadata rgScore */
                rgScore: number;

                /** GhostRegionMapMetadata rgRegionMapScore */
                rgRegionMapScore?: (number[]|null);
            }

            /** Represents a GhostRegionMapMetadata. */
            class GhostRegionMapMetadata implements IGhostRegionMapMetadata {

                /**
                 * Constructs a new GhostRegionMapMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm.protobuf.SaveScreenshotRequest.IGhostRegionMapMetadata);

                /** GhostRegionMapMetadata tunePower. */
                public tunePower: number;

                /** GhostRegionMapMetadata tuneHandling. */
                public tuneHandling: number;

                /** GhostRegionMapMetadata rgScore. */
                public rgScore: number;

                /** GhostRegionMapMetadata rgRegionMapScore. */
                public rgRegionMapScore: number[];

                /**
                 * Creates a new GhostRegionMapMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GhostRegionMapMetadata instance
                 */
                public static create(properties?: wm.protobuf.SaveScreenshotRequest.IGhostRegionMapMetadata): wm.protobuf.SaveScreenshotRequest.GhostRegionMapMetadata;

                /**
                 * Encodes the specified GhostRegionMapMetadata message. Does not implicitly {@link wm.protobuf.SaveScreenshotRequest.GhostRegionMapMetadata.verify|verify} messages.
                 * @param message GhostRegionMapMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm.protobuf.SaveScreenshotRequest.IGhostRegionMapMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GhostRegionMapMetadata message, length delimited. Does not implicitly {@link wm.protobuf.SaveScreenshotRequest.GhostRegionMapMetadata.verify|verify} messages.
                 * @param message GhostRegionMapMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm.protobuf.SaveScreenshotRequest.IGhostRegionMapMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GhostRegionMapMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GhostRegionMapMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SaveScreenshotRequest.GhostRegionMapMetadata;

                /**
                 * Decodes a GhostRegionMapMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GhostRegionMapMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SaveScreenshotRequest.GhostRegionMapMetadata;

                /**
                 * Verifies a GhostRegionMapMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GhostRegionMapMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GhostRegionMapMetadata
                 */
                public static fromObject(object: { [k: string]: any }): wm.protobuf.SaveScreenshotRequest.GhostRegionMapMetadata;

                /**
                 * Creates a plain object from a GhostRegionMapMetadata message. Also converts values to other types if specified.
                 * @param message GhostRegionMapMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm.protobuf.SaveScreenshotRequest.GhostRegionMapMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GhostRegionMapMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GhostRegionMapMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AcquiringCrownMetadata. */
            interface IAcquiringCrownMetadata {

                /** AcquiringCrownMetadata tunePower */
                tunePower: number;

                /** AcquiringCrownMetadata tuneHandling */
                tuneHandling: number;

                /** AcquiringCrownMetadata area */
                area: number;
            }

            /** Represents an AcquiringCrownMetadata. */
            class AcquiringCrownMetadata implements IAcquiringCrownMetadata {

                /**
                 * Constructs a new AcquiringCrownMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm.protobuf.SaveScreenshotRequest.IAcquiringCrownMetadata);

                /** AcquiringCrownMetadata tunePower. */
                public tunePower: number;

                /** AcquiringCrownMetadata tuneHandling. */
                public tuneHandling: number;

                /** AcquiringCrownMetadata area. */
                public area: number;

                /**
                 * Creates a new AcquiringCrownMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AcquiringCrownMetadata instance
                 */
                public static create(properties?: wm.protobuf.SaveScreenshotRequest.IAcquiringCrownMetadata): wm.protobuf.SaveScreenshotRequest.AcquiringCrownMetadata;

                /**
                 * Encodes the specified AcquiringCrownMetadata message. Does not implicitly {@link wm.protobuf.SaveScreenshotRequest.AcquiringCrownMetadata.verify|verify} messages.
                 * @param message AcquiringCrownMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm.protobuf.SaveScreenshotRequest.IAcquiringCrownMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AcquiringCrownMetadata message, length delimited. Does not implicitly {@link wm.protobuf.SaveScreenshotRequest.AcquiringCrownMetadata.verify|verify} messages.
                 * @param message AcquiringCrownMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm.protobuf.SaveScreenshotRequest.IAcquiringCrownMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AcquiringCrownMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AcquiringCrownMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SaveScreenshotRequest.AcquiringCrownMetadata;

                /**
                 * Decodes an AcquiringCrownMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AcquiringCrownMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SaveScreenshotRequest.AcquiringCrownMetadata;

                /**
                 * Verifies an AcquiringCrownMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AcquiringCrownMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AcquiringCrownMetadata
                 */
                public static fromObject(object: { [k: string]: any }): wm.protobuf.SaveScreenshotRequest.AcquiringCrownMetadata;

                /**
                 * Creates a plain object from an AcquiringCrownMetadata message. Also converts values to other types if specified.
                 * @param message AcquiringCrownMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm.protobuf.SaveScreenshotRequest.AcquiringCrownMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AcquiringCrownMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AcquiringCrownMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GhostCompetitionResultMetadata. */
            interface IGhostCompetitionResultMetadata {

                /** GhostCompetitionResultMetadata tunePower */
                tunePower: number;

                /** GhostCompetitionResultMetadata tuneHandling */
                tuneHandling: number;

                /** GhostCompetitionResultMetadata rank */
                rank?: (number|null);

                /** GhostCompetitionResultMetadata result */
                result: number;
            }

            /** Represents a GhostCompetitionResultMetadata. */
            class GhostCompetitionResultMetadata implements IGhostCompetitionResultMetadata {

                /**
                 * Constructs a new GhostCompetitionResultMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm.protobuf.SaveScreenshotRequest.IGhostCompetitionResultMetadata);

                /** GhostCompetitionResultMetadata tunePower. */
                public tunePower: number;

                /** GhostCompetitionResultMetadata tuneHandling. */
                public tuneHandling: number;

                /** GhostCompetitionResultMetadata rank. */
                public rank: number;

                /** GhostCompetitionResultMetadata result. */
                public result: number;

                /**
                 * Creates a new GhostCompetitionResultMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GhostCompetitionResultMetadata instance
                 */
                public static create(properties?: wm.protobuf.SaveScreenshotRequest.IGhostCompetitionResultMetadata): wm.protobuf.SaveScreenshotRequest.GhostCompetitionResultMetadata;

                /**
                 * Encodes the specified GhostCompetitionResultMetadata message. Does not implicitly {@link wm.protobuf.SaveScreenshotRequest.GhostCompetitionResultMetadata.verify|verify} messages.
                 * @param message GhostCompetitionResultMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm.protobuf.SaveScreenshotRequest.IGhostCompetitionResultMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GhostCompetitionResultMetadata message, length delimited. Does not implicitly {@link wm.protobuf.SaveScreenshotRequest.GhostCompetitionResultMetadata.verify|verify} messages.
                 * @param message GhostCompetitionResultMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm.protobuf.SaveScreenshotRequest.IGhostCompetitionResultMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GhostCompetitionResultMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GhostCompetitionResultMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SaveScreenshotRequest.GhostCompetitionResultMetadata;

                /**
                 * Decodes a GhostCompetitionResultMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GhostCompetitionResultMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SaveScreenshotRequest.GhostCompetitionResultMetadata;

                /**
                 * Verifies a GhostCompetitionResultMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GhostCompetitionResultMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GhostCompetitionResultMetadata
                 */
                public static fromObject(object: { [k: string]: any }): wm.protobuf.SaveScreenshotRequest.GhostCompetitionResultMetadata;

                /**
                 * Creates a plain object from a GhostCompetitionResultMetadata message. Also converts values to other types if specified.
                 * @param message GhostCompetitionResultMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm.protobuf.SaveScreenshotRequest.GhostCompetitionResultMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GhostCompetitionResultMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GhostCompetitionResultMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TimeAttackResultMetadata. */
            interface ITimeAttackResultMetadata {

                /** TimeAttackResultMetadata tunePower */
                tunePower: number;

                /** TimeAttackResultMetadata tuneHandling */
                tuneHandling: number;

                /** TimeAttackResultMetadata course */
                course: number;

                /** TimeAttackResultMetadata wholeRank */
                wholeRank?: (number|null);

                /** TimeAttackResultMetadata modelRank */
                modelRank?: (number|null);
            }

            /** Represents a TimeAttackResultMetadata. */
            class TimeAttackResultMetadata implements ITimeAttackResultMetadata {

                /**
                 * Constructs a new TimeAttackResultMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm.protobuf.SaveScreenshotRequest.ITimeAttackResultMetadata);

                /** TimeAttackResultMetadata tunePower. */
                public tunePower: number;

                /** TimeAttackResultMetadata tuneHandling. */
                public tuneHandling: number;

                /** TimeAttackResultMetadata course. */
                public course: number;

                /** TimeAttackResultMetadata wholeRank. */
                public wholeRank: number;

                /** TimeAttackResultMetadata modelRank. */
                public modelRank: number;

                /**
                 * Creates a new TimeAttackResultMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TimeAttackResultMetadata instance
                 */
                public static create(properties?: wm.protobuf.SaveScreenshotRequest.ITimeAttackResultMetadata): wm.protobuf.SaveScreenshotRequest.TimeAttackResultMetadata;

                /**
                 * Encodes the specified TimeAttackResultMetadata message. Does not implicitly {@link wm.protobuf.SaveScreenshotRequest.TimeAttackResultMetadata.verify|verify} messages.
                 * @param message TimeAttackResultMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm.protobuf.SaveScreenshotRequest.ITimeAttackResultMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TimeAttackResultMetadata message, length delimited. Does not implicitly {@link wm.protobuf.SaveScreenshotRequest.TimeAttackResultMetadata.verify|verify} messages.
                 * @param message TimeAttackResultMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm.protobuf.SaveScreenshotRequest.ITimeAttackResultMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TimeAttackResultMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TimeAttackResultMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SaveScreenshotRequest.TimeAttackResultMetadata;

                /**
                 * Decodes a TimeAttackResultMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TimeAttackResultMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SaveScreenshotRequest.TimeAttackResultMetadata;

                /**
                 * Verifies a TimeAttackResultMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TimeAttackResultMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TimeAttackResultMetadata
                 */
                public static fromObject(object: { [k: string]: any }): wm.protobuf.SaveScreenshotRequest.TimeAttackResultMetadata;

                /**
                 * Creates a plain object from a TimeAttackResultMetadata message. Also converts values to other types if specified.
                 * @param message TimeAttackResultMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm.protobuf.SaveScreenshotRequest.TimeAttackResultMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TimeAttackResultMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TimeAttackResultMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a LevelUpMetadata. */
            interface ILevelUpMetadata {

                /** LevelUpMetadata tunePower */
                tunePower: number;

                /** LevelUpMetadata tuneHandling */
                tuneHandling: number;

                /** LevelUpMetadata level */
                level: number;
            }

            /** Represents a LevelUpMetadata. */
            class LevelUpMetadata implements ILevelUpMetadata {

                /**
                 * Constructs a new LevelUpMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm.protobuf.SaveScreenshotRequest.ILevelUpMetadata);

                /** LevelUpMetadata tunePower. */
                public tunePower: number;

                /** LevelUpMetadata tuneHandling. */
                public tuneHandling: number;

                /** LevelUpMetadata level. */
                public level: number;

                /**
                 * Creates a new LevelUpMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LevelUpMetadata instance
                 */
                public static create(properties?: wm.protobuf.SaveScreenshotRequest.ILevelUpMetadata): wm.protobuf.SaveScreenshotRequest.LevelUpMetadata;

                /**
                 * Encodes the specified LevelUpMetadata message. Does not implicitly {@link wm.protobuf.SaveScreenshotRequest.LevelUpMetadata.verify|verify} messages.
                 * @param message LevelUpMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm.protobuf.SaveScreenshotRequest.ILevelUpMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LevelUpMetadata message, length delimited. Does not implicitly {@link wm.protobuf.SaveScreenshotRequest.LevelUpMetadata.verify|verify} messages.
                 * @param message LevelUpMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm.protobuf.SaveScreenshotRequest.ILevelUpMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LevelUpMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LevelUpMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SaveScreenshotRequest.LevelUpMetadata;

                /**
                 * Decodes a LevelUpMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LevelUpMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SaveScreenshotRequest.LevelUpMetadata;

                /**
                 * Verifies a LevelUpMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LevelUpMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LevelUpMetadata
                 */
                public static fromObject(object: { [k: string]: any }): wm.protobuf.SaveScreenshotRequest.LevelUpMetadata;

                /**
                 * Creates a plain object from a LevelUpMetadata message. Also converts values to other types if specified.
                 * @param message LevelUpMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm.protobuf.SaveScreenshotRequest.LevelUpMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LevelUpMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for LevelUpMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an OpponentCar. */
            interface IOpponentCar {

                /** OpponentCar carId */
                carId?: (number|null);

                /** OpponentCar tunePower */
                tunePower: number;

                /** OpponentCar tuneHandling */
                tuneHandling: number;
            }

            /** Represents an OpponentCar. */
            class OpponentCar implements IOpponentCar {

                /**
                 * Constructs a new OpponentCar.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm.protobuf.SaveScreenshotRequest.IOpponentCar);

                /** OpponentCar carId. */
                public carId: number;

                /** OpponentCar tunePower. */
                public tunePower: number;

                /** OpponentCar tuneHandling. */
                public tuneHandling: number;

                /**
                 * Creates a new OpponentCar instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OpponentCar instance
                 */
                public static create(properties?: wm.protobuf.SaveScreenshotRequest.IOpponentCar): wm.protobuf.SaveScreenshotRequest.OpponentCar;

                /**
                 * Encodes the specified OpponentCar message. Does not implicitly {@link wm.protobuf.SaveScreenshotRequest.OpponentCar.verify|verify} messages.
                 * @param message OpponentCar message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm.protobuf.SaveScreenshotRequest.IOpponentCar, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OpponentCar message, length delimited. Does not implicitly {@link wm.protobuf.SaveScreenshotRequest.OpponentCar.verify|verify} messages.
                 * @param message OpponentCar message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm.protobuf.SaveScreenshotRequest.IOpponentCar, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OpponentCar message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OpponentCar
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SaveScreenshotRequest.OpponentCar;

                /**
                 * Decodes an OpponentCar message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns OpponentCar
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SaveScreenshotRequest.OpponentCar;

                /**
                 * Verifies an OpponentCar message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an OpponentCar message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OpponentCar
                 */
                public static fromObject(object: { [k: string]: any }): wm.protobuf.SaveScreenshotRequest.OpponentCar;

                /**
                 * Creates a plain object from an OpponentCar message. Also converts values to other types if specified.
                 * @param message OpponentCar
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm.protobuf.SaveScreenshotRequest.OpponentCar, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OpponentCar to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for OpponentCar
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a SaveScreenshotResponse. */
        interface ISaveScreenshotResponse {

            /** SaveScreenshotResponse error */
            error: wm.protobuf.ErrorCode;
        }

        /** Represents a SaveScreenshotResponse. */
        class SaveScreenshotResponse implements ISaveScreenshotResponse {

            /**
             * Constructs a new SaveScreenshotResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ISaveScreenshotResponse);

            /** SaveScreenshotResponse error. */
            public error: wm.protobuf.ErrorCode;

            /**
             * Creates a new SaveScreenshotResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveScreenshotResponse instance
             */
            public static create(properties?: wm.protobuf.ISaveScreenshotResponse): wm.protobuf.SaveScreenshotResponse;

            /**
             * Encodes the specified SaveScreenshotResponse message. Does not implicitly {@link wm.protobuf.SaveScreenshotResponse.verify|verify} messages.
             * @param message SaveScreenshotResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ISaveScreenshotResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveScreenshotResponse message, length delimited. Does not implicitly {@link wm.protobuf.SaveScreenshotResponse.verify|verify} messages.
             * @param message SaveScreenshotResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ISaveScreenshotResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveScreenshotResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveScreenshotResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SaveScreenshotResponse;

            /**
             * Decodes a SaveScreenshotResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveScreenshotResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SaveScreenshotResponse;

            /**
             * Verifies a SaveScreenshotResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveScreenshotResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveScreenshotResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.SaveScreenshotResponse;

            /**
             * Creates a plain object from a SaveScreenshotResponse message. Also converts values to other types if specified.
             * @param message SaveScreenshotResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.SaveScreenshotResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveScreenshotResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveScreenshotResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SubmitClientLogRequest. */
        interface ISubmitClientLogRequest {

            /** SubmitClientLogRequest data */
            data: Uint8Array;

            /** SubmitClientLogRequest modifiedAt */
            modifiedAt: number;

            /** SubmitClientLogRequest logType */
            logType: wm.protobuf.ClientLogType;
        }

        /** Represents a SubmitClientLogRequest. */
        class SubmitClientLogRequest implements ISubmitClientLogRequest {

            /**
             * Constructs a new SubmitClientLogRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ISubmitClientLogRequest);

            /** SubmitClientLogRequest data. */
            public data: Uint8Array;

            /** SubmitClientLogRequest modifiedAt. */
            public modifiedAt: number;

            /** SubmitClientLogRequest logType. */
            public logType: wm.protobuf.ClientLogType;

            /**
             * Creates a new SubmitClientLogRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SubmitClientLogRequest instance
             */
            public static create(properties?: wm.protobuf.ISubmitClientLogRequest): wm.protobuf.SubmitClientLogRequest;

            /**
             * Encodes the specified SubmitClientLogRequest message. Does not implicitly {@link wm.protobuf.SubmitClientLogRequest.verify|verify} messages.
             * @param message SubmitClientLogRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ISubmitClientLogRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SubmitClientLogRequest message, length delimited. Does not implicitly {@link wm.protobuf.SubmitClientLogRequest.verify|verify} messages.
             * @param message SubmitClientLogRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ISubmitClientLogRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SubmitClientLogRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SubmitClientLogRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SubmitClientLogRequest;

            /**
             * Decodes a SubmitClientLogRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SubmitClientLogRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SubmitClientLogRequest;

            /**
             * Verifies a SubmitClientLogRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SubmitClientLogRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SubmitClientLogRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.SubmitClientLogRequest;

            /**
             * Creates a plain object from a SubmitClientLogRequest message. Also converts values to other types if specified.
             * @param message SubmitClientLogRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.SubmitClientLogRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SubmitClientLogRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SubmitClientLogRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SubmitClientLogResponse. */
        interface ISubmitClientLogResponse {

            /** SubmitClientLogResponse error */
            error: wm.protobuf.ErrorCode;
        }

        /** Represents a SubmitClientLogResponse. */
        class SubmitClientLogResponse implements ISubmitClientLogResponse {

            /**
             * Constructs a new SubmitClientLogResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ISubmitClientLogResponse);

            /** SubmitClientLogResponse error. */
            public error: wm.protobuf.ErrorCode;

            /**
             * Creates a new SubmitClientLogResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SubmitClientLogResponse instance
             */
            public static create(properties?: wm.protobuf.ISubmitClientLogResponse): wm.protobuf.SubmitClientLogResponse;

            /**
             * Encodes the specified SubmitClientLogResponse message. Does not implicitly {@link wm.protobuf.SubmitClientLogResponse.verify|verify} messages.
             * @param message SubmitClientLogResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ISubmitClientLogResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SubmitClientLogResponse message, length delimited. Does not implicitly {@link wm.protobuf.SubmitClientLogResponse.verify|verify} messages.
             * @param message SubmitClientLogResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ISubmitClientLogResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SubmitClientLogResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SubmitClientLogResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SubmitClientLogResponse;

            /**
             * Decodes a SubmitClientLogResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SubmitClientLogResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SubmitClientLogResponse;

            /**
             * Verifies a SubmitClientLogResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SubmitClientLogResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SubmitClientLogResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.SubmitClientLogResponse;

            /**
             * Creates a plain object from a SubmitClientLogResponse message. Also converts values to other types if specified.
             * @param message SubmitClientLogResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.SubmitClientLogResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SubmitClientLogResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SubmitClientLogResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadScratchInformationRequest. */
        interface ILoadScratchInformationRequest {

            /** LoadScratchInformationRequest userId */
            userId: number;
        }

        /** Represents a LoadScratchInformationRequest. */
        class LoadScratchInformationRequest implements ILoadScratchInformationRequest {

            /**
             * Constructs a new LoadScratchInformationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ILoadScratchInformationRequest);

            /** LoadScratchInformationRequest userId. */
            public userId: number;

            /**
             * Creates a new LoadScratchInformationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadScratchInformationRequest instance
             */
            public static create(properties?: wm.protobuf.ILoadScratchInformationRequest): wm.protobuf.LoadScratchInformationRequest;

            /**
             * Encodes the specified LoadScratchInformationRequest message. Does not implicitly {@link wm.protobuf.LoadScratchInformationRequest.verify|verify} messages.
             * @param message LoadScratchInformationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ILoadScratchInformationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadScratchInformationRequest message, length delimited. Does not implicitly {@link wm.protobuf.LoadScratchInformationRequest.verify|verify} messages.
             * @param message LoadScratchInformationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ILoadScratchInformationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadScratchInformationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadScratchInformationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadScratchInformationRequest;

            /**
             * Decodes a LoadScratchInformationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadScratchInformationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadScratchInformationRequest;

            /**
             * Verifies a LoadScratchInformationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadScratchInformationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadScratchInformationRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadScratchInformationRequest;

            /**
             * Creates a plain object from a LoadScratchInformationRequest message. Also converts values to other types if specified.
             * @param message LoadScratchInformationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.LoadScratchInformationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadScratchInformationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadScratchInformationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadScratchInformationResponse. */
        interface ILoadScratchInformationResponse {

            /** LoadScratchInformationResponse error */
            error: wm.protobuf.ErrorCode;

            /** LoadScratchInformationResponse scratchSheets */
            scratchSheets?: (wm.protobuf.IScratchSheet[]|null);

            /** LoadScratchInformationResponse currentSheet */
            currentSheet: number;

            /** LoadScratchInformationResponse numOfScratched */
            numOfScratched: number;

            /** LoadScratchInformationResponse ownedUserItems */
            ownedUserItems?: (wm.protobuf.IUserItem[]|null);
        }

        /** Represents a LoadScratchInformationResponse. */
        class LoadScratchInformationResponse implements ILoadScratchInformationResponse {

            /**
             * Constructs a new LoadScratchInformationResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ILoadScratchInformationResponse);

            /** LoadScratchInformationResponse error. */
            public error: wm.protobuf.ErrorCode;

            /** LoadScratchInformationResponse scratchSheets. */
            public scratchSheets: wm.protobuf.IScratchSheet[];

            /** LoadScratchInformationResponse currentSheet. */
            public currentSheet: number;

            /** LoadScratchInformationResponse numOfScratched. */
            public numOfScratched: number;

            /** LoadScratchInformationResponse ownedUserItems. */
            public ownedUserItems: wm.protobuf.IUserItem[];

            /**
             * Creates a new LoadScratchInformationResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadScratchInformationResponse instance
             */
            public static create(properties?: wm.protobuf.ILoadScratchInformationResponse): wm.protobuf.LoadScratchInformationResponse;

            /**
             * Encodes the specified LoadScratchInformationResponse message. Does not implicitly {@link wm.protobuf.LoadScratchInformationResponse.verify|verify} messages.
             * @param message LoadScratchInformationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ILoadScratchInformationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadScratchInformationResponse message, length delimited. Does not implicitly {@link wm.protobuf.LoadScratchInformationResponse.verify|verify} messages.
             * @param message LoadScratchInformationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ILoadScratchInformationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadScratchInformationResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadScratchInformationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadScratchInformationResponse;

            /**
             * Decodes a LoadScratchInformationResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadScratchInformationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadScratchInformationResponse;

            /**
             * Verifies a LoadScratchInformationResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadScratchInformationResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadScratchInformationResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadScratchInformationResponse;

            /**
             * Creates a plain object from a LoadScratchInformationResponse message. Also converts values to other types if specified.
             * @param message LoadScratchInformationResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.LoadScratchInformationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadScratchInformationResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadScratchInformationResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SaveScratchSheetRequest. */
        interface ISaveScratchSheetRequest {

            /** SaveScratchSheetRequest timestamp */
            timestamp: number;

            /** SaveScratchSheetRequest targetSheet */
            targetSheet: number;

            /** SaveScratchSheetRequest targetSquare */
            targetSquare: number;

            /** SaveScratchSheetRequest userId */
            userId: number;
        }

        /** Represents a SaveScratchSheetRequest. */
        class SaveScratchSheetRequest implements ISaveScratchSheetRequest {

            /**
             * Constructs a new SaveScratchSheetRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ISaveScratchSheetRequest);

            /** SaveScratchSheetRequest timestamp. */
            public timestamp: number;

            /** SaveScratchSheetRequest targetSheet. */
            public targetSheet: number;

            /** SaveScratchSheetRequest targetSquare. */
            public targetSquare: number;

            /** SaveScratchSheetRequest userId. */
            public userId: number;

            /**
             * Creates a new SaveScratchSheetRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveScratchSheetRequest instance
             */
            public static create(properties?: wm.protobuf.ISaveScratchSheetRequest): wm.protobuf.SaveScratchSheetRequest;

            /**
             * Encodes the specified SaveScratchSheetRequest message. Does not implicitly {@link wm.protobuf.SaveScratchSheetRequest.verify|verify} messages.
             * @param message SaveScratchSheetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ISaveScratchSheetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveScratchSheetRequest message, length delimited. Does not implicitly {@link wm.protobuf.SaveScratchSheetRequest.verify|verify} messages.
             * @param message SaveScratchSheetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ISaveScratchSheetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveScratchSheetRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveScratchSheetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SaveScratchSheetRequest;

            /**
             * Decodes a SaveScratchSheetRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveScratchSheetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SaveScratchSheetRequest;

            /**
             * Verifies a SaveScratchSheetRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveScratchSheetRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveScratchSheetRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.SaveScratchSheetRequest;

            /**
             * Creates a plain object from a SaveScratchSheetRequest message. Also converts values to other types if specified.
             * @param message SaveScratchSheetRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.SaveScratchSheetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveScratchSheetRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveScratchSheetRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SaveScratchSheetResponse. */
        interface ISaveScratchSheetResponse {

            /** SaveScratchSheetResponse error */
            error: wm.protobuf.ErrorCode;

            /** SaveScratchSheetResponse scratchSheets */
            scratchSheets?: (wm.protobuf.IScratchSheet[]|null);

            /** SaveScratchSheetResponse currentSheet */
            currentSheet: number;

            /** SaveScratchSheetResponse numOfScratched */
            numOfScratched: number;

            /** SaveScratchSheetResponse earnedItem */
            earnedItem?: (wm.protobuf.IUserItem|null);
        }

        /** Represents a SaveScratchSheetResponse. */
        class SaveScratchSheetResponse implements ISaveScratchSheetResponse {

            /**
             * Constructs a new SaveScratchSheetResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ISaveScratchSheetResponse);

            /** SaveScratchSheetResponse error. */
            public error: wm.protobuf.ErrorCode;

            /** SaveScratchSheetResponse scratchSheets. */
            public scratchSheets: wm.protobuf.IScratchSheet[];

            /** SaveScratchSheetResponse currentSheet. */
            public currentSheet: number;

            /** SaveScratchSheetResponse numOfScratched. */
            public numOfScratched: number;

            /** SaveScratchSheetResponse earnedItem. */
            public earnedItem?: (wm.protobuf.IUserItem|null);

            /**
             * Creates a new SaveScratchSheetResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveScratchSheetResponse instance
             */
            public static create(properties?: wm.protobuf.ISaveScratchSheetResponse): wm.protobuf.SaveScratchSheetResponse;

            /**
             * Encodes the specified SaveScratchSheetResponse message. Does not implicitly {@link wm.protobuf.SaveScratchSheetResponse.verify|verify} messages.
             * @param message SaveScratchSheetResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ISaveScratchSheetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveScratchSheetResponse message, length delimited. Does not implicitly {@link wm.protobuf.SaveScratchSheetResponse.verify|verify} messages.
             * @param message SaveScratchSheetResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ISaveScratchSheetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveScratchSheetResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveScratchSheetResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SaveScratchSheetResponse;

            /**
             * Decodes a SaveScratchSheetResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveScratchSheetResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SaveScratchSheetResponse;

            /**
             * Verifies a SaveScratchSheetResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveScratchSheetResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveScratchSheetResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.SaveScratchSheetResponse;

            /**
             * Creates a plain object from a SaveScratchSheetResponse message. Also converts values to other types if specified.
             * @param message SaveScratchSheetResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.SaveScratchSheetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveScratchSheetResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveScratchSheetResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TurnScratchSheetRequest. */
        interface ITurnScratchSheetRequest {

            /** TurnScratchSheetRequest userId */
            userId: number;

            /** TurnScratchSheetRequest targetSheet */
            targetSheet: number;
        }

        /** Represents a TurnScratchSheetRequest. */
        class TurnScratchSheetRequest implements ITurnScratchSheetRequest {

            /**
             * Constructs a new TurnScratchSheetRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ITurnScratchSheetRequest);

            /** TurnScratchSheetRequest userId. */
            public userId: number;

            /** TurnScratchSheetRequest targetSheet. */
            public targetSheet: number;

            /**
             * Creates a new TurnScratchSheetRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TurnScratchSheetRequest instance
             */
            public static create(properties?: wm.protobuf.ITurnScratchSheetRequest): wm.protobuf.TurnScratchSheetRequest;

            /**
             * Encodes the specified TurnScratchSheetRequest message. Does not implicitly {@link wm.protobuf.TurnScratchSheetRequest.verify|verify} messages.
             * @param message TurnScratchSheetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ITurnScratchSheetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TurnScratchSheetRequest message, length delimited. Does not implicitly {@link wm.protobuf.TurnScratchSheetRequest.verify|verify} messages.
             * @param message TurnScratchSheetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ITurnScratchSheetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TurnScratchSheetRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TurnScratchSheetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.TurnScratchSheetRequest;

            /**
             * Decodes a TurnScratchSheetRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TurnScratchSheetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.TurnScratchSheetRequest;

            /**
             * Verifies a TurnScratchSheetRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TurnScratchSheetRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TurnScratchSheetRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.TurnScratchSheetRequest;

            /**
             * Creates a plain object from a TurnScratchSheetRequest message. Also converts values to other types if specified.
             * @param message TurnScratchSheetRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.TurnScratchSheetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TurnScratchSheetRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TurnScratchSheetRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TurnScratchSheetResponse. */
        interface ITurnScratchSheetResponse {

            /** TurnScratchSheetResponse error */
            error: wm.protobuf.ErrorCode;
        }

        /** Represents a TurnScratchSheetResponse. */
        class TurnScratchSheetResponse implements ITurnScratchSheetResponse {

            /**
             * Constructs a new TurnScratchSheetResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ITurnScratchSheetResponse);

            /** TurnScratchSheetResponse error. */
            public error: wm.protobuf.ErrorCode;

            /**
             * Creates a new TurnScratchSheetResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TurnScratchSheetResponse instance
             */
            public static create(properties?: wm.protobuf.ITurnScratchSheetResponse): wm.protobuf.TurnScratchSheetResponse;

            /**
             * Encodes the specified TurnScratchSheetResponse message. Does not implicitly {@link wm.protobuf.TurnScratchSheetResponse.verify|verify} messages.
             * @param message TurnScratchSheetResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ITurnScratchSheetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TurnScratchSheetResponse message, length delimited. Does not implicitly {@link wm.protobuf.TurnScratchSheetResponse.verify|verify} messages.
             * @param message TurnScratchSheetResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ITurnScratchSheetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TurnScratchSheetResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TurnScratchSheetResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.TurnScratchSheetResponse;

            /**
             * Decodes a TurnScratchSheetResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TurnScratchSheetResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.TurnScratchSheetResponse;

            /**
             * Verifies a TurnScratchSheetResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TurnScratchSheetResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TurnScratchSheetResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.TurnScratchSheetResponse;

            /**
             * Creates a plain object from a TurnScratchSheetResponse message. Also converts values to other types if specified.
             * @param message TurnScratchSheetResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.TurnScratchSheetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TurnScratchSheetResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TurnScratchSheetResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CheckItemReceivableCarsRequest. */
        interface ICheckItemReceivableCarsRequest {

            /** CheckItemReceivableCarsRequest userId */
            userId: number;

            /** CheckItemReceivableCarsRequest itemsToBeEarned */
            itemsToBeEarned?: (wm.protobuf.IUserItem[]|null);
        }

        /** Represents a CheckItemReceivableCarsRequest. */
        class CheckItemReceivableCarsRequest implements ICheckItemReceivableCarsRequest {

            /**
             * Constructs a new CheckItemReceivableCarsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ICheckItemReceivableCarsRequest);

            /** CheckItemReceivableCarsRequest userId. */
            public userId: number;

            /** CheckItemReceivableCarsRequest itemsToBeEarned. */
            public itemsToBeEarned: wm.protobuf.IUserItem[];

            /**
             * Creates a new CheckItemReceivableCarsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CheckItemReceivableCarsRequest instance
             */
            public static create(properties?: wm.protobuf.ICheckItemReceivableCarsRequest): wm.protobuf.CheckItemReceivableCarsRequest;

            /**
             * Encodes the specified CheckItemReceivableCarsRequest message. Does not implicitly {@link wm.protobuf.CheckItemReceivableCarsRequest.verify|verify} messages.
             * @param message CheckItemReceivableCarsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ICheckItemReceivableCarsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CheckItemReceivableCarsRequest message, length delimited. Does not implicitly {@link wm.protobuf.CheckItemReceivableCarsRequest.verify|verify} messages.
             * @param message CheckItemReceivableCarsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ICheckItemReceivableCarsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CheckItemReceivableCarsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CheckItemReceivableCarsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.CheckItemReceivableCarsRequest;

            /**
             * Decodes a CheckItemReceivableCarsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CheckItemReceivableCarsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.CheckItemReceivableCarsRequest;

            /**
             * Verifies a CheckItemReceivableCarsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CheckItemReceivableCarsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CheckItemReceivableCarsRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.CheckItemReceivableCarsRequest;

            /**
             * Creates a plain object from a CheckItemReceivableCarsRequest message. Also converts values to other types if specified.
             * @param message CheckItemReceivableCarsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.CheckItemReceivableCarsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CheckItemReceivableCarsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CheckItemReceivableCarsRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CheckItemReceivableCarsResponse. */
        interface ICheckItemReceivableCarsResponse {

            /** CheckItemReceivableCarsResponse error */
            error: wm.protobuf.ErrorCode;

            /** CheckItemReceivableCarsResponse carIds */
            carIds?: (number[]|null);
        }

        /** Represents a CheckItemReceivableCarsResponse. */
        class CheckItemReceivableCarsResponse implements ICheckItemReceivableCarsResponse {

            /**
             * Constructs a new CheckItemReceivableCarsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ICheckItemReceivableCarsResponse);

            /** CheckItemReceivableCarsResponse error. */
            public error: wm.protobuf.ErrorCode;

            /** CheckItemReceivableCarsResponse carIds. */
            public carIds: number[];

            /**
             * Creates a new CheckItemReceivableCarsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CheckItemReceivableCarsResponse instance
             */
            public static create(properties?: wm.protobuf.ICheckItemReceivableCarsResponse): wm.protobuf.CheckItemReceivableCarsResponse;

            /**
             * Encodes the specified CheckItemReceivableCarsResponse message. Does not implicitly {@link wm.protobuf.CheckItemReceivableCarsResponse.verify|verify} messages.
             * @param message CheckItemReceivableCarsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ICheckItemReceivableCarsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CheckItemReceivableCarsResponse message, length delimited. Does not implicitly {@link wm.protobuf.CheckItemReceivableCarsResponse.verify|verify} messages.
             * @param message CheckItemReceivableCarsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ICheckItemReceivableCarsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CheckItemReceivableCarsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CheckItemReceivableCarsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.CheckItemReceivableCarsResponse;

            /**
             * Decodes a CheckItemReceivableCarsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CheckItemReceivableCarsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.CheckItemReceivableCarsResponse;

            /**
             * Verifies a CheckItemReceivableCarsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CheckItemReceivableCarsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CheckItemReceivableCarsResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.CheckItemReceivableCarsResponse;

            /**
             * Creates a plain object from a CheckItemReceivableCarsResponse message. Also converts values to other types if specified.
             * @param message CheckItemReceivableCarsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.CheckItemReceivableCarsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CheckItemReceivableCarsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CheckItemReceivableCarsResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ReceiveUserItemsRequest. */
        interface IReceiveUserItemsRequest {

            /** ReceiveUserItemsRequest carId */
            carId: number;

            /** ReceiveUserItemsRequest targetItemIds */
            targetItemIds?: (number[]|null);
        }

        /** Represents a ReceiveUserItemsRequest. */
        class ReceiveUserItemsRequest implements IReceiveUserItemsRequest {

            /**
             * Constructs a new ReceiveUserItemsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IReceiveUserItemsRequest);

            /** ReceiveUserItemsRequest carId. */
            public carId: number;

            /** ReceiveUserItemsRequest targetItemIds. */
            public targetItemIds: number[];

            /**
             * Creates a new ReceiveUserItemsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReceiveUserItemsRequest instance
             */
            public static create(properties?: wm.protobuf.IReceiveUserItemsRequest): wm.protobuf.ReceiveUserItemsRequest;

            /**
             * Encodes the specified ReceiveUserItemsRequest message. Does not implicitly {@link wm.protobuf.ReceiveUserItemsRequest.verify|verify} messages.
             * @param message ReceiveUserItemsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IReceiveUserItemsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReceiveUserItemsRequest message, length delimited. Does not implicitly {@link wm.protobuf.ReceiveUserItemsRequest.verify|verify} messages.
             * @param message ReceiveUserItemsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IReceiveUserItemsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReceiveUserItemsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReceiveUserItemsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.ReceiveUserItemsRequest;

            /**
             * Decodes a ReceiveUserItemsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReceiveUserItemsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.ReceiveUserItemsRequest;

            /**
             * Verifies a ReceiveUserItemsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReceiveUserItemsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReceiveUserItemsRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.ReceiveUserItemsRequest;

            /**
             * Creates a plain object from a ReceiveUserItemsRequest message. Also converts values to other types if specified.
             * @param message ReceiveUserItemsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.ReceiveUserItemsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReceiveUserItemsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ReceiveUserItemsRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ReceiveUserItemsResponse. */
        interface IReceiveUserItemsResponse {

            /** ReceiveUserItemsResponse error */
            error: wm.protobuf.ErrorCode;
        }

        /** Represents a ReceiveUserItemsResponse. */
        class ReceiveUserItemsResponse implements IReceiveUserItemsResponse {

            /**
             * Constructs a new ReceiveUserItemsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IReceiveUserItemsResponse);

            /** ReceiveUserItemsResponse error. */
            public error: wm.protobuf.ErrorCode;

            /**
             * Creates a new ReceiveUserItemsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReceiveUserItemsResponse instance
             */
            public static create(properties?: wm.protobuf.IReceiveUserItemsResponse): wm.protobuf.ReceiveUserItemsResponse;

            /**
             * Encodes the specified ReceiveUserItemsResponse message. Does not implicitly {@link wm.protobuf.ReceiveUserItemsResponse.verify|verify} messages.
             * @param message ReceiveUserItemsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IReceiveUserItemsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReceiveUserItemsResponse message, length delimited. Does not implicitly {@link wm.protobuf.ReceiveUserItemsResponse.verify|verify} messages.
             * @param message ReceiveUserItemsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IReceiveUserItemsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReceiveUserItemsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReceiveUserItemsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.ReceiveUserItemsResponse;

            /**
             * Decodes a ReceiveUserItemsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReceiveUserItemsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.ReceiveUserItemsResponse;

            /**
             * Verifies a ReceiveUserItemsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReceiveUserItemsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReceiveUserItemsResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.ReceiveUserItemsResponse;

            /**
             * Creates a plain object from a ReceiveUserItemsResponse message. Also converts values to other types if specified.
             * @param message ReceiveUserItemsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.ReceiveUserItemsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReceiveUserItemsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ReceiveUserItemsResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an UpdateEventModeSerialRequest. */
        interface IUpdateEventModeSerialRequest {

            /** UpdateEventModeSerialRequest eventModeSerial */
            eventModeSerial?: (string|null);
        }

        /** Represents an UpdateEventModeSerialRequest. */
        class UpdateEventModeSerialRequest implements IUpdateEventModeSerialRequest {

            /**
             * Constructs a new UpdateEventModeSerialRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IUpdateEventModeSerialRequest);

            /** UpdateEventModeSerialRequest eventModeSerial. */
            public eventModeSerial: string;

            /**
             * Creates a new UpdateEventModeSerialRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateEventModeSerialRequest instance
             */
            public static create(properties?: wm.protobuf.IUpdateEventModeSerialRequest): wm.protobuf.UpdateEventModeSerialRequest;

            /**
             * Encodes the specified UpdateEventModeSerialRequest message. Does not implicitly {@link wm.protobuf.UpdateEventModeSerialRequest.verify|verify} messages.
             * @param message UpdateEventModeSerialRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IUpdateEventModeSerialRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateEventModeSerialRequest message, length delimited. Does not implicitly {@link wm.protobuf.UpdateEventModeSerialRequest.verify|verify} messages.
             * @param message UpdateEventModeSerialRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IUpdateEventModeSerialRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateEventModeSerialRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateEventModeSerialRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.UpdateEventModeSerialRequest;

            /**
             * Decodes an UpdateEventModeSerialRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateEventModeSerialRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.UpdateEventModeSerialRequest;

            /**
             * Verifies an UpdateEventModeSerialRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateEventModeSerialRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateEventModeSerialRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.UpdateEventModeSerialRequest;

            /**
             * Creates a plain object from an UpdateEventModeSerialRequest message. Also converts values to other types if specified.
             * @param message UpdateEventModeSerialRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.UpdateEventModeSerialRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateEventModeSerialRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UpdateEventModeSerialRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an UpdateEventModeSerialResponse. */
        interface IUpdateEventModeSerialResponse {

            /** UpdateEventModeSerialResponse error */
            error: wm.protobuf.ErrorCode;

            /** UpdateEventModeSerialResponse serialError */
            serialError: wm.protobuf.EventModeSerialErrorCode;

            /** UpdateEventModeSerialResponse eventModeSerial */
            eventModeSerial?: (string|null);

            /** UpdateEventModeSerialResponse startAt */
            startAt?: (number|null);

            /** UpdateEventModeSerialResponse endAt */
            endAt?: (number|null);
        }

        /** Represents an UpdateEventModeSerialResponse. */
        class UpdateEventModeSerialResponse implements IUpdateEventModeSerialResponse {

            /**
             * Constructs a new UpdateEventModeSerialResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IUpdateEventModeSerialResponse);

            /** UpdateEventModeSerialResponse error. */
            public error: wm.protobuf.ErrorCode;

            /** UpdateEventModeSerialResponse serialError. */
            public serialError: wm.protobuf.EventModeSerialErrorCode;

            /** UpdateEventModeSerialResponse eventModeSerial. */
            public eventModeSerial: string;

            /** UpdateEventModeSerialResponse startAt. */
            public startAt: number;

            /** UpdateEventModeSerialResponse endAt. */
            public endAt: number;

            /**
             * Creates a new UpdateEventModeSerialResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateEventModeSerialResponse instance
             */
            public static create(properties?: wm.protobuf.IUpdateEventModeSerialResponse): wm.protobuf.UpdateEventModeSerialResponse;

            /**
             * Encodes the specified UpdateEventModeSerialResponse message. Does not implicitly {@link wm.protobuf.UpdateEventModeSerialResponse.verify|verify} messages.
             * @param message UpdateEventModeSerialResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IUpdateEventModeSerialResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateEventModeSerialResponse message, length delimited. Does not implicitly {@link wm.protobuf.UpdateEventModeSerialResponse.verify|verify} messages.
             * @param message UpdateEventModeSerialResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IUpdateEventModeSerialResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateEventModeSerialResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateEventModeSerialResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.UpdateEventModeSerialResponse;

            /**
             * Decodes an UpdateEventModeSerialResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateEventModeSerialResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.UpdateEventModeSerialResponse;

            /**
             * Verifies an UpdateEventModeSerialResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateEventModeSerialResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateEventModeSerialResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.UpdateEventModeSerialResponse;

            /**
             * Creates a plain object from an UpdateEventModeSerialResponse message. Also converts values to other types if specified.
             * @param message UpdateEventModeSerialResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.UpdateEventModeSerialResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateEventModeSerialResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UpdateEventModeSerialResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ParticipateInInviteFriendCampaignRequest. */
        interface IParticipateInInviteFriendCampaignRequest {

            /** ParticipateInInviteFriendCampaignRequest invitingUserId */
            invitingUserId: number;

            /** ParticipateInInviteFriendCampaignRequest invitedUserId */
            invitedUserId: number;

            /** ParticipateInInviteFriendCampaignRequest sourceCarId */
            sourceCarId: number;

            /** ParticipateInInviteFriendCampaignRequest transmission */
            transmission: boolean;
        }

        /** Represents a ParticipateInInviteFriendCampaignRequest. */
        class ParticipateInInviteFriendCampaignRequest implements IParticipateInInviteFriendCampaignRequest {

            /**
             * Constructs a new ParticipateInInviteFriendCampaignRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IParticipateInInviteFriendCampaignRequest);

            /** ParticipateInInviteFriendCampaignRequest invitingUserId. */
            public invitingUserId: number;

            /** ParticipateInInviteFriendCampaignRequest invitedUserId. */
            public invitedUserId: number;

            /** ParticipateInInviteFriendCampaignRequest sourceCarId. */
            public sourceCarId: number;

            /** ParticipateInInviteFriendCampaignRequest transmission. */
            public transmission: boolean;

            /**
             * Creates a new ParticipateInInviteFriendCampaignRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ParticipateInInviteFriendCampaignRequest instance
             */
            public static create(properties?: wm.protobuf.IParticipateInInviteFriendCampaignRequest): wm.protobuf.ParticipateInInviteFriendCampaignRequest;

            /**
             * Encodes the specified ParticipateInInviteFriendCampaignRequest message. Does not implicitly {@link wm.protobuf.ParticipateInInviteFriendCampaignRequest.verify|verify} messages.
             * @param message ParticipateInInviteFriendCampaignRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IParticipateInInviteFriendCampaignRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ParticipateInInviteFriendCampaignRequest message, length delimited. Does not implicitly {@link wm.protobuf.ParticipateInInviteFriendCampaignRequest.verify|verify} messages.
             * @param message ParticipateInInviteFriendCampaignRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IParticipateInInviteFriendCampaignRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ParticipateInInviteFriendCampaignRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ParticipateInInviteFriendCampaignRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.ParticipateInInviteFriendCampaignRequest;

            /**
             * Decodes a ParticipateInInviteFriendCampaignRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ParticipateInInviteFriendCampaignRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.ParticipateInInviteFriendCampaignRequest;

            /**
             * Verifies a ParticipateInInviteFriendCampaignRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ParticipateInInviteFriendCampaignRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ParticipateInInviteFriendCampaignRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.ParticipateInInviteFriendCampaignRequest;

            /**
             * Creates a plain object from a ParticipateInInviteFriendCampaignRequest message. Also converts values to other types if specified.
             * @param message ParticipateInInviteFriendCampaignRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.ParticipateInInviteFriendCampaignRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ParticipateInInviteFriendCampaignRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ParticipateInInviteFriendCampaignRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ParticipateInInviteFriendCampaignResponse. */
        interface IParticipateInInviteFriendCampaignResponse {

            /** ParticipateInInviteFriendCampaignResponse error */
            error: wm.protobuf.ErrorCode;
        }

        /** Represents a ParticipateInInviteFriendCampaignResponse. */
        class ParticipateInInviteFriendCampaignResponse implements IParticipateInInviteFriendCampaignResponse {

            /**
             * Constructs a new ParticipateInInviteFriendCampaignResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IParticipateInInviteFriendCampaignResponse);

            /** ParticipateInInviteFriendCampaignResponse error. */
            public error: wm.protobuf.ErrorCode;

            /**
             * Creates a new ParticipateInInviteFriendCampaignResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ParticipateInInviteFriendCampaignResponse instance
             */
            public static create(properties?: wm.protobuf.IParticipateInInviteFriendCampaignResponse): wm.protobuf.ParticipateInInviteFriendCampaignResponse;

            /**
             * Encodes the specified ParticipateInInviteFriendCampaignResponse message. Does not implicitly {@link wm.protobuf.ParticipateInInviteFriendCampaignResponse.verify|verify} messages.
             * @param message ParticipateInInviteFriendCampaignResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IParticipateInInviteFriendCampaignResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ParticipateInInviteFriendCampaignResponse message, length delimited. Does not implicitly {@link wm.protobuf.ParticipateInInviteFriendCampaignResponse.verify|verify} messages.
             * @param message ParticipateInInviteFriendCampaignResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IParticipateInInviteFriendCampaignResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ParticipateInInviteFriendCampaignResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ParticipateInInviteFriendCampaignResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.ParticipateInInviteFriendCampaignResponse;

            /**
             * Decodes a ParticipateInInviteFriendCampaignResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ParticipateInInviteFriendCampaignResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.ParticipateInInviteFriendCampaignResponse;

            /**
             * Verifies a ParticipateInInviteFriendCampaignResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ParticipateInInviteFriendCampaignResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ParticipateInInviteFriendCampaignResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.ParticipateInInviteFriendCampaignResponse;

            /**
             * Creates a plain object from a ParticipateInInviteFriendCampaignResponse message. Also converts values to other types if specified.
             * @param message ParticipateInInviteFriendCampaignResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.ParticipateInInviteFriendCampaignResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ParticipateInInviteFriendCampaignResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ParticipateInInviteFriendCampaignResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ConsumeUserItemRequest. */
        interface IConsumeUserItemRequest {

            /** ConsumeUserItemRequest userId */
            userId: number;

            /** ConsumeUserItemRequest carId */
            carId: number;

            /** ConsumeUserItemRequest userItemId */
            userItemId: number;
        }

        /** Represents a ConsumeUserItemRequest. */
        class ConsumeUserItemRequest implements IConsumeUserItemRequest {

            /**
             * Constructs a new ConsumeUserItemRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IConsumeUserItemRequest);

            /** ConsumeUserItemRequest userId. */
            public userId: number;

            /** ConsumeUserItemRequest carId. */
            public carId: number;

            /** ConsumeUserItemRequest userItemId. */
            public userItemId: number;

            /**
             * Creates a new ConsumeUserItemRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ConsumeUserItemRequest instance
             */
            public static create(properties?: wm.protobuf.IConsumeUserItemRequest): wm.protobuf.ConsumeUserItemRequest;

            /**
             * Encodes the specified ConsumeUserItemRequest message. Does not implicitly {@link wm.protobuf.ConsumeUserItemRequest.verify|verify} messages.
             * @param message ConsumeUserItemRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IConsumeUserItemRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ConsumeUserItemRequest message, length delimited. Does not implicitly {@link wm.protobuf.ConsumeUserItemRequest.verify|verify} messages.
             * @param message ConsumeUserItemRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IConsumeUserItemRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ConsumeUserItemRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ConsumeUserItemRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.ConsumeUserItemRequest;

            /**
             * Decodes a ConsumeUserItemRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ConsumeUserItemRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.ConsumeUserItemRequest;

            /**
             * Verifies a ConsumeUserItemRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ConsumeUserItemRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ConsumeUserItemRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.ConsumeUserItemRequest;

            /**
             * Creates a plain object from a ConsumeUserItemRequest message. Also converts values to other types if specified.
             * @param message ConsumeUserItemRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.ConsumeUserItemRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ConsumeUserItemRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ConsumeUserItemRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ConsumeUserItemResponse. */
        interface IConsumeUserItemResponse {

            /** ConsumeUserItemResponse error */
            error: wm.protobuf.ErrorCode;
        }

        /** Represents a ConsumeUserItemResponse. */
        class ConsumeUserItemResponse implements IConsumeUserItemResponse {

            /**
             * Constructs a new ConsumeUserItemResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IConsumeUserItemResponse);

            /** ConsumeUserItemResponse error. */
            public error: wm.protobuf.ErrorCode;

            /**
             * Creates a new ConsumeUserItemResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ConsumeUserItemResponse instance
             */
            public static create(properties?: wm.protobuf.IConsumeUserItemResponse): wm.protobuf.ConsumeUserItemResponse;

            /**
             * Encodes the specified ConsumeUserItemResponse message. Does not implicitly {@link wm.protobuf.ConsumeUserItemResponse.verify|verify} messages.
             * @param message ConsumeUserItemResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IConsumeUserItemResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ConsumeUserItemResponse message, length delimited. Does not implicitly {@link wm.protobuf.ConsumeUserItemResponse.verify|verify} messages.
             * @param message ConsumeUserItemResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IConsumeUserItemResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ConsumeUserItemResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ConsumeUserItemResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.ConsumeUserItemResponse;

            /**
             * Decodes a ConsumeUserItemResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ConsumeUserItemResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.ConsumeUserItemResponse;

            /**
             * Verifies a ConsumeUserItemResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ConsumeUserItemResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ConsumeUserItemResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.ConsumeUserItemResponse;

            /**
             * Creates a plain object from a ConsumeUserItemResponse message. Also converts values to other types if specified.
             * @param message ConsumeUserItemResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.ConsumeUserItemResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ConsumeUserItemResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ConsumeUserItemResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SearchCarsByLevelRequest. */
        interface ISearchCarsByLevelRequest {

            /** SearchCarsByLevelRequest carId */
            carId: number;

            /** SearchCarsByLevelRequest ghostLevel */
            ghostLevel: number;

            /** SearchCarsByLevelRequest area */
            area: number;

            /** SearchCarsByLevelRequest regionId */
            regionId?: (number|null);
        }

        /** Represents a SearchCarsByLevelRequest. */
        class SearchCarsByLevelRequest implements ISearchCarsByLevelRequest {

            /**
             * Constructs a new SearchCarsByLevelRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ISearchCarsByLevelRequest);

            /** SearchCarsByLevelRequest carId. */
            public carId: number;

            /** SearchCarsByLevelRequest ghostLevel. */
            public ghostLevel: number;

            /** SearchCarsByLevelRequest area. */
            public area: number;

            /** SearchCarsByLevelRequest regionId. */
            public regionId: number;

            /**
             * Creates a new SearchCarsByLevelRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SearchCarsByLevelRequest instance
             */
            public static create(properties?: wm.protobuf.ISearchCarsByLevelRequest): wm.protobuf.SearchCarsByLevelRequest;

            /**
             * Encodes the specified SearchCarsByLevelRequest message. Does not implicitly {@link wm.protobuf.SearchCarsByLevelRequest.verify|verify} messages.
             * @param message SearchCarsByLevelRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ISearchCarsByLevelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SearchCarsByLevelRequest message, length delimited. Does not implicitly {@link wm.protobuf.SearchCarsByLevelRequest.verify|verify} messages.
             * @param message SearchCarsByLevelRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ISearchCarsByLevelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SearchCarsByLevelRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SearchCarsByLevelRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SearchCarsByLevelRequest;

            /**
             * Decodes a SearchCarsByLevelRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SearchCarsByLevelRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SearchCarsByLevelRequest;

            /**
             * Verifies a SearchCarsByLevelRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SearchCarsByLevelRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SearchCarsByLevelRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.SearchCarsByLevelRequest;

            /**
             * Creates a plain object from a SearchCarsByLevelRequest message. Also converts values to other types if specified.
             * @param message SearchCarsByLevelRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.SearchCarsByLevelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SearchCarsByLevelRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SearchCarsByLevelRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SearchCarsByLevelResponse. */
        interface ISearchCarsByLevelResponse {

            /** SearchCarsByLevelResponse error */
            error: wm.protobuf.ErrorCode;

            /** SearchCarsByLevelResponse ramp */
            ramp: number;

            /** SearchCarsByLevelResponse path */
            path: number;

            /** SearchCarsByLevelResponse ghosts */
            ghosts?: (wm.protobuf.IGhostCar[]|null);

            /** SearchCarsByLevelResponse selectionMethod */
            selectionMethod: wm.protobuf.PathSelectionMethod;

            /** SearchCarsByLevelResponse rates */
            rates?: (wm.protobuf.SearchCarsByLevelResponse.IRate[]|null);
        }

        /** Represents a SearchCarsByLevelResponse. */
        class SearchCarsByLevelResponse implements ISearchCarsByLevelResponse {

            /**
             * Constructs a new SearchCarsByLevelResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ISearchCarsByLevelResponse);

            /** SearchCarsByLevelResponse error. */
            public error: wm.protobuf.ErrorCode;

            /** SearchCarsByLevelResponse ramp. */
            public ramp: number;

            /** SearchCarsByLevelResponse path. */
            public path: number;

            /** SearchCarsByLevelResponse ghosts. */
            public ghosts: wm.protobuf.IGhostCar[];

            /** SearchCarsByLevelResponse selectionMethod. */
            public selectionMethod: wm.protobuf.PathSelectionMethod;

            /** SearchCarsByLevelResponse rates. */
            public rates: wm.protobuf.SearchCarsByLevelResponse.IRate[];

            /**
             * Creates a new SearchCarsByLevelResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SearchCarsByLevelResponse instance
             */
            public static create(properties?: wm.protobuf.ISearchCarsByLevelResponse): wm.protobuf.SearchCarsByLevelResponse;

            /**
             * Encodes the specified SearchCarsByLevelResponse message. Does not implicitly {@link wm.protobuf.SearchCarsByLevelResponse.verify|verify} messages.
             * @param message SearchCarsByLevelResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ISearchCarsByLevelResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SearchCarsByLevelResponse message, length delimited. Does not implicitly {@link wm.protobuf.SearchCarsByLevelResponse.verify|verify} messages.
             * @param message SearchCarsByLevelResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ISearchCarsByLevelResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SearchCarsByLevelResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SearchCarsByLevelResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SearchCarsByLevelResponse;

            /**
             * Decodes a SearchCarsByLevelResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SearchCarsByLevelResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SearchCarsByLevelResponse;

            /**
             * Verifies a SearchCarsByLevelResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SearchCarsByLevelResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SearchCarsByLevelResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.SearchCarsByLevelResponse;

            /**
             * Creates a plain object from a SearchCarsByLevelResponse message. Also converts values to other types if specified.
             * @param message SearchCarsByLevelResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.SearchCarsByLevelResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SearchCarsByLevelResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SearchCarsByLevelResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SearchCarsByLevelResponse {

            /** Properties of a Rate. */
            interface IRate {

                /** Rate carId */
                carId: number;

                /** Rate type */
                type: wm.protobuf.GhostRateType;

                /** Rate rate */
                rate?: (number|null);
            }

            /** Represents a Rate. */
            class Rate implements IRate {

                /**
                 * Constructs a new Rate.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm.protobuf.SearchCarsByLevelResponse.IRate);

                /** Rate carId. */
                public carId: number;

                /** Rate type. */
                public type: wm.protobuf.GhostRateType;

                /** Rate rate. */
                public rate: number;

                /**
                 * Creates a new Rate instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Rate instance
                 */
                public static create(properties?: wm.protobuf.SearchCarsByLevelResponse.IRate): wm.protobuf.SearchCarsByLevelResponse.Rate;

                /**
                 * Encodes the specified Rate message. Does not implicitly {@link wm.protobuf.SearchCarsByLevelResponse.Rate.verify|verify} messages.
                 * @param message Rate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm.protobuf.SearchCarsByLevelResponse.IRate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Rate message, length delimited. Does not implicitly {@link wm.protobuf.SearchCarsByLevelResponse.Rate.verify|verify} messages.
                 * @param message Rate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm.protobuf.SearchCarsByLevelResponse.IRate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Rate message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Rate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SearchCarsByLevelResponse.Rate;

                /**
                 * Decodes a Rate message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Rate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SearchCarsByLevelResponse.Rate;

                /**
                 * Verifies a Rate message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Rate message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Rate
                 */
                public static fromObject(object: { [k: string]: any }): wm.protobuf.SearchCarsByLevelResponse.Rate;

                /**
                 * Creates a plain object from a Rate message. Also converts values to other types if specified.
                 * @param message Rate
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm.protobuf.SearchCarsByLevelResponse.Rate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Rate to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Rate
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a LoadPathsAndTuningsRequest. */
        interface ILoadPathsAndTuningsRequest {

            /** LoadPathsAndTuningsRequest carId */
            carId: number;

            /** LoadPathsAndTuningsRequest selectedCars */
            selectedCars?: (number[]|null);

            /** LoadPathsAndTuningsRequest returnImmediately */
            returnImmediately?: (boolean|null);

            /** LoadPathsAndTuningsRequest stampTargetArea */
            stampTargetArea?: (number|null);
        }

        /** Represents a LoadPathsAndTuningsRequest. */
        class LoadPathsAndTuningsRequest implements ILoadPathsAndTuningsRequest {

            /**
             * Constructs a new LoadPathsAndTuningsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ILoadPathsAndTuningsRequest);

            /** LoadPathsAndTuningsRequest carId. */
            public carId: number;

            /** LoadPathsAndTuningsRequest selectedCars. */
            public selectedCars: number[];

            /** LoadPathsAndTuningsRequest returnImmediately. */
            public returnImmediately: boolean;

            /** LoadPathsAndTuningsRequest stampTargetArea. */
            public stampTargetArea: number;

            /**
             * Creates a new LoadPathsAndTuningsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadPathsAndTuningsRequest instance
             */
            public static create(properties?: wm.protobuf.ILoadPathsAndTuningsRequest): wm.protobuf.LoadPathsAndTuningsRequest;

            /**
             * Encodes the specified LoadPathsAndTuningsRequest message. Does not implicitly {@link wm.protobuf.LoadPathsAndTuningsRequest.verify|verify} messages.
             * @param message LoadPathsAndTuningsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ILoadPathsAndTuningsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadPathsAndTuningsRequest message, length delimited. Does not implicitly {@link wm.protobuf.LoadPathsAndTuningsRequest.verify|verify} messages.
             * @param message LoadPathsAndTuningsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ILoadPathsAndTuningsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadPathsAndTuningsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadPathsAndTuningsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadPathsAndTuningsRequest;

            /**
             * Decodes a LoadPathsAndTuningsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadPathsAndTuningsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadPathsAndTuningsRequest;

            /**
             * Verifies a LoadPathsAndTuningsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadPathsAndTuningsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadPathsAndTuningsRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadPathsAndTuningsRequest;

            /**
             * Creates a plain object from a LoadPathsAndTuningsRequest message. Also converts values to other types if specified.
             * @param message LoadPathsAndTuningsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.LoadPathsAndTuningsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadPathsAndTuningsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadPathsAndTuningsRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadPathsAndTuningsResponse. */
        interface ILoadPathsAndTuningsResponse {

            /** LoadPathsAndTuningsResponse error */
            error: wm.protobuf.ErrorCode;

            /** LoadPathsAndTuningsResponse data */
            data?: (wm.protobuf.LoadPathsAndTuningsResponse.ICarTuningsByPath[]|null);
        }

        /** Represents a LoadPathsAndTuningsResponse. */
        class LoadPathsAndTuningsResponse implements ILoadPathsAndTuningsResponse {

            /**
             * Constructs a new LoadPathsAndTuningsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ILoadPathsAndTuningsResponse);

            /** LoadPathsAndTuningsResponse error. */
            public error: wm.protobuf.ErrorCode;

            /** LoadPathsAndTuningsResponse data. */
            public data: wm.protobuf.LoadPathsAndTuningsResponse.ICarTuningsByPath[];

            /**
             * Creates a new LoadPathsAndTuningsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadPathsAndTuningsResponse instance
             */
            public static create(properties?: wm.protobuf.ILoadPathsAndTuningsResponse): wm.protobuf.LoadPathsAndTuningsResponse;

            /**
             * Encodes the specified LoadPathsAndTuningsResponse message. Does not implicitly {@link wm.protobuf.LoadPathsAndTuningsResponse.verify|verify} messages.
             * @param message LoadPathsAndTuningsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ILoadPathsAndTuningsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadPathsAndTuningsResponse message, length delimited. Does not implicitly {@link wm.protobuf.LoadPathsAndTuningsResponse.verify|verify} messages.
             * @param message LoadPathsAndTuningsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ILoadPathsAndTuningsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadPathsAndTuningsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadPathsAndTuningsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadPathsAndTuningsResponse;

            /**
             * Decodes a LoadPathsAndTuningsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadPathsAndTuningsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadPathsAndTuningsResponse;

            /**
             * Verifies a LoadPathsAndTuningsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadPathsAndTuningsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadPathsAndTuningsResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadPathsAndTuningsResponse;

            /**
             * Creates a plain object from a LoadPathsAndTuningsResponse message. Also converts values to other types if specified.
             * @param message LoadPathsAndTuningsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.LoadPathsAndTuningsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadPathsAndTuningsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadPathsAndTuningsResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace LoadPathsAndTuningsResponse {

            /** Properties of a CarTuningsByPath. */
            interface ICarTuningsByPath {

                /** CarTuningsByPath area */
                area: number;

                /** CarTuningsByPath ramp */
                ramp: number;

                /** CarTuningsByPath path */
                path: number;

                /** CarTuningsByPath carTunings */
                carTunings?: (wm.protobuf.ICarTuning[]|null);

                /** CarTuningsByPath selectionMethod */
                selectionMethod: wm.protobuf.PathSelectionMethod;
            }

            /** Represents a CarTuningsByPath. */
            class CarTuningsByPath implements ICarTuningsByPath {

                /**
                 * Constructs a new CarTuningsByPath.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm.protobuf.LoadPathsAndTuningsResponse.ICarTuningsByPath);

                /** CarTuningsByPath area. */
                public area: number;

                /** CarTuningsByPath ramp. */
                public ramp: number;

                /** CarTuningsByPath path. */
                public path: number;

                /** CarTuningsByPath carTunings. */
                public carTunings: wm.protobuf.ICarTuning[];

                /** CarTuningsByPath selectionMethod. */
                public selectionMethod: wm.protobuf.PathSelectionMethod;

                /**
                 * Creates a new CarTuningsByPath instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CarTuningsByPath instance
                 */
                public static create(properties?: wm.protobuf.LoadPathsAndTuningsResponse.ICarTuningsByPath): wm.protobuf.LoadPathsAndTuningsResponse.CarTuningsByPath;

                /**
                 * Encodes the specified CarTuningsByPath message. Does not implicitly {@link wm.protobuf.LoadPathsAndTuningsResponse.CarTuningsByPath.verify|verify} messages.
                 * @param message CarTuningsByPath message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm.protobuf.LoadPathsAndTuningsResponse.ICarTuningsByPath, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CarTuningsByPath message, length delimited. Does not implicitly {@link wm.protobuf.LoadPathsAndTuningsResponse.CarTuningsByPath.verify|verify} messages.
                 * @param message CarTuningsByPath message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm.protobuf.LoadPathsAndTuningsResponse.ICarTuningsByPath, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CarTuningsByPath message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CarTuningsByPath
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadPathsAndTuningsResponse.CarTuningsByPath;

                /**
                 * Decodes a CarTuningsByPath message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CarTuningsByPath
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadPathsAndTuningsResponse.CarTuningsByPath;

                /**
                 * Verifies a CarTuningsByPath message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CarTuningsByPath message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CarTuningsByPath
                 */
                public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadPathsAndTuningsResponse.CarTuningsByPath;

                /**
                 * Creates a plain object from a CarTuningsByPath message. Also converts values to other types if specified.
                 * @param message CarTuningsByPath
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm.protobuf.LoadPathsAndTuningsResponse.CarTuningsByPath, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CarTuningsByPath to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CarTuningsByPath
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a LoadGhostDriveDataRequest. */
        interface ILoadGhostDriveDataRequest {

            /** LoadGhostDriveDataRequest path */
            path: number;

            /** LoadGhostDriveDataRequest carTunings */
            carTunings?: (wm.protobuf.ICarTuning[]|null);
        }

        /** Represents a LoadGhostDriveDataRequest. */
        class LoadGhostDriveDataRequest implements ILoadGhostDriveDataRequest {

            /**
             * Constructs a new LoadGhostDriveDataRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ILoadGhostDriveDataRequest);

            /** LoadGhostDriveDataRequest path. */
            public path: number;

            /** LoadGhostDriveDataRequest carTunings. */
            public carTunings: wm.protobuf.ICarTuning[];

            /**
             * Creates a new LoadGhostDriveDataRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadGhostDriveDataRequest instance
             */
            public static create(properties?: wm.protobuf.ILoadGhostDriveDataRequest): wm.protobuf.LoadGhostDriveDataRequest;

            /**
             * Encodes the specified LoadGhostDriveDataRequest message. Does not implicitly {@link wm.protobuf.LoadGhostDriveDataRequest.verify|verify} messages.
             * @param message LoadGhostDriveDataRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ILoadGhostDriveDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadGhostDriveDataRequest message, length delimited. Does not implicitly {@link wm.protobuf.LoadGhostDriveDataRequest.verify|verify} messages.
             * @param message LoadGhostDriveDataRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ILoadGhostDriveDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadGhostDriveDataRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadGhostDriveDataRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadGhostDriveDataRequest;

            /**
             * Decodes a LoadGhostDriveDataRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadGhostDriveDataRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadGhostDriveDataRequest;

            /**
             * Verifies a LoadGhostDriveDataRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadGhostDriveDataRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadGhostDriveDataRequest
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadGhostDriveDataRequest;

            /**
             * Creates a plain object from a LoadGhostDriveDataRequest message. Also converts values to other types if specified.
             * @param message LoadGhostDriveDataRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.LoadGhostDriveDataRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadGhostDriveDataRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadGhostDriveDataRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadGhostDriveDataResponse. */
        interface ILoadGhostDriveDataResponse {

            /** LoadGhostDriveDataResponse error */
            error: wm.protobuf.ErrorCode;

            /** LoadGhostDriveDataResponse data */
            data?: (wm.protobuf.LoadGhostDriveDataResponse.IGhostDriveData[]|null);
        }

        /** Represents a LoadGhostDriveDataResponse. */
        class LoadGhostDriveDataResponse implements ILoadGhostDriveDataResponse {

            /**
             * Constructs a new LoadGhostDriveDataResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ILoadGhostDriveDataResponse);

            /** LoadGhostDriveDataResponse error. */
            public error: wm.protobuf.ErrorCode;

            /** LoadGhostDriveDataResponse data. */
            public data: wm.protobuf.LoadGhostDriveDataResponse.IGhostDriveData[];

            /**
             * Creates a new LoadGhostDriveDataResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadGhostDriveDataResponse instance
             */
            public static create(properties?: wm.protobuf.ILoadGhostDriveDataResponse): wm.protobuf.LoadGhostDriveDataResponse;

            /**
             * Encodes the specified LoadGhostDriveDataResponse message. Does not implicitly {@link wm.protobuf.LoadGhostDriveDataResponse.verify|verify} messages.
             * @param message LoadGhostDriveDataResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ILoadGhostDriveDataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadGhostDriveDataResponse message, length delimited. Does not implicitly {@link wm.protobuf.LoadGhostDriveDataResponse.verify|verify} messages.
             * @param message LoadGhostDriveDataResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ILoadGhostDriveDataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadGhostDriveDataResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadGhostDriveDataResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadGhostDriveDataResponse;

            /**
             * Decodes a LoadGhostDriveDataResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadGhostDriveDataResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadGhostDriveDataResponse;

            /**
             * Verifies a LoadGhostDriveDataResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadGhostDriveDataResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadGhostDriveDataResponse
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadGhostDriveDataResponse;

            /**
             * Creates a plain object from a LoadGhostDriveDataResponse message. Also converts values to other types if specified.
             * @param message LoadGhostDriveDataResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.LoadGhostDriveDataResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadGhostDriveDataResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadGhostDriveDataResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace LoadGhostDriveDataResponse {

            /** Properties of a GhostDriveData. */
            interface IGhostDriveData {

                /** GhostDriveData carId */
                carId: number;

                /** GhostDriveData type */
                type: wm.protobuf.GhostType;

                /** GhostDriveData driveData */
                driveData?: (wm.protobuf.IBinaryData|null);

                /** GhostDriveData trendBinaryByUser */
                trendBinaryByUser?: (wm.protobuf.IBinaryData|null);

                /** GhostDriveData trendBinaryByCar */
                trendBinaryByCar?: (wm.protobuf.IBinaryData|null);

                /** GhostDriveData trendBinaryByArea */
                trendBinaryByArea?: (wm.protobuf.IBinaryData|null);
            }

            /** Represents a GhostDriveData. */
            class GhostDriveData implements IGhostDriveData {

                /**
                 * Constructs a new GhostDriveData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm.protobuf.LoadGhostDriveDataResponse.IGhostDriveData);

                /** GhostDriveData carId. */
                public carId: number;

                /** GhostDriveData type. */
                public type: wm.protobuf.GhostType;

                /** GhostDriveData driveData. */
                public driveData?: (wm.protobuf.IBinaryData|null);

                /** GhostDriveData trendBinaryByUser. */
                public trendBinaryByUser?: (wm.protobuf.IBinaryData|null);

                /** GhostDriveData trendBinaryByCar. */
                public trendBinaryByCar?: (wm.protobuf.IBinaryData|null);

                /** GhostDriveData trendBinaryByArea. */
                public trendBinaryByArea?: (wm.protobuf.IBinaryData|null);

                /**
                 * Creates a new GhostDriveData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GhostDriveData instance
                 */
                public static create(properties?: wm.protobuf.LoadGhostDriveDataResponse.IGhostDriveData): wm.protobuf.LoadGhostDriveDataResponse.GhostDriveData;

                /**
                 * Encodes the specified GhostDriveData message. Does not implicitly {@link wm.protobuf.LoadGhostDriveDataResponse.GhostDriveData.verify|verify} messages.
                 * @param message GhostDriveData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm.protobuf.LoadGhostDriveDataResponse.IGhostDriveData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GhostDriveData message, length delimited. Does not implicitly {@link wm.protobuf.LoadGhostDriveDataResponse.GhostDriveData.verify|verify} messages.
                 * @param message GhostDriveData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm.protobuf.LoadGhostDriveDataResponse.IGhostDriveData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GhostDriveData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GhostDriveData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.LoadGhostDriveDataResponse.GhostDriveData;

                /**
                 * Decodes a GhostDriveData message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GhostDriveData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.LoadGhostDriveDataResponse.GhostDriveData;

                /**
                 * Verifies a GhostDriveData message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GhostDriveData message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GhostDriveData
                 */
                public static fromObject(object: { [k: string]: any }): wm.protobuf.LoadGhostDriveDataResponse.GhostDriveData;

                /**
                 * Creates a plain object from a GhostDriveData message. Also converts values to other types if specified.
                 * @param message GhostDriveData
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm.protobuf.LoadGhostDriveDataResponse.GhostDriveData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GhostDriveData to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GhostDriveData
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a Car. */
        interface ICar {

            /** Car carId */
            carId?: (number|null);

            /** Car userId */
            userId?: (number|null);

            /** Car regionId */
            regionId?: (number|null);

            /** Car name */
            name?: (string|null);

            /** Car manufacturer */
            manufacturer?: (number|null);

            /** Car model */
            model?: (number|null);

            /** Car visualModel */
            visualModel?: (number|null);

            /** Car defaultColor */
            defaultColor?: (number|null);

            /** Car customColor */
            customColor: number;

            /** Car wheel */
            wheel: number;

            /** Car wheelColor */
            wheelColor: number;

            /** Car aero */
            aero: number;

            /** Car bonnet */
            bonnet: number;

            /** Car wing */
            wing: number;

            /** Car gtWing */
            gtWing?: (wm.protobuf.IGTWing|null);

            /** Car mirror */
            mirror: number;

            /** Car neon */
            neon: number;

            /** Car trunk */
            trunk: number;

            /** Car plate */
            plate: number;

            /** Car plateColor */
            plateColor: number;

            /** Car plateNumber */
            plateNumber: number;

            /** Car tunePower */
            tunePower: number;

            /** Car tuneHandling */
            tuneHandling: number;

            /** Car title */
            title: string;

            /** Car level */
            level: number;

            /** Car windowSticker */
            windowSticker?: (boolean|null);

            /** Car windowStickerString */
            windowStickerString?: (string|null);

            /** Car windowStickerFont */
            windowStickerFont?: (number|null);

            /** Car windowDecoration */
            windowDecoration?: (number|null);

            /** Car rivalMarker */
            rivalMarker?: (number|null);

            /** Car lastPlayedAt */
            lastPlayedAt?: (number|null);

            /** Car lastPlayedPlace */
            lastPlayedPlace?: (wm.protobuf.IPlace|null);

            /** Car aura */
            aura?: (number|null);

            /** Car auraMotif */
            auraMotif?: (number|null);

            /** Car ghostLevel */
            ghostLevel?: (number|null);

            /** Car country */
            country?: (string|null);

            /** Car searchCode */
            searchCode?: (string|null);
        }

        /** Represents a Car. */
        class Car implements ICar {

            /**
             * Constructs a new Car.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ICar);

            /** Car carId. */
            public carId: number;

            /** Car userId. */
            public userId: number;

            /** Car regionId. */
            public regionId: number;

            /** Car name. */
            public name: string;

            /** Car manufacturer. */
            public manufacturer: number;

            /** Car model. */
            public model: number;

            /** Car visualModel. */
            public visualModel: number;

            /** Car defaultColor. */
            public defaultColor: number;

            /** Car customColor. */
            public customColor: number;

            /** Car wheel. */
            public wheel: number;

            /** Car wheelColor. */
            public wheelColor: number;

            /** Car aero. */
            public aero: number;

            /** Car bonnet. */
            public bonnet: number;

            /** Car wing. */
            public wing: number;

            /** Car gtWing. */
            public gtWing?: (wm.protobuf.IGTWing|null);

            /** Car mirror. */
            public mirror: number;

            /** Car neon. */
            public neon: number;

            /** Car trunk. */
            public trunk: number;

            /** Car plate. */
            public plate: number;

            /** Car plateColor. */
            public plateColor: number;

            /** Car plateNumber. */
            public plateNumber: number;

            /** Car tunePower. */
            public tunePower: number;

            /** Car tuneHandling. */
            public tuneHandling: number;

            /** Car title. */
            public title: string;

            /** Car level. */
            public level: number;

            /** Car windowSticker. */
            public windowSticker: boolean;

            /** Car windowStickerString. */
            public windowStickerString: string;

            /** Car windowStickerFont. */
            public windowStickerFont: number;

            /** Car windowDecoration. */
            public windowDecoration: number;

            /** Car rivalMarker. */
            public rivalMarker: number;

            /** Car lastPlayedAt. */
            public lastPlayedAt: number;

            /** Car lastPlayedPlace. */
            public lastPlayedPlace?: (wm.protobuf.IPlace|null);

            /** Car aura. */
            public aura: number;

            /** Car auraMotif. */
            public auraMotif: number;

            /** Car ghostLevel. */
            public ghostLevel: number;

            /** Car country. */
            public country: string;

            /** Car searchCode. */
            public searchCode: string;

            /**
             * Creates a new Car instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Car instance
             */
            public static create(properties?: wm.protobuf.ICar): wm.protobuf.Car;

            /**
             * Encodes the specified Car message. Does not implicitly {@link wm.protobuf.Car.verify|verify} messages.
             * @param message Car message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ICar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Car message, length delimited. Does not implicitly {@link wm.protobuf.Car.verify|verify} messages.
             * @param message Car message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ICar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Car message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Car
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.Car;

            /**
             * Decodes a Car message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Car
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.Car;

            /**
             * Verifies a Car message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Car message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Car
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.Car;

            /**
             * Creates a plain object from a Car message. Also converts values to other types if specified.
             * @param message Car
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.Car, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Car to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Car
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CarSetting. */
        interface ICarSetting {

            /** CarSetting carId */
            carId?: (number|null);

            /** CarSetting view */
            view: boolean;

            /** CarSetting transmission */
            transmission: boolean;

            /** CarSetting retire */
            retire: boolean;

            /** CarSetting meter */
            meter: number;

            /** CarSetting navigationMap */
            navigationMap: boolean;

            /** CarSetting volume */
            volume: number;

            /** CarSetting bgm */
            bgm: number;

            /** CarSetting nameplate */
            nameplate: number;

            /** CarSetting nameplateColor */
            nameplateColor: number;

            /** CarSetting terminalBackground */
            terminalBackground: number;
        }

        /** Represents a CarSetting. */
        class CarSetting implements ICarSetting {

            /**
             * Constructs a new CarSetting.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ICarSetting);

            /** CarSetting carId. */
            public carId: number;

            /** CarSetting view. */
            public view: boolean;

            /** CarSetting transmission. */
            public transmission: boolean;

            /** CarSetting retire. */
            public retire: boolean;

            /** CarSetting meter. */
            public meter: number;

            /** CarSetting navigationMap. */
            public navigationMap: boolean;

            /** CarSetting volume. */
            public volume: number;

            /** CarSetting bgm. */
            public bgm: number;

            /** CarSetting nameplate. */
            public nameplate: number;

            /** CarSetting nameplateColor. */
            public nameplateColor: number;

            /** CarSetting terminalBackground. */
            public terminalBackground: number;

            /**
             * Creates a new CarSetting instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CarSetting instance
             */
            public static create(properties?: wm.protobuf.ICarSetting): wm.protobuf.CarSetting;

            /**
             * Encodes the specified CarSetting message. Does not implicitly {@link wm.protobuf.CarSetting.verify|verify} messages.
             * @param message CarSetting message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ICarSetting, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CarSetting message, length delimited. Does not implicitly {@link wm.protobuf.CarSetting.verify|verify} messages.
             * @param message CarSetting message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ICarSetting, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CarSetting message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CarSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.CarSetting;

            /**
             * Decodes a CarSetting message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CarSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.CarSetting;

            /**
             * Verifies a CarSetting message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CarSetting message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CarSetting
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.CarSetting;

            /**
             * Creates a plain object from a CarSetting message. Also converts values to other types if specified.
             * @param message CarSetting
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.CarSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CarSetting to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CarSetting
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GTWing. */
        interface IGTWing {

            /** GTWing pillar */
            pillar: number;

            /** GTWing pillarMaterial */
            pillarMaterial: number;

            /** GTWing mainWing */
            mainWing: number;

            /** GTWing mainWingColor */
            mainWingColor: number;

            /** GTWing wingTip */
            wingTip: number;

            /** GTWing material */
            material: number;
        }

        /** Represents a GTWing. */
        class GTWing implements IGTWing {

            /**
             * Constructs a new GTWing.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IGTWing);

            /** GTWing pillar. */
            public pillar: number;

            /** GTWing pillarMaterial. */
            public pillarMaterial: number;

            /** GTWing mainWing. */
            public mainWing: number;

            /** GTWing mainWingColor. */
            public mainWingColor: number;

            /** GTWing wingTip. */
            public wingTip: number;

            /** GTWing material. */
            public material: number;

            /**
             * Creates a new GTWing instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GTWing instance
             */
            public static create(properties?: wm.protobuf.IGTWing): wm.protobuf.GTWing;

            /**
             * Encodes the specified GTWing message. Does not implicitly {@link wm.protobuf.GTWing.verify|verify} messages.
             * @param message GTWing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IGTWing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GTWing message, length delimited. Does not implicitly {@link wm.protobuf.GTWing.verify|verify} messages.
             * @param message GTWing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IGTWing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GTWing message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GTWing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.GTWing;

            /**
             * Decodes a GTWing message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GTWing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.GTWing;

            /**
             * Verifies a GTWing message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GTWing message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GTWing
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.GTWing;

            /**
             * Creates a plain object from a GTWing message. Also converts values to other types if specified.
             * @param message GTWing
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.GTWing, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GTWing to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GTWing
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CarItem. */
        interface ICarItem {

            /** CarItem category */
            category: wm.protobuf.ItemCategory;

            /** CarItem itemId */
            itemId: number;

            /** CarItem amount */
            amount?: (number|null);
        }

        /** Represents a CarItem. */
        class CarItem implements ICarItem {

            /**
             * Constructs a new CarItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ICarItem);

            /** CarItem category. */
            public category: wm.protobuf.ItemCategory;

            /** CarItem itemId. */
            public itemId: number;

            /** CarItem amount. */
            public amount: number;

            /**
             * Creates a new CarItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CarItem instance
             */
            public static create(properties?: wm.protobuf.ICarItem): wm.protobuf.CarItem;

            /**
             * Encodes the specified CarItem message. Does not implicitly {@link wm.protobuf.CarItem.verify|verify} messages.
             * @param message CarItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ICarItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CarItem message, length delimited. Does not implicitly {@link wm.protobuf.CarItem.verify|verify} messages.
             * @param message CarItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ICarItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CarItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CarItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.CarItem;

            /**
             * Decodes a CarItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CarItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.CarItem;

            /**
             * Verifies a CarItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CarItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CarItem
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.CarItem;

            /**
             * Creates a plain object from a CarItem message. Also converts values to other types if specified.
             * @param message CarItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.CarItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CarItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CarItem
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CopiedCar. */
        interface ICopiedCar {

            /** CopiedCar car */
            car: wm.protobuf.ICar;

            /** CopiedCar remainingPlayCounts */
            remainingPlayCounts: number;
        }

        /** Represents a CopiedCar. */
        class CopiedCar implements ICopiedCar {

            /**
             * Constructs a new CopiedCar.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ICopiedCar);

            /** CopiedCar car. */
            public car: wm.protobuf.ICar;

            /** CopiedCar remainingPlayCounts. */
            public remainingPlayCounts: number;

            /**
             * Creates a new CopiedCar instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CopiedCar instance
             */
            public static create(properties?: wm.protobuf.ICopiedCar): wm.protobuf.CopiedCar;

            /**
             * Encodes the specified CopiedCar message. Does not implicitly {@link wm.protobuf.CopiedCar.verify|verify} messages.
             * @param message CopiedCar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ICopiedCar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CopiedCar message, length delimited. Does not implicitly {@link wm.protobuf.CopiedCar.verify|verify} messages.
             * @param message CopiedCar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ICopiedCar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CopiedCar message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CopiedCar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.CopiedCar;

            /**
             * Decodes a CopiedCar message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CopiedCar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.CopiedCar;

            /**
             * Verifies a CopiedCar message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CopiedCar message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CopiedCar
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.CopiedCar;

            /**
             * Creates a plain object from a CopiedCar message. Also converts values to other types if specified.
             * @param message CopiedCar
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.CopiedCar, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CopiedCar to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CopiedCar
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FriendCar. */
        interface IFriendCar {

            /** FriendCar car */
            car: wm.protobuf.ICar;

            /** FriendCar friendshipLevel */
            friendshipLevel?: (number|null);

            /** FriendCar nonhuman */
            nonhuman: boolean;
        }

        /** Represents a FriendCar. */
        class FriendCar implements IFriendCar {

            /**
             * Constructs a new FriendCar.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IFriendCar);

            /** FriendCar car. */
            public car: wm.protobuf.ICar;

            /** FriendCar friendshipLevel. */
            public friendshipLevel: number;

            /** FriendCar nonhuman. */
            public nonhuman: boolean;

            /**
             * Creates a new FriendCar instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FriendCar instance
             */
            public static create(properties?: wm.protobuf.IFriendCar): wm.protobuf.FriendCar;

            /**
             * Encodes the specified FriendCar message. Does not implicitly {@link wm.protobuf.FriendCar.verify|verify} messages.
             * @param message FriendCar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IFriendCar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FriendCar message, length delimited. Does not implicitly {@link wm.protobuf.FriendCar.verify|verify} messages.
             * @param message FriendCar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IFriendCar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FriendCar message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FriendCar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.FriendCar;

            /**
             * Decodes a FriendCar message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FriendCar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.FriendCar;

            /**
             * Verifies a FriendCar message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FriendCar message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FriendCar
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.FriendCar;

            /**
             * Creates a plain object from a FriendCar message. Also converts values to other types if specified.
             * @param message FriendCar
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.FriendCar, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FriendCar to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FriendCar
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ChallengerCar. */
        interface IChallengerCar {

            /** ChallengerCar car */
            car: wm.protobuf.ICar;

            /** ChallengerCar stamp */
            stamp: number;

            /** ChallengerCar result */
            result: number;

            /** ChallengerCar area */
            area: number;
        }

        /** Represents a ChallengerCar. */
        class ChallengerCar implements IChallengerCar {

            /**
             * Constructs a new ChallengerCar.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IChallengerCar);

            /** ChallengerCar car. */
            public car: wm.protobuf.ICar;

            /** ChallengerCar stamp. */
            public stamp: number;

            /** ChallengerCar result. */
            public result: number;

            /** ChallengerCar area. */
            public area: number;

            /**
             * Creates a new ChallengerCar instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChallengerCar instance
             */
            public static create(properties?: wm.protobuf.IChallengerCar): wm.protobuf.ChallengerCar;

            /**
             * Encodes the specified ChallengerCar message. Does not implicitly {@link wm.protobuf.ChallengerCar.verify|verify} messages.
             * @param message ChallengerCar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IChallengerCar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ChallengerCar message, length delimited. Does not implicitly {@link wm.protobuf.ChallengerCar.verify|verify} messages.
             * @param message ChallengerCar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IChallengerCar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChallengerCar message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChallengerCar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.ChallengerCar;

            /**
             * Decodes a ChallengerCar message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChallengerCar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.ChallengerCar;

            /**
             * Verifies a ChallengerCar message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ChallengerCar message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChallengerCar
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.ChallengerCar;

            /**
             * Creates a plain object from a ChallengerCar message. Also converts values to other types if specified.
             * @param message ChallengerCar
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.ChallengerCar, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ChallengerCar to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ChallengerCar
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a StampTargetCar. */
        interface IStampTargetCar {

            /** StampTargetCar car */
            car: wm.protobuf.ICar;

            /** StampTargetCar returnCount */
            returnCount: number;

            /** StampTargetCar locked */
            locked: boolean;

            /** StampTargetCar recommended */
            recommended: boolean;
        }

        /** Represents a StampTargetCar. */
        class StampTargetCar implements IStampTargetCar {

            /**
             * Constructs a new StampTargetCar.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IStampTargetCar);

            /** StampTargetCar car. */
            public car: wm.protobuf.ICar;

            /** StampTargetCar returnCount. */
            public returnCount: number;

            /** StampTargetCar locked. */
            public locked: boolean;

            /** StampTargetCar recommended. */
            public recommended: boolean;

            /**
             * Creates a new StampTargetCar instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StampTargetCar instance
             */
            public static create(properties?: wm.protobuf.IStampTargetCar): wm.protobuf.StampTargetCar;

            /**
             * Encodes the specified StampTargetCar message. Does not implicitly {@link wm.protobuf.StampTargetCar.verify|verify} messages.
             * @param message StampTargetCar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IStampTargetCar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StampTargetCar message, length delimited. Does not implicitly {@link wm.protobuf.StampTargetCar.verify|verify} messages.
             * @param message StampTargetCar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IStampTargetCar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StampTargetCar message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StampTargetCar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.StampTargetCar;

            /**
             * Decodes a StampTargetCar message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StampTargetCar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.StampTargetCar;

            /**
             * Verifies a StampTargetCar message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StampTargetCar message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StampTargetCar
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.StampTargetCar;

            /**
             * Creates a plain object from a StampTargetCar message. Also converts values to other types if specified.
             * @param message StampTargetCar
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.StampTargetCar, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StampTargetCar to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StampTargetCar
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BookmarkedCar. */
        interface IBookmarkedCar {

            /** BookmarkedCar car */
            car: wm.protobuf.ICar;

            /** BookmarkedCar returnCount */
            returnCount: number;
        }

        /** Represents a BookmarkedCar. */
        class BookmarkedCar implements IBookmarkedCar {

            /**
             * Constructs a new BookmarkedCar.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IBookmarkedCar);

            /** BookmarkedCar car. */
            public car: wm.protobuf.ICar;

            /** BookmarkedCar returnCount. */
            public returnCount: number;

            /**
             * Creates a new BookmarkedCar instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BookmarkedCar instance
             */
            public static create(properties?: wm.protobuf.IBookmarkedCar): wm.protobuf.BookmarkedCar;

            /**
             * Encodes the specified BookmarkedCar message. Does not implicitly {@link wm.protobuf.BookmarkedCar.verify|verify} messages.
             * @param message BookmarkedCar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IBookmarkedCar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BookmarkedCar message, length delimited. Does not implicitly {@link wm.protobuf.BookmarkedCar.verify|verify} messages.
             * @param message BookmarkedCar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IBookmarkedCar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BookmarkedCar message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BookmarkedCar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.BookmarkedCar;

            /**
             * Decodes a BookmarkedCar message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BookmarkedCar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.BookmarkedCar;

            /**
             * Verifies a BookmarkedCar message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BookmarkedCar message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BookmarkedCar
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.BookmarkedCar;

            /**
             * Creates a plain object from a BookmarkedCar message. Also converts values to other types if specified.
             * @param message BookmarkedCar
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.BookmarkedCar, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BookmarkedCar to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BookmarkedCar
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PreviousVersionStampTargetCar. */
        interface IPreviousVersionStampTargetCar {

            /** PreviousVersionStampTargetCar car */
            car: wm.protobuf.ICar;

            /** PreviousVersionStampTargetCar returnCount */
            returnCount: number;

            /** PreviousVersionStampTargetCar currentCarId */
            currentCarId?: (number|null);
        }

        /** Represents a PreviousVersionStampTargetCar. */
        class PreviousVersionStampTargetCar implements IPreviousVersionStampTargetCar {

            /**
             * Constructs a new PreviousVersionStampTargetCar.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IPreviousVersionStampTargetCar);

            /** PreviousVersionStampTargetCar car. */
            public car: wm.protobuf.ICar;

            /** PreviousVersionStampTargetCar returnCount. */
            public returnCount: number;

            /** PreviousVersionStampTargetCar currentCarId. */
            public currentCarId: number;

            /**
             * Creates a new PreviousVersionStampTargetCar instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PreviousVersionStampTargetCar instance
             */
            public static create(properties?: wm.protobuf.IPreviousVersionStampTargetCar): wm.protobuf.PreviousVersionStampTargetCar;

            /**
             * Encodes the specified PreviousVersionStampTargetCar message. Does not implicitly {@link wm.protobuf.PreviousVersionStampTargetCar.verify|verify} messages.
             * @param message PreviousVersionStampTargetCar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IPreviousVersionStampTargetCar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PreviousVersionStampTargetCar message, length delimited. Does not implicitly {@link wm.protobuf.PreviousVersionStampTargetCar.verify|verify} messages.
             * @param message PreviousVersionStampTargetCar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IPreviousVersionStampTargetCar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PreviousVersionStampTargetCar message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PreviousVersionStampTargetCar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.PreviousVersionStampTargetCar;

            /**
             * Decodes a PreviousVersionStampTargetCar message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PreviousVersionStampTargetCar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.PreviousVersionStampTargetCar;

            /**
             * Verifies a PreviousVersionStampTargetCar message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PreviousVersionStampTargetCar message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PreviousVersionStampTargetCar
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.PreviousVersionStampTargetCar;

            /**
             * Creates a plain object from a PreviousVersionStampTargetCar message. Also converts values to other types if specified.
             * @param message PreviousVersionStampTargetCar
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.PreviousVersionStampTargetCar, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PreviousVersionStampTargetCar to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PreviousVersionStampTargetCar
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GhostCar. */
        interface IGhostCar {

            /** GhostCar car */
            car: wm.protobuf.ICar;

            /** GhostCar area */
            area?: (number|null);

            /** GhostCar ramp */
            ramp?: (number|null);

            /** GhostCar path */
            path?: (number|null);

            /** GhostCar nonhuman */
            nonhuman?: (boolean|null);

            /** GhostCar type */
            type?: (wm.protobuf.GhostType|null);

            /** GhostCar trailId */
            trailId?: (number|Long|null);
        }

        /** Represents a GhostCar. */
        class GhostCar implements IGhostCar {

            /**
             * Constructs a new GhostCar.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IGhostCar);

            /** GhostCar car. */
            public car: wm.protobuf.ICar;

            /** GhostCar area. */
            public area: number;

            /** GhostCar ramp. */
            public ramp: number;

            /** GhostCar path. */
            public path: number;

            /** GhostCar nonhuman. */
            public nonhuman: boolean;

            /** GhostCar type. */
            public type: wm.protobuf.GhostType;

            /** GhostCar trailId. */
            public trailId: (number|Long);

            /**
             * Creates a new GhostCar instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GhostCar instance
             */
            public static create(properties?: wm.protobuf.IGhostCar): wm.protobuf.GhostCar;

            /**
             * Encodes the specified GhostCar message. Does not implicitly {@link wm.protobuf.GhostCar.verify|verify} messages.
             * @param message GhostCar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IGhostCar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GhostCar message, length delimited. Does not implicitly {@link wm.protobuf.GhostCar.verify|verify} messages.
             * @param message GhostCar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IGhostCar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GhostCar message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GhostCar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.GhostCar;

            /**
             * Decodes a GhostCar message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GhostCar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.GhostCar;

            /**
             * Verifies a GhostCar message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GhostCar message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GhostCar
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.GhostCar;

            /**
             * Creates a plain object from a GhostCar message. Also converts values to other types if specified.
             * @param message GhostCar
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.GhostCar, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GhostCar to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GhostCar
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Place. */
        interface IPlace {

            /** Place placeId */
            placeId: string;

            /** Place shopName */
            shopName: string;

            /** Place regionId */
            regionId: number;

            /** Place country */
            country: string;
        }

        /** Represents a Place. */
        class Place implements IPlace {

            /**
             * Constructs a new Place.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IPlace);

            /** Place placeId. */
            public placeId: string;

            /** Place shopName. */
            public shopName: string;

            /** Place regionId. */
            public regionId: number;

            /** Place country. */
            public country: string;

            /**
             * Creates a new Place instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Place instance
             */
            public static create(properties?: wm.protobuf.IPlace): wm.protobuf.Place;

            /**
             * Encodes the specified Place message. Does not implicitly {@link wm.protobuf.Place.verify|verify} messages.
             * @param message Place message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IPlace, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Place message, length delimited. Does not implicitly {@link wm.protobuf.Place.verify|verify} messages.
             * @param message Place message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IPlace, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Place message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Place
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.Place;

            /**
             * Decodes a Place message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Place
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.Place;

            /**
             * Verifies a Place message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Place message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Place
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.Place;

            /**
             * Creates a plain object from a Place message. Also converts values to other types if specified.
             * @param message Place
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.Place, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Place to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Place
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SystemSetting. */
        interface ISystemSetting {

            /** SystemSetting mCoinChute */
            mCoinChute: number;

            /** SystemSetting mBuyCardCost */
            mBuyCardCost: number;

            /** SystemSetting mGameCost */
            mGameCost: number;

            /** SystemSetting mContinueCost */
            mContinueCost: number;

            /** SystemSetting mFullCourseCost */
            mFullCourseCost: number;

            /** SystemSetting mFreePlay */
            mFreePlay: boolean;

            /** SystemSetting mPcbId */
            mPcbId?: (number|null);

            /** SystemSetting mIcCardRw */
            mIcCardRw: boolean;

            /** SystemSetting mIcCardVender */
            mIcCardVender: boolean;

            /** SystemSetting mMgCardRw */
            mMgCardRw?: (boolean|null);

            /** SystemSetting mForceFeedback */
            mForceFeedback?: (boolean|null);

            /** SystemSetting mWinsAndRemains */
            mWinsAndRemains: boolean;

            /** SystemSetting mEventMode */
            mEventMode: number;

            /** SystemSetting mEventModeDist */
            mEventModeDist: boolean;

            /** SystemSetting mCloseType */
            mCloseType: number;

            /** SystemSetting mCloseSun */
            mCloseSun: number;

            /** SystemSetting mCloseMon */
            mCloseMon: number;

            /** SystemSetting mCloseTue */
            mCloseTue: number;

            /** SystemSetting mCloseWed */
            mCloseWed: number;

            /** SystemSetting mCloseThu */
            mCloseThu: number;

            /** SystemSetting mCloseFri */
            mCloseFri: number;

            /** SystemSetting mCloseSat */
            mCloseSat: number;

            /** SystemSetting mCloseDay */
            mCloseDay: number;

            /** SystemSetting mTouchPanel */
            mTouchPanel?: (boolean|null);

            /** SystemSetting mGameVol */
            mGameVol: number;

            /** SystemSetting mAttractVol */
            mAttractVol: number;

            /** SystemSetting mCalibHandleCenter */
            mCalibHandleCenter?: (number|null);

            /** SystemSetting mCalibAccelCenter */
            mCalibAccelCenter?: (number|null);

            /** SystemSetting mCalibBrakeCenter */
            mCalibBrakeCenter?: (number|null);

            /** SystemSetting mCalibTouchLeft */
            mCalibTouchLeft?: (number|null);

            /** SystemSetting mCalibTouchRight */
            mCalibTouchRight?: (number|null);

            /** SystemSetting mCalibTouchTop */
            mCalibTouchTop?: (number|null);

            /** SystemSetting mCalibTouchBottom */
            mCalibTouchBottom?: (number|null);
        }

        /** Represents a SystemSetting. */
        class SystemSetting implements ISystemSetting {

            /**
             * Constructs a new SystemSetting.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ISystemSetting);

            /** SystemSetting mCoinChute. */
            public mCoinChute: number;

            /** SystemSetting mBuyCardCost. */
            public mBuyCardCost: number;

            /** SystemSetting mGameCost. */
            public mGameCost: number;

            /** SystemSetting mContinueCost. */
            public mContinueCost: number;

            /** SystemSetting mFullCourseCost. */
            public mFullCourseCost: number;

            /** SystemSetting mFreePlay. */
            public mFreePlay: boolean;

            /** SystemSetting mPcbId. */
            public mPcbId: number;

            /** SystemSetting mIcCardRw. */
            public mIcCardRw: boolean;

            /** SystemSetting mIcCardVender. */
            public mIcCardVender: boolean;

            /** SystemSetting mMgCardRw. */
            public mMgCardRw: boolean;

            /** SystemSetting mForceFeedback. */
            public mForceFeedback: boolean;

            /** SystemSetting mWinsAndRemains. */
            public mWinsAndRemains: boolean;

            /** SystemSetting mEventMode. */
            public mEventMode: number;

            /** SystemSetting mEventModeDist. */
            public mEventModeDist: boolean;

            /** SystemSetting mCloseType. */
            public mCloseType: number;

            /** SystemSetting mCloseSun. */
            public mCloseSun: number;

            /** SystemSetting mCloseMon. */
            public mCloseMon: number;

            /** SystemSetting mCloseTue. */
            public mCloseTue: number;

            /** SystemSetting mCloseWed. */
            public mCloseWed: number;

            /** SystemSetting mCloseThu. */
            public mCloseThu: number;

            /** SystemSetting mCloseFri. */
            public mCloseFri: number;

            /** SystemSetting mCloseSat. */
            public mCloseSat: number;

            /** SystemSetting mCloseDay. */
            public mCloseDay: number;

            /** SystemSetting mTouchPanel. */
            public mTouchPanel: boolean;

            /** SystemSetting mGameVol. */
            public mGameVol: number;

            /** SystemSetting mAttractVol. */
            public mAttractVol: number;

            /** SystemSetting mCalibHandleCenter. */
            public mCalibHandleCenter: number;

            /** SystemSetting mCalibAccelCenter. */
            public mCalibAccelCenter: number;

            /** SystemSetting mCalibBrakeCenter. */
            public mCalibBrakeCenter: number;

            /** SystemSetting mCalibTouchLeft. */
            public mCalibTouchLeft: number;

            /** SystemSetting mCalibTouchRight. */
            public mCalibTouchRight: number;

            /** SystemSetting mCalibTouchTop. */
            public mCalibTouchTop: number;

            /** SystemSetting mCalibTouchBottom. */
            public mCalibTouchBottom: number;

            /**
             * Creates a new SystemSetting instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SystemSetting instance
             */
            public static create(properties?: wm.protobuf.ISystemSetting): wm.protobuf.SystemSetting;

            /**
             * Encodes the specified SystemSetting message. Does not implicitly {@link wm.protobuf.SystemSetting.verify|verify} messages.
             * @param message SystemSetting message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ISystemSetting, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SystemSetting message, length delimited. Does not implicitly {@link wm.protobuf.SystemSetting.verify|verify} messages.
             * @param message SystemSetting message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ISystemSetting, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SystemSetting message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SystemSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.SystemSetting;

            /**
             * Decodes a SystemSetting message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SystemSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.SystemSetting;

            /**
             * Verifies a SystemSetting message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SystemSetting message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SystemSetting
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.SystemSetting;

            /**
             * Creates a plain object from a SystemSetting message. Also converts values to other types if specified.
             * @param message SystemSetting
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.SystemSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SystemSetting to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SystemSetting
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GhostCompetitionSchedule. */
        interface IGhostCompetitionSchedule {

            /** GhostCompetitionSchedule competitionId */
            competitionId: number;

            /** GhostCompetitionSchedule qualifyingPeriodStartAt */
            qualifyingPeriodStartAt: number;

            /** GhostCompetitionSchedule qualifyingPeriodCloseAt */
            qualifyingPeriodCloseAt: number;

            /** GhostCompetitionSchedule competitionStartAt */
            competitionStartAt: number;

            /** GhostCompetitionSchedule competitionCloseAt */
            competitionCloseAt: number;

            /** GhostCompetitionSchedule competitionEndAt */
            competitionEndAt: number;

            /** GhostCompetitionSchedule lengthOfPeriod */
            lengthOfPeriod: number;

            /** GhostCompetitionSchedule lengthOfInterval */
            lengthOfInterval: number;

            /** GhostCompetitionSchedule area */
            area: number;

            /** GhostCompetitionSchedule minigamePatternId */
            minigamePatternId: number;
        }

        /** Represents a GhostCompetitionSchedule. */
        class GhostCompetitionSchedule implements IGhostCompetitionSchedule {

            /**
             * Constructs a new GhostCompetitionSchedule.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IGhostCompetitionSchedule);

            /** GhostCompetitionSchedule competitionId. */
            public competitionId: number;

            /** GhostCompetitionSchedule qualifyingPeriodStartAt. */
            public qualifyingPeriodStartAt: number;

            /** GhostCompetitionSchedule qualifyingPeriodCloseAt. */
            public qualifyingPeriodCloseAt: number;

            /** GhostCompetitionSchedule competitionStartAt. */
            public competitionStartAt: number;

            /** GhostCompetitionSchedule competitionCloseAt. */
            public competitionCloseAt: number;

            /** GhostCompetitionSchedule competitionEndAt. */
            public competitionEndAt: number;

            /** GhostCompetitionSchedule lengthOfPeriod. */
            public lengthOfPeriod: number;

            /** GhostCompetitionSchedule lengthOfInterval. */
            public lengthOfInterval: number;

            /** GhostCompetitionSchedule area. */
            public area: number;

            /** GhostCompetitionSchedule minigamePatternId. */
            public minigamePatternId: number;

            /**
             * Creates a new GhostCompetitionSchedule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GhostCompetitionSchedule instance
             */
            public static create(properties?: wm.protobuf.IGhostCompetitionSchedule): wm.protobuf.GhostCompetitionSchedule;

            /**
             * Encodes the specified GhostCompetitionSchedule message. Does not implicitly {@link wm.protobuf.GhostCompetitionSchedule.verify|verify} messages.
             * @param message GhostCompetitionSchedule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IGhostCompetitionSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GhostCompetitionSchedule message, length delimited. Does not implicitly {@link wm.protobuf.GhostCompetitionSchedule.verify|verify} messages.
             * @param message GhostCompetitionSchedule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IGhostCompetitionSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GhostCompetitionSchedule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GhostCompetitionSchedule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.GhostCompetitionSchedule;

            /**
             * Decodes a GhostCompetitionSchedule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GhostCompetitionSchedule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.GhostCompetitionSchedule;

            /**
             * Verifies a GhostCompetitionSchedule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GhostCompetitionSchedule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GhostCompetitionSchedule
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.GhostCompetitionSchedule;

            /**
             * Creates a plain object from a GhostCompetitionSchedule message. Also converts values to other types if specified.
             * @param message GhostCompetitionSchedule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.GhostCompetitionSchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GhostCompetitionSchedule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GhostCompetitionSchedule
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GhostCompetitionParameter. */
        interface IGhostCompetitionParameter {

            /** GhostCompetitionParameter parameters1 */
            parameters1?: (number[]|null);

            /** GhostCompetitionParameter parameters2 */
            parameters2: boolean;
        }

        /** Represents a GhostCompetitionParameter. */
        class GhostCompetitionParameter implements IGhostCompetitionParameter {

            /**
             * Constructs a new GhostCompetitionParameter.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IGhostCompetitionParameter);

            /** GhostCompetitionParameter parameters1. */
            public parameters1: number[];

            /** GhostCompetitionParameter parameters2. */
            public parameters2: boolean;

            /**
             * Creates a new GhostCompetitionParameter instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GhostCompetitionParameter instance
             */
            public static create(properties?: wm.protobuf.IGhostCompetitionParameter): wm.protobuf.GhostCompetitionParameter;

            /**
             * Encodes the specified GhostCompetitionParameter message. Does not implicitly {@link wm.protobuf.GhostCompetitionParameter.verify|verify} messages.
             * @param message GhostCompetitionParameter message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IGhostCompetitionParameter, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GhostCompetitionParameter message, length delimited. Does not implicitly {@link wm.protobuf.GhostCompetitionParameter.verify|verify} messages.
             * @param message GhostCompetitionParameter message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IGhostCompetitionParameter, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GhostCompetitionParameter message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GhostCompetitionParameter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.GhostCompetitionParameter;

            /**
             * Decodes a GhostCompetitionParameter message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GhostCompetitionParameter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.GhostCompetitionParameter;

            /**
             * Verifies a GhostCompetitionParameter message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GhostCompetitionParameter message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GhostCompetitionParameter
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.GhostCompetitionParameter;

            /**
             * Creates a plain object from a GhostCompetitionParameter message. Also converts values to other types if specified.
             * @param message GhostCompetitionParameter
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.GhostCompetitionParameter, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GhostCompetitionParameter to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GhostCompetitionParameter
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TransferNotice. */
        interface ITransferNotice {

            /** TransferNotice needToSeeTransferred */
            needToSeeTransferred: boolean;

            /** TransferNotice totalMaxiGold */
            totalMaxiGold?: (number|null);

            /** TransferNotice numOfPorscheCars */
            numOfPorscheCars?: (number|null);

            /** TransferNotice porscheModels */
            porscheModels?: (number[]|null);

            /** TransferNotice hasR35 */
            hasR35?: (boolean|null);
        }

        /** Represents a TransferNotice. */
        class TransferNotice implements ITransferNotice {

            /**
             * Constructs a new TransferNotice.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ITransferNotice);

            /** TransferNotice needToSeeTransferred. */
            public needToSeeTransferred: boolean;

            /** TransferNotice totalMaxiGold. */
            public totalMaxiGold: number;

            /** TransferNotice numOfPorscheCars. */
            public numOfPorscheCars: number;

            /** TransferNotice porscheModels. */
            public porscheModels: number[];

            /** TransferNotice hasR35. */
            public hasR35: boolean;

            /**
             * Creates a new TransferNotice instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TransferNotice instance
             */
            public static create(properties?: wm.protobuf.ITransferNotice): wm.protobuf.TransferNotice;

            /**
             * Encodes the specified TransferNotice message. Does not implicitly {@link wm.protobuf.TransferNotice.verify|verify} messages.
             * @param message TransferNotice message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ITransferNotice, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TransferNotice message, length delimited. Does not implicitly {@link wm.protobuf.TransferNotice.verify|verify} messages.
             * @param message TransferNotice message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ITransferNotice, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TransferNotice message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TransferNotice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.TransferNotice;

            /**
             * Decodes a TransferNotice message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TransferNotice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.TransferNotice;

            /**
             * Verifies a TransferNotice message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TransferNotice message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TransferNotice
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.TransferNotice;

            /**
             * Creates a plain object from a TransferNotice message. Also converts values to other types if specified.
             * @param message TransferNotice
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.TransferNotice, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TransferNotice to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TransferNotice
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GameFeatureVersion. */
        interface IGameFeatureVersion {

            /** GameFeatureVersion version */
            version: number;

            /** GameFeatureVersion year */
            year: number;

            /** GameFeatureVersion month */
            month: number;

            /** GameFeatureVersion pluses */
            pluses: number;

            /** GameFeatureVersion releaseAt */
            releaseAt: number;
        }

        /** Represents a GameFeatureVersion. */
        class GameFeatureVersion implements IGameFeatureVersion {

            /**
             * Constructs a new GameFeatureVersion.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IGameFeatureVersion);

            /** GameFeatureVersion version. */
            public version: number;

            /** GameFeatureVersion year. */
            public year: number;

            /** GameFeatureVersion month. */
            public month: number;

            /** GameFeatureVersion pluses. */
            public pluses: number;

            /** GameFeatureVersion releaseAt. */
            public releaseAt: number;

            /**
             * Creates a new GameFeatureVersion instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GameFeatureVersion instance
             */
            public static create(properties?: wm.protobuf.IGameFeatureVersion): wm.protobuf.GameFeatureVersion;

            /**
             * Encodes the specified GameFeatureVersion message. Does not implicitly {@link wm.protobuf.GameFeatureVersion.verify|verify} messages.
             * @param message GameFeatureVersion message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IGameFeatureVersion, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GameFeatureVersion message, length delimited. Does not implicitly {@link wm.protobuf.GameFeatureVersion.verify|verify} messages.
             * @param message GameFeatureVersion message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IGameFeatureVersion, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GameFeatureVersion message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GameFeatureVersion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.GameFeatureVersion;

            /**
             * Decodes a GameFeatureVersion message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GameFeatureVersion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.GameFeatureVersion;

            /**
             * Verifies a GameFeatureVersion message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GameFeatureVersion message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GameFeatureVersion
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.GameFeatureVersion;

            /**
             * Creates a plain object from a GameFeatureVersion message. Also converts values to other types if specified.
             * @param message GameFeatureVersion
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.GameFeatureVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GameFeatureVersion to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GameFeatureVersion
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ScratchSheet. */
        interface IScratchSheet {

            /** ScratchSheet squares */
            squares?: (wm.protobuf.ScratchSheet.IScratchSquare[]|null);
        }

        /** Represents a ScratchSheet. */
        class ScratchSheet implements IScratchSheet {

            /**
             * Constructs a new ScratchSheet.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IScratchSheet);

            /** ScratchSheet squares. */
            public squares: wm.protobuf.ScratchSheet.IScratchSquare[];

            /**
             * Creates a new ScratchSheet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ScratchSheet instance
             */
            public static create(properties?: wm.protobuf.IScratchSheet): wm.protobuf.ScratchSheet;

            /**
             * Encodes the specified ScratchSheet message. Does not implicitly {@link wm.protobuf.ScratchSheet.verify|verify} messages.
             * @param message ScratchSheet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IScratchSheet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ScratchSheet message, length delimited. Does not implicitly {@link wm.protobuf.ScratchSheet.verify|verify} messages.
             * @param message ScratchSheet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IScratchSheet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ScratchSheet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ScratchSheet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.ScratchSheet;

            /**
             * Decodes a ScratchSheet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ScratchSheet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.ScratchSheet;

            /**
             * Verifies a ScratchSheet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ScratchSheet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ScratchSheet
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.ScratchSheet;

            /**
             * Creates a plain object from a ScratchSheet message. Also converts values to other types if specified.
             * @param message ScratchSheet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.ScratchSheet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ScratchSheet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ScratchSheet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ScratchSheet {

            /** Properties of a ScratchSquare. */
            interface IScratchSquare {

                /** ScratchSquare category */
                category: wm.protobuf.ItemCategory;

                /** ScratchSquare itemId */
                itemId: number;

                /** ScratchSquare earned */
                earned: boolean;
            }

            /** Represents a ScratchSquare. */
            class ScratchSquare implements IScratchSquare {

                /**
                 * Constructs a new ScratchSquare.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm.protobuf.ScratchSheet.IScratchSquare);

                /** ScratchSquare category. */
                public category: wm.protobuf.ItemCategory;

                /** ScratchSquare itemId. */
                public itemId: number;

                /** ScratchSquare earned. */
                public earned: boolean;

                /**
                 * Creates a new ScratchSquare instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ScratchSquare instance
                 */
                public static create(properties?: wm.protobuf.ScratchSheet.IScratchSquare): wm.protobuf.ScratchSheet.ScratchSquare;

                /**
                 * Encodes the specified ScratchSquare message. Does not implicitly {@link wm.protobuf.ScratchSheet.ScratchSquare.verify|verify} messages.
                 * @param message ScratchSquare message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm.protobuf.ScratchSheet.IScratchSquare, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ScratchSquare message, length delimited. Does not implicitly {@link wm.protobuf.ScratchSheet.ScratchSquare.verify|verify} messages.
                 * @param message ScratchSquare message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm.protobuf.ScratchSheet.IScratchSquare, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ScratchSquare message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ScratchSquare
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.ScratchSheet.ScratchSquare;

                /**
                 * Decodes a ScratchSquare message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ScratchSquare
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.ScratchSheet.ScratchSquare;

                /**
                 * Verifies a ScratchSquare message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ScratchSquare message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ScratchSquare
                 */
                public static fromObject(object: { [k: string]: any }): wm.protobuf.ScratchSheet.ScratchSquare;

                /**
                 * Creates a plain object from a ScratchSquare message. Also converts values to other types if specified.
                 * @param message ScratchSquare
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm.protobuf.ScratchSheet.ScratchSquare, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ScratchSquare to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ScratchSquare
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a UserItem. */
        interface IUserItem {

            /** UserItem category */
            category: wm.protobuf.ItemCategory;

            /** UserItem itemId */
            itemId: number;

            /** UserItem userItemId */
            userItemId?: (number|null);

            /** UserItem earnedAt */
            earnedAt?: (number|null);

            /** UserItem expireAt */
            expireAt?: (number|null);
        }

        /** Represents a UserItem. */
        class UserItem implements IUserItem {

            /**
             * Constructs a new UserItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IUserItem);

            /** UserItem category. */
            public category: wm.protobuf.ItemCategory;

            /** UserItem itemId. */
            public itemId: number;

            /** UserItem userItemId. */
            public userItemId: number;

            /** UserItem earnedAt. */
            public earnedAt: number;

            /** UserItem expireAt. */
            public expireAt: number;

            /**
             * Creates a new UserItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserItem instance
             */
            public static create(properties?: wm.protobuf.IUserItem): wm.protobuf.UserItem;

            /**
             * Encodes the specified UserItem message. Does not implicitly {@link wm.protobuf.UserItem.verify|verify} messages.
             * @param message UserItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IUserItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserItem message, length delimited. Does not implicitly {@link wm.protobuf.UserItem.verify|verify} messages.
             * @param message UserItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IUserItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.UserItem;

            /**
             * Decodes a UserItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.UserItem;

            /**
             * Verifies a UserItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserItem
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.UserItem;

            /**
             * Creates a plain object from a UserItem message. Also converts values to other types if specified.
             * @param message UserItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.UserItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UserItem
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an InviteFriendCampaignSchedule. */
        interface IInviteFriendCampaignSchedule {

            /** InviteFriendCampaignSchedule campaignId */
            campaignId: number;

            /** InviteFriendCampaignSchedule startAt */
            startAt: number;

            /** InviteFriendCampaignSchedule endAt */
            endAt: number;

            /** InviteFriendCampaignSchedule couponUnreceivableAt */
            couponUnreceivableAt: number;
        }

        /** Represents an InviteFriendCampaignSchedule. */
        class InviteFriendCampaignSchedule implements IInviteFriendCampaignSchedule {

            /**
             * Constructs a new InviteFriendCampaignSchedule.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IInviteFriendCampaignSchedule);

            /** InviteFriendCampaignSchedule campaignId. */
            public campaignId: number;

            /** InviteFriendCampaignSchedule startAt. */
            public startAt: number;

            /** InviteFriendCampaignSchedule endAt. */
            public endAt: number;

            /** InviteFriendCampaignSchedule couponUnreceivableAt. */
            public couponUnreceivableAt: number;

            /**
             * Creates a new InviteFriendCampaignSchedule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InviteFriendCampaignSchedule instance
             */
            public static create(properties?: wm.protobuf.IInviteFriendCampaignSchedule): wm.protobuf.InviteFriendCampaignSchedule;

            /**
             * Encodes the specified InviteFriendCampaignSchedule message. Does not implicitly {@link wm.protobuf.InviteFriendCampaignSchedule.verify|verify} messages.
             * @param message InviteFriendCampaignSchedule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IInviteFriendCampaignSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InviteFriendCampaignSchedule message, length delimited. Does not implicitly {@link wm.protobuf.InviteFriendCampaignSchedule.verify|verify} messages.
             * @param message InviteFriendCampaignSchedule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IInviteFriendCampaignSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InviteFriendCampaignSchedule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InviteFriendCampaignSchedule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.InviteFriendCampaignSchedule;

            /**
             * Decodes an InviteFriendCampaignSchedule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InviteFriendCampaignSchedule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.InviteFriendCampaignSchedule;

            /**
             * Verifies an InviteFriendCampaignSchedule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InviteFriendCampaignSchedule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InviteFriendCampaignSchedule
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.InviteFriendCampaignSchedule;

            /**
             * Creates a plain object from an InviteFriendCampaignSchedule message. Also converts values to other types if specified.
             * @param message InviteFriendCampaignSchedule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.InviteFriendCampaignSchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InviteFriendCampaignSchedule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for InviteFriendCampaignSchedule
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CarTuning. */
        interface ICarTuning {

            /** CarTuning carId */
            carId: number;

            /** CarTuning tunePower */
            tunePower: number;

            /** CarTuning tuneHandling */
            tuneHandling: number;

            /** CarTuning lastPlayedAt */
            lastPlayedAt?: (number|null);
        }

        /** Represents a CarTuning. */
        class CarTuning implements ICarTuning {

            /**
             * Constructs a new CarTuning.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ICarTuning);

            /** CarTuning carId. */
            public carId: number;

            /** CarTuning tunePower. */
            public tunePower: number;

            /** CarTuning tuneHandling. */
            public tuneHandling: number;

            /** CarTuning lastPlayedAt. */
            public lastPlayedAt: number;

            /**
             * Creates a new CarTuning instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CarTuning instance
             */
            public static create(properties?: wm.protobuf.ICarTuning): wm.protobuf.CarTuning;

            /**
             * Encodes the specified CarTuning message. Does not implicitly {@link wm.protobuf.CarTuning.verify|verify} messages.
             * @param message CarTuning message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ICarTuning, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CarTuning message, length delimited. Does not implicitly {@link wm.protobuf.CarTuning.verify|verify} messages.
             * @param message CarTuning message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ICarTuning, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CarTuning message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CarTuning
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.CarTuning;

            /**
             * Decodes a CarTuning message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CarTuning
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.CarTuning;

            /**
             * Verifies a CarTuning message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CarTuning message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CarTuning
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.CarTuning;

            /**
             * Creates a plain object from a CarTuning message. Also converts values to other types if specified.
             * @param message CarTuning
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.CarTuning, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CarTuning to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CarTuning
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BinaryData. */
        interface IBinaryData {

            /** BinaryData data */
            data: Uint8Array;

            /** BinaryData mergeSerial */
            mergeSerial: number;
        }

        /** Represents a BinaryData. */
        class BinaryData implements IBinaryData {

            /**
             * Constructs a new BinaryData.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IBinaryData);

            /** BinaryData data. */
            public data: Uint8Array;

            /** BinaryData mergeSerial. */
            public mergeSerial: number;

            /**
             * Creates a new BinaryData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BinaryData instance
             */
            public static create(properties?: wm.protobuf.IBinaryData): wm.protobuf.BinaryData;

            /**
             * Encodes the specified BinaryData message. Does not implicitly {@link wm.protobuf.BinaryData.verify|verify} messages.
             * @param message BinaryData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IBinaryData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BinaryData message, length delimited. Does not implicitly {@link wm.protobuf.BinaryData.verify|verify} messages.
             * @param message BinaryData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IBinaryData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BinaryData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BinaryData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.BinaryData;

            /**
             * Decodes a BinaryData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BinaryData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.BinaryData;

            /**
             * Verifies a BinaryData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BinaryData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BinaryData
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.BinaryData;

            /**
             * Creates a plain object from a BinaryData message. Also converts values to other types if specified.
             * @param message BinaryData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.BinaryData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BinaryData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BinaryData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GhostTrail. */
        interface IGhostTrail {

            /** GhostTrail carId */
            carId: number;

            /** GhostTrail area */
            area: number;

            /** GhostTrail ramp */
            ramp: number;

            /** GhostTrail path */
            path: number;

            /** GhostTrail playedAt */
            playedAt: number;

            /** GhostTrail playedPlace */
            playedPlace?: (wm.protobuf.IPlace|null);

            /** GhostTrail trail */
            trail: Uint8Array;
        }

        /** Represents a GhostTrail. */
        class GhostTrail implements IGhostTrail {

            /**
             * Constructs a new GhostTrail.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IGhostTrail);

            /** GhostTrail carId. */
            public carId: number;

            /** GhostTrail area. */
            public area: number;

            /** GhostTrail ramp. */
            public ramp: number;

            /** GhostTrail path. */
            public path: number;

            /** GhostTrail playedAt. */
            public playedAt: number;

            /** GhostTrail playedPlace. */
            public playedPlace?: (wm.protobuf.IPlace|null);

            /** GhostTrail trail. */
            public trail: Uint8Array;

            /**
             * Creates a new GhostTrail instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GhostTrail instance
             */
            public static create(properties?: wm.protobuf.IGhostTrail): wm.protobuf.GhostTrail;

            /**
             * Encodes the specified GhostTrail message. Does not implicitly {@link wm.protobuf.GhostTrail.verify|verify} messages.
             * @param message GhostTrail message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IGhostTrail, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GhostTrail message, length delimited. Does not implicitly {@link wm.protobuf.GhostTrail.verify|verify} messages.
             * @param message GhostTrail message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IGhostTrail, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GhostTrail message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GhostTrail
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.GhostTrail;

            /**
             * Decodes a GhostTrail message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GhostTrail
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.GhostTrail;

            /**
             * Verifies a GhostTrail message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GhostTrail message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GhostTrail
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.GhostTrail;

            /**
             * Creates a plain object from a GhostTrail message. Also converts values to other types if specified.
             * @param message GhostTrail
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.GhostTrail, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GhostTrail to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GhostTrail
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PlaceList. */
        interface IPlaceList {

            /** PlaceList places */
            places?: (wm.protobuf.IPlace[]|null);
        }

        /** Represents a PlaceList. */
        class PlaceList implements IPlaceList {

            /**
             * Constructs a new PlaceList.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IPlaceList);

            /** PlaceList places. */
            public places: wm.protobuf.IPlace[];

            /**
             * Creates a new PlaceList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlaceList instance
             */
            public static create(properties?: wm.protobuf.IPlaceList): wm.protobuf.PlaceList;

            /**
             * Encodes the specified PlaceList message. Does not implicitly {@link wm.protobuf.PlaceList.verify|verify} messages.
             * @param message PlaceList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IPlaceList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PlaceList message, length delimited. Does not implicitly {@link wm.protobuf.PlaceList.verify|verify} messages.
             * @param message PlaceList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IPlaceList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlaceList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PlaceList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.PlaceList;

            /**
             * Decodes a PlaceList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PlaceList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.PlaceList;

            /**
             * Verifies a PlaceList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PlaceList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlaceList
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.PlaceList;

            /**
             * Creates a plain object from a PlaceList message. Also converts values to other types if specified.
             * @param message PlaceList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.PlaceList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlaceList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PlaceList
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GhostList. */
        interface IGhostList {

            /** GhostList ghosts */
            ghosts?: (wm.protobuf.IGhostCar[]|null);
        }

        /** Represents a GhostList. */
        class GhostList implements IGhostList {

            /**
             * Constructs a new GhostList.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IGhostList);

            /** GhostList ghosts. */
            public ghosts: wm.protobuf.IGhostCar[];

            /**
             * Creates a new GhostList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GhostList instance
             */
            public static create(properties?: wm.protobuf.IGhostList): wm.protobuf.GhostList;

            /**
             * Encodes the specified GhostList message. Does not implicitly {@link wm.protobuf.GhostList.verify|verify} messages.
             * @param message GhostList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IGhostList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GhostList message, length delimited. Does not implicitly {@link wm.protobuf.GhostList.verify|verify} messages.
             * @param message GhostList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IGhostList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GhostList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GhostList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.GhostList;

            /**
             * Decodes a GhostList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GhostList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.GhostList;

            /**
             * Verifies a GhostList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GhostList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GhostList
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.GhostList;

            /**
             * Creates a plain object from a GhostList message. Also converts values to other types if specified.
             * @param message GhostList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.GhostList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GhostList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GhostList
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CarSummary. */
        interface ICarSummary {

            /** CarSummary hitCount */
            hitCount: number;

            /** CarSummary cars */
            cars?: (wm.protobuf.ICar[]|null);
        }

        /** Represents a CarSummary. */
        class CarSummary implements ICarSummary {

            /**
             * Constructs a new CarSummary.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.ICarSummary);

            /** CarSummary hitCount. */
            public hitCount: number;

            /** CarSummary cars. */
            public cars: wm.protobuf.ICar[];

            /**
             * Creates a new CarSummary instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CarSummary instance
             */
            public static create(properties?: wm.protobuf.ICarSummary): wm.protobuf.CarSummary;

            /**
             * Encodes the specified CarSummary message. Does not implicitly {@link wm.protobuf.CarSummary.verify|verify} messages.
             * @param message CarSummary message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.ICarSummary, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CarSummary message, length delimited. Does not implicitly {@link wm.protobuf.CarSummary.verify|verify} messages.
             * @param message CarSummary message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.ICarSummary, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CarSummary message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CarSummary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.CarSummary;

            /**
             * Decodes a CarSummary message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CarSummary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.CarSummary;

            /**
             * Verifies a CarSummary message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CarSummary message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CarSummary
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.CarSummary;

            /**
             * Creates a plain object from a CarSummary message. Also converts values to other types if specified.
             * @param message CarSummary
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.CarSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CarSummary to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CarSummary
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileList. */
        interface IFileList {

            /** FileList files */
            files?: (wm.protobuf.FileList.IFileInfo[]|null);

            /** FileList interval */
            interval?: (number|null);
        }

        /** Represents a FileList. */
        class FileList implements IFileList {

            /**
             * Constructs a new FileList.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IFileList);

            /** FileList files. */
            public files: wm.protobuf.FileList.IFileInfo[];

            /** FileList interval. */
            public interval: number;

            /**
             * Creates a new FileList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileList instance
             */
            public static create(properties?: wm.protobuf.IFileList): wm.protobuf.FileList;

            /**
             * Encodes the specified FileList message. Does not implicitly {@link wm.protobuf.FileList.verify|verify} messages.
             * @param message FileList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IFileList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileList message, length delimited. Does not implicitly {@link wm.protobuf.FileList.verify|verify} messages.
             * @param message FileList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IFileList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.FileList;

            /**
             * Decodes a FileList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.FileList;

            /**
             * Verifies a FileList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileList
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.FileList;

            /**
             * Creates a plain object from a FileList message. Also converts values to other types if specified.
             * @param message FileList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.FileList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileList
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FileList {

            /** Properties of a FileInfo. */
            interface IFileInfo {

                /** FileInfo fileId */
                fileId: number;

                /** FileInfo fileType */
                fileType: wm.protobuf.FileType;

                /** FileInfo fileSize */
                fileSize: number;

                /** FileInfo url */
                url: string;

                /** FileInfo sha1sum */
                sha1sum: Uint8Array;

                /** FileInfo notBefore */
                notBefore: number;

                /** FileInfo notAfter */
                notAfter: number;
            }

            /** Represents a FileInfo. */
            class FileInfo implements IFileInfo {

                /**
                 * Constructs a new FileInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm.protobuf.FileList.IFileInfo);

                /** FileInfo fileId. */
                public fileId: number;

                /** FileInfo fileType. */
                public fileType: wm.protobuf.FileType;

                /** FileInfo fileSize. */
                public fileSize: number;

                /** FileInfo url. */
                public url: string;

                /** FileInfo sha1sum. */
                public sha1sum: Uint8Array;

                /** FileInfo notBefore. */
                public notBefore: number;

                /** FileInfo notAfter. */
                public notAfter: number;

                /**
                 * Creates a new FileInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FileInfo instance
                 */
                public static create(properties?: wm.protobuf.FileList.IFileInfo): wm.protobuf.FileList.FileInfo;

                /**
                 * Encodes the specified FileInfo message. Does not implicitly {@link wm.protobuf.FileList.FileInfo.verify|verify} messages.
                 * @param message FileInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm.protobuf.FileList.IFileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FileInfo message, length delimited. Does not implicitly {@link wm.protobuf.FileList.FileInfo.verify|verify} messages.
                 * @param message FileInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm.protobuf.FileList.IFileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FileInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FileInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.FileList.FileInfo;

                /**
                 * Decodes a FileInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FileInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.FileList.FileInfo;

                /**
                 * Verifies a FileInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FileInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FileInfo
                 */
                public static fromObject(object: { [k: string]: any }): wm.protobuf.FileList.FileInfo;

                /**
                 * Creates a plain object from a FileInfo message. Also converts values to other types if specified.
                 * @param message FileInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm.protobuf.FileList.FileInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FileInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FileInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a GhostCompetitionTarget. */
        interface IGhostCompetitionTarget {

            /** GhostCompetitionTarget competitionId */
            competitionId: number;

            /** GhostCompetitionTarget specialGhostId */
            specialGhostId?: (number|null);

            /** GhostCompetitionTarget ghostCar */
            ghostCar: wm.protobuf.IGhostCar;

            /** GhostCompetitionTarget trailId */
            trailId: (number|Long);

            /** GhostCompetitionTarget updatedAt */
            updatedAt: number;

            /** GhostCompetitionTarget competitionSchedule */
            competitionSchedule?: (wm.protobuf.IGhostCompetitionSchedule|null);
        }

        /** Represents a GhostCompetitionTarget. */
        class GhostCompetitionTarget implements IGhostCompetitionTarget {

            /**
             * Constructs a new GhostCompetitionTarget.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm.protobuf.IGhostCompetitionTarget);

            /** GhostCompetitionTarget competitionId. */
            public competitionId: number;

            /** GhostCompetitionTarget specialGhostId. */
            public specialGhostId: number;

            /** GhostCompetitionTarget ghostCar. */
            public ghostCar: wm.protobuf.IGhostCar;

            /** GhostCompetitionTarget trailId. */
            public trailId: (number|Long);

            /** GhostCompetitionTarget updatedAt. */
            public updatedAt: number;

            /** GhostCompetitionTarget competitionSchedule. */
            public competitionSchedule?: (wm.protobuf.IGhostCompetitionSchedule|null);

            /**
             * Creates a new GhostCompetitionTarget instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GhostCompetitionTarget instance
             */
            public static create(properties?: wm.protobuf.IGhostCompetitionTarget): wm.protobuf.GhostCompetitionTarget;

            /**
             * Encodes the specified GhostCompetitionTarget message. Does not implicitly {@link wm.protobuf.GhostCompetitionTarget.verify|verify} messages.
             * @param message GhostCompetitionTarget message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm.protobuf.IGhostCompetitionTarget, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GhostCompetitionTarget message, length delimited. Does not implicitly {@link wm.protobuf.GhostCompetitionTarget.verify|verify} messages.
             * @param message GhostCompetitionTarget message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm.protobuf.IGhostCompetitionTarget, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GhostCompetitionTarget message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GhostCompetitionTarget
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm.protobuf.GhostCompetitionTarget;

            /**
             * Decodes a GhostCompetitionTarget message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GhostCompetitionTarget
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm.protobuf.GhostCompetitionTarget;

            /**
             * Verifies a GhostCompetitionTarget message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GhostCompetitionTarget message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GhostCompetitionTarget
             */
            public static fromObject(object: { [k: string]: any }): wm.protobuf.GhostCompetitionTarget;

            /**
             * Creates a plain object from a GhostCompetitionTarget message. Also converts values to other types if specified.
             * @param message GhostCompetitionTarget
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm.protobuf.GhostCompetitionTarget, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GhostCompetitionTarget to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GhostCompetitionTarget
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** SystemConstant enum. */
        enum SystemConstant {
            PROTOBUF_MESSAGE_REVISION = 8053
        }

        /** ErrorCode enum. */
        enum ErrorCode {
            ERR_SUCCESS = 0,
            ERR_REQUEST = 1,
            ERR_NOT_FOUND = 2,
            ERR_ID_SERVER = 3,
            ERR_ID_BANNED = 4,
            ERR_USER_LOCKED = 5,
            ERR_USER_VERSION = 6,
            ERR_NAME_CONFLICTED = 7,
            ERR_FORBIDDEN = 9,
            ERR_USER_SUCCEEDED = 11,
            ERR_BEING_TRANSFERRED = 12,
            ERR_SCRATCH_LOCKED = 13
        }

        /** LineType enum. */
        enum LineType {
            L_UNKNOWN = 0,
            L_MOBILE = 1,
            L_ISDN = 2,
            L_BFLETS = 3,
            L_ADSL = 4,
            L_WIRED = 5
        }

        /** TerminalType enum. */
        enum TerminalType {
            T_DRIVE = 0,
            T_TERMINAL = 1
        }

        /** DeviceType enum. */
        enum DeviceType {
            DEVICE_CARD = 0,
            DEVICE_PHONE = 1
        }

        /** ItemCategory enum. */
        enum ItemCategory {
            CAT_CUSTOM_COLOR = 1,
            CAT_WHEEL = 2,
            CAT_AERO = 3,
            CAT_BONNET = 4,
            CAT_WING = 5,
            CAT_MIRROR = 6,
            CAT_NEON = 8,
            CAT_TRUNK = 9,
            CAT_NUMBER_PLATE = 10,
            CAT_GT_WING = 12,
            CAT_AURA_MOTIF = 14,
            CAT_METER = 15,
            CAT_BGM = 16,
            CAT_NAME_PLATE = 17,
            CAT_NUMBER = 19,
            CAT_BGM_TRACK = 22,
            CAT_WINDOW_STICKER_FONT = 24,
            CAT_WINDOW_DECORATION = 25,
            CAT_RIVAL_MARKER = 26,
            CAT_STAMP = 27,
            CAT_TERMINAL_BACKGROUND = 28,
            CAT_CAR_TICKET = 201,
            CAT_CONSUMPTION_ITEM = 202,
            CAT_CAR_TICKET_FREE = 203,
            CAT_AERO_FULLSET = 300,
            CAT_AERO_LIMITED = 301
        }

        /** TutorialType enum. */
        enum TutorialType {
            TUTORIAL_ID_STORY = 0,
            TUTORIAL_ID_TIME_ATTACK = 1,
            TUTORIAL_ID_GHOST = 2,
            TUTORIAL_ID_GHOST_CHALLENGE = 3,
            TUTORIAL_ID_GHOST_LEVEL = 4,
            TUTORIAL_ID_UNUSED_5 = 5,
            TUTORIAL_ID_GHOST_SEARCH = 6,
            TUTORIAL_ID_GHOST_COMPETITION = 7,
            TUTORIAL_ID_HP600_CARD = 8,
            TUTORIAL_ID_UNUSED_9 = 9,
            TUTORIAL_ID_COMPETITION_QUALIFIED = 10,
            TUTORIAL_ID_COMPETITION_TERMINAL = 11,
            TUTORIAL_ID_COMPETITION_NOTICE = 12,
            TUTORIAL_ID_COMPETITION_FINISHED = 13,
            TUTORIAL_ID_UNUSED_14 = 14,
            TUTORIAL_ID_UNUSED_15 = 15,
            TUTORIAL_ID_UNUSED_16 = 16,
            TUTORIAL_ID_UNUSED_17 = 17,
            TUTORIAL_ID_UNUSED_18 = 18,
            TUTORIAL_ID_UNUSED_19 = 19,
            TUTORIAL_ID_GHOST_STAMP = 20,
            TUTORIAL_ID_GHOST_STAMP_DECLINED = 21,
            TUTORIAL_ID_GHOST_STAMP_FRIENDS = 22,
            TUTORIAL_ID_TERMINAL_SCRATCH = 23,
            TUTORIAL_ID_TURN_SCRATCH_SHEET = 24,
            TUTORIAL_ID_INVITE_FRIEND_CAMPAIGN = 25,
            TUTORIAL_ID_CAR_COUPON_FULL_TUNED_RECEIVABLE = 26,
            TUTORIAL_ID_VS_CONTINUE_TICKET = 27,
            TUTORIAL_ID_UNUSED_28 = 28,
            TUTORIAL_ID_UNUSED_29 = 29,
            TUTORIAL_ID_UNUSED_30 = 30,
            TUTORIAL_ID_DRESS_UP = 31,
            TUTORIAL_ID_MULTI_GHOST = 32,
            TUTORIAL_ID_STORY_NEW_FEATURE = 33,
            TUTORIAL_ID_GHOST_NEW_FEATURE = 34,
            TUTORIAL_ID_GHOST_REGION_MAP = 35
        }

        /** GameMode enum. */
        enum GameMode {
            MODE_STORY = 1,
            MODE_TIME_ATTACK = 2,
            MODE_VS_BATTLE = 3,
            MODE_GHOST_BATTLE = 4,
            MODE_EVENT = 5
        }

        /** GhostType enum. */
        enum GhostType {
            GHOST_NORMAL = 1,
            GHOST_PINCH_RUNNER = 2,
            GHOST_DEFAULT = 3
        }

        /** GhostSelectionMethod enum. */
        enum GhostSelectionMethod {
            GHOST_SEARCH_BY_REGION = 1,
            GHOST_SELECT_BY_LEVEL = 2,
            GHOST_SELECT_CROWN_MATCH = 3,
            GHOST_SELECT_STAMP_MATCH = 4,
            GHOST_SELECT_FROM_HISTORY = 5,
            GHOST_SEARCH_BY_SHOP = 6,
            GHOST_SEARCH_BY_NAME = 7,
            GHOST_ACCEPT_CHALLENGER = 8,
            GHOST_APPOINTMENT = 9,
            GHOST_DEFAULT_OPPONENT = 10,
            GHOST_COMPETITION = 11,
            GHOST_SELECT_FROM_BOOKMARKS = 12
        }

        /** GhostRateType enum. */
        enum GhostRateType {
            GHOST_RATE_UNKNOWN = 1,
            GHOST_RATE_INVALID = 2,
            GHOST_RATE_VALID = 3
        }

        /** PathSelectionMethod enum. */
        enum PathSelectionMethod {
            PATH_NEW = 1,
            PATH_PLAIN = 2,
            PATH_FRIEND = 3,
            PATH_NORMAL = 4,
            PATH_CHALLENGER = 5
        }

        /** NoticeEntry enum. */
        enum NoticeEntry {
            NOTICE_UNUSED_1 = 1,
            NOTICE_UNUSED_2 = 2,
            NOTICE_UNUSED_3 = 3,
            NOTICE_UNUSED_4 = 4,
            NOTICE_UNUSED_5 = 5,
            NOTICE_UNUSED_6 = 6,
            NOTICE_UNUSED_7 = 7,
            NOTICE_UNUSED_8 = 8,
            NOTICE_UNUSED_9 = 9,
            NOTICE_UNUSED_10 = 10,
            NOTICE_UNUSED_11 = 11,
            NOTICE_UNUSED_12 = 12
        }

        /** FileType enum. */
        enum FileType {
            FILE_PROMOTION_ANNOUNCEMENT = 1,
            FILE_FEATURE_ANNOUNCEMENT = 4,
            FILE_SPAPP_ANNOUNCEMENT = 6
        }

        /** GhostCompetitionParticipantState enum. */
        enum GhostCompetitionParticipantState {
            COMPETITION_NOT_PARTICIPATED = 1,
            COMPETITION_QUALIFIED = 2,
            COMPETITION_PARTICIPATED = 3,
            COMPETITION_WON = 4
        }

        /** ScreenshotType enum. */
        enum ScreenshotType {
            SS_GHOST_BATTLE = 1,
            SS_VERSUS_BATTLE = 2,
            SS_TERMINAL = 3,
            SS_ACQUIRING_VERSUS_STAR = 4,
            SS_ACQUIRING_AURA_MOTIF = 5,
            SS_GHOST_REGION_MAP = 6,
            SS_ACQUIRING_CROWN = 7,
            SS_GHOST_COMPETITION_RESULT = 8,
            SS_TIME_ATTACK_RESULT = 9,
            SS_LEVEL_UP = 10
        }

        /** TransferState enum. */
        enum TransferState {
            NOT_REGISTERED = 0,
            NEW_REGISTRATION = 1,
            TRANSFER_REQUIRED = 2,
            TRANSFERRING = 3,
            TRANSFERRED = 4
        }

        /** EventModeSerialErrorCode enum. */
        enum EventModeSerialErrorCode {
            SERIAL_SUCCESS = 0,
            SERIAL_ATTEMPT_TO_CHANGE = 1,
            SERIAL_NO_INPUT = 2,
            SERIAL_INVALID = 3,
            SERIAL_EXPIRED = 4,
            SERIAL_OTHER_PLACE = 5
        }

        /** ClientLogType enum. */
        enum ClientLogType {
            LOG_LOAD_REPORT = 0,
            LOG_ERROR = 1
        }

        /** SmartphoneAppState enum. */
        enum SmartphoneAppState {
            SPAPP_UNREGISTERED = 0,
            SPAPP_KTID = 1,
            SPAPP_BNID = 2
        }
    }
}
