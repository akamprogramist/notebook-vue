<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            ref="newNoteRef"
            class="textarea"
            placeholder="Add a new note"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNote"
            :disabled="!newNote"
            class="button is-link has-background-success"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>
    <Note
      v-for="note in notes"
      :key="note.id"
      :note="note"
      @delete="deleteNote"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";
import Note from "../components/Notes/Note.vue";
const newNote = ref("");
const newNoteRef = ref(null);
const notes = ref([
  {
    id: "id1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Consequuntur molestiae ab nisi laudantium, sapiente et in, fugit unde adipisci cum voluptate velit recusandae dolore harum provident illo, doloribus quibusdam ut ",
  },
  {
    id: "id2",
    content: "this is a shorter text for the test purposes ",
  },
]);
const addNote = () => {
  let currentDate = new Date().getTime(),
    id = currentDate.toString();
  let note = {
    id,
    content: newNote.value,
  };
  notes.value.unshift(note);
  newNote.value = "";
  newNoteRef.value.focus();
};
const deleteNote = (deleteId) => {
  notes.value = notes.value.filter(note => {
    return note.id !== deleteId;
  });
};
</script>
