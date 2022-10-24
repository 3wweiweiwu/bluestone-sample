const { Browser, Page, ElementHandle, Frame } = require('puppeteer-core')
const { ElementSelector, VarSaver } = require('bluestone').types
const bluestoneFunc = require('bluestone/ptLibrary/bluestone-func');
const bluestoneType = require('bluestone/ptLibrary/class/index');
const assert = require('assert');
// const bluestoneLocator = require('../bluestone-locator');

exports.getTextColor = class extends bluestoneType.BluestoneFunc {
    constructor() {
        super()
        /**
         * This is the place where you tell bluestone when to show your customized function
         * If you keep default value, your function will be showed up all the time
         * This is a bad practice because user will get confused with all the functions you have
         * You want to make your function only show up when relavent locator appears. 
         * Example: 
         * this.locators = [bluestoneLocator['Locator 1'],bluestoneLocator['Locator 2']]
         */
        this.locators = []
    }
    /**
     * Validate color of the text
     * @param {Frame} frame The puppeteer frame object. 
     * @param {ElementSelector} element element this function will interact with. We can only have 1 element as input
     * @param {string} expectedColor Expected Color in rgba format
     * @returns 
     */
    async func(frame, element, expectedColor) {
        //This is how we query element through bluestone. Please use this function as much as you can 
        //If you do not use this function to query element, you won't get the benefit from auto-healing!
        let eleObj = await bluestoneFunc.waitElementExists.func(frame, element, 2000)
        let color = await eleObj.evaluate(ele => {
            return window.getComputedStyle(ele).color
        })
        assert.equal(color, expectedColor, `The color is incorrect expected: ${color}. Current: ${expectedColor}`)
        return true

    }

}
