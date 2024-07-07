import Link from "next/link";
import MainWrapper from "@/components/MainWrapper";

import { Inter, Press_Start_2P } from "next/font/google";
import Plaque from "@/components/Plaque";
import ResumeSignup from "@/components/ResumeSignup";
const inter = Inter({ subsets: ["latin"] });
const press = Press_Start_2P({ subsets: ["latin"], weight: ['400'] });

function LinkSection(props) {
  const { title, array, children } = props
  return (
    <section className="flex flex-col gap-4 grid grid-cols-1 md:grid-cols-2">
      <h3 className={'text-blue-300 md:col-span-2 ' + press.className}>✦ {title === 'Links' ? 'Learn To Code' : title} ✦</h3>
      {array && (
        array.map((link, linkIndex) => {
          return (
            <Link href={link.link} target={link.target} key={linkIndex} className="bg-blue-950 text-blue-100 rounded-lg btnBorder relative grid place-items-center p-4">
              <i className={'absolute text-xl left-4 top-1/2 -translate-y-1/2 ' + ((linkIndex < 4 && title === 'Links') ? ' specialShadow ' : '') + link.icon}></i>
              <p className={' ' + ((['Roadmap', 'YouTube', 'Courses', 'Discord'].includes(link.name)) ? ' specialShadow ' : '') + press.className}>{link.name}</p>
            </Link>
          )
        }))}
      {children}
    </section>
  )

}

const HomePage = () => {
  // const postMetadata = getPostMetadata();
  // const postPreviews = postMetadata.map((post) => (
  //   <PostPreview key={post.slug} {...post} />
  // ));

  let links = [
    { name: 'YouTube', icon: 'fa-brands fa-youtube', link: 'https://www.youtube.com/smoljames?sub_confirmation=1', target: '_blank' },
    { name: 'Roadmap', icon: 'fa-solid fa-signs-post', link: '/roadmap', target: '' },
    // { name: 'Discord', icon: 'fa-brands fa-discord', link: '/discord' },
    { name: 'Discord', icon: 'fa-brands fa-discord', link: 'https://discord.gg/BYr6gujs4k', target: '_blank' },
    { name: 'Courses', icon: 'fa-solid fa-graduation-cap', link: 'https://www.udemy.com/course/the-complete-javascript-course-zero-to-hero/?referralCode=F6229ABBDBD16EB43FA4', target: '_blank' },
    { name: 'Notes', icon: 'fa-solid fa-book', link: '/notes', target: '' },
    { name: 'Coaching', icon: 'fa-solid fa-heart', link: '/coaching', target: '' },
  ]

  let extras = [
    { name: 'Newsletter', icon: 'fa-regular fa-newspaper', link: 'https://smoljames.beehiiv.com/subscribe', target: '_blank' },
    { name: 'Blog', icon: 'fa-solid fa-bookmark', link: '/blog', target: '' },
    { name: 'My Story', icon: 'fa-solid fa-user-graduate', link: 'https://youtu.be/nP0-oYGiqts', target: '_blank' },
    // { name: 'Patreon', icon: 'fa-brands fa-patreon', link: '/', target: '_blank' },
    { name: 'Portfolio', icon: 'fa-solid fa-lemon', link: '/portfolio', target: '' },
    // { name: 'Store', icon: 'fa-solid fa-store', link: 'https://store.smoljames.com/', target: '_blank' },
    { name: 'Coding Music', icon: 'fa-solid fa-music', link: 'https://youtube.com/playlist?list=PLNonIcU6qKdBRxZEq5nyr_i7A1wB7kbMX&si=ATRS7--9E8J8Obhn', target: '_blank' },
  ]

  let socials = [
    { name: 'LinkedIn', icon: 'fa-brands fa-linkedin', link: 'https://linkedin.com/company/smoljames-education', target: '_blank' },
    { name: 'GitHub', icon: 'fa-brands fa-github', link: 'https://github.com/jamezmca', target: '_blank' },
    { name: 'Twitter', icon: 'fa-brands fa-twitter', link: 'https://twitter.com/_Smoljames', target: '_blank' },
    // { name: 'Email', icon: 'fa-solid fa-envelope', link: 'mailto:jamesismathematicool@gmail.com', target: '' },
  ]

  let planBenefits = [
    'Become a SmolDev 😍',
    'Support the channel 💛',
    'Access the Discord channel 🔥',
    // 'Become a Smoljames OG ⚡️',
    // 'My love & affection 🎉',
  ]

  //  {/* have a section for links -> roadmap notes discord youtube newsletter */}
  //     {/* have a section for extras -> store music patreon portfolio*/}
  //     {/* have a section for socials -> linkedin twitter email*/}

  return (
    <MainWrapper>
      <Link href="https://www.hyr.sh" target="_blank">
        <img src="hyrsh_banner_3.png" alt="hyr_sh_banner" />
      </Link>
      {/* <ResumeSignup /> */}
      <LinkSection title={'Links'} array={links} />
      <LinkSection title={'Miscellaneous'} array={extras} />
      <Plaque benefits={planBenefits} message={''} name={'SmolDev'} price={9.99} link={'https://www.youtube.com/channel/UCPBK_brqoVQtO-fOWpxQGXw/join'} />
      <section className="gap-4 flex items-center justify-center flex-wrap">
        {socials.map((link, linkIndex) => {
          return (
            <Link href={link.link} target={link.target} key={linkIndex} className="bg-blue-950 text-blue-100 rounded-lg btnBorder relative grid place-items-center p-3">
              <i className={' text-3xl  ' + link.icon}></i>
            </Link>
          )
        })}
      </section>
    </MainWrapper>
  );
};

export default HomePage;