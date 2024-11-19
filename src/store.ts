import { create } from "zustand";

interface Note {
  text: string;
  color: string;
}

interface NoteState {
  notes: Note[];
  search: string;
  editorContent: string;
  noteColor: string;
  currentNoteIndex: number | null;

  // States
  setColor: (color: string) => void;
  setNotes: (updatedNotes: Note[]) => void;
  setCurrentNoteIndex: (index: number | null) => void;
  setSearch: (searchValue: string) => void;
  setEditorContent: (content: string) => void;
  addOrUpdateNote: () => void;
  selectNote: (index: number) => void;
}

const useNoteStore = create<NoteState>((set) => ({
  notes: [],
  search: "",
  editorContent: "",
  noteColor: "#ffffff",
  currentNoteIndex: null,

  setColor: (color: string) => set(() => ({ noteColor: color })),

  setNotes: (updatedNotes) => set(() => ({ notes: updatedNotes })),

  setCurrentNoteIndex: (index) => set(() => ({ currentNoteIndex: index })),

  setSearch: (searchValue) => set(() => ({ search: searchValue })),

  setEditorContent: (content) => set(() => ({ editorContent: content })),

  selectNote: (index) =>
  set((state) => {
    if (index >= 0 && index < state.notes.length) {
      return {
        currentNoteIndex: index,
        editorContent: state.notes[index]?.text || "",
        noteColor: state.notes[index]?.color || "#ffffff",
      };
    }
    // If index is invalid, return no-op
    return {};
  }),


 addOrUpdateNote: () =>
    set((state) => {
      const { editorContent, noteColor, currentNoteIndex, notes } = state;

      if(editorContent.trim()){
        if(currentNoteIndex !==null){
         const updatedNotes = [...notes]
         updatedNotes[currentNoteIndex] ={
          text : editorContent,
          color: noteColor
         } 
         return{
          notes: updatedNotes,
          editorContent:'',
          noteColor:'#ffffff',
          currentNoteIndex: null
         }
        } else{
          return {
            notes: [...notes , {text: editorContent , color : noteColor}],
            editorContent : '',
            noteColor: '#ffffff',
            currentNoteIndex : null,
          }
        }
      }
      
    }),
}));

export default useNoteStore;
