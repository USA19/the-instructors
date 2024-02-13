import { markChapterAsComplete } from "@/app/(router)/_utils/GlobalApi";
import VideoPlayer from "./VideoPlayer";
import { Button } from "@/components/ui/button";

const VideoDescription = ({ course, watchMode = false, currentChapter = null, userEnrollCourse = null, setUserEnrollCourse }) => {
  const { name, author, chapter, description, banner } = course || {};
  const { video } = chapter ? chapter[0] || {} : {};
  const { url } = video || {}
  const { url: bannerUrl } = banner || {};
  const { name: currentChapterName = "", shortDesc = "", id: currentChapterId } = currentChapter || {}
  const { id: userEnrollCourseId, completedCourse = [] } = userEnrollCourse || {}

  const handleMarkChapterAsComplete = async () => {
    if (watchMode && currentChapter && userEnrollCourse) {
      await markChapterAsComplete(userEnrollCourseId, currentChapterId)
      // setUserEnrollCourse({ ...userEnrollCourse, completedCourse: [...completedCourse, newLySaved ] })
    }
  }

  return (
    <div>
      <h2 className="text-[20px] font-semibold">
        {name}
      </h2>

      <h2 className="text-[14px] text-gray-400 mb-3">
        {author}
      </h2>

      <VideoPlayer url={url} poster={watchMode && currentChapter ? null : bannerUrl} />
      <div className={`${watchMode ? "flex justify-between items-center" : ""}`}>
        <h2 className="mt-5 text-[17px] font-semibold mb-3">
          {!currentChapter ? "About This Course" : currentChapterName}
        </h2>

        {watchMode && currentChapter &&
          <Button className="text-white hover:bg-white hover:text-primary mt-3" onClick={handleMarkChapterAsComplete}>
            Mark as Complete
          </Button>
        }
      </div>


      <h2 className="text-[13px] font-light leading-6">
        {!currentChapter ? description : shortDesc}
      </h2>
    </div>
  )
}

export default VideoDescription;