<script>
    export let baseColor = '#3498db'; // Default base color
    const shades = [0.9, 0.7, 0.5, 0.3, 0.1]; // Different shades (lighter)

    function generateShades(color, shades) {
        return shades.map(shade => {
            return adjustColor(color, shade);
        });
    }

    function adjustColor(color, factor) {
        const [r, g, b] = color.match(/\w\w/g).map(x => parseInt(x, 16));
        const newColor = #${Math.min(255, Math.floor(r + (255 - r) * factor)).toString(16).padStart(2, '0')}${Math.min(255, Math.floor(g + (255 - g) * factor)).toString(16).padStart(2, '0')}${Math.min(255, Math.floor(b + (255 - b) * factor)).toString(16).padStart(2, '0')};
        return newColor;
    }

    const colorShades = generateShades(baseColor, shades);
</script>

<style>
    .shade-box {
        width: 100px;
        height: 100px;
        margin: 10px;
        display: inline-block;
        text-align: center;
        line-height: 100px;
        color: white;
        font-weight: bold;
    }
</style>

<div>
    {#each colorShades as shade}
        <div class="shade-box" style="background-color: {shade}">
            {shade}
        </div>
    {/each}
</div>