<script>
  import "../app.postcss";
  import {
    autoModeWatcher,
    initializeStores,
    getModalStore,
    AppBar,
    AppShell,
    Modal,
  } from "@skeletonlabs/skeleton";
  import { Bookshelf } from "$lib/database";
  import BookForm from "$components/BookForm.svelte";
  import AppFooter from "$components/AppFooter.svelte";

  initializeStores();

  let modalStore = getModalStore();

  function onAddBook() {
    modalStore.trigger({
      type: "component",
      component: { ref: BookForm },
      meta: {
        onSave: async (book) => await Bookshelf.addBook(book)
      }
    });
  }
</script>

<svelte:head>
  {@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}
</svelte:head>

<Modal />

<AppShell>
  <svelte:fragment slot="header">
    <AppBar>
      <svelte:fragment slot="lead">
        <h1>Library Demo</h1>
      </svelte:fragment>
      <svelte:fragment slot="trail">
        <button class="variant-filled-secondary" on:click={onAddBook}>
          Add Book
        </button>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>

  <slot />

  <svelte:fragment slot="pageFooter">
    <AppFooter />
  </svelte:fragment>
</AppShell>
