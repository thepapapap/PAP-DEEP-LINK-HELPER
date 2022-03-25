import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [itemId, setItemId] = useState("");
  const appsFlyerData = useMemo(() => {
    return encodeURIComponent(
      JSON.stringify({
        action: { type: "RouteTo", payload: `/product/${itemId}` },
      })
    );
  }, [itemId]);
  return (
    <>
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">PAP Deep Link Helper</p>
          <p className="subtitle">
            Use this and AppsFlyer to create a deep link
          </p>
        </div>
      </section>

      <div className="container app-container">
        <div className="card">
          <div className="card-content">
            <div className="content">
              <h1 className="title">Item Id (Input)</h1>
              <input
                value={itemId}
                onChange={({ target: { value } }) => setItemId(value)}
                className="input is-primary"
                type="text"
                placeholder="Primary input"
              />
              <br />
              <br />
              <h1 className="title">Deep Link Data (Output)</h1>
              <textarea
                value={appsFlyerData}
                readOnly
                className="textarea"
                placeholder="AppsFlyer data will be shown here"
                rows="5"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
