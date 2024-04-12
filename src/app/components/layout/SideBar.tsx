import avatar from "../../../../public/static/home/khuyen-avt-2.png"
import Button from "../Button"
import Image from "next/image"
import Pan from "../animation/Pan"
import FadeIn from "../animation/Fadein"

const SideBar = () => {

    return (
        <div className="hidden z-45 lg:sticky top-0 md:flex flex-col items-center justify-center h-full lg:h-screen lg:py-20 pt-10 lg:min-h-screen lg:w-1/3 lg:bg-gradient-to-r from-[#18181b] to-[#222225] ">
            <div className="xl:px-20 lg:px-10 px-10">
                {/* <FadeIn>
                    <div className="w-4/5 mx-auto rounded-full overflow-hidden border-4 border-gray-300 bg-gradient-to-tr from-gray-800 via-yellow-800 to-secondary">
                        <Image src={avatar} width={500} height={500} alt="my-photo" className="md:transform-gpu md:transition-all md:duration-700"></Image>
                    </div>
                </FadeIn> */}

                <FadeIn>
                    <div className="lg:w-4/5 w-3/5 mx-auto overflow-hidden border-b-4 border-primary ">
                        <Image src={avatar} width={500} height={500} alt="my-photo" className="md:transform-gpu md:transition-all md:duration-700"></Image>
                    </div>
                </FadeIn>

                <Pan>
                    <h1 className="py-3 mx-auto text-4xl font-medium text-center text-secondary">Hoshikira<span className="text-primary">.dev</span></h1>
                    <div className="w-4/5 mx-auto h-1 bg-gradient-to-r from-secondary to-primary"></div>
                    <div className="w-full text-center text-base py-2 text-gray-300">Made with <span className="text-primary underline">Coffee</span> & <a href="https://www.facebook.com/ptkl2053" target="_blank" className="text-secondary underline">@ptkl2053</a></div>
                    <Pan className="flex justify-center items-center space-x-5">
                        <a href="https://www.facebook.com/hoshikira18" target="_blank" className="">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd" />
                            </svg>
                        </a>
                        <a href="https://twitter.com/khuyen_van24041" target="_blank" className="">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clip-rule="evenodd" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/hoshikira18/" target="_blank" className="">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="mx-auto h-12 w-6 text-white md:text-omega-500 md:group-hover:text-alpha" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"></path><path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"></path></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/hoshikira" target="_blank" className="">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                            </svg>
                        </a>
                    </Pan>
                    <div className="transition duration-150 ease-out lg:py-10 py-3 w-full text-gray-300 text-lg text-center">
                        <p>&quot;Developer đến từ Hà Tịnh, thích viết ✍️ và làm sản phẩm 👨‍💻&quot;</p>
                    </div>
                </Pan>

            </div>

            <Button href="https://drive.google.com/file/d/1h6ML35e9I23Rj5-_0XfaD3t_u8jSrVsh/view?usp=sharing" newTab="1" className="px-20 pt-10 pb-10">Download Resume</Button>

            <div className="w-full flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" version="1.0" viewBox="9.7 40.1 76.9 15.4" zoomAndPan="magnify" width="150px" className="img-mode-bw" fill="#fff" data-v-4fcc735c=""><g id="__id5_sry9diu4c" data-v-4fcc735c=""><path d="M84.92,45.37c-0.88-1.72-3.47-0.2-2.59,1.51c0.09,0.17-0.12,0.45-0.31,0.54c-0.1-0.08-0.23-0.25-0.26-0.3 c-0.24-0.31-0.47-0.61-0.69-0.94c-0.87-1.28-1.79-2.66-3.38-3.07c-3.51-0.92-5.82,3.02-8.75,4.1c-1.07,0.4-3.77,0.95-4.54-0.23 c-0.41-0.62-0.37-1.63-0.65-2.33c-0.27-0.71-0.66-1.36-1.21-1.89c-1.97-1.88-5-1.38-7.15-0.1c-3.02,1.79-5.38,4.52-8.5,6.18 c-1.05,0.56-3.2,1.59-4.24,0.52c-0.52-0.54-0.69-1.46-0.98-2.14c-0.33-0.76-0.77-1.46-1.39-2.01c-2.41-2.16-5.6-1.03-7.82,0.76 c-0.61,0.49-1.19,1.03-1.77,1.56c-0.65,0.59-1.5,1.05-2.12,1.65c0,0,0,0,0,0c0-0.25-0.04-0.53-0.05-0.78 c-0.01-0.79,0.04-1.58-0.04-2.36c-0.37-3.78-4.07-5.91-7.35-3.73c-1.78,1.18-3.22,2.9-4.72,4.4c-1.78,1.79-3.57,3.57-5.35,5.36 c-1.37,1.37,0.75,3.49,2.12,2.12c1.61-1.61,3.22-3.23,4.84-4.84c1.44-1.44,2.82-3.12,4.47-4.33c1.24-0.91,2.6-0.83,2.97,0.88 c0.33,1.49-0.16,3.05,0.32,4.53c1.37,4.28,5.84,0.3,7.63-1.31c1.03-0.93,2.33-2.24,3.85-2.1c1.61,0.14,1.84,2.03,2.41,3.22 c1.71,3.55,5.88,2.72,8.73,1.2c3.2-1.7,5.58-4.61,8.75-6.32c0.85-0.46,2.12-0.91,3.04-0.38c1.29,0.74,1,2.93,1.82,4.08 c2.02,2.87,7,1.93,9.55,0.45c0.91-0.53,1.71-1.23,2.55-1.87c0.66-0.51,1.47-1.24,2.32-1.38c1.45-0.23,2.45,2.48,3.31,3.35 C82.47,52.15,86.59,48.63,84.92,45.37z" fill="#fff" data-v-4fcc735c=""></path></g></svg>
            </div>
        </div>
    )
}

export default SideBar