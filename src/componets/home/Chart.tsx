import { AdvancedChart } from "react-tradingview-embed";
import DetailsPrice from "./DetailsPrice";

const Chart = () => {
    return (
        <div className="bg-white rounded-xl p-4">
            <DetailsPrice />
            <AdvancedChart widgetProps={{ "theme": "light", height: 360 }} />
        </div>
    )
}

export default Chart