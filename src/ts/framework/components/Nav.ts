import SimpleComponent from "../SimpleFramework";

/**
 * The website's main navbar
 */
export class NavComponent extends SimpleComponent {
    /**
     * Constructs a NavComponent
     * @param selector the query for querySelectorAll
     */
    constructor(selector: string, activePage: string = "") {
        super(
            selector, 
            `
            <ul class="navbar-list">
                <li>
                    <a href="./" class="${
                        activePage.toLowerCase() === "/" ? "nav-active" : ""
                    }">Home</a>
                </li>
                <li>
                    <a href="about.html">About</a>
                </li>
            </ul>
            `
        );
    }
}

export default NavComponent;
