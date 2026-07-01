import http from 'http';

http.get('http://localhost:3000', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const imgs = [...data.matchAll(/<img[^>]+>/gi)]
      .map((m) => m[0])
      .filter((tag) => /pharmefc|PharmEFC/i.test(tag));

    console.log('Logo img tags found:', imgs.length);
    imgs.forEach((tag, index) => console.log(`[${index}]`, tag));

    const styleBlocks = [...data.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map((m) => m[1]);
    console.log('Style blocks:', styleBlocks.length);
  });
}).on('error', (error) => {
  console.error(error);
});
