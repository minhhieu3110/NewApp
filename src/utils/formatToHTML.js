export function formatToHTML(content) {
  return `
    <div>
      ${String(content)
        .split(`\n`)
        .map(line => `<p>${line}</p>`)
        .join(' ')}
    </div>
  `;
}
