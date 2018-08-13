const { screen } = require('electron');

process.once('loaded', () => {
    global.electron = {
        screen: {
            getAllDisplays: screen.getAllDisplays,
        },
    };
});
