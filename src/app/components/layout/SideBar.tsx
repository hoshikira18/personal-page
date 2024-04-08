import avatar from "../../../../public/static/home/khuyen-avt-2.png"
import Button from "../Button"
import Image from "next/image"
import Pan from "../animation/Pan"
import FadeIn from "../animation/Fadein"

const SideBar = () => {

    return (
        <div className="z-45 sticky top-0 flex flex-col  h-screen py-20 min-h-screen min-w-[400px] w-1/3 bg-gradient-to-r from-[#18181b] to-[#222225] ">
            <div className="px-20">
                <FadeIn>
                    <div className="w-4/5 mx-auto rounded-full overflow-hidden border-4 border-gray-300 bg-gradient-to-tr from-gray-800 via-yellow-800 to-secondary">
                        <Image src={avatar} width={500} height={500} alt="my-photo" className="md:transform-gpu md:transition-all md:duration-700"></Image>
                    </div>
                </FadeIn>

                <Pan>
                    <h1 className="py-3 mx-auto text-4xl font-medium text-center text-secondary">Hoshikira<span className="text-primary">.dev</span></h1>
                    <div className="w-4/5 mx-auto h-1 bg-gradient-to-r from-secondary to-primary"></div>
                    <div className="w-full text-center text-base py-2 text-gray-300">Made with <span className="text-primary underline">Coffee</span> & <a href="https://www.facebook.com/ptkl2053" target="_blank" className="text-secondary underline">@ptkl2053</a></div>
                    <div className="transition duration-150 ease-out py-10 w-full text-gray-300 text-lg text-center">
                        <p>&quot;Developer đến từ Hà Tịnh, thích viết ✍️ và làm sản phẩm 👨‍💻&quot;</p>
                    </div>
                </Pan>
            </div>

            <Button href="https://www.facebook.com/hoshikira18" newTab="1" className="px-20 pt-10 pb-20">Download Resume</Button>
        </div>
    )
}

export default SideBar