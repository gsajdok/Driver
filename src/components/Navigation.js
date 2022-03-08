import {SearchComponent} from "./SearchComponent";

export const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <button className="button button--navigation button--active">Porady</button>
                </li>
                <li>
                    <button className="button button--navigation">Forum</button>
                </li>
                <li>
                    <SearchComponent/>
                </li>
            </ul>
        </nav>
        )
}