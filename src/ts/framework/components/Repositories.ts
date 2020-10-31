import SimpleFramework from "../SimpleFramework";

/**
 * A list of repositories with pages
 */
class RepositoryListComponent extends SimpleFramework {
    /**
     * Constructs a RepositoryList
     * @param selector the query for querySelectorAll
     */
    constructor(selector: string) {
        super(
            selector,
            `
            <h2>All github page repositories</h2>
            <ul>
                <li><a href="/Background">JessebotX/Background</a></li>
            </ul>

            <p class="small-text">
                for all other github (with no github pages) repositories, check out my 
                <a href="https://github.com/JessebotX">Github profile</a>
            </p>
            `
        )
    }
}

export default RepositoryListComponent;