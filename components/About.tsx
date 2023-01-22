import React from "react";
import Image, { StaticImageData } from "next/image";
import SiteMetadata from "./MetaData";

export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex">
                <div className="flex-full">
                    <AboutCard
                        title="Front-end"
                        icon="/icons/design.svg"
                        description="I can create and design websites with many technologies."
                        leftList={[
                            'React / NextJS', 
                            'Svelte / Svelte Kit', 
                            'HTML / CSS'
                        ]}
                        rightList={[
                            'JavaScript', 
                            'TypeScript', 
                            'WordPress / Joomla'
                        ]}
                        projects={6} />
                    <AboutCard
                        title="Back-end"
                        icon="/icons/code.svg"
                        description="I develop back-end systems."
                        leftList={[
                            'C#', 
                            'PHP', 
                            'TypeScript'
                        ]}
                        rightList={[
                            'PowerShell', 
                            'SQL', 
                            'Python'
                        ]}
                        projects={6} />
                    <AboutCard
                        title="DevOps / Cloud"
                        icon="/icons/phone.svg"
                        description="I can build and design infrastructure, and love cloud and serverless technologies."
                        leftList={[
                            'AWS', 
                            'Azure', 
                            'Docker',
                            "Serverless / NoSQL",
                            "CI/CD (Azure Pipelines)"
                        ]}
                        rightList={[
                            'Windows Server', 
                            'Cloudflare / DNS', 
                            'OpenShift / Helm Charts',
                            "Infrastructure as Code (AWS CDK)"
                        ]}
                        projects={9} />
                </div>

                <div className="flex-full about-text">
                    <h5 className="gray">Introduction</h5>
                    <h1 className="white">Hello, I&#39;m {SiteMetadata.name}</h1>
                    <h3 className="white">Discover the wide range of skills and expertise that make me a versatile developer, capable of handling any project.</h3>
                    <p className="gray">
                        As a developer, I have a diverse set of skills that allow me to tackle any project. My expertise includes front-end and back-end development, as well as experience in DevOps and cloud technologies. <br /><br />
                        I am highly adaptable and always eager to learn new tools and technologies. Whether it's building a responsive website or designing a scalable backend system, I have the skills and knowledge to get the job done. I am excited to work on challenging projects and to continue growing as a developer.</p>
                </div>
            </div>

            <div className="flex partners justify-space">
                {/* <Image src="/images/partners/wallety.png" height={45} width={180} alt="wallety" />
                <Image src="/images/partners/artisty.png" height={45} width={180} alt="artisty" />
                <Image src="/images/partners/khedma-lik.png" height={45} width={180} alt="khedma-lik" />
                <Image src="/images/partners/directy.png" height={45} width={180} alt="directy" />
                <Image src="/images/partners/telefy.png" height={45} width={180} alt="telefy" /> */}
                <i className="fa-brands fa-docker"></i>
                <i className="fa-brands fa-css3-alt"></i>
                <i className="fa-brands fa-aws"></i>
                <i className="fa-brands fa-windows"></i>
                <i className="fa-brands fa-cloudflare"></i>
                <i className="fa-brands fa-react"></i>
                <i className="fa-brands fa-wordpress"></i>
                <i className="fa-brands fa-square-js"></i>
            </div>
        </section>
    )
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
    leftList: any[],
    rightList: any[]
    projects: number
}

type List = {
    list: any[]
}

function AboutCard({ title, icon, description, leftList, rightList, projects }: Props) {
    return (
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={28} height={28} alt={title} />
            </div>
            <p className="white">{description}</p>

            <div className="container">
                <div className="row">
                    <div className="col">
                        {leftList ?
                            <BulletPoints list={leftList} />
                            : ''}
                    </div>
                    <div className="col">
                        {rightList ?
                            <BulletPoints list={rightList} />
                            : ''}
                    </div>
                </div>
            </div>

            <span className="gray">{projects.toString()} items</span>
        </div>
    )
}

function BulletPoints({ list }: List) {
    return (
        <ul>
            {list.map((item: any) => (
                <li>{item}</li>
            ))}
        </ul>
    )
}