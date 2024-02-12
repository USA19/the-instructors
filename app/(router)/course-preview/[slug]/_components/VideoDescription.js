import VideoPlayer from "./VideoPlayer";

const VideoDescription = ({ course }) => {
  const { name, author, chapter, description } = course || {};
  const { video } = chapter[0] || {};
  const { url } = video || {}

  return (
    <div>
      <h2 className="text-[20px] font-semibold">
        {name}
      </h2>

      <h2 className="text-[14px] text-gray-400 mb-3">
        {author}
      </h2>

      <VideoPlayer url={url} />

      <h2 className="mt-5 text-[17px] font-semibold mb-3">
        About This Course
      </h2>

      <h2 className="text-[13px] font-light leading-6">
        {description}
      </h2>
    </div>
  )
}

export default VideoDescription;