<script>
  import { onMount } from "svelte";
  export let id;
  export let name;
  export let event;
  export let confirmed;

  import gql from "graphql-tag";

  import client from "./client";
  import { updateInvite } from "./graphql/mutations";
  import { onUpdateInvite } from "./graphql/subscriptions";

  async function handler() {
    const result = await client.mutate({
      mutation: gql(updateInvite),
      variables: {
        input: {
          id,
          name,
          event,
          confirmed: !confirmed
        }
      }
    });
  }

  let subscription;

  onMount(async () => {
    subscription = client.subscribe({ query: gql(onUpdateInvite) }).subscribe({
      next: data => {
        const invite = data.data.onUpdateInvite;
        confirmed = invite.confirmed;
      }
    });
  });
</script>

<style>
  .declined {
    text-decoration: line-through;
    color: crimson;
  }
</style>

<h3 class={!confirmed ? 'declined' : ''}>{name}</h3>
<p>{event}</p>

<button on:click={handler} class="button">
  Mark {confirmed ? 'Declined' : 'Accepted'}
</button>
