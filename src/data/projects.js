// All project content lives here. Replace placeholders with final titles,
// copy and media as work is selected.

const names = ['Unreal Engine', 'Blender', 'Maya', 'Illustrator', 'After Effects', 'Premiere Pro', 'Substance Painter', 'GPT'];
const ids = ['unreal-engine', 'blender', 'maya', 'illustrator', 'after-effects', 'premiere-pro', 'substance-painter', 'gpt-ai'];
const tones = ['', 'mint', 'blue', 'warm', 'blue', 'mint', '', 'warm'];
const wideIndices = [0, 2, 3, 4, 5, 6];

export const projects = Array.from({ length: 12 }, (_, i) => ({
  id: ids[i] || `additional-${i - 7}`,
  software: names[i] || 'To be selected',
  title: i === 1 ? 'Magical Orb Environment' : i === 4 ? 'Types of 2D animation.' : i === 7 ? 'AI Headphones' : i < 8 ? `${names[i]} project` : `Additional project ${String(i - 7).padStart(2, '0')}`,
  tone: tones[i] || '',
  format: wideIndices.includes(i) ? 'wide' : 'portrait',
  videoId: i === 1 ? 'pXEKJn-RP54' : i === 4 ? 'QsRQ7NqAiuI' : i === 7 ? 'G3YcTGkSOL8' : null,
}));

// Homepage project stages: each inner array is one full-screen stage.
export const homeGroups = [[0], [1, 7], [3], [4], [5], [6], [2]];

export function findProject(id) {
  return projects.find((p) => p.id === id) || null;
}

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
