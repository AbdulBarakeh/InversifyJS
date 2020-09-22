import pkg from 'inversify';
const { injectable } = pkg;
@injectable()
export class Katana {
    public hit() {
        console.log("cut!");
    }
}