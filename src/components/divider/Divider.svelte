<script>
    export let color
    export let horizontal = true
</script>
<div class:divider-horizontal={horizontal} class:divider-vertical={!horizontal} style="background-color: {color}">

</div>

<style>
    .divider-horizontal {
        height: 1px;
        width: 100%;
        margin: 35px 0;
    }

    .divider-vertical {
        height: 50%;
        width: 1px;
        margin: 0 15px;
    }
</style>
