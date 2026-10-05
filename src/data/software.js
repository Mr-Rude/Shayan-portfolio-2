import unrealLogo from '../assets/logos/UNREAL.svg';
import blenderLogo from '../assets/logos/BLENDER.svg';
import mayaLogo from '../assets/logos/MAYA.svg';
import premiereLogo from '../assets/logos/PR.svg';
import illustratorLogo from '../assets/logos/AI.svg';
import afterEffectsLogo from '../assets/logos/AE.svg';
import texturingLogo from '../assets/logos/PT.svg';
import gptLogo from '../assets/logos/GPT.svg';

// Floating software marks around the hero portrait.
// `cls` sets position, colour and entrance delay (see styles.css / effects.css).
export const software = [
  { cls: 'u', mark: unrealLogo, label: 'Unreal preview', title: 'UNREAL ENGINE', lines: ['Project reel appears here on hover.', 'Video to be selected.'] },
  { cls: 'b', mark: blenderLogo, label: 'Blender preview', title: 'BLENDER', lines: ['Matching project video'], videoId: 'pXEKJn-RP54' },
  { cls: 'm', mark: mayaLogo, label: 'Maya preview', title: 'MAYA', lines: ['Matching project video'] },
  { cls: 'pr', mark: premiereLogo, label: 'Premiere preview', title: 'PREMIERE PRO', lines: ['Matching project video'] },
  { cls: 'ai', mark: illustratorLogo, label: 'Illustrator preview', title: 'ILLUSTRATOR', lines: ['Matching project preview'] },
  { cls: 'ae', mark: afterEffectsLogo, label: 'After Effects preview', title: 'AFTER EFFECTS', lines: ['Animation explainer'], videoId: 'flkgchLutFM', videoOrientation: 'landscape' },
  { cls: 'pt', mark: texturingLogo, label: 'Texturing preview', title: 'TEXTURING', lines: ['Matching project video'] },
  { cls: 'gpt', mark: gptLogo, label: 'GPT AI work preview', title: 'AI / GPT', lines: ['Your AI-assisted project preview.', 'Work to be selected.'], videoId: 'G3YcTGkSOL8' },
];
