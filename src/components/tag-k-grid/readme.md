# tag-k-grid









## Demos









```html




<!-- dependencies -->




<link rel="stylesheet" href="/demo-app/assets/kendo.common-bootstrap.min.css">




<link rel="stylesheet" href="/demo-app/assets/kendo.bootstrap.min.css">




<script src="/demo-app/assets/kendo.all.min.js"></script>









<tag-k-grid></tag-k-grid>









<script>




  const g = document.querySelector("tag-k-grid");




  g.componentOnReady(() => {




    g.init({




      columns: [




        { field: "name" },




        { field: "age" }




  ],




  dataSource: {




    data: [




      { name: "Jane Doe", age: 30 },




      { name: "John Doe", age: 33 }




    ]




  },









      height: 550,




      groupable: false,




      sortable: true,




      pageable: {




        refresh: false,




        pageSizes: true,




        buttonCount: 5




      }




    });




  });




</script>




```









<!-- Auto Generated Below -->


## Events

#### ready


## Methods

#### init()



----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
