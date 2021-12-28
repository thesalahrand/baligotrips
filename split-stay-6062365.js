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
  
    var result1 = loader.engine.document.getElementById(99969902).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(99969903).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators
  
    var result2 = loader.engine.document.getElementById(99969904).getProperty('value.value');
    var roundedValue2 = Math.ceil(result2); //- rounding to next integer
  loader.engine.document.getElementById(99969905).setValue(({"value": roundedValue2.toLocaleString('en-US')})); //- adds thousand separators
  
    var result3 = loader.engine.document.getElementById(99969906).getProperty('value.value');
    var roundedValue3 = Math.ceil(result3); //- rounding to next integer
  loader.engine.document.getElementById(99969907).setValue(({"value": roundedValue3.toLocaleString('en-US')})); //- adds thousand separators
  
    var result4 = loader.engine.document.getElementById(99969908).getProperty('value.value');
    var roundedValue4 = Math.ceil(result4); //- rounding to next integer
  loader.engine.document.getElementById(99969909).setValue(({"value": roundedValue4.toLocaleString('en-US')})); //- adds thousand separators
  
    var result5 = loader.engine.document.getElementById(99969910).getProperty('value.value');
    var roundedValue5 = Math.ceil(result5); //- rounding to next integer
  loader.engine.document.getElementById(99969911).setValue(({"value": roundedValue5.toLocaleString('en-US')})); //- adds thousand separators
  
    var result6 = loader.engine.document.getElementById(99969912).getProperty('value.value');
    var roundedValue6 = Math.ceil(result6); //- rounding to next integer
  loader.engine.document.getElementById(99969913).setValue(({"value": roundedValue6.toLocaleString('en-US')})); //- adds thousand separators

  var result7 = loader.engine.document.getElementById(99969914).getProperty('value.value');
    var roundedValue7 = Math.ceil(result7); //- rounding to next integer
  loader.engine.document.getElementById(99969915).setValue(({"value": roundedValue7.toLocaleString('en-US')})); //- adds thousand separators

  var result8 = loader.engine.document.getElementById(99969916).getProperty('value.value');
    var roundedValue8 = Math.ceil(result8); //- rounding to next integer
  loader.engine.document.getElementById(99969917).setValue(({"value": roundedValue8.toLocaleString('en-US')})); //- adds thousand separators

  var result9 = loader.engine.document.getElementById(99969918).getProperty('value.value');
    var roundedValue9 = Math.ceil(result9); //- rounding to next integer
  loader.engine.document.getElementById(99969919).setValue(({"value": roundedValue9.toLocaleString('en-US')})); //- adds thousand separators

  var result9 = loader.engine.document.getElementById(99969920).getProperty('value.value');
    var roundedValue9 = Math.ceil(result9); //- rounding to next integer
  loader.engine.document.getElementById(99969921).setValue(({"value": roundedValue9.toLocaleString('en-US')})); //- adds thousand separators

  var result10 = loader.engine.document.getElementById(99969922).getProperty('value.value');
    var roundedValue10 = Math.ceil(result10); //- rounding to next integer
  loader.engine.document.getElementById(99969923).setValue(({"value": roundedValue10.toLocaleString('en-US')})); //- adds thousand separators
    
  };
  
  window.onclick = roundAndSeparate;  