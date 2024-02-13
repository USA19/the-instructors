"use client"
import { useState } from "react";
import { Lock, Play } from "lucide-react"

const CourseContentSection = ({ chapter, isEnrolled, watchMode = false, setCurrentChapter, userEnrollCourse = null }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { completedCourse = [] } = userEnrollCourse || {};

  const handleSectionClick = (index, chapterItem) => {
    watchMode && setActiveIndex(index)
    setCurrentChapter && setCurrentChapter(chapterItem)
  };

  return (
    <div className="p-3 bg-white rounded-sm mt-3">
      <h2>Contents</h2>
      {chapter.map((chapterItem, index) => {
        const { id, name } = chapterItem
        return (
          <div key={id} onClick={() => handleSectionClick(index, chapterItem)}>
            <h2 className={`p-2 text-[14px]
            flex justify-between items-center m-2 border rounded-sm px-4 cursor-pointer
            ${activeIndex == index ?
                'bg-primary text-white hover:bg-primary hover:text-white' :
                'hover:bg-gray-200 hover:text-gray-500'
              }
              ${isEnrolled && 'hover:bg-primary hover:text-white'}
              ${isEnrolled && completedCourse.includes(id) && 'border-green-800 bg-green-400 hover:bg-green-800'}
              
              `}>
              {index + 1}. {name}
              {activeIndex == index || isEnrolled ? <Play className="h-4 w-4" /> : <Lock className="h-4 w-4" />}
            </h2>
          </div>
        )
      })}
    </div>
  )
}

export default CourseContentSection
