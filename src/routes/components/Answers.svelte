<script>
    import { writable } from "svelte/store";

    let questionare = writable ([
        {group: "General", id: 0, 
            question: "What's your's company general purpose of implementing ICM tool?", answer: "",
            helpbox: "Lorem-Ipsum"}
    ])
</script>