import Header from "./Header.jsx";
import Order from "./Order.jsx";
import Inventory from "./Inventory.jsx";

function App() {
    return (
        <div className={"catch-of-the-day"}>
            <div className={"menu"}>
                <Header tagline={"Sendkite Market"} />
            </div>
            <Order />
            <Inventory />
        </div>
    );
}

export default App;
