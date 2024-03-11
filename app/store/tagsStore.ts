import create from "zustand";

interface TagsStore {
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
  addTag: (tag: string) => void;
  removeTag: (tag: string) => void;
}

export const useTagsStore = create<TagsStore>((set) => ({
  selectedTags: [],
  setSelectedTags: (tags) => set({ selectedTags: tags }),
  addTag: (tag) => {
    set((state) => {
      if (!state.selectedTags.includes(tag)) {
        return { selectedTags: [...state.selectedTags, tag] };
      }
      return state;
    });
  },
  removeTag: (tag) =>
    set((state) => ({
      selectedTags: state.selectedTags.filter((t) => t !== tag),
    })),
}));
