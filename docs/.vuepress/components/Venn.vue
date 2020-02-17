<template>
  <figure>
    <div v-bind:id="'venn-' + type"></div>
    <figcaption>{{text}}</figcaption>
  </figure>
</template>

<script>
  import * as venn from 'venn.js';
  import * as d3 from 'd3';

  export default {
    props: {
      sets: Array,
      text: String,
      type: String
    },
    data() {
      return {
        sets,
        type
      }
    },
    methods: {
      venn(sets, type) {
        let chart = venn.VennDiagram().height(300).width(600);
        let id = `#venn-${type}`

        d3.select(id).datum(sets).call(chart);
        d3.select(id + " svg")
          .attr("viewBox", "0 0 600 300")
          .attr("preserveAspectRatio", "xMinYMin meet")
          .attr("width", "100%")
          .attr("height", "100%")

        d3.selectAll(id + " .venn-area.venn-circle text")
            .style("font-weight", "bold")
            .style("font-size", "1.5em")
            .attr("class", "venn-font")

        if (type == 'and') {
          d3.selectAll(id + " .venn-area.venn-intersection path")
          .style("fill", "#388AA0")
          .style("fill-opacity", 1);

          d3.selectAll(id + " .venn-area.venn-circle path")
            .style("fill", "rgb(215, 228, 239)")
            .style("fill-opacity", 1);
        }

        if (type == 'or') {
          d3.selectAll(id + " .venn-area.venn-intersection path")
            .style("fill", "388AA0")
            .style("fill-opacity", 1);

          d3.selectAll(id + " .venn-area.venn-circle path")
            .style("fill", "388AA0")
            .style("fill-opacity", 1);
          
          d3.selectAll(id + " .venn-area.venn-circle text")
            .style("fill", "white");
        }

        if (type == 'not') {
          d3.selectAll(id + " .venn-area.venn-circle:nth-child(odd) path")
            .style("fill", "#388AA0")
            .style("fill-opacity", 1);
          
          d3.selectAll(id + " .venn-area.venn-circle:first-child text")
            .style("fill", "white")
            .style("font-weight", "bolder");
          
          d3.selectAll(id + " .venn-area.venn-intersection path")
            .style("fill", "#f7f9fc")
            .style("fill-opacity", 1);

          d3.selectAll(id + " .venn-area.venn-circle:nth-child(even) path")
            .style("fill", "#f7f9fc")
            .style("fill-opacity", 1);
          
          d3.selectAll(id + " .venn-area.venn-circle:nth-child(even) text")
            .style("font-weight", "bold");    
        }
      }
    },
    mounted() {  
      this.venn(this.sets, this.type)
    }
  } 
</script>
