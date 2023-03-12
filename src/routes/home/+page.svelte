<script>
	import HomeWelcome from "./homeWelcome.svelte";
    import HomeStory from "./homeStory.svelte";
</script>

<div class="flex gap-16 items-center justify-center vh80 ml-20 mr-20">
    <HomeStory />
    <HomeWelcome/>
</div>


<style>
    .vh80 {
        height: 85vh;
    }
</style>
