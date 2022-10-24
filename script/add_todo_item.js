const locator = require('../bluestone-locator.js');
const projectFunc = require('../bluestone-func.js');
const puppeteer = require('puppeteer');
const bluestoneFunc = require('bluestone/ptLibrary/bluestone-func');
const config = require('../config.js');
const bluestoneType = require('bluestone/ptLibrary/class/index');
describe('@smoke test', () => {
    it('add todo item', async function () {
        let element, vars, frame, variable;
        variable = {};
        const browser = await bluestoneFunc.launchBrowser.func(config.puppeteer);
        let page = await browser.newPage();
        vars = new bluestoneType.VarSaver(__filename, this.runnable().currentRetry());
        frame = page;
        await bluestoneFunc.initialize.func(vars, page);
        await bluestoneFunc.goto.func(frame, 'https://todomvc.com/examples/angularjs/#/', browser);
        await bluestoneFunc.waitElementExists.func(frame, locator['todo inputbox'], 9981, vars.getSnapshot('Bluestone-Snapshot-1'));
        await bluestoneFunc.click.func(frame, locator['todo inputbox'], 0.33, 0.37);
        await bluestoneFunc.waitElementExists.func(frame, locator['todo inputbox'], 3000, vars.getSnapshot('Bluestone-Snapshot-3'));
        await bluestoneFunc.change.func(frame, locator['todo inputbox'], 'wash face');
        await bluestoneFunc.keydown.func(frame, 'Enter');
        await bluestoneFunc.waitElementExists.func(frame, locator['todo item - wash face'], 3000, vars.getSnapshot('Bluestone-Snapshot-6'));
        await bluestoneFunc.hover.func(frame, locator['todo item - wash face']);
        await bluestoneFunc.waitElementExists.func(frame, locator['Delete Button'], 7660, vars.getSnapshot('Bluestone-Snapshot-8'));
        await bluestoneFunc.click.func(frame, locator['Delete Button'], 0.56, 0.54);
        await bluestoneFunc.waitElementExists.func(frame, locator['Todo Header'], 970866, vars.getSnapshot('Bluestone-Snapshot-10'));
        await projectFunc.getTextColor.func(frame, locator['Todo Headerx'], 'rgba(175, 47, 47, 0.15)');
    });
});