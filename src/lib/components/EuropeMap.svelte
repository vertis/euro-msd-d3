<script>
  import { onMount } from 'svelte';
  import * as d3 from 'd3';
  import { feature } from 'topojson-client';

  let svg;

  onMount(async () => {
    const width = 900;
    const height = 600;

    const projection = d3.geoMercator()
      .center([10, 55])
      .scale(500)
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    const europeData = await d3.json('https://raw.githubusercontent.com/leakyMirror/map-of-europe/master/TopoJSON/europe.topojson');
    const countries = feature(europeData, europeData.objects.europe);

    const map = d3.select(svg)
      .attr('width', width)
      .attr('height', height);

    map.selectAll('path')
      .data(countries.features)
      .enter()
      .append('path')
      .attr('d', path)
      .attr('fill', '#ccc')
      .attr('stroke', '#fff')
      .attr('stroke-width', 0.5);
  });
</script>

<svg bind:this={svg}></svg>

<style>
  svg {
    max-width: 100%;
    height: auto;
  }
</style>
