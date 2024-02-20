import { AdvancedChart } from "react-tradingview-embed";
import DetailsPrice from "./DetailsPrice";
import { useContext } from "react";
import { themeContext } from "../../context/ThemeContextProvider";

const Chart = () => {
    const { theme } = useContext(themeContext)
    return (
        <div className="bg-white bg-dark rounded-xl p-4">
            <DetailsPrice />
            <AdvancedChart widgetProps={{ "theme": theme === "dark" ? "dark" : "light", height: 360 }} />
        </div>
    )
}

export default Chart