"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsEncryption = void 0;
console.log({ aa: "aa" });
class AwsEncryption {
    constructor(kms) {
        this.kms = kms;
    }
    encrypt() {
        return new Promise((resolve, reject) => {
            this.kms.encrypt({ KeyId: "", Plaintext: "" }, (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve("ok");
                }
            });
        });
    }
    decrypt() {
        return new Promise((resolve, reject) => {
            this.kms.decrypt({ KeyId: "", CiphertextBlob: "" }, (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve("ok");
                }
            });
        });
    }
}
exports.AwsEncryption = AwsEncryption;
//# sourceMappingURL=aws-encryption.js.map