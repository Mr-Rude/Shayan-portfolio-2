// Review-only strip. Remove <PreviewBar /> from App.jsx when the site goes live.
export default function PreviewBar({ navigate }) {
  return (
    <div className="preview-bar">
      PORTFOLIO PREVIEW · PLACEHOLDER MEDIA{' '}
      <button type="button" onClick={() => navigate('#/home')}>
        Homepage
      </button>
      <button type="button" onClick={() => navigate('#/project/unreal-engine')}>
        Project page ↗
      </button>
    </div>
  );
}
