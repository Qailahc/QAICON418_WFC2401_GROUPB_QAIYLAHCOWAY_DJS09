module.exports = {
  "output": {
    "filename": ".pack.js"
  },
  "entry": {
    "index": "./index.ts"
  },
  "resolve": {
    "extensions": [
      ".ts",
      ".config.js",
      ".json"
    ]
  },
  "module": {
    "rules": [
      {
        "use": {
          "loader": "ts-loader"
        },
        "exclude": /node_modules/,
        "test": /\.ts$/
      }
    ]
  }
};