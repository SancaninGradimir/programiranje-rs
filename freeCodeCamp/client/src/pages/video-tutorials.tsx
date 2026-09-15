import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { Spacer } from '@freecodecamp/ui';
import { videos } from '../data/video-tutorials';

function VideoTutorialsPage(): JSX.Element {
  const categories = Array.from(
    new Set(videos.map(video => video.category))
  ).sort((a, b) => a.localeCompare(b, 'sr'));

  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
    () => new Set(categories)
  );

  const allSelected = selectedCategories.size === categories.length;

  const toggleAllCategories = (): void => {
    setSelectedCategories(
      allSelected ? new Set<string>() : new Set(categories)
    );
  };

  const toggleCategory = (category: string): void => {
    setSelectedCategories(previous => {
      const next = new Set(previous);

      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }

      return next;
    });
  };

  const filteredCategories = categories.filter(category =>
    selectedCategories.has(category)
  );

  return (
    <>
      <Helmet>
        <title>Video tutorijali | Učimo</title>
      </Helmet>

      <main>
        <p>
          🇷🇸 <strong>Kako uključiti srpski prevod:</strong> Pokrenite video,
          kliknite na ⚙️{' '}
          <strong>
            Settings → Subtitles/CC → Auto-translate → Serbian (Srpski)
          </strong>
          .
        </p>

        <div className='video-tutorials-layout'>
          <aside className='video-tutorials-sidebar'>
            <h2>Kategorije</h2>

            <button
              type='button'
              className='video-tutorials-select-all'
              onClick={toggleAllCategories}
            >
              {allSelected ? 'Poništi izbor svih' : 'Izaberi sve'}
            </button>

            {categories.map(category => (
              <label key={category} className='video-tutorials-category'>
                <input
                  type='checkbox'
                  checked={selectedCategories.has(category)}
                  onChange={() => toggleCategory(category)}
                />
                <span>{category}</span>
              </label>
            ))}
          </aside>

          <div className='video-tutorials-content'>
            <header className='video-tutorials-header'>
              <h1>Video tutorijali</h1>
              <p>Video lekcije organizovane po kategorijama.</p>
            </header>

            {filteredCategories.length === 0 ? (
              <p>Nije izabrana nijedna kategorija.</p>
            ) : (
              filteredCategories.map(category => (
                <section key={category} className='video-tutorials-section'>
                  <h2>{category}</h2>

                  <div className='video-tutorials-grid'>
                    {videos
                      .filter(video => video.category === category)
                      .map(video => (
                        <article
                          key={video.url}
                          className={`video-tutorial-card ${
                            selectedVideo === video.url
                              ? 'video-tutorial-card-expanded'
                              : ''
                          }`}
                        >
                          {selectedVideo === video.url ? (
                            <>
                              <button
                                type='button'
                                onClick={() => setSelectedVideo(null)}
                                className='video-tutorial-close'
                              >
                                ✕ Zatvori video
                              </button>

                              <div className='video-tutorial-frame'>
                                <iframe
                                  title={video.title}
                                  src={`https://www.youtube-nocookie.com/embed/${new URL(video.url).searchParams.get('v')}?autoplay=1`}
                                  loading='lazy'
                                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                  allowFullScreen
                                />
                              </div>
                            </>
                          ) : (
                            <button
                              type='button'
                              onClick={() => setSelectedVideo(video.url)}
                              aria-label={`Pokreni video: ${video.title}`}
                              className='video-tutorial-thumbnail'
                            >
                              <img
                                src={`https://i.ytimg.com/vi/${new URL(video.url).searchParams.get('v')}/hqdefault.jpg`}
                                alt=''
                                loading='lazy'
                              />
                            </button>
                          )}

                          <h3 className='video-tutorial-title'>
                            {video.title}
                          </h3>
                        </article>
                      ))}
                  </div>

                  <Spacer size='l' />
                </section>
              ))
            )}
          </div>
        </div>

        <style>
          {`
            .video-tutorials-layout {
              display: flex;
              align-items: flex-start;
              gap: 1.5rem;
            }

            .video-tutorials-sidebar {
              flex: 0 0 220px;
              padding: 1rem;
              border: 1px solid var(--gray-15);
              border-radius: 8px;
            }

            .video-tutorials-category {
              display: flex;
              align-items: flex-start;
              gap: 0.5rem;
              margin: 0.75rem 0;
              cursor: pointer;
            }

            .video-tutorials-category input {
              flex-shrink: 0;
              margin-top: 0.25rem;
            }

            .video-tutorials-content {
              flex: 1;
              min-width: 0;
            }

            .video-tutorials-header {
              margin: 2rem 0;
              text-align: center;
            }

            .video-tutorials-section > h2 {
              margin-bottom: 1rem;
            }

            .video-tutorials-grid {
              display: grid;
              grid-template-columns: repeat(4, minmax(0, 1fr));
              gap: 1.5rem 1rem;
            }

            .video-tutorial-card {
              min-width: 0;
            }

            .video-tutorial-card-expanded {
              grid-column: 1 / -1;
            }

            .video-tutorial-thumbnail {
              display: block;
              width: 100%;
              aspect-ratio: 16 / 9;
              padding: 0;
              overflow: hidden;
              border: 0;
              border-radius: 8px;
              background: none;
              cursor: pointer;
            }

            .video-tutorial-thumbnail img {
              display: block;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }

            .video-tutorial-title {
              margin-top: 0.5rem;
              font-size: 1rem;
              line-height: 1.4;
              overflow-wrap: anywhere;
            }

            .video-tutorial-frame {
              position: relative;
              width: 100%;
              aspect-ratio: 16 / 9;
            }

            .video-tutorial-frame iframe {
              position: absolute;
              inset: 0;
              width: 100%;
              height: 100%;
              border: 0;
            }

            .video-tutorial-close {
              display: block;
              margin-bottom: 0.5rem;
            }

            @media (max-width: 1200px) {
              .video-tutorials-grid {
                grid-template-columns: repeat(3, minmax(0, 1fr));
              }
            }

            @media (max-width: 900px) {
              .video-tutorials-grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
              }
            }

            @media (max-width: 600px) {
              .video-tutorials-layout {
                flex-direction: column;
              }

              .video-tutorials-sidebar {
                box-sizing: border-box;
                width: 100%;
                flex-basis: auto;
              }

              .video-tutorials-grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
              }
            }

            @media (max-width: 380px) {
              .video-tutorials-grid {
                grid-template-columns: 1fr;
              }
            }
          `}
        </style>
      </main>
    </>
  );
}

VideoTutorialsPage.displayName = 'VideoTutorialsPage';

export default VideoTutorialsPage;
