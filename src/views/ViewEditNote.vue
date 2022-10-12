<template>
  <div class="edit-note">
    <AddEditNote
      ref="addEditNoteRef"
      v-model="noteContent"
      bgColor="link"
      placeholder="Edit note"
      label="Edit note"
    >
      <template v-slot:buttons>
        <button @click="$router.back()" class="button is-link has-light">
          Cancel
        </button>
        <button
          class="button is-link has-background-link"
          :disabled="!noteContent"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { ref } from "vue";

const noteContent = ref("");
</script>
