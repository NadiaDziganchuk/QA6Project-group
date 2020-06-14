// describe('TC 11; 12 - Verify that Lower Limit Field (LLF) is present and has text', () => {
//
//     it('LLF is present', () => {
//         browser.url('https://likejean.github.io/homework-5/');
//         expect(browser.$('button[name="negative"]').isDisplayed()).true;
//   });
//
//     it('LLF has text "CHANGE STEP OPTIONS?"', () => {
//         const elementLLF = $('button[name="negative"]').getText();
//         expect(elementLLF).toEqual('CHANGE STEP OPTIONS?');
//   });
//
// });
//
// describe('TC 15; 16 - Verify that  Upper Limit Field (ULF) is present and has text',  () => {
//     it('ULF is present', () => {
//         browser.url('https://likejean.github.io/homework-5/');
//         expect($('button[name="positive"]').isDisplayed()).true;
//     });
//
//     it('ULF has text "CHANGE STEP OPTIONS?"', () => {
//         const elementULF = $('button[name="positive"]').getText();
//         expect(elementULF).toEqual('CHANGE STEP OPTIONS?');
//     });
// });
//
// describe('TC 168 Verify that correct set of Sub buttons is displayed', function () {
//
//     it('should add ULF = 9 and LLF = 1', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const elementULF =  $('button[name="positive"]');
//         elementULF.click();
//         const ulfValue = $('input[name="upper"]');
//         ulfValue.setValue(9);
//         browser.pause(1000);
//         const elementLLF =  $('button[name="negative"]');
//         elementLLF.click();
//         const llfValue = $('//input[@name=\'lower\']');
//         llfValue.setValue(1);
//         browser.pause(1000);
//         expect(llfValue.isExisting()).true;
//         expect(ulfValue.isExisting()).true;
//     });
//
//     it('verify that 9 sub buttons from -1 to -9 appear', () => {
//         expect($('[step="-1"]').isExisting()).true;
//         expect($('[step="-2"]').isExisting()).true;
//         expect($('[step="-3"]').isExisting()).true;
//         expect($('[step="-4"]').isExisting()).true;
//         expect($('[step="-5"]').isExisting()).true;
//         expect($('[step="-6"]').isExisting()).true;
//         expect($('[step="-7"]').isExisting()).true;
//         expect($('[step="-8"]').isExisting()).true;
//         expect($('[step="-9"]').isExisting()).true;
//       });
//
// });
//
// describe('TC 170 Verify that min Sub button value is equal to the value in ULF', function () {
//
//     it('should add ULF = 9 and LLF = 1', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const elementULF =  $('button[name="positive"]');
//         elementULF.click();
//         const ulfValue = $('input[name="upper"]');
//         ulfValue.setValue(9);
//         const elementLLF =  $('button[name="negative"]');
//         elementLLF.click();
//         const llfValue = $('//input[@name=\'lower\']');
//         llfValue.setValue(1);
//         expect(llfValue.isExisting());
//         expect(ulfValue.isExisting());
//     });
//
//     it('verify that min Sub button value = -9', () => {
//         expect($('[step="-9"]').isExisting()).true;
//         expect($('[step="-10"]').isExisting()).false;
//         const subButtonText = $('[step="-9"]').getText();
//         expect(subButtonText).toEqual("-9");
//     });
//
// });
//
// describe('TC 171 - Verify that max Sub button value is equal to the value in LLF', function () {
//     it('should add ULF = 9 and LLF = 1', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const elementULF =  $('button[name="positive"]');
//         elementULF.click();
//         const ulfValue = $('input[name="upper"]');
//         ulfValue.setValue(9);
//         const elementLLF =  $('button[name="negative"]');
//         elementLLF.click();
//         const llfValue = $('//input[@name=\'lower\']');
//         llfValue.setValue(1);
//         expect(llfValue.isExisting());
//         expect(ulfValue.isExisting());
//     });
//
//     it('verify that max Sub button value = -1', function () {
//         expect($('[step="-1"]').isExisting()).true;
//         expect($('[step="0"]').isExisting()).false;
//         const subButtonText = $('[step="-1"]').getText();
//         expect(subButtonText).toEqual("-1");
//     });
//
// });
//
// describe('TC 173 Verify that correct set of Add buttons is displayed for max range', function () {
//
//     it('should add ULF = 9 and LLF = 1', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const elementULF =  $('button[name="positive"]');
//         elementULF.click();
//         const ulfValue = $('input[name="upper"]');
//         ulfValue.setValue(9);
//         const elementLLF =  $('button[name="negative"]');
//         elementLLF.click();
//         const llfValue = $('//input[@name=\'lower\']');
//         llfValue.setValue(1);
//         expect(llfValue.isExisting()).true;
//         expect(ulfValue.isExisting()).true;
//     });
//
//     it('verify that 9 add buttons from 1 to 9 appear', () => {
//         expect($('[step="1"]').isExisting()).true;
//         expect($('[step="2"]').isExisting()).true;
//         expect($('[step="3"]').isExisting()).true;
//         expect($('[step="4"]').isExisting()).true;
//         expect($('[step="5"]').isExisting()).true;
//         expect($('[step="6"]').isExisting()).true;
//         expect($('[step="7"]').isExisting()).true;
//         expect($('[step="8"]').isExisting()).true;
//         expect($('[step="9"]').isExisting()).true;
//      });
//
// });
//
// describe('TC 174 - Verify that min Add button value is equal to the value in LLF', function () {
//
//     it('should add ULF = 9 and LLF = 1', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const elementULF =  $('button[name="positive"]');
//         elementULF.click();
//         const ulfValue = $('input[name="upper"]');
//         ulfValue.setValue(9);
//         const elementLLF =  $('button[name="negative"]');
//         elementLLF.click();
//         const llfValue = $('//input[@name=\'lower\']');
//         llfValue.setValue(1);
//         expect(llfValue.isExisting()).true;
//         expect(ulfValue.isExisting()).true;
//     });
//
//     it('verify that min Add button value = 1', function () {
//         expect($('[step="1"]').isExisting()).true;
//         expect($('[step="0"]').isExisting()).false;
//         const addButtonText = $('[step="1"]').getText();
//         expect(addButtonText).toEqual("1");
//     });
//
// });
//
//
// describe('TC 175 - Verify that max Add button value is equal to the value in ULF', function () {
//
//     it('should add ULF = 9 and LLF = 1', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const elementULF =  $('button[name="positive"]');
//         elementULF.click();
//         const ulfValue = $('input[name="upper"]');
//         ulfValue.setValue(9);
//         const elementLLF =  $('button[name="negative"]');
//         elementLLF.click();
//         const llfValue = $('//input[@name=\'lower\']');
//         llfValue.setValue(1);
//         expect(llfValue.isExisting()).true;
//         expect(ulfValue.isExisting()).true;
//     });
//
//     it('verify that max Add button value = 9', function () {
//         expect($('[step="9"]').isExisting()).true;
//         expect($('[step="10"]').isExisting()).false;
//         const addButtonText = $('[step="9"]').getText();
//         expect(addButtonText).toEqual("9");
//     });
//
// });
