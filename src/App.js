import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
    console.log(process.env.REACT_APP_BACK_END_URL);
    useEffect(() => {
        const getDatas = async () => {
            // const response = await fetch(`${process.env.REACT_APP_BACK_END_URL}`, {
            const response = await fetch("https://port-0-deploy-test-back-ly8jj35hdc5479db.sel5.cloudtype.app/test", {
                method: "POST",
            });
            const datas = response.json();
            return datas;
        };

        getDatas().then(console.log).catch(console.error);
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
