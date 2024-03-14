import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../components/CardsList/CardsList";

export default function New() {
    const runners = getGamesByCategory("runner");

    return (
        <main className={"main-inner"}>
            <CardsList id="runners" title="Ранеры" data={runners}/>
        </main>
    );
}