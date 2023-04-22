import Head from 'next/head';

import { athletsData, playersData } from '@/constants/default';
import {
  STYLES_ATHELETS_DESKTOP,
  STYLES_ATHELETS_TABLET,
  STYLES_ATHELETS_MOBILE,
  STYLES_PLAYERS_DESKTOP,
  STYLES_PLAYERS_TABLET,
  STYLES_PLAYERS_MOBILE,
} from '@/constants/styles';

import Line from "@/components/commons/Line";
import Plus from "@/components/commons/Plus";

import CustomImage from '@/components/customs/Image';
import CustomTitle from '@/components/customs/Title';
import CustomContents from '@/components/customs/Contents';
import CustomSlider from '@/components/customs/Slider';

export default function SinglePageApp() {

  return (
    <>
      <Head>
        <title>Tri-Petch SPA</title>
        <meta property="og:title" content="Tri-Petch SPA" key="title" />
      </Head>

      {/* Desktop Section */}
      <section
        className='lg:block md:hidden sm:hidden'
        style={{ width: 1920, overflowX: 'hidden' }}
      >
        {/* Athlets */}
        <article className='relative'>
          <div className='flex flex-col'>
            <CustomTitle
              title={athletsData.title}
              contentStartAt={1008}
              customStyles={{
                marginTop: 24
              }}
            />
            <CustomContents
              contentStartAt={1008}
              contents={athletsData.contents}
              styles={STYLES_ATHELETS_DESKTOP}
            />
          </div>

          <CustomImage
            image={{
              src: athletsData.image,
              alt: athletsData.title
            }}
            styles={{
              position: 'absolute',
              top: 35,
              left: 175
            }}
          />
        </article>

        {/* Players */}
        <article className='relative'>
          <div className='flex flex-col'>
            <CustomTitle
              title={playersData.title}
              contentStartAt={321}
              customStyles={{
                marginTop: 124
              }}
            />
            <CustomContents
              contentStartAt={322}
              contents={playersData.contents}
              styles={STYLES_PLAYERS_DESKTOP}
            />
          </div>

          <CustomImage
            image={{
              src: playersData.image,
              alt: playersData.title
            }}
            styles={{
              position: 'absolute',
              top: 0,
              right: 125
            }}
            background={
              <>
                <div style={{ top: 457.84, left: 185.13 }}><Line width={262.52} height={304.12} /></div>
                <div style={{ top: 81, left: 660.89 }}><Line width={265.62} height={311.16} /></div>

                <div style={{ top: 131, left: 294 }}><Plus /></div>
                <div style={{ top: 148, left: 316 }}><Plus opacity={0.3} /></div>
                <div style={{ top: 401, left: 744 }}><Plus /></div>
              </>
            }
          />
        </article>
      </section>

      {/* Tablet Section */}
      <section
        className='lg:hidden md:block sm:hidden'
        style={{ width: 768, overflowX: 'hidden' }}
      >
        {/* Athlets */}
        <article className='relative'>
          <div className='flex flex-col'>
            <CustomTitle
              title={athletsData.title}
              contentStartAt={291}
              customStyles={{
                marginTop: 81
              }}
            />
            <CustomContents
              contentStartAt={291}
              contents={athletsData.contents}
              styles={STYLES_ATHELETS_TABLET}
            />
          </div>

          <CustomImage
            width={498}
            height={699}
            image={{
              src: athletsData.image,
              alt: athletsData.title
            }}
            styles={{
              position: 'absolute',
              top: 121,
              left: -161
            }}
            background={
              <>
                <div style={{ top: 18.98, left: 189.91 }}><Line width={209.29} height={233.72} /></div>

                <div style={{ top: -10, left: 212 }}><Plus /></div>
                <div style={{ top: -19, left: 189.91 }}><Plus opacity={0.3} /></div>
              </>
            }
          />
        </article>

        {/* Players */}
        <article className='relative'>
          <div className='flex flex-col'>
            <CustomTitle
              title={playersData.title}
              contentStartAt={31}
              customStyles={{
                marginTop: 52
              }}
            />
            <CustomContents
              contentStartAt={33}
              contents={playersData.contents}
              styles={STYLES_PLAYERS_TABLET}
            />
          </div>

          <CustomImage
            width={691}
            height={568}
            image={{
              src: playersData.image,
              alt: playersData.title
            }}
            styles={{
              position: 'absolute',
              top: 33,
              left: 331
            }}
            background={
              <>
                <div style={{ top: 282, left: 382 }}><Plus /></div>
                <div style={{ top: 89, left: 224 }}><Plus opacity={0.3} /></div>
                <div style={{ top: 72, left: 202 }}><Plus /></div>

                <div style={{ top: 263.89, left: 159 }}><Line width={178.88} height={207.22} /></div>
              </>
            }
          />
        </article>
      </section>

      {/* Mobile Section */}
      <section
        className='lg:hidden md:hidden sm:block'
        style={{ width: 320, overflowX: 'hidden' }}
      >
        <article className='relative'>
          <div className='flex flex-col'>
            <CustomTitle
              title={athletsData.title}
              contentStartAt={19}
              customStyles={{
                fontSize: 50,
                lineHeight: 58.59,
                marginTop: 0,
                marginBottom: 237
              }}
            />

            <CustomSlider
              wrapperStyle={{
                padding: '72px 1px 69px 19px'
              }}
              contentStartAt={0}
              contents={athletsData.contents}
              styles={STYLES_ATHELETS_MOBILE}
            />
          </div>

          <CustomImage
            width={200}
            height={281}
            image={{
              src: athletsData.image,
              alt: athletsData.title
            }}
            styles={{
              position: 'absolute',
              top: 70,
              left: 70
            }}
            background={
              <>
                <div style={{ top: 12.91, right: 22.75 }}><Line width={178.89} height={197.23} stoke={3} /></div>

                <div style={{ top: 20, left: 4 }}><Plus /></div>
                <div style={{ top: 11, left: -18 }}><Plus opacity={0.3} /></div>
              </>
            }
          />
        </article>

        <article className='relative'>
          <div className='flex flex-col'>
            <CustomTitle
              title={playersData.title}
              contentStartAt={17}
              customStyles={{
                fontSize: 50,
                lineHeight: 58.59,
                marginTop: 19,
                marginBottom: 237
              }}
            />
            <CustomSlider
              wrapperStyle={{
                padding: '72px 18px 77px 19px',
                height: 238,
                bottom: 27,
              }}
              contentStartAt={0}
              contents={playersData.contents}
              styles={STYLES_PLAYERS_MOBILE}
            />
          </div>

          <CustomImage
            width={302}
            height={249}
            image={{
              src: playersData.image,
              alt: playersData.title
            }}
            styles={{
              position: 'absolute',
              top: 101,
              left: 3
            }}
            background={
              <>
                <div style={{ top: 149, left: 266 }}><Plus /></div>

                <div style={{ top: 23.32, left: 196.89 }}><Line width={76.69} height={89.84} stoke={3} /></div>
                <div style={{ top: 108.92, left: 49 }}><Line width={106.35} height={123.2} stoke={3} /></div>

                <div style={{ top: 8, left: 71 }}><Plus /></div>
                <div style={{ top: -1, left: 49 }}><Plus opacity={0.3} /></div>
              </>
            }
          />
        </article>
      </section>
    </>
  )
}
