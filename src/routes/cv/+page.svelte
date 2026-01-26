<script lang="ts">
    import type { PageProps } from './$types';
    import { CirclePlus } from '@lucide/svelte';

    let { data }: PageProps = $props();
</script>

<main class="p-8">
    <ul class="timeline timeline-snap-icon timeline-compact timeline-vertical">
        <li>
            <div class="timeline-middle">
                <CirclePlus />
            </div>
            <div class="timeline-end mb-10 text-start">
                <time class="italic">2025-Present</time>
                <div class="text-lg">Specsavers - Service Desk Analyist</div>
                I answer phone and fix computer
            </div>
            <hr />
        </li>
        <li>
            
            <div class="timeline-middle">
                <CirclePlus />
            </div>
            <div class="timeline-end mb-10 text-start">
                <time class="italic">2024-Present</time>
                <div class="text-lg">Mcdonalds - Crew member</div>
                I make da borgor
            </div>
        </li>
    </ul>
</main>