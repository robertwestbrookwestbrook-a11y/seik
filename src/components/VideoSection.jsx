export default function VideoSection () {
    return (
        <div className="group relative mt-9 aspect-video overflow-hidden rounded-[30px]">
            <div className="overflow-hidden rounded-[30px]" style={{width: "100%", height: "100%"}}>
                <video autoPlay 
      loop 
      muted
      controls 
      playsInline  style={{width: "100%", height: "100%"}}>
        <source src="/solanamobile.mp4" type="video/mp4" />
      </video>
            </div>
        </div>
    )
}