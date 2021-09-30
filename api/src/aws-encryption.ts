import type { KMS } from "aws-sdk";

export class AwsEncryption {
  constructor(private readonly kms: KMS) {}

  encrypt(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.kms.encrypt({ KeyId: "", Plaintext: "" }, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve("ok");
        }
      });
    });
  }

  decrypt(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.kms.decrypt({ KeyId: "", CiphertextBlob: "" }, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve("ok");
        }
      });
    });
  }
}
