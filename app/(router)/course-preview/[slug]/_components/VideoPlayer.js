
const VideoPlayer = ({ url, poster }) => {
  return (
    <div>
      <video width={1000} height={250} controls className="rounded-sm" poster={poster}>
        <source src={url} type="video/mp4" />
      </video>
    </div>
  )
}

export default VideoPlayer;