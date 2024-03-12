import { create } from "zustand";

interface TagsStore {
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
  addTag: (tag: string) => void;
  removeTag: (tag: string) => void;
}

export const useTagsStore = create<TagsStore>((set: any) => ({
  selectedTags: [],
  setSelectedTags: (tags: any) => set({ selectedTags: tags }),
  addTag: (tag: any) => {
    set((state: any) => {
      if (!state.selectedTags.includes(tag)) {
        return { selectedTags: [...state.selectedTags, tag] };
      }
      return state;
    });
  },
  removeTag: (tag: any) =>
    set((state: any) => ({
      selectedTags: state.selectedTags.filter((t: any) => t !== tag),
    })),
}));
