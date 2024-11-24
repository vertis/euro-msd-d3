<script>

	import EuropeMap from "$lib/components/EuropeMap.svelte";
	import { getAllAverages, getAllLatest } from "$lib/data";

	const data = getAllAverages();
	const latest = getAllLatest();

</script>
<div class="max-w-7xl mx-auto px-4">
  <h1 class="text-4xl font-bold">Severe material and social deprivation</h1>

  <div class="mt-12 mb-12 space-y-4 text-lg text-gray-700">
    <p>
      Europe uses <strong>13 items</strong> to measure "severe material and social deprivation":
    </p>
    <div class="flex flex-wrap gap-2 mt-4 mb-4">
      <div class="font-medium">For households:</div>
      <span class="px-3 py-1 bg-blue-100 rounded-full text-sm">Unexpected expenses</span>
      <span class="px-3 py-1 bg-blue-100 rounded-full text-sm">One week holiday per year</span>
      <span class="px-3 py-1 bg-blue-100 rounded-full text-sm">No bill arrears</span>
      <span class="px-3 py-1 bg-blue-100 rounded-full text-sm">Meat/equivalent every other day</span>
      <span class="px-3 py-1 bg-blue-100 rounded-full text-sm">Adequate home heating</span>
      <span class="px-3 py-1 bg-blue-100 rounded-full text-sm">Car/van access</span>
      <span class="px-3 py-1 bg-blue-100 rounded-full text-sm">Replacing worn-out furniture</span>
    </div>
    <div class="flex flex-wrap gap-2 mb-4">
      <div class="font-medium">For individuals:</div>
      <span class="px-3 py-1 bg-green-100 rounded-full text-sm">Internet access</span>
      <span class="px-3 py-1 bg-green-100 rounded-full text-sm">Replacing worn-out clothes</span>
      <span class="px-3 py-1 bg-green-100 rounded-full text-sm">Two pairs of shoes</span>
      <span class="px-3 py-1 bg-green-100 rounded-full text-sm">Weekly personal spending money</span>
      <span class="px-3 py-1 bg-green-100 rounded-full text-sm">Regular leisure activities</span>
      <span class="px-3 py-1 bg-green-100 rounded-full text-sm">Monthly social outings</span>
    </div>
    <p>
      This measure helps track progress towards the EU's goal of reducing the number of people experiencing poverty and social exclusion by 15 million by 2030.
    </p>
    <p>
      <a href="https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Living_conditions_in_Europe_-_material_deprivation_and_economic_strain#Context">Context</a> • 
      <a href="https://ec.europa.eu/eurostat/databrowser/view/ilc_mdsd18/default/table?lang=en&category=livcon.ilc.ilc_md.ilc_mdsd">Source data</a>
    </p>
  </div>

  <div class="grid grid-cols-1 gap-4">
    <EuropeMap data={data} title="Average 2015-2023" />
    <EuropeMap data={latest} title="Latest 2023" />
  </div>
</div>


