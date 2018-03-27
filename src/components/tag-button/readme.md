# tag-button









## Demos









#### Basic button









```html




<tag-button id="basicBtn">Click me!</tag-button>




<script>




  const btn = document.querySelector("tag-button");




  btn.addEventListener('click', e => alert("click"));




</script>




```









#### Button with accent colour









```html




<tag-button accent="Access">Hello</tag-button>




```









#### Button with badge









```html




<tag-button>




          Hello




          <tag-badge value="99" />




        </tag-button>`




```









<!-- Auto Generated Below -->


## Properties

#### accent

string

Colour of the button


#### size

string


## Attributes

#### accent

string

Colour of the button


#### size

string



----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
