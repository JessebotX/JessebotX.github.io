/**
 * Create a reusable web component
 */
export default class SimpleComponent {
    constructor(selector: string, html: string) {
        const query = document.querySelectorAll(selector);

        for (let i = 0; i < query.length; i++) {
            query[i].innerHTML = html;
        }
    }
}
