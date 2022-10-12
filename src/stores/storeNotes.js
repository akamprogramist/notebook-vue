import { defineStore } from "pinia";
export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit Consequuntur molestiae ab nisi laudantium, sapiente et in, fugit unde adipisci cum voluptate velit recusandae dolore harum provident illo, doloribus quibusdam ut ",
        },
        {
          id: "id2",
          content: "this is a shorter text for the test purposes ",
        },
      ],
    };
  },
  actions: {
    addNote(newNoteContent) {
      let currentDate = new Date().getTime(),
        id = currentDate.toString();
      let note = {
        id,
        content: newNoteContent,
      };
      this.notes.unshift(note);
    },
    deleteNote(deleteId) {
      this.notes = this.notes.filter((note) => {
        return note.id !== deleteId;
      });
    },
  },
});
