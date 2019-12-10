import { Deserializable } from './deserializable';

export class UserReport implements Deserializable{
    winCount : BigInteger;
    lossCount : BigInteger;

    constructor(winCount:any,lossCount:any) {
        this.winCount = winCount;
        this.lossCount = lossCount;
      }

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;    
    }
}
