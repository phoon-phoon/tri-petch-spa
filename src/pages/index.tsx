import Head from 'next/head';

import { athletsData, playersData } from '@/constants/default';
import {
  ATHELETS_STYLES,
  PLAYER_STYLES
} from '@/constants/styles';

import Line from "@/components/commons/Line";
import Plus from "@/components/commons/Plus";

import CustomImage from '@/components/customs/Image';
import CustomTitle from '@/components/customs/Title';
import CustomContents from '@/components/customs/Contents';
import CustomSlider from '@/components/customs/Slider';
import styled from 'styled-components';

const SectionStyled = styled.section`
  
`

const ArticleStyled = styled.article`
  position: relative;
  
`

const WrapperStyled = styled.div`
  min-width: 320px;
  max-width: 1920px;

  display: flex;
  flex-direction: column;
`

export default function SinglePageApp() {

  return (
    <>
      <Head>
        <title>Tri-Petch SPA</title>
        <meta property="og:title" content="Tri-Petch SPA" key="title" />
      </Head>

      <SectionStyled>
        {/* Athlets */}
        <ArticleStyled>
          <WrapperStyled>
            <CustomTitle
              title={athletsData.title}
              contentStartAt={{
                mobile: 19,
                tablet: 291,
                desktop: 1008
              }}
              customStyles={{
                marginTop: 24
              }}
            />
            <CustomContents
              contentStartAt={{
                mobile: 19,
                tablet: 291,
                desktop: 1008
              }}
              contents={athletsData.contents}
              styles={ATHELETS_STYLES}
            />

            <CustomSlider
              wrapperStyle={{
                padding: '72px 1px 69px 19px',
              }}
              contentStartAt={{
                mobile: 0,
                tablet: 0,
                desktop: 0
              }}
              contents={athletsData.contents}
              styles={ATHELETS_STYLES}
            />
          </WrapperStyled>
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
        </ArticleStyled>

        {/* Players */}
        <ArticleStyled>
          <WrapperStyled>
            <CustomTitle
              title={playersData.title}
              contentStartAt={{
                mobile: 17,
                tablet: 31,
                desktop: 321
              }}
              customStyles={{
                marginTop: 124
              }}
            />
            <CustomContents
              contentStartAt={{
                mobile: 17,
                tablet: 31,
                desktop: 321
              }}
              contents={playersData.contents}
              styles={PLAYER_STYLES}
            />

            <CustomSlider
              wrapperStyle={{
                padding: '72px 18px 77px 19px',
                height: 238,
                bottom: 20,
              }}
              contentStartAt={{
                mobile: 0,
                tablet: 0,
                desktop: 0
              }}
              contents={playersData.contents}
              styles={PLAYER_STYLES}
            />
          </WrapperStyled>

          <CustomImage
            image={{
              src: playersData.image,
              alt: playersData.title
            }}
            styles={{
              position: 'absolute',
              top: 0,
              left: 804
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
        </ArticleStyled>
      </SectionStyled>
    </>
  )
}
