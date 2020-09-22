import pkg from 'inversify';
const { injectable } = pkg;
@injectable()
export class Shuriken {
    public throw() {
        console.log("hit!");
    }
}