<script>
   import { createEventDispatcher } from "svelte";
   import { getModalStore } from "@skeletonlabs/skeleton";

   export let parent;
   const self = getModalStore();

   let dispatch = createEventDispatcher();

   function onSubmitBook({target}) {
      let bookData = new FormData(target).entries();
      bookData = Object.fromEntries(bookData);
      $self[0].meta.onSave(bookData);
   }
</script>

<article>
   <header>
      <strong>Add a book</strong>
   </header>
   <form id="BookForm" on:submit={onSubmitBook}>
      <input required type="text" name="title" placeholder="Enter the title" />
      <input required type="text" name="author" placeholder="Author (optional)" />
      <textarea
         rows="4"
         name="description"
         placeholder="Description/Synopsis (optional)"
      />
   </form>
   <footer>
      <button type="button" class="variant-filled-warning" on:click={parent.onClose()}>Cancel</button>
      <button form="BookForm" class="variant-filled-success">Save</button>
   </footer>
</article>
