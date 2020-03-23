export default function suppressPropTypesWarnings() {
    const originalConsoleError = global.console.error;
    beforeAll(() => {
        global.console.error = (...args) => {
            const propTypeFailure = /Failed prop type/;
            if (!propTypeFailure.test(args[0])) {
                originalConsoleError(...args);
            }
        };
    });
}