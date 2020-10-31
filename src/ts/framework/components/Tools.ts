import SimpleFramework from "../SimpleFramework";

/**
 * List of tools used to create this website
 */
class ToolsComponent extends SimpleFramework {
    /**
     * Construct a ToolsComponent
     * @param selector the query for querySelectorAll
     */
    constructor(selector: string) {
        super(
            selector,
            `
            <h2>Tools used to create this site</h2>
            <ul>
                <li>HTML/CSS</li>
                <li>TypeScript</li>
                <li>Sass (Scss)</li>
                <li>PostCSS + Autoprefixer</li>
                <li>Parcel</li>
                <li>Visual Studio Code</li>
            </ul>
            `
        );
    }
}

export default ToolsComponent;