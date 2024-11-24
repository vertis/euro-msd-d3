<script>
  import { onMount } from 'svelte';
  import * as d3 from 'd3';
  import { feature } from 'topojson-client';

  export let data;
  export let title = ''; // Add title prop with default empty string

  let svg;

  onMount(async () => {
    const width = 900;
    const height = 600;

    const projection = d3.geoMercator()
      .center([10, 55])
      .scale(500)
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    const mapData = await d3.json('https://raw.githubusercontent.com/leakyMirror/map-of-europe/master/TopoJSON/europe.topojson');
    const countries = feature(mapData, mapData.objects.europe);

    const colorScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .range(['#ffffff', '#ff0000']);

    const map = d3.select(svg)
      .attr('width', width)
      .attr('height', height);

    // Add background rect
    map.append('rect')
      .attr('width', width)
      .attr('height', height)
      .attr('fill', '#f0f0f0');

    // Add title
    if (title) {
      map.append('text')
        .attr('x', 20)
        .attr('y', 30)
        .attr('text-anchor', 'left')
        .attr('font-size', '20px')
        .attr('font-weight', 'bold')
        .text(title);
    }

    const g = map.append('g');

    g.selectAll('path')
      .data(countries.features)
      .enter()
      .append('path')
      .attr('d', path)
      .attr('fill', d => {
        const countryData = data.find(c => c.country === d.properties.NAME);
        return countryData ? colorScale(countryData.value) : '#ccc';
      })
      .attr('stroke', '#fff')
      .attr('stroke-width', 0.5);

    g.selectAll('text')
      .data(countries.features)
      .enter()
      .append('text')
      .attr('transform', d => `translate(${path.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .attr('dy', '.35em')
      .attr('font-size', '8px')
      .text(d => {
        const countryData = data.find(c => c.country === d.properties.NAME);
        if (countryData) {
          return countryData.value ?? '';
        }
        return '';
      });
  });
</script>

<svg bind:this={svg}></svg>

<style>
  svg {
    max-width: 100%;
    height: auto;
  }
</style>
