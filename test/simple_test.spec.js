const browsers = require('playwright');

describe('Very simple test', ()=>{
    it('should make a simple test', async()=>{
        console.log('hello, world');
        const browserType =  browsers['webkit'];

        const browser = await browserType.launch({
            headless: false
        });
        console.log(browser.version());
        const context = await browser.newContext({
            viewport:{
                width: 1000,
                height: 800
            }
        });
        //const page =
    });
});