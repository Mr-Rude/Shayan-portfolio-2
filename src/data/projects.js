import { software } from './software.js';
import cavePoster from '../assets/Cave Environment/Cinematic Cave Display Image.png';
import caveFilm from '../assets/Cave/cave-film.mp4';
// All project content lives here. Replace placeholders with final titles,
// copy and media as work is selected.

import illustratorThumbnail from '../assets/Illustrator/Portfolio page Display image.png';
import substanceThumbnail from '../assets/Substance Painter/Portfolio page Display image.png';

import unrealThumbnail from '../assets/Unreal/Portfolio page Display image.png';
import unrealHomeVideo from '../assets/Unreal/videos/1.mp4';
import blenderThumbnail from '../assets/Blender/Portfolio page Display image.png';
import blenderMainVideo from '../assets/Blender/videos/Main Video.mp4';
import mayaThumbnail from '../assets/Maya/Portfolio page Display image.png';
import afterEffectsThumbnail from '../assets/After Effects/Portfolio page Display image.png';
import afterEffectsHomeVideo from '../assets/After Effects/videos/2D Explainer Video.mp4';
import mayaMainVideo from '../assets/Maya/videos/The Last Code.mp4';
import premiereProMainVideo from '../assets/PremierePro/videos/Fishermen Main.mp4';
import fishermanThumbnail from '../assets/PremierePro/Screenshot 2026-09-22 205013.png';
import gptMainVideo from '../assets/GPT/Videos/Main Video.mp4';
import substanceMainVideo from '../assets/Substance Painter/video/substance-painter-showcase-full-frame-15s.mp4';

const names = ['Unreal Engine', 'Blender', 'Maya', 'Illustrator', 'After Effects', 'Premiere Pro', 'Substance Painter', 'GPT', 'Environment'];
const ids = ['unreal-engine', 'blender', 'maya', 'illustrator', 'after-effects', 'premiere-pro', 'substance-painter', 'gpt-ai', 'cinematic-cave'];
const tones = ['', 'mint', 'blue', 'warm', 'blue', 'mint', '', 'warm'];
const wideIndices = [0, 2, 3, 4, 5, 6];
const iconPreviewClasses = { 'unreal-engine': 'u', blender: 'b', maya: 'm', illustrator: 'ai', 'after-effects': 'ae', 'premiere-pro': 'pr', 'substance-painter': 'pt', 'gpt-ai': 'gpt' };
const iconPreviewFor = (id) => software.find((icon) => icon.cls === iconPreviewClasses[id])?.videoSrc || null;
const caseStudyDetails = {
  'cinematic-cave': { title: 'Cinematic Cave Environment', description: 'A hidden chamber shaped by weathered stone, reflective water and contrasting light.', thumbnailUrl: cavePoster, portfolioVideoSrc: caveFilm },
  'illustrator': {
    title: 'Ideas in every shape',
    description: 'A collection of campaigns, characters and visual identities.',
    thumbnailUrl: illustratorThumbnail,
  },
  'unreal-engine': {
    title: 'Hot Wheels fan-made commercial',
    description: 'A cinematic chase moving from snow and city streets to a desert dream.',
    thumbnailUrl: unrealThumbnail,
    thumbnailLabel: 'Hot Wheels',
    homeVideoSrc: unrealHomeVideo,
  },
  'blender': {
    title: 'Magical Orb Environment',
    description: 'A dark fantasy scene shaped by glowing energy, ancient ruins and cinematic lighting.',
    thumbnailUrl: blenderThumbnail,
    thumbnailLabel: 'Magical Orb',
    homeVideoSrc: blenderMainVideo,
  },
  'maya': {
    title: 'The Last Code',
    description: 'A weathered sports car travels from a shadowed garage to a mountain road at night.',
    thumbnailUrl: mayaThumbnail,
    homeVideoSrc: mayaMainVideo,
  },
  'after-effects': {
    title: 'Types of 2D animation',
    description: 'An explainer introducing modern 2D, motion graphics, kinetic typography and 2.5D animation.',
    thumbnailUrl: afterEffectsThumbnail,
    homeVideoSrc: afterEffectsHomeVideo,
  },
  'premiere-pro': {
    title: 'The Story of Fisherman',
    description: 'A short portrait of life and work around the fishing harbor.',
    thumbnailUrl: fishermanThumbnail,
    thumbnailLabel: 'THE STORY OF FISHERMAN',
    homeVideoSrc: premiereProMainVideo,
  },
  'gpt-ai': {
    title: 'AI Headphones',
    description: 'A headphone visualization directed through prompts, visual feedback and refinement.',
    thumbnailVideoId: 'G3YcTGkSOL8',
    homeVideoSrc: gptMainVideo,
  },
  'substance-painter': {
    title: 'Weathered vehicle',
    description: 'Chipped paint, exposed metal and rust across an armored car.',
    thumbnailUrl: substanceThumbnail,
    homeVideoSrc: substanceMainVideo,
  },
};

export const projects = Array.from({ length: 12 }, (_, i) => ({
  id: ids[i] || `additional-${i - 7}`,
  software: names[i] || 'To be selected',
  title: caseStudyDetails[ids[i]]?.title || (i === 4 ? 'Types of 2D animation.' : i === 7 ? 'AI Headphones' : i < 8 ? `${names[i]} project` : `Additional project ${String(i - 7).padStart(2, '0')}`),
  tone: tones[i] || '',
  format: wideIndices.includes(i) ? 'wide' : 'portrait',
  description: caseStudyDetails[ids[i]]?.description || '',
  thumbnailUrl: caseStudyDetails[ids[i]]?.thumbnailUrl
    || (caseStudyDetails[ids[i]]?.thumbnailVideoId
      ? `https://img.youtube.com/vi/${caseStudyDetails[ids[i]].thumbnailVideoId}/hqdefault.jpg`
      : null),
  thumbnailLabel: caseStudyDetails[ids[i]]?.thumbnailLabel || caseStudyDetails[ids[i]]?.title || names[i] || 'Project',
  thumbnailFit: caseStudyDetails[ids[i]]?.thumbnailFit || 'cover',
  thumbnailCrop16x9: Boolean(caseStudyDetails[ids[i]]?.thumbnailCrop16x9),
  thumbnailBackground: Boolean(caseStudyDetails[ids[i]]?.thumbnailBackground),
  thumbnailLetterbox: Boolean(caseStudyDetails[ids[i]]?.thumbnailLetterbox),
  portfolioVideoSrc: caseStudyDetails[ids[i]]?.portfolioVideoSrc || iconPreviewFor(ids[i]),
  homeVideoSrc: caseStudyDetails[ids[i]]?.homeVideoSrc || null,
  caseStudyRouteId: caseStudyDetails[ids[i]]?.caseStudyRouteId || ids[i],
  videoId: caseStudyDetails[ids[i]]?.homeVideoSrc
    ? null
    : caseStudyDetails[ids[i]]?.videoId
      || (i === 0 ? '1xUwqvB7zuI' : i === 1 ? 'pXEKJn-RP54' : i === 2 ? 'qilFeNUbXiw' : i === 4 ? 'QsRQ7NqAiuI' : i === 7 ? 'G3YcTGkSOL8' : null),
}));

const portfolioProjectIds = ['unreal-engine', 'after-effects', 'premiere-pro', 'maya', 'blender', 'gpt-ai', 'substance-painter', 'illustrator', 'cinematic-cave'];

// Homepage project stages: each inner array is one full-screen stage.
export const homeGroups = [[2], [1], [0], [7], [4]];

export function findProject(id) {
  return projects.find((p) => p.id === id) || null;
}

export const portfolioProjects = portfolioProjectIds.map(findProject).filter(Boolean);

// Case-study copy. Returns placeholder text built from the project until real copy is added.
export function caseStudy(p) {
  return {
    summary: `Project overview for ${p.software} is pending. Final media, role and story will be added here.`,
    discipline: 'To be confirmed',
    software: p.software,
    year: 'To be confirmed',
    idea: `The brief and creative direction for ${p.title} will be added here.`,
    renderIntro: `Preview copy for the final ${p.software} render. Project-specific context will be added here.`,
    detailNote: 'Preview copy introducing the close-up image and the details it highlights.',
    process: `Process details for ${p.title} will be added when the work is selected.`,
    support: 'Supporting images and video to be selected.',
  };
}
