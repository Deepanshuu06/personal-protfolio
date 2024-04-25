import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px", // Adding margin from the top
        }}
      >
        <div className="mt-52"></div>
        <p
          style={{
            fontSize: 18,
            color: "#F1F1F1",
            fontWeight: 800,
            marginTop: 50, // Adjusted margin from the top
          }}
        >
        {progress.toFixed(2)}%
        </p>
      </div>
    </Html>
  );
};

export default CanvasLoader;
