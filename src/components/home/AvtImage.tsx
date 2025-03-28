import Image from "next/image"

const AvtImage = () => {
    return (
        <div className={`mx-auto w-40 overflow-hidden rounded-full border-4 border-primary`}>
            <div
                className={`bg-[url(/static/home/avt-small.jpg)] bg-no-repeat bg-cover`}
            >
                <Image
                    width={500}
                    height={500}
                    src="/static/home/avt.jpg"
                    alt="my-photo"
                    className="md:transform-gpu md:transition-all md:duration-700"
                />
            </div>
        </div>
    )
}

export default AvtImage
