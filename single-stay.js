const prevSiblingSpanIds = ['price-00000056-prefix-acc', 'price-00000058-prefix-acc', 'price-0000005a-prefix-acc', 'price-0000005c-prefix-acc', 'price-0000005e-prefix-acc', 'price-00000060-prefix-acc'];
const hiddenInpIds = ['price-00000062-currency-acc', 'price-00000064-currency-acc', 'price-00000066-currency-acc', 'price-00000068-currency-acc', 'price-0000006a-currency-acc', 'price-0000006c-currency-acc'];
setInterval(() => {
  prevSiblingSpanIds.forEach((prevSiblingSpanId, idx) => {
    if(document.querySelector(`#${prevSiblingSpanId}`).nextElementSibling && document.querySelector(`#${hiddenInpIds[idx]}`).nextElementSibling) {
      const actualInp = document.querySelector(`#${prevSiblingSpanId}`).nextElementSibling;
      const hiddenInp = document.querySelector(`#${hiddenInpIds[idx]}`).nextElementSibling;
      // actualInp.value = Math.ceil(actualInp.value);
      hiddenInp.value = actualInp.value;
    }
  });
}, 1000);