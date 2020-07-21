
class BrowserUtils {

    /**
     * pause wrapper method
     * @param selector
     */
    pause(selector) {
        return browser.pause(selector);
    }

    /**
     *
     * @param selector
     */
    scrollToElement(selector) {
        const viewportObj = browser.getWindowSize();
        const viewportHeight = viewportObj.height;
        const viewportWidth = viewportObj.width;

        const topLeft = { height: 0, width: 0 };
        const topRight = { height: 0, width: viewportWidth };
        const bottomLeft = { height: viewportHeight, width: 0 };
        const bottomRight = { height: viewportHeight, width: viewportWidth };
        const middleLeftSide = { height: viewportHeight / 2, width: 0 };
        const middleRightSide = {
            height: viewportHeight / 2,
            width: viewportWidth,
        };

        const inspectionArea = [
            topLeft,
            topRight,
            bottomLeft,
            bottomRight,
            middleLeftSide,
            middleRightSide,
        ];

        browser.execute(
            (responseInspectionArea, responseSelector) => {
                const isInViewport = elem => {
                    const bounding = elem.getBoundingClientRect();
                    return (
                        bounding.top >= 0 &&
                        bounding.left >= 0 &&
                        bounding.bottom <=
                        (window.innerHeight ||
                            document.documentElement.clientHeight) &&
                        bounding.right <=
                        (window.innerWidth ||
                            document.documentElement.clientWidth)
                    );
                };

                for (let i = 0; i < responseInspectionArea.length; i++) {
                    window.scrollTo(
                        responseInspectionArea[i].width,
                        responseInspectionArea[i].height
                    );
                    const avail = isInViewport(
                        document.querySelector(responseSelector)
                    );
                    if (avail) {
                        return;
                    }
                }
            },
            inspectionArea,
            selector
        );
    }
}
module.exports = new BrowserUtils();
