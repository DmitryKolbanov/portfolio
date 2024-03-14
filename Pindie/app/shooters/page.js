import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../components/CardsList/CardsList";

export default function Shooters() {
    const shooters = getGamesByCategory("shooter");

    return (
        <main className={"main-inner"}>
            <CardsList id="shooters" title="Шутеры" data={shooters}/>
        </main>
    );
}