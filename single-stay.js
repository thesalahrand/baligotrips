const prevSiblingSpanIds = ['price-00000056-prefix-acc', 'price-00000058-prefix-acc'];
// const prevSiblingSpanIds = ['price-00000056-prefix-acc', 'price-00000058-prefix-acc', 'price-0000005a-prefix-acc', 'price-0000005c-prefix-acc', 'price-0000005e-prefix-acc', 'price-00000060-prefix-acc'];
const hiddenInpIds = ['text-00000068', 'text-0000006a', 'text-0000006c'];
setInterval(() => {
  prevSiblingSpanIds.forEach((prevSiblingSpanId, idx) => {
    if(document.querySelector(`#${prevSiblingSpanId}`).nextElementSibling && document.querySelector(`#${hiddenInpIds[idx]}`)) {
      const actualInp = document.querySelector(`#${prevSiblingSpanId}`).nextElementSibling;
      const hiddenInp = document.querySelector(`#${hiddenInpIds[idx]}`);
      actualInp.value = Math.ceil(actualInp.value);
      hiddenInp.value = actualInp.value;
    }
  });
}, 1000);