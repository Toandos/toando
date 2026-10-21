<script lang="ts">
    import { page } from "$app/state";
    import { invalidateAll } from '$app/navigation';

    const error = page.error;
</script>

<main class="w-full h-full grid place-content-center">
    <div class="card bg-base-200">
        <div class="card-body">
            <h2 class="card-title">An error occured</h2>
            <p>Service: {error?.service}</p>
            <p>Message: {error?.message}</p>
            <div class="card-actions justify-center">
                <button class="btn btn-info" onclick={() => invalidateAll()}>
                    Retry
                </button>
            </div>
        </div>
    </div>
</main>