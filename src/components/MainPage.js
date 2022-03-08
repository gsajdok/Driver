import {Header} from "./Header";
import {Navigation} from "./Navigation";
import {TipOfTheWeek} from "./TipOfTheWeek";

export const MainPage = () => {
    return (
        <div className="pageWrapper">
            <Header/>
            <Navigation/>
            <TipOfTheWeek/>
        </div>
    )
}