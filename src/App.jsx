import { useState } from "react";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (!height || !weight || height <= 0 || weight <= 0) return;

    const h = height / 100;
    const value = weight / (h * h);

    let cat = "";
    if (value < 18.5) cat = "Underweight";
    else if (value < 25) cat = "Normal";
    else cat = "Obese";

    setBmi(value.toFixed(2));
    setCategory(cat);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>BMI Calculator</h2>

        <input
          style={styles.input}
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <input
          style={styles.input}
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <button style={styles.button} onClick={calculateBMI}>
          Calculate
        </button>

        {bmi && (
          <>
            <p style={styles.result}>
              BMI: {bmi} ({category})
            </p>

            {/* 📊 BMI Bar */}
            <div style={styles.chart}>
              <div style={styles.under}></div>
              <div style={styles.normal}></div>
              <div style={styles.obese}></div>

              {/* Indicator */}
              <div
                style={{
                  ...styles.pointer,
                  left: `${Math.min((bmi / 40) * 100, 100)}%`,
                }}
              ></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

/* 🎨 STYLES */
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f0f0f, #1a1a2e)",
    fontFamily: "Arial",
  },

  card: {
    width: "300px",
    padding: "25px",
    borderRadius: "15px",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 0 20px rgba(0,255,255,0.2)",
    textAlign: "center",
    color: "white",
  },

  title: {
    marginBottom: "15px",
  },

  input: {
    width: "90%",
    padding: "10px",
    margin: "8px 0",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    background: "#111",
    color: "white",
  },

  button: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "8px",
    border: "none",
    background: "cyan",
    color: "black",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 0 10px cyan",
  },

  result: {
    marginTop: "15px",
    fontWeight: "bold",
  },

  chart: {
    marginTop: "15px",
    height: "10px",
    display: "flex",
    position: "relative",
    borderRadius: "5px",
    overflow: "hidden",
  },

  under: {
    flex: 1,
    background: "#3498db",
  },

  normal: {
    flex: 1,
    background: "#2ecc71",
  },

  obese: {
    flex: 1,
    background: "#e74c3c",
  },

  pointer: {
    position: "absolute",
    top: "-5px",
    width: "2px",
    height: "20px",
    background: "white",
  },
};