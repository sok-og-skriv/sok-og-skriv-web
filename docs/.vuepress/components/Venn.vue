<template>
  <div v-bind:id="'venn-' + type"></div>
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
      /* let sets = [
        {sets: ['A'], size: 12}, 
        {sets: ['B'], size: 12},
        {sets: ['A','B'], size: 2}
      ]; */

      let sets = this.sets
    
      return {
        sets
      }
    },
    methods: {
      venn(sets, type) {
        let chart = venn.VennDiagram().height(200);
        console.log(JSON.stringify(sets))
        console.log(JSON.stringify(type))

        let id = `#venn-${type}`

        d3.select(id).datum(sets).call(chart);

        if (type == 'and') {
          d3.selectAll(id + " .venn-area.venn-intersection path")
          .style("fill", "#388AA0")
          .style("fill-opacity", 1);

          d3.selectAll(id + " .venn-area.venn-circle path")
            .style("fill", "rgb(215, 228, 239)")
            .style("fill-opacity", 1);
          
          d3.selectAll(id + " .venn-area.venn-circle text")
            .style("font-weight", "bold")
        }

        if (type == 'or') {
          d3.selectAll(id + " .venn-area.venn-intersection path")
            .style("fill", "rgb(215, 228, 239)")
            .style("fill-opacity", 1);

          d3.selectAll(id + " .venn-area.venn-circle path")
            .style("fill", "rgb(215, 228, 239)")
            .style("fill-opacity", 1);

          d3.selectAll(id + " .venn-area.venn-circle text")
            .style("font-weight", "bold")
        }

        if (type == 'not') {
          d3.selectAll(id + " .venn-area.venn-circle:nth-child(odd) path")
            .style("fill", "#388AA0")
            .style("fill-opacity", 1);
          
          d3.selectAll(id + " .venn-area.venn-circle:first-child text")
            .style("fill", "#aaa !important")
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
      let text = this.text
      let type = this.type 
      // let sets = this.sets 
      this.venn(this.sets, type)
    }
  } 
</script>
