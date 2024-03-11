"use client";
import React, { useState, ChangeEvent, useEffect } from "react";
import { useTagsStore } from "../store/tagsStore";
import { useGetAutocompleteQuery } from "../store/api";

interface TagsInputProps {
  value: string[];
  onChange: (value: string) => void;
  name: string;
  placeholder: string;
}

const TagsInput = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { data, error, isLoading } = useGetAutocompleteQuery({ id: "yourId" });

  const suggestions: string[] = [
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Mango",
  ];

  const { selectedTags, addTag, removeTag } = useTagsStore();

  useEffect(() => {
    console.log(data);

    setInputValue("");
  }, [selectedTags]);
  const changeHandler = (newValue: string) => {
    setInputValue(newValue);
  };

  const [editableTag, setEditableTag] = useState<string | null>(null);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setInputValue("");
  }, [selectedTags]);

  useEffect(() => {
    if (editableTag !== null && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editableTag]);

  const editTag = (tag: string) => {
    setEditableTag(tag);
    setInputValue(tag);
  };

  const finishEditing = () => {
    if (editableTag !== null) {
      const updatedTags = selectedTags.map((t) =>
        t === editableTag ? inputValue : t
      );
      addTag(inputValue);
      removeTag(editableTag);
      setEditableTag(null);
    }
  };

  return (
    <div className="flex flex-row h-min">
      <div className="flex  flex-wrap">
        {selectedTags.map((tag) => (
          <span
            key={tag}
            onClick={() => editTag(tag)}
            className={`inline-block m-1 p-2 bg-gray-300 rounded ${
              editableTag === tag ? "border border-blue-500" : ""
            }`}
          >
            {editableTag === tag ? (
              <input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => changeHandler(e.target.value)}
                onBlur={finishEditing}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    finishEditing();
                  }
                }}
              />
            ) : (
              <>
                {tag}
                <button
                  type="button"
                  className="ml-2 text-blue-500"
                  onClick={() => removeTag(tag)}
                >
                  X
                </button>
              </>
            )}
          </span>
        ))}
      </div>
      <div className="relative">
        <input
          className="!h-full border-0 outline-none"
          value={inputValue}
          onChange={(e: any) => changeHandler(e.target.value)}
        />
        <div
          className={`absolute top-10 h-[100px] bg-white border overflow-auto px-5 py-2 ${
            inputValue.length > 0 ? "" : "hidden"
          }`}
        >
          {data &&
            data
              .filter((suggestion: any) => suggestion.name.includes(inputValue))
              .map((suggestion: any, i: number) => (
                <div
                  className="cursor-pointer mb-1 transition-all duration-100 hover:text-blue-800"
                  key={i}
                  onClick={() => addTag(suggestion.name)}
                >
                  {suggestion.name}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default TagsInput;
