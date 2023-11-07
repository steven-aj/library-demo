<script>
   import { Bookshelf } from "$lib/database";

   const { store } = Bookshelf;
</script>

<main>
   {#if $store}
      {#if $store.length}
         <div class="grid grid-cols-4 gap-4 p-4">
            {#each $store as book}
               <article class="max-w-sm w-full">
                  <header>
                     <strong>{book.title}</strong>
                     <p class="text-slate-500/50">{book.author}</p>
                  </header>
               </article>
            {/each}
         </div>
      {:else}
         <div class="m-auto">
            <p class="text-slate-500/50">Add books to get started</p>
         </div>
      {/if}
   {/if}
</main>
