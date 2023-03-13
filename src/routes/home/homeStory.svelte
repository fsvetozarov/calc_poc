
<script>
    import {steps} from '../components/Answers';
</script>
<ol class="relative border-l border-black font-sans">                  
    {#each $steps as step}
    <li class="mb-16 last:mb-0 ml-6">            
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sands rounded-full -left-4 ring-4 ring-black ">
            {@html step.logo}
        </span>
        <h3 class="font-medium leading-tight">{step.name}</h3>
        <p class="text-sm font-thin">{step.description}</p>
    </li>
    {/each}
</ol>
