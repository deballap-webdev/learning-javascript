// Modules
/* import playGuitar from "./guitar.js";
import { shredding as shred, plucking as fingerpicking } from "./guitar.js";
 */
import * as Guitars from "./guitar.js";
import user from "./user.js";

console.log(Guitars.playGuitar());
console.log(Guitars.shredding());
console.log(Guitars.plucking());

const me = new user("random@mailhost.com", "Debbie");
console.log(me);
console.log(me.greeting());
