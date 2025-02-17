export const mfConfig = {
  name: "remoteMf",
  filename: "remoteEntry.js",
  exposes: {
    './MyComponent': './src/components/MyComponent', // Exposing MyComponent
  },
  shared: ["react", "react-dom"],
};
