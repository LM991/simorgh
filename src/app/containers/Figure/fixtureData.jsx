import React from 'react';
import FigureContainer from '.';
import { ServiceContext } from '../../contexts/ServiceContext';
import { PlatformContext } from '../../contexts/PlatformContext';
import { blockContainingText } from '../../models/blocks';

const imageAlt = 'Pauline Clayton';
const imageHeight = 360;
const imageSrc =
  'https://ichef.bbci.co.uk/news/640/cpsprodpb/E7DB/production/_101655395_paulineclayton.jpg';
const imageWidth = 640;
const imageRatio = 56.25;
const captionBlock = blockContainingText('caption', 'This is a caption');
// The following block is quite a large and ugly thing to keep in this file, but refactoring model/blocks.js to better allow for generating fragmented data is not in scope of the current task.
const captionBlockWithLink = {
  type: 'caption',
  model: {
    blocks: [
      {
        type: 'text',
        model: {
          blocks: [
            {
              type: 'paragraph',
              model: {
                text: 'This is a caption containing an inline link.',
                blocks: [
                  {
                    type: 'fragment',
                    model: {
                      text: 'This is a caption ',
                      attributes: [],
                    },
                  },
                  {
                    type: 'urlLink',
                    model: {
                      text: 'containing an inline link',
                      locator: 'https://www.bbc.com',
                      blocks: [
                        {
                          type: 'fragment',
                          model: {
                            text: 'containing an inline link',
                            attributes: [],
                          },
                        },
                      ],
                    },
                  },
                  {
                    type: 'fragment',
                    model: {
                      text: '.',
                      attributes: [],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
};
const copyrightText = 'Getty Images';

const serviceContextStubNews = {
  imageCaptionOffscreenText: 'Image caption, ',
};

const generateFixtureData = (caption, copyright, platform = 'canonical') => (
  <ServiceContext.Provider value={serviceContextStubNews}>
    <PlatformContext.Provider value={platform}>
      <FigureContainer
        alt={imageAlt}
        captionBlock={caption ? captionBlock : null}
        copyright={copyright ? copyrightText : null}
        height={imageHeight}
        ratio={imageRatio}
        src={imageSrc}
        width={imageWidth}
      />
    </PlatformContext.Provider>
  </ServiceContext.Provider>
);

export const FigureImage = generateFixtureData();

export const FigureAmpImage = generateFixtureData(null, null, 'amp');

export const FigureImageWithCaption = generateFixtureData(captionBlock);

export const FigureAmpImageWithCaption = generateFixtureData(
  captionBlock,
  null,
  'amp',
);

export const FigureImageWithCopyright = generateFixtureData(
  null,
  copyrightText,
);

export const FigureAmpImageWithCopyright = generateFixtureData(
  null,
  copyrightText,
  'amp',
);

export const FigureImageWithCopyrightAndCaption = generateFixtureData(
  captionBlock,
  copyrightText,
);

export const FigureAmpImageWithCopyrightAndCaption = generateFixtureData(
  captionBlock,
  copyrightText,
  'amp',
);

export const FigureImageWithCaptionContainingLink = generateFixtureData(
  captionBlockWithLink,
  null,
);

export const FigureAmpImageWithCaptionContainingLink = generateFixtureData(
  captionBlockWithLink,
  null,
  'amp',
);
