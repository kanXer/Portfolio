import Image from "next/image";
export default function About(){
    return(
        <div>
            <div className="flex items-center justify-around margin-T5">
                <Image src="/nupur.jpg" alt="" srcset="" height={250} width={250} />
            </div>
            <div className="container flex items-center justify-around abouttext ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid omnis laboriosam distinctio odio vero perferendis iusto consectetur nemo, ab maxime laudantium dignissimos nulla recusandae qui delectus suscipit quidem dolorem voluptate neque cupiditate doloribus id vitae alias veritatis! Qui dignissimos vitae laudantium! Necessitatibus dicta commodi, minima nesciunt consectetur ullam architecto, quas laborum tenetur veritatis ea accusamus eius recusandae quisquam perspiciatis aspernatur itaque neque et. Quis doloremque qui pariatur totam animi.
            </div>
        </div>
    )
}