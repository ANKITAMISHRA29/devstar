<script>
	import { onMount } from 'svelte';
	import ColorTool from '../components/ColorTool.svelte';
  
	let colors = [];
  
	onMount(async () => {
	  const response = await fetch('/api/colors');
	  colors = await response.json();
	});
  </script>
  
  <main>
	<h1>Color Wheel</h1>
	<ColorTool {colors} />
  </main>
  
  <style>
	main {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	}
	h1 {
	  margin-bottom: 20px;
	}
  </style>
  