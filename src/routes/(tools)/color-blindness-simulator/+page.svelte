<script>
   import { onMount } from 'svelte';

  let imageUrl = '';
	let imageFile;
	let fileName = '';
	let canvasOriginal;
	let ctxOriginal;
	let canvasFiltered;
	let ctxFiltered;
	let filters = [
	  'Protanopia', 'Tritanopia',
	  'Deuteranopia', 'Achromatopsia',
	  'Protanomaly', 'Tritanomaly',
	  'Deuteranomaly', 'Achromatomaly',
    'Sepia','Invert',
    'Brightness','Contrast'
	];


  const filterMatrices = {
    normal: {
      R: [1, 0, 0],
      G: [0, 1, 0],
      B: [0, 0, 1]
    },
    Protanopia: {
      R: [0.56667, 0.43333, 0],
      G: [0.55833, 0.44167, 0],
      B: [0, 0.24167, 0.75833]
    },
    Protanomaly: {
      R: [0.81667, 0.18333, 0],
      G: [0.33333, 0.66667, 0],
      B: [0, 0.125, 0.875]
    },
    Deuteranopia: {
      R: [0.625, 0.375, 0],
      G: [0.7, 0.3, 0],
      B: [0, 0.3, 0.7]
    },
    Deuteranomaly: {
      R: [0.8, 0.2, 0],
      G: [0.25833, 0.74167, 0],
      B: [0, 0.14167, 0.85833]
    },
    Tritanopia: {
      R: [0.95, 0.05, 0],
      G: [0, 0.43333, 0.56667],
      B: [0, 0.475, 0.525]
    },
    Tritanomaly: {
      R: [0.96667, 0.03333, 0],
      G: [0, 0.73333, 0.26667],
      B: [0, 0.18333, 0.81667]
    },
    Achromatopsia: {
      R: [0.299, 0.587, 0.114],
      G: [0.299, 0.587, 0.114],
      B: [0.299, 0.587, 0.114]
    },
    Achromatomaly: {
      R: [0.618, 0.32, 0.062],
      G: [0.163, 0.775, 0.062],
      B: [0.163, 0.32, 0.516]
    },
    Sepia: {
      R: [0.393, 0.769, 0.189],
      G: [0.349, 0.686, 0.168],
      B: [0.272, 0.534, 0.131]
    },
    Invert: {
      R: [-1, 0, 255],
      G: [0, -1, 255],
      B: [0, 0, -1]
    },
    Brightness: {
      R: [1.5, 0, 0],
      G: [0, 1.5, 0],
      B: [0, 0, 1.5]
    },
    Contrast: {
      R: [1.5, 0, -128 * 0.5],
      G: [0, 1.5, -128 * 0.5],
      B: [0, 0, 1.5]
    }
  };
  
    onMount(() => {
      canvasOriginal = document.getElementById('canvasOriginal');
      ctxOriginal = canvasOriginal.getContext('2d');
      canvasFiltered = document.getElementById('canvasFiltered');
      ctxFiltered = canvasFiltered.getContext('2d');
    });
  
    function handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        imageFile = file;
        fileName = file.name;
        const reader = new FileReader();
        reader.onload = (e) => {
          imageUrl = e.target.result;
          drawOriginalImage();
          drawFilteredImage('normal');
        };
        reader.readAsDataURL(file);
      }
    }

  function drawOriginalImage() {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      canvasOriginal.width = img.width;
      canvasOriginal.height = img.height;
      ctxOriginal.drawImage(img, 0, 0);
    };
  }

  function drawFilteredImage(filter) {
	  const img = new Image();
	  img.src = imageUrl;
	  img.onload = () => {
		canvasFiltered.width = img.width;
		canvasFiltered.height = img.height;
		ctxFiltered.clearRect(0, 0, canvasFiltered.width, canvasFiltered.height);
		ctxFiltered.drawImage(img, 0, 0);
		
		const imageData = ctxFiltered.getImageData(0, 0, canvasFiltered.width, canvasFiltered.height);
		const data = imageData.data;
		const matrix = filterMatrices[filter];
	
		for (let i = 0; i < data.length; i += 4) {
		  const r = data[i];
		  const g = data[i + 1];
		  const b = data[i + 2];
		  data[i] = r * matrix.R[0] + g * matrix.R[1] + b * matrix.R[2];
		  data[i + 1] = r * matrix.G[0] + g * matrix.G[1] + b * matrix.G[2];
		  data[i + 2] = r * matrix.B[0] + g * matrix.B[1] + b * matrix.B[2];
		}
  
		ctxFiltered.putImageData(imageData, 0, 0);
	  };
	}


    function saveImage() {
      const link = document.createElement('a');
      link.download = 'filtered_image.png';
      link.href = canvasFiltered.toDataURL();
      link.click();
    }
    
    function shareOnSocialMedia(platform) {
    switch (platform) {
    case 'facebook':
      const facebookUrl = `https://www.facebook.com/sharer/`;
      window.open(facebookUrl, '_blank');
      break;
    case 'instagram':
      const instagramUrl = `https://www.instagram.com/`;
      window.open(instagramUrl, '_blank');
      break;
    case 'twitter':
      const twitterUrl = `https://twitter.com/intent/tweet`;
      window.open(twitterUrl, '_blank');
      break;
    default:
      console.error(`Unknown platform: ${platform}`);
  }
}

  function applyFilter(filter) {
    drawFilteredImage(filter);
  }


  </script>  
  <div class="card gap-16 items-center mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 overflow-hidden rounded-lg p-8 bg-gray-50 dark:bg-gray-900">
    <div class="bg-gray-50 dark:bg-gray-900 p-4 mb-4 text-white flex items-center space-x-4 w-full justify-center lg:col-span-2">
        <input type="file" id="fileInput" accept="image/*" on:change={handleImageUpload} class="hidden" />
        <button class="bg-white dark:bg-gray-800 dark:text-white text-black py-2 px-4 border border-gray-200 dark:border-gray-700 rounded" on:click={() => document.getElementById('fileInput').click()}>Upload Image</button>
        <span>{fileName}</span>
      </div>

      <div class="canvas-container">
        <h2 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-200">Original Image</h2>
        <canvas id="canvasOriginal" class="border border-gray-900 rounded dark:border-gray-300" width="500" height="500"></canvas>
      </div>

      <div class="canvas-container">
        <h2 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-200">Filtered Image</h2>
        <canvas id="canvasFiltered" class="border border-gray-900 rounded dark:border-gray-300" width="500" height="500"></canvas>
      </div>
      <div class="buttons lg:col-span-2 mt-6">
        {#each filters as filter}
          <button class="px-2 py-4 font-normal text-black dark:text-white bg-white dark:bg-gray-800 cursor-pointer border border-gray-200 dark:border-gray-700 rounded" on:click={() => applyFilter(filter)}>{filter}</button>
        {/each}
                <button class="px-2 py-4 font-normal text-black dark:text-white bg-white dark:bg-gray-800 cursor-pointer border border-gray-200 dark:border-gray-700 rounded" on:click={saveImage}>Save Image</button>
        <button class="px-2 py-4 font-normal text-black dark:text-white bg-white dark:bg-gray-800 cursor-pointer border border-gray-200 dark:border-gray-700 rounded" on:click={() => shareOnSocialMedia('facebook')}>Share on Facebook</button>
        <button class="px-2 py-4 font-normal text-black dark:text-white bg-white dark:bg-gray-800 cursor-pointer border border-gray-200 dark:border-gray-700 rounded" on:click={() => shareOnSocialMedia('twitter')}>Share on Twitter</button>
        <button class="px-2 py-4 font-normal text-black dark:text-white bg-white dark:bg-gray-800 cursor-pointer border border-gray-200 dark:border-gray-700 rounded" on:click={() => shareOnSocialMedia('instagram')}>Share on Instagram</button>
      </div>

      <div class="loading-indicator" id="loading-indicator" style="display: none;">
        <svg viewBox="25 25 50 50">
          <circle cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
        </svg>
      </div>
  </div>

  <style>
    .buttons {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      justify-content: center;
    }
    .canvas-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    canvas {
      border: 1px solid gray;
      max-width: 100%;
      max-height: 100%;
    }
  </style>

 
