import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../components/CardsList/CardsList";

export default function New() {
    const pixelGames = getGamesByCategory("pixel");

    return (
        <main className={"main-inner"}>
            <CardsList id="pixelGames" title="Пиксельные" data={pixelGames}/>
        </main>
    );
}