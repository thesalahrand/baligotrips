function roundAndSeparate() {
	
  //---Add only thousands separators----
  
  /* Offer Price IDR (Breakfast) 99332759 -> 99482258 (first number is formula, second is short text) 
  Offer Price IDR (Half Board)   99136529 -> 99482259
  Offer Price IDR (Full Board)   99136530 -> 99482261 */
  
  //   var number1 = loader.engine.document.getElementById(99332759).getProperty('value.value');
  // loader.engine.document.getElementById(99482258).setValue(({"value": number1.toLocaleString('en-US')})); //- adds thousand separators
  
  //   var number2 = loader.engine.document.getElementById(99136529).getProperty('value.value');
  // loader.engine.document.getElementById(99482259).setValue(({"value": number2.toLocaleString('en-US')})); //- adds thousand separators
  
  //   var number3 = loader.engine.document.getElementById(99136530).getProperty('value.value');
  // loader.engine.document.getElementById(99482261).setValue(({"value": number3.toLocaleString('en-US')})); 
    
  //---Round up AND add thousands separators----
  
  /* INR Cost (Breakfast Plan)                99117086 -> 99482262
  INR Cost ( Breakfast Plan - India Billing ) 99391056 -> 99482263
  INR Cost(Half Board Plan)                   99390975 -> 99482265
  INR Cost ( Half Board  - India Billing )    99391060 -> 99391060
  INR Cost ( Full Board Plan)                 99390976 -> 99482272
  INR Cost ( Full Board - India Billing )     99391070 -> 99482273 */
  
    var result1 = loader.engine.document.getElementById(101181911).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(101181912).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

  var result1 = loader.engine.document.getElementById(101181914).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(101181915).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

  var result1 = loader.engine.document.getElementById(101181917).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(101181918).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

  var result1 = loader.engine.document.getElementById(101181927).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(101181925).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

  var result1 = loader.engine.document.getElementById(101181929).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(101181926).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

  var result1 = loader.engine.document.getElementById(101181931).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(101181928).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

  var result1 = loader.engine.document.getElementById(101181933).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(101181930).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

  var result1 = loader.engine.document.getElementById(101181936).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(101181932).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

  var result1 = loader.engine.document.getElementById(101181934).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(101181935).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators
    
  };
  
  window.onclick = roundAndSeparate;  