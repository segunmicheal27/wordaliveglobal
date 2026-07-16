'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import './gallery.css';
import './gallery-pagination.css';
import './lightbox.css';

export default function GalleryGrid({ images }) {
  const imagesPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Zoom & pan state
  const [zoomed, setZoomed] = useState(false);
  const [panPos, setPanPos] = useState({ x: 0, y: 0 });
  const isPanning = useRef(false);
  const panStart = useRef({ x: 0, y: 0 });
  const didDrag = useRef(false);

  const totalPages = Math.ceil(images.length / imagesPerPage);
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
  const globalIndexOfCurrent = (currentPage - 1) * imagesPerPage;

  const resetZoom = () => {
    setZoomed(false);
    setPanPos({ x: 0, y: 0 });
    didDrag.current = false;
  };

  const openLightbox = (localIndex) => {
    setLightboxIndex(globalIndexOfCurrent + localIndex);
    setZoomed(false);
    setPanPos({ x: 0, y: 0 });
    didDrag.current = false;
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setZoomed(false);
    setPanPos({ x: 0, y: 0 });
    didDrag.current = false;
  };

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i > 0 ? i - 1 : images.length - 1));
    resetZoom();
  }, [images.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i < images.length - 1 ? i + 1 : 0));
    resetZoom();
  }, [images.length]);

  const handleImgClick = (e) => {
    e.stopPropagation();
    if (didDrag.current) {
      didDrag.current = false;
      return;
    }
    if (zoomed) {
      resetZoom();
    } else {
      setPanPos({ x: 0, y: 0 });
      setZoomed(true);
    }
  };

  const handleMouseDown = (e) => {
    didDrag.current = false;
    if (!zoomed) return;
    isPanning.current = true;
    panStart.current = { x: e.clientX - panPos.x, y: e.clientY - panPos.y };
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isPanning.current || !zoomed) return;
    didDrag.current = true;
    setPanPos({
      x: e.clientX - panStart.current.x,
      y: e.clientY - panStart.current.y,
    });
  };

  const handleMouseUp = () => { isPanning.current = false; };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, goPrev, goNext]);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div>
      {/*
        SVG Sharpen Filters — hidden, GPU-accelerated.
        Applied via CSS filter: url(#...) only when zoomed.
        feConvolveMatrix = same unsharp mask algorithm used in Photoshop Smart Sharpen.
      */}
      <svg style={{ display: 'none' }} aria-hidden="true">
        <defs>
          {/* Standard unsharp mask — sharpens edges without haloing */}
          <filter id="lb-sharpen" colorInterpolationFilters="sRGB" x="0" y="0" width="100%" height="100%">
            <feConvolveMatrix
              order="3"
              kernelMatrix="0 -0.6 0  -0.6 4.4 -0.6  0 -0.6 0"
              divisor="1"
              preserveAlpha="true"
            />
          </filter>
        </defs>
      </svg>

      {/* ── Gallery Grid ── */}
      <div className="gallery-masonry">
        {currentImages.map((imgSrc, i) => (
          <div
            key={i}
            className="gallery-item"
            onClick={() => openLightbox(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(i)}
          >
            <img src={imgSrc} alt={`Gallery ${i + 1}`} loading="lazy" />
            <div className="gallery-overlay">
              <div className="gallery-zoom-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Pagination ── */}
      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="page-btn prev-next">← Prev</button>
          <div className="page-numbers">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
              <button key={n} onClick={() => paginate(n)} className={`page-btn ${currentPage === n ? 'active' : ''}`}>{n}</button>
            ))}
          </div>
          <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className="page-btn prev-next">Next →</button>
        </div>
      )}

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div
            className="lightbox-main"
            onClick={(e) => e.stopPropagation()}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">✕</button>

            <button
              className={`lightbox-zoom-btn ${zoomed ? 'zoomed' : ''}`}
              onClick={(e) => { e.stopPropagation(); zoomed ? resetZoom() : setZoomed(true); }}
              title={zoomed ? 'Zoom out' : 'Zoom in'}
            >
              {zoomed ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
              )}
            </button>

            <button className="lightbox-arrow left" onClick={goPrev} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="28" height="28"><polyline points="15 18 9 12 15 6"/></svg>
            </button>

            <div className="lightbox-img-wrap">
              <img
                src={images[lightboxIndex]}
                alt={`Gallery image ${lightboxIndex + 1}`}
                className={`lightbox-img ${zoomed ? 'zoomed' : ''}`}
                style={{
                  transform: zoomed
                    ? `scale(2.5) translate(${panPos.x / 2.5}px, ${panPos.y / 2.5}px)`
                    : 'scale(1)',
                  cursor: zoomed ? (isPanning.current ? 'grabbing' : 'grab') : 'zoom-in',
                  transition: isPanning.current ? 'none' : 'transform 0.3s ease',
                  // SVG unsharp mask applied only when zoomed — GPU-accelerated
                  filter: zoomed ? 'url(#lb-sharpen)' : 'none',
                }}
                onClick={handleImgClick}
                onMouseDown={handleMouseDown}
                draggable={false}
              />
              <div className="lightbox-counter">{lightboxIndex + 1} / {images.length}</div>
              {zoomed && (
                <div className="lightbox-zoom-hint">Click image to zoom out • Drag to pan</div>
              )}
            </div>

            <button className="lightbox-arrow right" onClick={goNext} aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="28" height="28"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>

          <div className="lightbox-thumbs" onClick={(e) => e.stopPropagation()}>
            {images.map((src, i) => (
              <div
                key={i}
                className={`lightbox-thumb ${i === lightboxIndex ? 'active' : ''}`}
                onClick={() => { setLightboxIndex(i); resetZoom(); }}
              >
                <img src={src} alt={`Thumb ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
