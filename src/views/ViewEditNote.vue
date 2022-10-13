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
        <button @click="$router.back()" class="button is-light has-light mr-2">
          Cancel
        </button>
        <button
          @click="saveClicked"
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
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";
const storeNotes = useStoreNotes();

const route = useRoute();
const router = useRouter();
const noteContent = ref("");

noteContent.value = storeNotes.getNoteContent(route.params.id);

const saveClicked = () => {
  storeNotes.updateNote(route.params.id, noteContent.value);
  router.push("/");
};
</script>
