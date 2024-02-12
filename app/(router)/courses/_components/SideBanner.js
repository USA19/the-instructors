import Image from "next/image"
import { getSideBanner } from '../../_utils/GlobalApi'

const SideBanner = async () => {
  const { sideBanners } = await getSideBanner();

  return (
    <div>
      {sideBanners.map((sideBanner) => {
        const { id, banner, url: previewLink } = sideBanner
        const { url } = banner || {}

        return (
          <a key={id} className="cursor-pointer" href={previewLink || ""}>
            <Image src={url} width={500} height={300} className="rounded-xl" />
          </a>
        )
      })}
    </div>
  )
}

export default SideBanner