// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Entry(props: any) {
  return (
    <>
      <section>
        <img
          src={props.entry.img.src}
          alt={props.entry.img.alt}
          className="photo"
        />
        <span>
          <div className="title-location">
            <img
              src="../../public/map-marker-2-64.png"
              alt="marker"
              className="marker"
            />
            <span className="location">{props.entry.country}</span>
            <a href={props.entry.link}>View on Google Maps</a>
          </div>
          <h1>{props.entry.title}</h1>
          <h5>{props.entry.dates}</h5>
          <p>{props.entry.text}</p>
        </span>
      </section>
    </>
  );
}
