import { readFile } from "fs/promises";

export default {
    version: JSON.parse(await readFile('./package.json')).version,
    ustedes: 'ustedes',
    usted: 'usted',
    nosotros: 'nosotros',
    yo: 'yo',
    tu: 'tu',
    ella: 'ella',
    el: 'el'
}