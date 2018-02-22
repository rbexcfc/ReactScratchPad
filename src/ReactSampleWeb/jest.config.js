module.exports = {
    verbose: true,
    collectCoverage: true,
    transform: { "^.+\\.jsx?$": "babel-jest" },
    unmockedModulePathPatterns: [ "react" ]
};