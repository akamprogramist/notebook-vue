<template>
  <div class="Stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stats</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Number of Notes</th>
          <th>{{ storeNotes.totalNotesCount }}</th>
        </tr>
        <tr>
          <th>Number of Characters (of all notes)</th>
          <th>{{ storeNotes.totalCharactersCount }}</th>
        </tr>
      </tbody>
    </table>
    <input
      v-model="loveNotebook"
      type="text"
      class="input"
      placeholder="Do you love this Notebook ?"
      v-autofocus
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { vAutofocus } from "@/directives/vAutofocus";
import { useWatchCharacters } from "@/use/useWatchCharacters";
const loveNotebook = ref("");
useWatchCharacters(loveNotebook, 50);
const storeNotes = useStoreNotes();
</script>
