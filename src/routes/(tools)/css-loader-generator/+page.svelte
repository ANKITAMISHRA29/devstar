<script>
	let barWidth = 10;
	let barHeight = 50;
	let barSpacing = 10;
	let barColor = 'blue';
	let barAnimation = 'ease-in-out';
	let barDuration = 1;
	let barDelay = 0.2;
	let generatedCode = '';
  
	function generateCode() {
	  const animation = `animation: bar-loader ${barDuration}s ${barAnimation} infinite;`;
	  const style = `
		.bar-loader {
		  width: ${barWidth}px;
		  height: ${barHeight}px;
		  background-color: ${barColor};
		  margin: 0 ${barSpacing}px;
		  ${animation}
		}
		
		@keyframes bar-loader {
		  0% {
			transform: translateY(0);
		  }
		  50% {
			transform: translateY(-${barHeight / 2}px);
		  }
		  100% {
			transform: translateY(0);
		  }
		}
	  `;
  
	  generatedCode = style;
	}
  
  
	let circleSize = 20;
	let circleSpacing = 10;
	let circleColor1 = '#ff69b4';
	let circleColor2 = '#33cc33';
	let circleColor3 = '#6666ff';
	let circleAnimation = 'ease-in-out';
	let circleDuration = 1;
	let circleDelay = 0.2;
	let generatedColorfulLoaderCode = '';
  
	function generateColorfulLoaderCode() {
	  const animation = `animation: colorful-loader ${circleDuration}s ${circleAnimation} ${circleDelay}s infinite;`;
	  const style = `
	   .circle {
		  width: ${circleSize}px;
		  height: ${circleSize}px;
		  border-radius: 50%;
		  margin: 0 ${circleSpacing}px;
		  ${animation}
		}
		
		@keyframes colorful-loader {
		  0% {
			transform: translateY(0);
		  }
		  50% {
			transform: translateY(-${circleSize}px);
		  }
		  100% {
			transform: translateY(0);
		  }
		}
	  `;
  
	  generatedColorfulLoaderCode = style;
	}
  
  
	
	let flipSize = 20;
	let flipSpacing = 10;
	let flipColor1 = '#ff69b4';
	let flipColor2 = '#33cc33';
	let flipColor3 = '#6666ff';
	let flipAnimation = 'ease-in-out';
	let flipDuration = 1;
	let flipDelay = 0.2;
	let generatedFlippingLoaderCode = '';
  
	function generateFlippingLoaderCode() {
	  const animation = `animation: flipping-loader ${flipDuration}s ${flipAnimation} ${flipDelay}s infinite;`;
	  const style = `
	  .flip {
		  width: ${flipSize}px;
		  height: ${flipSize}px;
		  background-color: ${flipColor1};
		  margin: 0 ${flipSpacing}px;
		  ${animation}
		}
		
		@keyframes flipping-loader {
		  0% {
			transform: translateX(0) rotateY(0);
		  }
		  50% {
			transform: translateX(20px) rotateY(180deg);
		  }
		  100% {
			transform: translateX(0) rotateY(0);
		  }
		}
		
		.loader {
		  display: flex;
		  justify-content: center;
		  align-items: center;
		}
	  `;
  
	  generatedFlippingLoaderCode = style;
	}
  
  
  
	let spinnerSize = 50;
	let spinnerColor = '#007bff';
	let spinnerBorderWidth = 5;
	let spinnerSpeed = 1;
	let generatedSpinnerCode = '';
  
	function generateSpinnerCode() {
	  const style = `
		.spinner-loader {
		  width: ${spinnerSize}px;
		  height: ${spinnerSize}px;
		  border: ${spinnerBorderWidth}px solid rgba(0, 0, 0, 0.1);
		  border-left-color: ${spinnerColor};
		  border-radius: 50%;
		  animation: spinner ${spinnerSpeed}s linear infinite;
		}
		
		@keyframes spinner {
		  to {
			transform: rotate(360deg);
		  }
		}
	  `;
  
	  generatedSpinnerCode = style;
	}
  
	let progressWidth = 200;
	let progressHeight = 20;
	let progressColor = '#4CAF50';
	let progressBackground = '#f0f0f0';
	let progressValue = 50;
	let progressDuration = 2;
	let generatedProgressCode = '';
  
	function generateProgressCode() {
	  const style = `
		.progress-loader-container {
		  width: ${progressWidth}px;
		  height: ${progressHeight}px;
		  background-color: ${progressBackground};
		  border-radius: ${progressHeight / 2}px;
		  overflow: hidden;
		}
		
		.progress-loader-bar {
		  width: ${progressValue}%;
		  height: 100%;
		  background-color: ${progressColor};
		  transition: width ${progressDuration}s ease-in-out;
		}
	  `;
  
	  generatedProgressCode = style;
	}
  
	$: {
	  if (progressValue < 0) progressValue = 0;
	  if (progressValue > 100) progressValue = 100;
	}
  
  </script>
	
  <div class="container">
	  <header>
		<h1 style="font:bold">Loader Generator</h1>
	  </header>
	  <nav>
		  <ul>
			<li>
			  <a href="#" style="background-color: skyblue">Loaders</a>
			  <ul>
				<li><a href="#bar-loaders">Bar Loaders</a></li>
				<li><a href="#colorful-loaders">Colorful Loaders</a></li>
				<li><a href="#spinner-loaders">Spinner Loaders</a></li>
				<li><a href="#progress-loaders">Progress Loaders</a></li>
				<li><a href="#flipping-loaders">Flipping Loaders</a></li>
			  </ul>
			</li>
		  </ul>
	  </nav>
	  <main>
		  <section id="bar-loaders">
			  <h2>Bar Loaders</h2>
			  <div class="loader">
				<div class="bar" style="width: {barWidth}px; height: {barHeight}px; background-color: {barColor}; margin: 0 {barSpacing}px; animation: bar-loader {barDuration}s {barAnimation} {barDelay}s infinite;"></div>
				<div class="bar" style="width: {barWidth}px; height: {barHeight}px; background-color: {barColor}; margin: 0 {barSpacing}px; animation: bar-loader {barDuration}s {barAnimation} {barDelay + 0.1}s infinite;"></div>
				<div class="bar" style="width: {barWidth}px; height: {barHeight}px; background-color: {barColor}; margin: 0 {barSpacing}px; animation: bar-loader {barDuration}s {barAnimation} {barDelay + 0.2}s infinite;"></div>
			  </div>
			  <div class="controls">
				<label for="barWidth">Bar Width:</label>
				<input type="number" id="barWidth" bind:value={barWidth} on:input={generateCode} />
			
				<label for="barHeight">Bar Height:</label>
				<input type="number" id="barHeight" bind:value={barHeight} on:input={generateCode} />
			
				<label for="barSpacing">Bar Spacing:</label>
				<input type="number" id="barSpacing" bind:value={barSpacing} on:input={generateCode} />
			
				<label for="barColor">Bar Color:</label>
				<input type="color" id="barColor" bind:value={barColor} on:input={generateCode} />
			
				<label for="barAnimation">Bar Animation:</label>
				<select id="barAnimation" bind:value={barAnimation} on:change={generateCode}>
				  <option value="ease-in-out">ease-in-out</option>
				  <option value="linear">linear</option>
				  <option value="ease-in">ease-in</option>
				  <option value="ease-out">ease-out</option>
				</select>
			
				<label for="barDuration">Bar Duration:</label>
				<input type="number" id="barDuration" bind:value={barDuration} on:input={generateCode} />
			
				<label for="barDelay">Bar Delay:</label>
				<input type="number" id="barDelay" bind:value={barDelay} on:input={generateCode} />
			
				<button on:click={generateCode}>Generate Code</button>
			  </div>
			  <textarea value={generatedCode} readonly></textarea>
			</section>
  
		<section id="colorful-loaders">
		  <h2>Colorful Loaders</h2>
		  <div class="loader">
			<div class="circle" style="width: 20px; height: 20px; background-color: #ff69b4; margin: 0 10px; animation: colorful-loader 1s ease-in-out infinite;"></div>
			<div class="circle" style="width: 20px; height: 20px; background-color: #33cc33; margin: 0 10px; animation: colorful-loader 1s ease-in-out infinite; animation-delay: 0.1s;"></div>
			<div class="circle" style="width: 20px; height: 20px; background-color: #6666ff; margin: 0 10px; animation: colorful-loader 1s ease-in-out infinite; animation-delay: 0.2s;"></div>
		  </div>
		  <div class="controls">
			<label for="circleSize">Circle Size:</label>
			<input type="number" id="circleSize" bind:value={circleSize} />
		
			<label for="circleSpacing">Circle Spacing:</label>
			<input type="number" id="circleSpacing" bind:value={circleSpacing} />
		
			<label for="circleColor1">Circle Color 1:</label>
			<input type="color" id="circleColor1" bind:value={circleColor1} />
		
			<label for="circleColor2">Circle Color 2:</label>
			<input type="color" id="circleColor2" bind:value={circleColor2} />
		
			<label for="circleColor3">Circle Color 3:</label>
			<input type="color" id="circleColor3" bind:value={circleColor3} />
		
			<label for="circleAnimation">Circle Animation:</label>
			<select id="circleAnimation" bind:value={circleAnimation}>
			  <option value="ease-in-out">ease-in-out</option>
			  <option value="linear">linear</option>
			  <option value="ease-in">ease-in</option>
			  <option value="ease-out">ease-out</option>
			</select>
		
			<label for="circleDuration">Circle Duration:</label>
			<input type="number" id="circleDuration" bind:value={circleDuration} />
		
			<label for="circleDelay">Circle Delay:</label>
			<input type="number" id="circleDelay" bind:value={circleDelay} />
		
			<button on:click={generateColorfulLoaderCode}>Generate Code</button>
		  </div>
		  <textarea value={generatedColorfulLoaderCode} readonly></textarea>
		</section>
		<section id="spinner-loaders">
	<h2>Spinner Loaders</h2>
	<div class="loader">
	  <div class="spinner-loader" style="width: {spinnerSize}px; height: {spinnerSize}px; border: {spinnerBorderWidth}px solid rgba(0, 0, 0, 0.1); border-left-color: {spinnerColor}; animation: spinner {spinnerSpeed}s linear infinite;"></div>
	</div>
	<div class="controls">
	  <label for="spinnerSize">Spinner Size:</label>
	  <input type="number" id="spinnerSize" bind:value={spinnerSize} on:input={generateSpinnerCode} />
  
	  <label for="spinnerColor">Spinner Color:</label>
	  <input type="color" id="spinnerColor" bind:value={spinnerColor} on:input={generateSpinnerCode} />
  
	  <label for="spinnerBorderWidth">Border Width:</label>
	  <input type="number" id="spinnerBorderWidth" bind:value={spinnerBorderWidth} on:input={generateSpinnerCode} />
  
	  <label for="spinnerSpeed">Animation Speed (seconds):</label>
	  <input type="number" id="spinnerSpeed" bind:value={spinnerSpeed} step="0.1" on:input={generateSpinnerCode} />
  
	  <button on:click={generateSpinnerCode}>Generate Code</button>
	</div>
	<textarea value={generatedSpinnerCode} readonly></textarea>
  </section>
  
  <section id="progress-loaders">
	  <h2>Progress Loaders</h2>
	  <div class="loader">
		<div class="progress-loader-container" style="width: {progressWidth}px; height: {progressHeight}px; background-color: {progressBackground}; border-radius: {progressHeight / 2}px;">
		  <div class="progress-loader-bar" style="width: {progressValue}%; height: 100%; background-color: {progressColor}; transition: width {progressDuration}s ease-in-out;"></div>
		</div>
	  </div>
	  <div class="controls">
		<label for="progressWidth">Progress Width:</label>
		<input type="number" id="progressWidth" bind:value={progressWidth} on:input={generateProgressCode} />
	
		<label for="progressHeight">Progress Height:</label>
		<input type="number" id="progressHeight" bind:value={progressHeight} on:input={generateProgressCode} />
	
		<label for="progressColor">Progress Color:</label>
		<input type="color" id="progressColor" bind:value={progressColor} on:input={generateProgressCode} />
	
		<label for="progressBackground">Background Color:</label>
		<input type="color" id="progressBackground" bind:value={progressBackground} on:input={generateProgressCode} />
	
		<label for="progressValue">Progress Value (%):</label>
		<input type="number" id="progressValue" bind:value={progressValue} min="0" max="100" on:input={generateProgressCode} />
	
		<label for="progressDuration">Animation Duration (seconds):</label>
		<input type="number" id="progressDuration" bind:value={progressDuration} step="0.1" on:input={generateProgressCode} />
	
		<button on:click={generateProgressCode}>Generate Code</button>
	  </div>
	  <textarea value={generatedProgressCode} readonly></textarea>
	</section>
	
		  <!-- Spinner loader code goes here -->
		  <section id="flipping-loaders">
			  <h2>Flipping Loaders</h2>
			  <div class="loader">
				<div class="flip" style={`width: ${flipSize}px; height: ${flipSize}px; background-color: ${flipColor1}; margin: 0 ${flipSpacing}px; animation: flipping-loader ${flipDuration}s ${flipAnimation} ${flipDelay}s infinite;`}></div>
				<div class="flip" style={`width: ${flipSize}px; height: ${flipSize}px; background-color: ${flipColor2}; margin: 0 ${flipSpacing}px; animation: flipping-loader ${flipDuration}s ${flipAnimation} ${flipDelay + 0.1}s infinite;`}></div>
				<div class="flip" style={`width: ${flipSize}px; height: ${flipSize}px; background-color: ${flipColor3}; margin: 0 ${flipSpacing}px; animation: flipping-loader ${flipDuration}s ${flipAnimation} ${flipDelay + 0.2}s infinite;`}></div>
			  </div>
			  <div class="controls">
				<label for="flipSize">Flip Size:</label>
				<input type="number" id="flipSize" bind:value={flipSize} />
			
				<label for="flipSpacing">Flip Spacing:</label>
				<input type="number" id="flipSpacing" bind:value={flipSpacing} />
			
				<label for="flipColor1">Flip Color 1:</label>
				<input type="color" id="flipColor1" bind:value={flipColor1} />
			
				<label for="flipColor2">Flip Color 2:</label>
				<input type="color" id="flipColor2" bind:value={flipColor2} />
			
				<label for="flipColor3">Flip Color 3:</label>
				<input type="color" id="flipColor3" bind:value={flipColor3} />
			
				<label for="flipAnimation">Flip Animation:</label>
				<select id="flipAnimation" bind:value={flipAnimation}>
				  <option value="ease-in-out">ease-in-out</option>
				  <option value="linear">linear</option>
				  <option value="ease-in">ease-in</option>
				  <option value="ease-out">ease-out</option>
				</select>
			
				<label for="flipDuration">Flip Duration:</label>
				<input type="number" id="flipDuration" bind:value={flipDuration} />
			
				<label for="flipDelay">Flip Delay:</label>
				<input type="number" id="flipDelay" bind:value={flipDelay} />
			
				<button on:click={generateFlippingLoaderCode}>Generate Code</button>
			  </div>
			  <textarea value={generatedFlippingLoaderCode} readonly></textarea>
			</section>
	  </main>
  </div>
	
  <style>
  
  
  @keyframes bar-loader {
	  0% {
		transform: translateY(0);
	  }
	  50% {
		transform: translateY(-25px);
	  }
	  100% {
		transform: translateY(0);
	  }
	}
  
  
  .loader {
	  display: flex;
	  justify-content: center;
	  align-items: center;
	}
	
	.flip {
	  transition: transform 0.2s;
	}
	
	.flip:hover {
	  transform: scale(1.1);
	}
	  .container {
		max-width: 800px;
		margin: 40px auto;
		padding: 20px;
		background-color: #f9f9f9;
		border: 1px solid #ddd;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	  }
	
	  header h1 {
		font-size: 2em;
		text-align: center;
		margin-bottom: 20px;
		color: #333;
	  }
	
	  nav ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	  }
	
	  nav ul li {
		position: relative;
	  }
	
	  nav ul li a {
		color: #333;
		text-decoration: none;
		padding: 10px 20px;
		display: block;
		transition: color 0.2s ease;
	  }
	
	  nav ul li a:hover {
		color: #666;
	  }
	
	  nav ul li ul {
		position: absolute;
		top: 100%;
		left: 0;
		background-color: #f9f9f9;
		border: 1px solid #ddd;
		padding: 10px;
		display: none;
	  }
	
	  nav ul li:hover ul {
		display: block;
	  }
	
	  nav ul li ul li {
		margin-bottom: 10px;
	  }
	
	  nav ul li ul li a {
		color: #333;
		text-decoration: none;
	  }
	
	  nav ul li ul li a:hover {
		color: #666;
	  }
	
	  .loader {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 20px;
	  }
	
	  .bar {
		background-color: #ccc;
		border-radius: 10px;
		margin: 0 10px;
	  }
	
	  .controls {
		margin: 20px;
	  }
	
	  label {
		display: block;
		font-weight: bold;
		margin: 10px 0 5px;
	  }
	
	  input, select {
		padding: 5px;
		border: 1px solid #ccc;
		border-radius: 5px;
		margin-bottom: 10px;
		width: 100%;
		max-width: 300px;
	  }
	
	  textarea {
		width: 100%;
		height: 200px;
		padding: 10px;
		border: 1px solid #ccc;
		font-family: monospace;
		border-radius: 5px;
		margin-top: 20px;
	  }
	
	  button {
		display: block;
		padding: 10px 20px;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		transition: background-color 0.2s ease;
	  }
	
	  button:hover {
		background-color: #0056b3;
	  }
  
  
	  .progress-loader-container {
	  overflow: hidden;
	}
  
	.progress-loader-bar {
	  transition: width 0.3s ease-in-out;
	}
  </style>  
