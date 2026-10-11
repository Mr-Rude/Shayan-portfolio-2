import unrealLogo from '../assets/logos/UNREAL.svg';
import unrealPreviewVideo from '../assets/Unreal/videos/Hotwheels Preview.mp4';
import blenderLogo from '../assets/logos/BLENDER.svg';
import blenderMainVideo from '../assets/Blender/videos/Main Video.mp4';
import mayaLogo from '../assets/logos/MAYA.svg';
import mayaPreviewVideo from '../assets/Maya/videos/The Last Code Preview.mp4';
import premiereLogo from '../assets/logos/PR.svg';
import premiereProPreviewVideo from '../assets/PremierePro/videos/Fishermen Preview.mp4';
import illustratorLogo from '../assets/logos/AI.svg';
import illustratorShowcaseVideo from '../assets/Illustrator/Video/illustrator-showcase-static-fast-15s.mp4';
import afterEffectsLogo from '../assets/logos/AE.svg';
import afterEffectsPreviewVideo from '../assets/After Effects/videos/Preview.mp4';
import texturingLogo from '../assets/logos/PT.svg';
import gptLogo from '../assets/logos/GPT.svg';
import gptMainVideo from '../assets/GPT/videos/Main Video.mp4';
import substanceMainVideo from '../assets/Substance Painter/video/substance-painter-showcase-full-frame-15s.mp4';

// Floating software marks around the hero portrait.
// `cls` sets position, colour and entrance delay (see styles.css / effects.css).
export const software = [
  { cls: 'u', mark: unrealLogo, label: 'Unreal preview', title: 'UNREAL ENGINE', lines: ['Hot Wheels fan-made commercial'], videoSrc: unrealPreviewVideo, videoOrientation: 'landscape' },
  { cls: 'b', mark: blenderLogo, label: 'Blender preview', title: 'BLENDER', lines: ['Matching project video'], videoSrc: blenderMainVideo },
  { cls: 'm', mark: mayaLogo, label: 'Maya preview', title: 'MAYA', lines: ['The Last Code'], videoSrc: mayaPreviewVideo, videoOrientation: 'landscape' },
  { cls: 'pr', mark: premiereLogo, label: 'Premiere preview', title: 'PREMIERE PRO', lines: ['The Story of Fisherman'], videoSrc: premiereProPreviewVideo, videoOrientation: 'landscape' },
  { cls: 'ai', mark: illustratorLogo, label: 'Illustrator preview', title: 'ILLUSTRATOR', lines: ['Ideas in every shape'], videoSrc: illustratorShowcaseVideo, videoOrientation: 'landscape' },
  { cls: 'ae', mark: afterEffectsLogo, label: 'After Effects preview', title: 'AFTER EFFECTS', lines: ['Animation explainer'], videoSrc: afterEffectsPreviewVideo, videoOrientation: 'landscape' },
  { cls: 'pt', mark: texturingLogo, label: 'Texturing preview', title: 'TEXTURING', lines: ['Matching project video'], videoSrc: substanceMainVideo, videoOrientation: 'landscape' },
  { cls: 'gpt', mark: gptLogo, label: 'GPT AI work preview', title: 'AI / GPT', lines: ['Your AI-assisted project preview.', 'Work to be selected.'], videoSrc: gptMainVideo },
];
