
const VideoPlayer = ({ url }) => {
  return (
    <div>
      <video width={1000} height={250} controls className="rounded-sm">
        <source src={url} type="video/mp4" />
      </video>
    </div>
  )
}

export default VideoPlayer;