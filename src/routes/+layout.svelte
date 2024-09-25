<script>
    import "../app.pcss";
    import './styles.css';
    import {onMount} from "svelte";

    onMount(async () => {
        fetch("https://pokeapi.co/api/v2/pokemon/ditto")
            .then(response => response.json())
            .then(data => {
                console.log(data);
            }).catch(error => {
            console.log(error);
        });
    });
</script>

<main>
    <slot></slot>
</main>

<style>

</style>
