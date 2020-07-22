export default function circos(stanza, params) {
  const sayTo = params['say-to'] || 'world';

  stanza.render({
    template: 'stanza.html',
    parameters: {
      greeting: `Hello, ${sayTo}!`
    }
  });
}
