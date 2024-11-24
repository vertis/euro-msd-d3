<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="my-8 max-w-5xl mx-auto px-4">
	{@render children()}
</div>
