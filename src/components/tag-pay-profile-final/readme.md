# tag-pay-profile-final









## Demos









#### Page profile









```html




<tag-pay-profile-final id="demo"></tag-pay-profile-final>




<script >




  const $el = document.getElementById("demo");









  async function main() {




    const resp = await fetch("http://localhost:5050/Home/GetProfile");




    const viewModel = await resp.json();




    $el.vm = viewModel;




  }




  main();




</script>




```









<!-- Auto Generated Below -->


## Properties

#### vm



Property description


## Attributes

#### vm



Property description


## Events

#### payProfileChange



----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
