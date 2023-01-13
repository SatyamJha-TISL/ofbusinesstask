import Header from "./Component/Header";
import Content from "./Component/Content";
import "./styles.scss";
import _ from "lodash";

export default function App() {

    return (
        <div className="App" >
            <div className="component-wrapper" >
                <Header />
                <Content />
                <div className="bottom-section"></div>
            </div>
        </div>
    );
}
