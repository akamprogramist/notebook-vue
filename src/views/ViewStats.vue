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
  </div>
</template>

<script setup>
import { useStoreNotes } from "@/stores/storeNotes";
const storeNotes = useStoreNotes();
</script>
