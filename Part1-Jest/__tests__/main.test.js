const formatVolumeIconPath = require('../assets/scripts/main');

describe('formatVolumeIconPath outputs right path based on val', () => {
    test('volume greater than 66 shows icon 3', () => {
        expect(formatVolumeIconPath(67)).toMatch(`./assets/media/icons/volume-level-3.svg`);
    });

    test('volume between 34 and 66 inclusive shows icon 2', () => {
        expect(formatVolumeIconPath(66)).toMatch(`./assets/media/icons/volume-level-2.svg`);
    });

    test('volume between 1 and 33 inclusive shows icon 1', () => {
        expect(formatVolumeIconPath(33)).toMatch(`./assets/media/icons/volume-level-1.svg`);
    });

    test('volume 0 shows icon 0', () => {
        expect(formatVolumeIconPath(0)).toMatch(`./assets/media/icons/volume-level-0.svg`);
    });
});