import type { KMS } from "aws-sdk";
export declare class AwsEncryption {
    private readonly kms;
    constructor(kms: KMS);
    encrypt(): Promise<string>;
    decrypt(): Promise<string>;
}
