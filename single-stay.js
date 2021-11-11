const prevSiblingSpanIds = ['price-00000056-prefix-acc', 'price-00000058-prefix-acc', 'price-0000005a-prefix-acc', 'price-0000005c-prefix-acc', 'price-0000005e-prefix-acc', 'price-00000060-prefix-acc'];
setInterval(() => {
  prevSiblingSpanIds.forEach(prevSiblingSpanId => {
    if(document.querySelector(`#${prevSiblingSpanId}`).nextElementSibling) {
      const input = document.querySelector(`#${prevSiblingSpanId}`).nextElementSibling;
      input.value = Math.ceil(input.value);
    }
  });
}, 1000);