zzzzz<script>
  export let colors = [];
</script>

<div class="color-wheel">
  {#each colors as color, index}
    <div class="color-segment" style="background-color: {color}; transform: rotate({index * 90}deg) translate(100px) rotate(-{index * 90}deg);">{color}</div>
  {/each}
</div>

<style>
  .color-wheel {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .color-segment {
    position: absolute;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    color: white;
    font-weight: bold;
    transform-origin: 0 100px;
  }
</style>
